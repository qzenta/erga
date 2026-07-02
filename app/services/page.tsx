import type { Metadata } from "next";
import Image from "next/image";
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
  image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80&auto=format&fit=crop",
  imageAlt: "Professional property management handover",
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

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="From managing agent mandates to direct portfolio management — professional, accountable, and transparent."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern office building"
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Property Management — single condensed section (demoted, not a standalone agency page) */}
      <section id="property-management" className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden" style={{ height: 340 }}>
              <Image
                src={propertyManagement.image}
                alt={propertyManagement.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-[30px] text-[#1B2A4A] font-bold mb-4 leading-tight">Property Management</h2>
              <div className="w-10 h-0.5 bg-[#9A7B2F] mb-5" />
              <p className="text-[#1B2A4A]/70 leading-relaxed mb-8">{propertyManagement.body}</p>

              <div className="grid sm:grid-cols-2 gap-8 mb-6">
                {propertyManagement.columns.map((col) => (
                  <div key={col.title}>
                    <h3 className="text-[12px] tracking-[0.15em] uppercase text-[#9A7B2F] font-semibold mb-3">
                      {col.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {col.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[14px] text-[#1B2A4A]/70">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9A7B2F] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-[#1B2A4A]/50 text-[13px] italic mb-6 border-l-2 border-[#9A7B2F]/30 pl-3">
                {propertyManagement.footnote}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1B2A4A] text-[13px] font-medium hover:text-[#9A7B2F] transition-colors group"
              >
                Get in touch
                <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-2">Simple process</p>
            <h2 className="text-[32px] text-[#1B2A4A] font-bold">How it works</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#1B2A4A]/15" aria-hidden="true" />
            <ol className="grid gap-10 md:grid-cols-4 relative">
              {[
                { n: "1", title: "Consultation", body: "We meet to understand your property, portfolio, and goals." },
                { n: "2", title: "Mandate", body: "A formal managing agent mandate is signed — clear fees, clear scope." },
                { n: "3", title: "Onboarding", body: "Tenants are introduced to Erga, systems are set up, inspections done." },
                { n: "4", title: "Monthly reports", body: "You receive a financial statement and report every month — on time." },
              ].map((step) => (
                <li key={step.n} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 bg-[#1B2A4A] flex items-center justify-center mb-5 shadow-sm">
                    <span className="font-serif text-[#9A7B2F] text-xl font-semibold">{step.n}</span>
                  </div>
                  <h3 className="font-semibold text-[#1B2A4A] text-[15px] mb-2">{step.title}</h3>
                  <p className="text-[#1B2A4A]/60 text-[13px] leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-12 text-center text-[#1B2A4A]/55 text-[14px]">
            Fee structures are competitive and tailored to your portfolio.{" "}
            <Link href="/contact" className="text-[#9A7B2F] underline underline-offset-4 hover:text-[#1B2A4A] transition-colors">
              Contact us for a proposal.
            </Link>
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F8F8F6] py-16 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 grid gap-14 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop"
                alt="Erga Properties team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-[#1B2A4A] text-white px-6 py-5 shadow-xl hidden md:block">
              <p className="font-bold text-[40px] text-[#9A7B2F] leading-none">10+</p>
              <p className="text-white/60 text-[12px] mt-1">Years in property</p>
            </div>
          </div>

          <div>
            <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Why owners choose Erga</p>
            <h2 className="text-[#1B2A4A] text-[28px] md:text-[34px] font-bold mb-5 leading-tight">
              Johannesburg&apos;s trusted property management partner
            </h2>
            <p className="text-[#1B2A4A]/65 leading-relaxed mb-8 text-[15px]">
              Financial discipline, hands-on oversight, transparent reporting, and reliable rent collection — so your investment performs the way it should.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Over a decade of hands-on property experience",
                "Serving owners and tenants across Gauteng",
                "Transparent monthly reporting, every month",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14px] text-[#1B2A4A]/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9A7B2F] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-flex items-center gap-2 text-[#1B2A4A] text-[14px] font-semibold hover:text-[#9A7B2F] transition-colors group">
              Learn more about us
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Image CTA band */}
      <section className="relative overflow-hidden" style={{ height: 320 }}>
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80&auto=format&fit=crop"
          alt="Property management team"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-3">Ready to hand over?</p>
          <h2 className="text-[30px] text-white font-bold mb-6">Let Erga manage your property</h2>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#9A7B2F] text-white text-[13px] font-medium tracking-wide hover:bg-[#c2a14d] transition-colors"
          >
            Get a free proposal
          </Link>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
