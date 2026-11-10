"use client";

import { useState } from "react";
import { SITE, whatsappLink, mailLink } from "@/lib/site";
import { trackEvent, trackGenerateLead } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "address" | "issue" | "consent", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-red-700 text-[13px] mt-1.5">
      {message}
    </p>
  );
}

export default function ElectricalBookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const email = String(data.get("email") ?? "").trim();

    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your full name.";
    if (!String(data.get("phone") ?? "").trim()) next.phone = "Please enter your phone number.";
    if (!String(data.get("address") ?? "").trim()) next.address = "Please enter your suburb or address.";
    if (!String(data.get("issue") ?? "").trim()) next.issue = "Please describe the problem.";
    if (email && !EMAIL_RE.test(email)) next.email = "Please enter a valid email address, or leave it blank.";
    if (data.get("consent") !== "on") next.consent = "Please confirm you understand the callout fee terms.";
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const fieldErrors = validate(data);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("error");

      // Move focus to the first invalid field so keyboard and screen-reader
      // users land on what to fix.
      const order = ["name", "phone", "address", "issue", "email", "consent"];
      const firstError = order.find((key) => fieldErrors[key as keyof FieldErrors]);
      if (firstError) {
        form.querySelector<HTMLElement>(`#${firstError}`)?.focus();
      }
      return;
    }
    setErrors({});
    setStatus("submitting");

    const body = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      address: String(data.get("address") ?? ""),
      issue: String(data.get("issue") ?? ""),
      preferred_time: String(data.get("preferred_time") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/electrical-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json().catch(() => null);

      if (res.ok) {
        trackGenerateLead("electrical_booking");
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(
          json?.error ??
            "We couldn't submit your booking. Please try again, or WhatsApp or email us directly.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        `Network error. Please check your connection, or WhatsApp or email us directly at ${SITE.email}.`,
      );
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:border-gold-deep";
  const errorInputClass = "border-red-700";
  const labelClass = "block text-sm tracking-widest uppercase text-navy mb-2";

  if (status === "success") {
    return (
      <div className="border border-gold/40 p-8 text-center bg-white">
        <h3 className="text-2xl text-navy mb-3">Booking received</h3>
        <p className="text-navy/80 mb-6">
          Thank you — we&apos;ll be in touch shortly to confirm your appointment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={mailLink}
            onClick={() => trackEvent("click_email", { location: "booking_success" })}
            className="inline-flex items-center justify-center min-h-[44px] px-6 bg-gold-deep text-white text-sm font-semibold hover:bg-navy transition-colors"
          >
            Email {SITE.email}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location: "booking_success" })}
            className="inline-flex items-center justify-center min-h-[44px] px-6 border border-navy/30 text-navy text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    );
  }

  const liveMessage =
    status === "submitting"
      ? "Submitting your booking…"
      : status === "error"
        ? errorMsg || "Please check the highlighted fields."
        : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — visually hidden; bots filling it are silently dropped server-side */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="name"
        label="Full Name"
        name="name"
        type="text"
        autoComplete="name"
        required
        error={errors.name}
        inputClass={inputClass}
        labelClass={labelClass}
      />
      <Field
        id="phone"
        label="Phone Number"
        name="phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        required
        error={errors.phone}
        inputClass={inputClass}
        labelClass={labelClass}
      />
      <Field
        id="address"
        label="Address / Suburb"
        name="address"
        type="text"
        autoComplete="street-address"
        required
        error={errors.address}
        inputClass={inputClass}
        labelClass={labelClass}
      />

      <div>
        <label htmlFor="issue" className={labelClass}>
          What&apos;s the problem
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          required
          aria-describedby={errors.issue ? "issue-error" : undefined}
          aria-invalid={Boolean(errors.issue) || undefined}
          className={`${inputClass} ${errors.issue ? errorInputClass : ""}`.trim()}
        />
        <FieldError id="issue-error" message={errors.issue} />
      </div>

      <div>
        <label htmlFor="preferred_time" className={labelClass}>
          When
        </label>
        <select id="preferred_time" name="preferred_time" required className={inputClass}>
          <option value="ASAP">ASAP</option>
          <option value="Today">Today</option>
          <option value="This week">This week</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      <Field
        id="email"
        label="Email (optional)"
        name="email"
        type="email"
        autoComplete="email"
        error={errors.email}
        inputClass={inputClass}
        labelClass={labelClass}
      />

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-describedby={errors.consent ? "consent-error" : undefined}
            aria-invalid={Boolean(errors.consent) || undefined}
            className={`${errors.consent ? "outline-2 outline-red-700" : ""} mt-1 h-4 w-4 border-navy/30 accent-gold-deep shrink-0`}
          />
          <label htmlFor="consent" className="text-sm text-navy/80 leading-relaxed">
            I understand a R450 callout fee applies if I decline the quote after
            inspection.{" "}
            <a href="#callout-faq" className="text-gold-deep underline underline-offset-2 hover:text-navy">
              Read more
            </a>
          </label>
        </div>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      {/* Polite live status — submission state and server errors for screen readers */}
      <p aria-live="polite" role="status" className={status === "error" && !errorMsg ? "sr-only" : "text-sm"}>
        {liveMessage && (
          <span className={status === "error" ? "text-red-700" : "text-navy/70"} aria-hidden={false}>
            {liveMessage}
          </span>
        )}
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto inline-flex items-center justify-center bg-navy text-white px-8 py-3 min-h-[44px] text-sm tracking-widest uppercase hover:bg-gold-deep disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Booking…" : "Book Callout"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type,
  required,
  autoComplete,
  inputMode,
  error,
  inputClass,
  labelClass,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
  error?: string;
  inputClass: string;
  labelClass: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error) || undefined}
        className={`${inputClass} ${error ? "border-red-700" : ""}`.trim()}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
