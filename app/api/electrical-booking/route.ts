import { NextRequest, NextResponse } from "next/server";

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

// ── Route handler ─────────────────────────────────────────────────────────────
// Mirrors the WF 1b pattern: validate + capture consent evidence server-side,
// then forward to the dedicated n8n "Electrical Booking Intake" workflow,
// which fans out to Telegram + the Electrical Bookings Notion DB.

const DEFAULT_WEBHOOK_URL = "https://n8n.qzenta.com/webhook/electrical-booking";

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

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const issue = String(body.issue ?? "").trim();
  const preferredTime = String(body.preferred_time ?? "").trim();
  const consent = body.consent === true;

  if (!name || !phone || !email || !address || !issue || !preferredTime) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

  const webhookUrl = process.env.ELECTRICAL_BOOKING_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`n8n webhook ${res.status}: ${await res.text()}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[electrical-booking/route] webhook error:", err);
    return NextResponse.json(
      { error: "Failed to submit your booking. Please try again or call us directly." },
      { status: 500 },
    );
  }
}
