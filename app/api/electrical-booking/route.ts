import { NextRequest, NextResponse } from "next/server";
import { sendEmail, ERGA_EMAIL } from "@/lib/brevo";

// ── Rate limiting ──────────────────────────────────────────────────────────────
const rateMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── HTML escaping (same pattern as app/api/contact/route.ts) ──────────────────
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Route handler ─────────────────────────────────────────────────────────────
// Validates + captures consent evidence server-side, emails a notification
// via Brevo, and — only when ELECTRICAL_BOOKING_WEBHOOK_URL is explicitly
// configured — forwards the same payload to the n8n "Electrical Booking
// Intake" workflow, which fans out to Telegram + the Electrical Bookings
// Notion DB.
export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait 15 minutes before trying again." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (String(body.website ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const issue = String(body.issue ?? "").trim();
  const preferredTime = String(body.preferred_time ?? "").trim();
  const consent = body.consent === true;

  // Length caps — reject overlong input before forwarding to n8n
  const caps: Record<string, { value: string; max: number }> = {
    name: { value: name, max: 100 },
    phone: { value: phone, max: 30 },
    email: { value: email, max: 254 },
    address: { value: address, max: 200 },
    issue: { value: issue, max: 2000 },
    preferred_time: { value: preferredTime, max: 40 },
  };
  for (const { value, max } of Object.values(caps)) {
    if (value.length > max) {
      return NextResponse.json({ error: "Please shorten your answer — one or more fields are too long." }, { status: 400 });
    }
  }

  if (!name || !phone || !address || !issue || !preferredTime) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  // Email is optional; if present it must be valid
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Please confirm you understand the callout fee terms before booking." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    phone,
    email,
    address,
    issue,
    preferred_time: preferredTime,
    consent_timestamp: new Date().toISOString(),
    consent_ip: ip,
  };

  // (a) Brevo notification email — same pattern as app/api/contact/route.ts
  const row = (label: string, value: string) => `
    <tr style="border-top:1px solid #e2e8f0;">
      <td style="padding:8px 14px;font-size:12px;color:#64748b;width:140px;vertical-align:top;white-space:nowrap;">${label}</td>
      <td style="padding:8px 14px;font-size:13px;color:#0f172a;vertical-align:top;">${value}</td>
    </tr>`;

  const notificationHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;overflow:hidden;max-width:580px;">
        <tr>
          <td style="background:#1B2A4A;padding:20px 28px;">
            <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">Erga Electrical Services</p>
            <p style="margin:4px 0 0;color:#c8d4e8;font-size:12px;">New Callout Booking</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 16px;">
            <p style="margin:0;font-size:13px;color:#475569;">
              A new callout booking was submitted via <strong>erga.co.za</strong>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;">
              ${row("Name", esc(payload.name))}
              ${row("Phone", esc(payload.phone))}
              ${row("Address / Suburb", esc(payload.address))}
              ${row("Preferred Time", esc(payload.preferred_time))}
              ${row("Email", payload.email ? `<a href="mailto:${esc(payload.email)}" style="color:#1B2A4A;text-decoration:none;">${esc(payload.email)}</a>` : "not provided")}
              ${row("Issue", esc(payload.issue).replace(/\n/g, "<br>"))}
              ${row("Consent Timestamp", esc(payload.consent_timestamp))}
              ${row("Consent IP", esc(payload.consent_ip))}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:11px;color:#94a3b8;">R450 callout fee applies only if the customer declines the quote. · erga.co.za</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await sendEmail({
      to: { email: ERGA_EMAIL },
      replyTo: payload.email ? { email: payload.email } : undefined,
      subject: `New callout booking: ${payload.name} (${payload.preferred_time})`,
      html: notificationHtml,
    });
  } catch (err) {
    console.error("[electrical-booking/route] Brevo error:", err);
    return NextResponse.json(
      { error: "Failed to submit your booking. Please try again, or WhatsApp or email us directly." },
      { status: 500 },
    );
  }

  // (b) n8n forward — only when the webhook URL is explicitly configured.
  // A failed forward is logged but does not fail the booking.
  const webhookUrl = process.env.ELECTRICAL_BOOKING_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`n8n webhook ${res.status}: ${await res.text()}`);
      }
    } catch (err) {
      console.error("[electrical-booking/route] webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
