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

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sast(): string {
  return (
    new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) + " SAST"
  );
}

function notificationHtml(data: {
  name: string;
  email: string;
  phone: string;
  preferredArea: string;
  propertyType: string;
  message: string;
  timestamp: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr style="border-top:1px solid #e2e8f0;">
           <td style="padding:8px 14px;font-size:12px;color:#64748b;width:130px;vertical-align:top;white-space:nowrap;">${label}</td>
           <td style="padding:8px 14px;font-size:13px;color:#0f172a;vertical-align:top;">${value}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;overflow:hidden;max-width:580px;">
        <tr>
          <td style="background:#1B2A4A;padding:20px 28px;">
            <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">Erga Properties</p>
            <p style="margin:4px 0 0;color:#c8d4e8;font-size:12px;">Prospective Tenant Registration</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 16px;">
            <p style="margin:0;font-size:13px;color:#475569;">
              A new tenant registration was submitted via <strong>erga.co.za</strong>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;">
              <tr>
                <td style="padding:8px 14px;font-size:12px;color:#64748b;width:130px;vertical-align:top;white-space:nowrap;">Name</td>
                <td style="padding:8px 14px;font-size:13px;color:#0f172a;vertical-align:top;">${esc(data.name)}</td>
              </tr>
              ${row("Email", `<a href="mailto:${esc(data.email)}" style="color:#1B2A4A;text-decoration:none;">${esc(data.email)}</a>`)}
              ${row("Phone", esc(data.phone))}
              ${row("Preferred Area", esc(data.preferredArea))}
              ${row("Property Type", esc(data.propertyType))}
              ${row("Received", data.timestamp)}
            </table>
          </td>
        </tr>
        ${data.message ? `
        <tr>
          <td style="padding:20px 28px 8px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;">Additional Info</p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:14px 16px;font-size:13px;color:#334155;line-height:1.65;">
              ${esc(data.message).replace(/\n/g, "<br>")}
            </div>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:16px 28px 24px;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">
              Hit reply to respond directly to ${esc(data.name)} at ${esc(data.email)}.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:11px;color:#94a3b8;">Erga Properties · info@erga.co.za</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

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

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    name,
    email,
    phone = "",
    preferredArea = "",
    propertyType = "",
    message = "",
    _trap,
  } = body;

  if (_trap) return NextResponse.json({ ok: true });

  const nameClean = name?.trim() ?? "";
  const emailClean = email?.trim() ?? "";

  if (!nameClean || !emailClean) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const timestamp = sast();

  try {
    await sendEmail({
      to: { email: ERGA_EMAIL },
      replyTo: { email: emailClean },
      subject: `Tenant registration — ${nameClean}${preferredArea ? ` (${preferredArea})` : ""}`,
      html: notificationHtml({
        name: nameClean,
        email: emailClean,
        phone: phone.trim(),
        preferredArea: preferredArea.trim(),
        propertyType: propertyType.trim(),
        message: message.trim(),
        timestamp,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[tenant/route] Brevo error:", err);
    return NextResponse.json(
      { error: "Failed to submit your registration. Please try again or email us at info@erga.co.za." },
      { status: 500 },
    );
  }
}
