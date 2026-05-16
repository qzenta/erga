"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas does Erga Properties operate in?",
    a: "We currently manage properties in Kempton Park and the greater Johannesburg area, with plans to expand across Gauteng.",
  },
  {
    q: "How do I apply to rent a property?",
    a: "Complete the tenant enquiry form on our Listings page or contact us directly at info@erga.co.za. We will respond within 1 business day.",
  },
  {
    q: "What does a managing agent do?",
    a: "A managing agent handles all aspects of property management on behalf of the owner — including tenant sourcing, lease administration, invoicing, collections, maintenance coordination, and monthly reporting.",
  },
  {
    q: "How much do you charge for managing agent services?",
    a: "Our fees are competitive and tailored to the size and type of portfolio. Contact us for a personalised proposal.",
  },
  {
    q: "What is required to sign a lease?",
    a: "Tenants are required to provide a valid ID, proof of income (3 months payslips or bank statements), and proof of current address. A credit check will be conducted.",
  },
  {
    q: "How are maintenance issues handled?",
    a: "Tenants report maintenance issues directly to our office. We coordinate with our approved contractors and keep both tenant and owner informed throughout.",
  },
  {
    q: "Is Erga Properties registered?",
    a: "Yes. Erga Concepts (Pty) Ltd is registered with the Companies and Intellectual Property Commission (CIPC) and has been in good standing since 2015.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold/20 border border-gold/20">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gold/5 transition-colors"
            >
              <span className="font-serif text-lg text-navy">{faq.q}</span>
              <span
                className="flex-shrink-0 text-gold transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-navy/80 leading-relaxed border-t border-gold/10 pt-4 bg-gold/5">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
