import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: { absolute: "Our Services | Erga Properties Johannesburg" },
  description:
    "From managing agent mandates to direct rental portfolio management, Erga Properties delivers accountable, transparent property services across Gauteng.",
};

const propertyManagement = {
  body: "Erga acts as managing agent for property owners who want hands-off, accountable management — from tenant sourcing and vetting through to monthly financial reporting. We also manage a small owned portfolio directly, held to the same standard.",
  columns: [
    {
      title: "For Owners",
      bullets: [
        "Tenant sourcing, vetting and placement",
        "Lease drafting and administration",
        "Monthly invoicing and collections",
        "Arrears and dispute management",
        "Maintenance coordination with approved contractors",
      ],
    },
    {
      title: "For Tenants",
      bullets: [
        "Single point of contact for all communication",
        "Structured maintenance reporting",
        "Fair, transparent lease administration",
        "Support from move-in to move-out",
      ],
    },
  ],
  footnote: "Management fee: 10% of gross monthly rental collected.",
};

const steps = [
  { n: "1", title: "Consultation", body: "We meet to understand your property, portfolio, and goals." },
  { n: "2", title: "Mandate", body: "A formal managing agent mandate is signed — clear fees, clear scope." },
  { n: "3", title: "Onboarding", body: "Tenants are introduced to Erga, systems are set up, inspections done." },
  { n: "4", title: "Monthly reports", body: "You receive a financial statement and report every month — on time." },
];

/* Text-only CTA band — the Unsplash band was removed; layout only, copy unchanged. */
export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="From managing agent mandates to direct portfolio management — professional, accountable, and transparent."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Property Management — single condensed section (demoted, not a standalone agency page) */}
      <section id="property-management" className="bg-cream text-16">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-[30px] text-navy font-bold mb-4 leading-tight">Property Management</h2>
            <div className="w-10 h-0.5 bg-gold mb-5" />
            <p className="text-navy/70 leading-relaxed mb-8">{propertyManagement.body}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-6">
            {propertyManagement.columns.map((col) => (
              <div key={col.title} className="bg-white border border-line p-8">
                <h3 className="text-[12px] tracking-[0.15em] uppercase text-gold-deep font-semibold mb-3">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] text-navy/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-navy/50 text-[13px] italic mb-6 border-l-2 border-gold/30 pl-3 max-w-2xl">
            {propertyManagement.footnote}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-navy text-[13px] font-medium hover:text-gold-deep transition-colors group"
          >
            Get in touch
            <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-gold-deep text-[12px] tracking-[0.2em] uppercase font-medium mb-2">Simple process</p>
            <h2 className="font-display text-[32px] text-navy">How it works</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-navy/15" aria-hidden="true" />
            <ol className="grid gap-10 md:grid-cols-4 relative">
              {steps.map((step) => (
                <li key={step.n} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 bg-navy flex items-center justify-center mb-5 shadow-sm">
                    <span className="font-serif text-gold-light text-xl font-semibold">{step.n}</span>
                  </div>
                  <h3 className="font-semibold text-navy text-[15px] mb-2">{step.title}</h3>
                  <p className="text-navy/60 text-[13px] leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-12 text-center text-navy/55 text-[14px]">
            Fee structures are competitive and tailored to your portfolio.{" "}
            <Link href="/contact" className="text-gold-deep underline underline-offset-4 hover:text-navy transition-colors">
              Contact us for a proposal.
            </Link>
          </p>
        </div>
      </section>

      {/* About — text-only; the stock team photo and its misleading alt text were removed. */}
      <section className="bg-cream py-16 border-t border-line text-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-5 flex-wrap mb-6">
            {/* 10+ years badge — text only */}
            <div className="border border-line bg-white px-6 py-5 shrink-0">
              <p className="font-bold text-[40px] text-gold-deep leading-none">10+</p>
              <p className="text-navy/60 text-[12px] mt-1">Years in property</p>
            </div>

            <div className="min-w-[260px] flex-1">
              <p className="text-gold-deep text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Why owners choose Erga</p>
              <h2 className="text-navy text-[28px] md:text-[34px] font-bold mb-5 leading-tight">
                Johannesburg&apos;s trusted property management partner
              </h2>
              <p className="text-navy/65 leading-relaxed text-[15px]">
                Financial discipline, hands-on oversight, transparent reporting, and reliable rent collection — so your investment performs the way it should.
              </p>
            </div>
          </div>

          <ul className="space-y-3 mb-8 max-w-2xl">
            {[
              "Over a decade of hands-on property experience",
              "Serving owners and tenants across Gauteng",
              "Transparent monthly reporting, every month",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] text-navy/70">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <Link href="/about" className="inline-flex items-center gap-2 text-navy text-[14px] font-semibold hover:text-gold-deep transition-colors group">
            Learn more about us
            <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA band — text-only on navy; copy unchanged from the image band */}
      <section className="bg-navy">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="text-gold-light text-[12px] tracking-[0.2em] uppercase font-medium mb-3">Ready to hand over?</p>
          <h2 className="font-display text-white text-[32px] mb-6">Let Erga manage your property</h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] bg-gold-deep text-white text-[13px] font-medium tracking-wide hover:bg-white hover:text-navy transition-colors"
          >
            Get a free proposal
          </Link>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
