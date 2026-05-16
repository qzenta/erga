import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Erga Properties | Property Management Johannesburg, Gauteng",
  },
  description:
    "Erga Properties offers professional property management and managing agent services across Johannesburg and Gauteng. Own portfolio and tenant support. Contact us today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <GoldDivider />

      {/* Who We Are */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy mb-2">Who We Are</h2>
            <span className="block w-16 h-[2px] bg-gold mb-6" />
          </div>
          <p className="text-navy/90 leading-relaxed text-lg">
            Erga Concepts (Pty) Ltd is a Johannesburg-based property company
            offering both direct rental portfolio management and professional
            managing agent services to property owners across Gauteng.
            Registered since 2015 and now formally active, Erga Properties
            combines financial discipline with hands-on property oversight to
            deliver reliable, transparent outcomes for owners and tenants alike.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Three icon cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <IconCard
              icon={<PortfolioIcon />}
              title="Own Portfolio"
              body="Residential and commercial units managed directly by Erga, maintained to a high standard for quality tenants."
            />
            <IconCard
              icon={<AgentIcon />}
              title="Managing Agent Services"
              body="Professional end-to-end management for property owners who want a hands-off, financially disciplined operator."
            />
            <IconCard
              icon={<TenantIcon />}
              title="Tenant Support"
              body="Responsive communication, fair lease administration, and transparent handling of maintenance and queries."
            />
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px bg-gold/40" />
    </div>
  );
}

function IconCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-gold/30 p-8 flex flex-col items-start hover:border-gold transition-colors bg-white">
      <div className="mb-5 text-gold">{icon}</div>
      <h3 className="text-xl text-navy mb-3">{title}</h3>
      <p className="text-navy/80 leading-relaxed">{body}</p>
    </div>
  );
}

function PortfolioIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21V9l9-6 9 6v12" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" strokeLinejoin="round" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

function TenantIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
    </svg>
  );
}
