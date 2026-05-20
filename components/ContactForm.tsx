"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      enquiryType: data.get("enquiryType") as string,
      message: data.get("message") as string,
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
      <Field label="Name" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />
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
          className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="General">General</option>
          <option value="Tenant Enquiry">Tenant Enquiry</option>
          <option value="Managing Agent">Managing Agent</option>
          <option value="Other">Other</option>
        </select>
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
          className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
        />
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
