"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvaqwvk";

type Status = "idle" | "submitting" | "success" | "error";

export default function TenantRegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Prospective Tenant Registration");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(
          json?.errors?.[0]?.message ??
            "We couldn't send your registration. Please try again or email us directly.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Please check your connection or email us at info@erga.co.za.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 p-8 text-center bg-white">
        <h3 className="text-2xl text-navy mb-3">Registration received</h3>
        <p className="text-navy/80">
          Thank you — we&apos;ll be in touch when a suitable unit becomes
          available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Phone" name="phone" type="tel" />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="preferredArea"
            className="block text-sm tracking-widest uppercase text-navy mb-2"
          >
            Preferred Area
          </label>
          <select
            id="preferredArea"
            name="preferredArea"
            required
            defaultValue=""
            className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select area
            </option>
            <option value="Kempton Park">Kempton Park</option>
            <option value="Alberton">Alberton</option>
            <option value="Johannesburg">Johannesburg</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="propertyType"
            className="block text-sm tracking-widest uppercase text-navy mb-2"
          >
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            defaultValue=""
            className="w-full border border-navy/20 px-4 py-3 bg-white text-navy focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="tenantMessage"
          className="block text-sm tracking-widest uppercase text-navy mb-2"
        >
          Additional Information (optional)
        </label>
        <textarea
          id="tenantMessage"
          name="message"
          rows={4}
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
        {status === "submitting" ? "Submitting…" : "Register Interest"}
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
