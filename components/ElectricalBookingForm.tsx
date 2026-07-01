"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ElectricalBookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      address: data.get("address") as string,
      issue: data.get("issue") as string,
      preferred_time: data.get("preferred_time") as string,
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/electrical-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(
          json?.error ??
            "We couldn't submit your booking. Please try again or call us directly.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Please check your connection or email us directly at info@erga.co.za.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 p-8 text-center bg-white">
        <h3 className="text-2xl text-navy mb-3">Booking received</h3>
        <p className="text-navy/80">
          Thank you — we&apos;ll be in touch shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field label="Full Name" name="name" type="text" required />
      <Field label="Phone Number" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Address / Suburb" name="address" type="text" required />

      <div>
        <label
          htmlFor="issue"
          className="block text-sm tracking-widest uppercase text-navy mb-2"
        >
          Issue Description
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          required
          className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
        />
      </div>

      <Field label="Preferred Date/Time" name="preferred_time" type="datetime-local" required />

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 border-navy/30 accent-gold"
        />
        <label htmlFor="consent" className="text-sm text-navy/80 leading-relaxed">
          I understand a R450 callout fee applies if I decline the quote after
          inspection.{" "}
          <a href="#callout-faq" className="text-gold underline underline-offset-2 hover:text-navy">
            Read more
          </a>
        </label>
      </div>

      {status === "error" && (
        <p className="text-red-700 text-sm" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto inline-flex items-center justify-center bg-navy text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Booking…" : "Book Callout"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm tracking-widest uppercase text-navy mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
      />
    </div>
  );
}
