import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "Our Services | Erga Properties Johannesburg" },
  description:
    "From managing agent mandates to direct rental portfolio management, Erga Properties delivers accountable, transparent property services across Gauteng.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:gap-16">
            <ServiceBlock
              eyebrow="01"
              title="Own Portfolio"
              body="We own and manage residential and commercial properties, ensuring well-maintained spaces for quality tenants. Our portfolio currently includes units in Kempton Park and the greater Johannesburg area."
            />

            <div className="h-px bg-gold/40" />

            <ServiceBlock
              eyebrow="02"
              title="Managing Agent Services"
              body="We act as professional managing agent for property owners who want hands-off management. Services include tenant sourcing and vetting, lease administration, monthly invoicing and collections, arrears management, maintenance coordination, and monthly reporting to owners."
              footnote="Fee structure available on request."
            />
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <div className="h-px bg-gold/40 mb-16" />
            <h2 className="text-3xl text-navy text-center mb-2">How It Works</h2>
            <span className="block w-16 h-[2px] bg-gold mx-auto mb-14" />

            <div className="relative">
              <div
                className="hidden md:block absolute top-8 left-0 right-0 h-px bg-navy/20"
                aria-hidden="true"
              />
              <ol className="grid gap-10 md:grid-cols-4 relative">
                {howItWorksSteps.map((step, i) => (
                  <li key={i} className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-5 shadow-sm">
                      <span className="font-serif text-white text-xl font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-navy text-lg mb-2">{step.title}</h3>
                    <p className="text-navy/75 leading-relaxed text-sm">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-12 text-center text-navy/70 italic">
              Fee structures are competitive and tailored to your portfolio.{" "}
              <Link
                href="/contact"
                className="text-navy underline underline-offset-4 decoration-gold hover:text-gold transition-colors not-italic"
              >
                Contact us for a proposal.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const howItWorksSteps = [
  { title: "Consultation", body: "We meet to understand your property and goals." },
  { title: "Mandate", body: "A formal managing agent mandate is signed." },
  { title: "Onboarding", body: "Tenants are introduced, systems are set up." },
  { title: "Monthly Reporting", body: "You receive a report and statement every month." },
];

function ServiceBlock({
  eyebrow,
  title,
  body,
  footnote,
}: {
  eyebrow: string;
  title: string;
  body: string;
  footnote?: string;
}) {
  return (
    <article className="grid gap-6 md:grid-cols-[120px_1fr] items-start">
      <div className="font-serif text-3xl text-gold">{eyebrow}</div>
      <div>
        <h2 className="text-2xl md:text-3xl text-navy mb-2">{title}</h2>
        <span className="block w-12 h-[2px] bg-gold mb-6" />
        <p className="text-navy/90 leading-relaxed text-lg mb-4">{body}</p>
        {footnote && <p className="text-navy/70 italic mb-6">{footnote}</p>}
        <Link
          href="/contact"
          className="inline-flex items-center text-sm tracking-widest uppercase text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
        >
          Get in touch &rarr;
        </Link>
      </div>
    </article>
  );
}
