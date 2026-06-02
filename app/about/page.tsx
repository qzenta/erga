import type { Metadata } from "next";
import Image from "next/image";
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

      {/* Who we are */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-3">The company</p>
            <h2 className="text-[32px] text-[#1B2A4A] font-bold mb-5 leading-tight">
              Built on discipline, trust, and results
            </h2>
            <div className="w-10 h-0.5 bg-[#9A7B2F] mb-6" />
            <p className="text-[#1B2A4A]/70 leading-relaxed mb-5">
              Erga Concepts (Pty) Ltd was incorporated in 2015 and trades as Erga Properties. Based in Alberton, Johannesburg, we serve property owners and tenants across Gauteng.
            </p>
            <p className="text-[#1B2A4A]/65 leading-relaxed mb-5">
              Our approach is grounded in financial discipline, professional conduct, and transparent communication. We combine hands-on property oversight with rigorous financial administration — backed by our partnership with Sikatrix Business Accountants.
            </p>
            <p className="text-[#1B2A4A]/65 leading-relaxed mb-8">
              Whether you own a single unit or a large portfolio, Erga delivers reliable, consistent management that protects and grows your property investment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1B2A4A] hover:text-[#9A7B2F] transition-colors group"
            >
              Contact us today
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="Erga Properties team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#9A7B2F] text-white px-6 py-5 hidden md:block">
              <p className="font-serif text-[36px] leading-none">2015</p>
              <p className="text-white/70 text-[12px] mt-1">Est. Alberton, Gauteng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-[#F8F8F6] border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-2">Our story</p>
            <h2 className="text-[32px] text-[#1B2A4A] font-bold">Our journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#9A7B2F]/30 md:left-1/2" aria-hidden="true" />
            <ol className="space-y-10">
              {timelineEvents.map((event, i) => (
                <li key={i} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pb-2 ${i % 2 === 0 ? "md:text-right md:pr-14 pl-14 md:pl-0" : "md:text-left md:pl-14 pl-14"}`}>
                    <span className="text-[#9A7B2F] text-[12px] tracking-widest uppercase font-medium">{event.year}</span>
                    <p className="text-[#1B2A4A]/70 leading-relaxed mt-1 text-[14px]">{event.label}</p>
                  </div>
                  <div className="absolute left-[18px] md:left-1/2 top-1 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#9A7B2F] border-2 border-white shadow-sm z-10" />
                  <div className="hidden md:block flex-1" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-white border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-2">How we work</p>
            <h2 className="text-[32px] text-[#1B2A4A] font-bold">Our approach</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <AccountabilityIcon />,
                title: "Accountability",
                body: "We take ownership of every property we manage. Clients receive accurate records, timely payments, and honest reporting — always.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
                imageAlt: "Financial accountability and reporting",
              },
              {
                icon: <TransparencyIcon />,
                title: "Transparency",
                body: "No hidden fees, no surprises. We communicate clearly with both property owners and tenants throughout every engagement.",
                image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80&auto=format&fit=crop",
                imageAlt: "Open and transparent teamwork",
              },
              {
                icon: <ExcellenceIcon />,
                title: "Excellence",
                body: "We hold ourselves to professional standards in every interaction — from the first enquiry to the annual lease renewal.",
                image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80&auto=format&fit=crop",
                imageAlt: "Excellent property management",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="border border-[#E5E7EB] overflow-hidden">
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <Image src={pillar.image} alt={pillar.imageAlt} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-[#1B2A4A]/50" />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {pillar.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-[#1B2A4A] text-[17px] mb-3">{pillar.title}</h3>
                  <p className="text-[#1B2A4A]/60 text-[13px] leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="bg-[#F8F8F6] border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative overflow-hidden" style={{ height: 280 }}>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
              alt="Professional accounting and property management partnership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-3">Partners & associations</p>
            <h2 className="text-[28px] text-[#1B2A4A] font-bold mb-5 leading-tight">
              Backed by professional expertise
            </h2>
            <div className="space-y-4 text-[#1B2A4A]/65 leading-relaxed text-[14px]">
              <p>
                Erga Properties is associated with{" "}
                <span className="text-[#9A7B2F] font-medium">Sikatrix Business Accountants</span>, ensuring that
                accounting and tax compliance is embedded in all property management operations.
              </p>
              <p>
                Owners can be confident that the financial administration behind their properties meets professional
                standards — with SARS-compliant reporting, proper reconciliations, and audit-ready records from day one.
              </p>
              <p>
                Erga also partners with <span className="text-[#9A7B2F] font-medium">HeroPlumbers</span> for
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
