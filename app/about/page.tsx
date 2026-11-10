import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "About Us | Erga Properties Alberton" },
  description:
    "Erga Concepts (Pty) Ltd, trading as Erga Properties, is a Johannesburg-based property company registered since 2015. Based in Alberton, serving Gauteng.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Erga Properties"
        subtitle="A Johannesburg-based property company built on financial discipline, integrity, and hands-on property oversight."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Aerial view of Johannesburg skyline"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Electrical + property intro — uses only home-page wording */}
      <section className="bg-cream border-b border-line">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <p className="text-navy/80 leading-relaxed text-16 text-center">
            Erga is property management first — and Alberton&apos;s trusted
            electrician too: licensed inspection, transparent quoting, no
            surprises, for owners and tenants across Gauteng.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-gold text-[12px] tracking-[0.2em] uppercase font-medium mb-3">The company</p>
            <h2 className="text-[32px] text-navy font-bold mb-5 leading-tight">
              Built on discipline, trust, and results
            </h2>
            <div className="w-10 h-0.5 bg-gold mb-6" />
            <p className="text-navy/70 leading-relaxed mb-5">
              Erga Concepts (Pty) Ltd was incorporated in 2015 and trades as Erga Properties. Based in Alberton, Johannesburg, we serve property owners and tenants across Gauteng.
            </p>
            <p className="text-navy/65 leading-relaxed mb-5">
              Our approach is grounded in financial discipline, professional conduct, and transparent communication. We combine hands-on property oversight with rigorous financial administration — backed by our partnership with Sikatrix Business Accountants.
            </p>
            <p className="text-navy/65 leading-relaxed mb-8">
              Whether you own a single unit or a large portfolio, Erga delivers reliable, consistent management that protects and grows your property investment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-navy hover:text-gold transition-colors group"
            >
              Contact us today
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          {/* Text-only right column — the stock "team meeting" photo was removed.
              The 2015 badge is an existing timeline claim, kept as text. */}
          <div className="relative">
            <div className="inline-block border border-line bg-cream px-6 py-5">
              <p className="font-serif text-[36px] leading-none text-gold-deep">2015</p>
              <p className="text-navy/60 text-[12px] mt-1">Est. Alberton, Gauteng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-[#F8F8F6] border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-gold text-[12px] tracking-[0.2em] uppercase font-medium mb-2">Our story</p>
            <h2 className="text-[32px] text-navy font-bold">Our journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30 md:left-1/2" aria-hidden="true" />
            <ol className="space-y-10">
              {timelineEvents.map((event, i) => (
                <li key={i} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pb-2 ${i % 2 === 0 ? "md:text-right md:pr-14 pl-14 md:pl-0" : "md:text-left md:pl-14 pl-14"}`}>
                    <span className="text-gold text-[12px] tracking-widest uppercase font-medium">{event.year}</span>
                    <p className="text-navy/70 leading-relaxed mt-1 text-[14px]">{event.label}</p>
                  </div>
                  <div className="absolute left-[18px] md:left-1/2 top-1 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-white shadow-sm z-10" />
                  <div className="hidden md:block flex-1" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-gold text-[12px] tracking-[0.2em] uppercase font-medium mb-2">How we work</p>
            <h2 className="text-[32px] text-navy font-bold">Our approach</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <AccountabilityIcon />,
                title: "Accountability",
                body: "We take ownership of every property we manage. Clients receive accurate records, timely payments, and honest reporting — always.",
              },
              {
                icon: <TransparencyIcon />,
                title: "Transparency",
                body: "No hidden fees, no surprises. We communicate clearly with both property owners and tenants throughout every engagement.",
              },
              {
                icon: <ExcellenceIcon />,
                title: "Excellence",
                body: "We hold ourselves to professional standards in every interaction — from the first enquiry to the annual lease renewal.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="border border-line overflow-hidden">
                <div className="bg-navy flex items-center justify-center py-8">
                  {pillar.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-navy text-[17px] mb-3">{pillar.title}</h3>
                  <p className="text-navy/60 text-[13px] leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="bg-[#F8F8F6] border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Text-only — the stock "partnership" photo was removed */}
          <div className="max-w-2xl">
            <p className="text-gold text-[12px] tracking-[0.2em] uppercase font-medium mb-3">Partners & associations</p>
            <h2 className="text-[28px] text-navy font-bold mb-5 leading-tight">
              Backed by professional expertise
            </h2>
            <div className="space-y-4 text-navy/65 leading-relaxed text-[14px]">
              <p>
                Erga Properties is associated with{" "}
                <span className="text-gold font-medium">Sikatrix Business Accountants</span>, ensuring that
                accounting and tax compliance is embedded in all property management operations.
              </p>
              <p>
                Owners can be confident that the financial administration behind their properties meets professional
                standards — with SARS-compliant reporting, proper reconciliations, and audit-ready records from day one.
              </p>
              <p>
                Erga also partners with <span className="text-gold font-medium">HeroPlumbers</span> for
                reliable, cost-effective plumbing maintenance across all managed properties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const timelineEvents = [
  { year: "2015", label: "Erga Concepts (Pty) Ltd incorporated in Alberton, Gauteng." },
  { year: "2016–2025", label: "Strategic holding period — building expertise, partnerships, and infrastructure." },
  { year: "May 2026", label: "Erga Properties formally active. Website launched, first managed properties onboarded." },
];

function AccountabilityIcon() {
  return <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function TransparencyIcon() {
  return <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" /></svg>;
}
function ExcellenceIcon() {
  return <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2z" strokeLinejoin="round" /></svg>;
}
