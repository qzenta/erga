import type { Metadata } from "next";
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
        image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Professional property management team"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* The Company */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl text-navy mb-4">The Company</h2>
          <p className="text-navy/90 leading-relaxed text-lg">
            Erga Concepts (Pty) Ltd was incorporated in 2015 and trades as Erga
            Properties. Based in Alberton, Johannesburg, we serve property
            owners and tenants across Gauteng. Our approach is grounded in
            financial discipline, professional conduct, and transparent
            communication.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gold/40" />
      </div>

      {/* Company Timeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl text-navy text-center mb-2">Our Journey</h2>
          <span className="block w-16 h-[2px] bg-gold mx-auto mb-14" />
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-gold/40 md:left-1/2"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {timelineEvents.map((event, i) => (
                <li
                  key={i}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 pb-2 ${
                      i % 2 === 0
                        ? "md:text-right md:pr-14 pl-14 md:pl-0"
                        : "md:text-left md:pl-14 pl-14"
                    }`}
                  >
                    <span className="text-gold text-sm tracking-widest uppercase font-medium">
                      {event.year}
                    </span>
                    <p className="text-navy leading-relaxed mt-1">{event.label}</p>
                  </div>
                  <div className="absolute left-[18px] md:left-1/2 top-1 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-white shadow-sm z-10" />
                  <div className="hidden md:block flex-1" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gold/40" />
      </div>

      {/* Our Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl text-navy text-center mb-2">Our Approach</h2>
          <span className="block w-16 h-[2px] bg-gold mx-auto mb-12" />
          <div className="grid gap-10 md:grid-cols-3">
            <Pillar
              icon={<AccountabilityIcon />}
              title="Accountability"
              body="We take ownership of every property we manage. Our clients receive accurate records, timely payments, and honest reporting — always."
            />
            <Pillar
              icon={<TransparencyIcon />}
              title="Transparency"
              body="No hidden fees, no surprises. We communicate clearly with both property owners and tenants throughout every engagement."
            />
            <Pillar
              icon={<ExcellenceIcon />}
              title="Excellence"
              body="We hold ourselves to professional standards in every interaction — from the first enquiry to the annual lease renewal."
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gold/40" />
      </div>

      {/* Associations */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl text-navy mb-4">Associations</h2>
          <p className="text-navy/90 leading-relaxed text-lg">
            Erga Properties is associated with{" "}
            <span className="text-gold">Sikatrix Business Accountants</span>,
            ensuring that accounting and tax compliance is embedded in all
            property management operations. Owners can be confident that the
            financial administration behind their properties meets professional
            standards from day one.
          </p>
        </div>
      </section>
    </>
  );
}

const timelineEvents = [
  { year: "2015", label: "Erga Concepts (Pty) Ltd incorporated." },
  { year: "2016–2025", label: "Strategic holding period — building foundations and expertise." },
  { year: "2026", label: "Formally active — Erga Properties launches." },
];

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="text-xl text-navy mb-3">{title}</h3>
      <p className="text-navy/80 leading-relaxed">{body}</p>
    </div>
  );
}

function AccountabilityIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ExcellenceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2z" strokeLinejoin="round" />
    </svg>
  );
}
