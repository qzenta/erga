"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "enquiryType" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-red-700 text-[13px] mt-1.5">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Validate before submitting — invalid input is never sent to the API.
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const enquiryType = String(data.get("enquiryType") ?? "");
    const message = String(data.get("message") ?? "");

    if (!name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email.trim())) next.email = "Please enter a valid email address.";
    if (!enquiryType.trim()) next.enquiryType = "Please choose an enquiry type.";
    if (message.trim().length < 10) next.message = "Please add a bit more detail to your message.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setErrorMsg("");

      // Move focus to the first invalid field so keyboard and screen-reader
      // users land on what to fix.
      const order = ["name", "email", "enquiryType", "message"];
      const firstError = order.find((key) => next[key as keyof FieldErrors]);
      if (firstError) {
        form.querySelector<HTMLElement>(`#${firstError}`)?.focus();
      }
      return;
    }

    setErrors({});
    setStatus("submitting");
    setErrorMsg("");

    const body = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      enquiryType: String(data.get("enquiryType") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
            "We couldn't send your message. Please try again or email us directly.",
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
        <h3 className="text-2xl text-navy mb-3">Thank you</h3>
        <p className="text-navy/80">
          Your message has been sent. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field label="Name" name="name" type="text" required error={errors.name} />
      <Field label="Email" name="email" type="email" required error={errors.email} />
      <Field label="Phone (optional)" name="phone" type="tel" />

      <div>
        <label
          htmlFor="enquiryType"
          className="block text-sm tracking-widest uppercase text-navy mb-2"
        >
          Enquiry Type
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue=""
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          aria-invalid={Boolean(errors.enquiryType) || undefined}
          className={`w-full border px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold ${errors.enquiryType ? "border-red-700" : "border-navy/20"}`}
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="General">General</option>
          <option value="Electrical Services">Electrical Services</option>
          <option value="Tenant Enquiry">Tenant Enquiry</option>
          <option value="Managing Agent">Managing Agent</option>
          <option value="Other">Other</option>
        </select>
        <FieldError id="enquiryType-error" message={errors.enquiryType} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm tracking-widest uppercase text-navy mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message) || undefined}
          className={`w-full border px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold ${errors.message ? "border-red-700" : "border-navy/20"}`}
        />
        <FieldError id="message-error" message={errors.message} />
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
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  error?: string;
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
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error) || undefined}
        className={`w-full border px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold ${error ? "border-red-700" : "border-navy/20"}`}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}
