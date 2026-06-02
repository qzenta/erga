import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "Tools & Resources | Erga Properties" },
  description:
    "Property calculators, tenant and landlord forms, free download templates, and suburb intelligence for Gauteng property owners and tenants.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const calculators = [
  {
    label: "Bond Calculator",
    desc: "Monthly repayments, total interest, and full amortisation chart.",
    href: "/calculator",
    hash: "",
  },
  {
    label: "Affordability Calculator",
    desc: "Based on your income and expenses — how much can the banks lend you?",
    href: "/calculator#affordability",
    hash: "affordability",
  },
  {
    label: "Rental Yield Estimator",
    desc: "Gross and net yield, cash flow after rates, levy, and management fees.",
    href: "/calculator#yield",
    hash: "yield",
  },
  {
    label: "Transfer Cost Calculator",
    desc: "SARS 2024/25 Transfer Duty, conveyancing fees, and deeds office levy.",
    href: "/calculator#transfer",
    hash: "transfer",
  },
];

const forms = [
  {
    label: "Tenant Application Form",
    desc: "Apply to rent an Erga-managed property. Submit your details and required documents online.",
    href: "/listings#register",
    cta: "Apply Now",
    external: false,
  },
  {
    label: "Maintenance Request",
    desc: "Report a repair or maintenance issue at your Erga-managed property.",
    href: "/contact#maintenance",
    cta: "Submit Request",
    external: false,
  },
  {
    label: "Bond Pre-Qualification",
    desc: "Get in touch with Erga to be referred to a registered bond originator for a formal pre-qualification.",
    href: "/contact#bond",
    cta: "Get Pre-Qualified",
    external: false,
  },
  {
    label: "WhatsApp Us Directly",
    desc: "Prefer a quick message? Chat with the Erga team on WhatsApp — we usually respond within the hour.",
    href: "https://wa.me/27000000000",
    cta: "Open WhatsApp",
    external: true,
  },
];

const downloads = [
  {
    title: "Tenant Move-In Checklist",
    description: "A step-by-step checklist covering everything a new tenant needs to do before and on moving day.",
    file: "tenant-checklist.pdf",
    id: "tenant-application",
  },
  {
    title: "Tenant Code of Conduct",
    description: "Expected standards of behaviour and responsibilities for all tenants in Erga-managed properties.",
    file: "tenant-code-of-conduct.pdf",
    id: "lease-template",
  },
  {
    title: "Property Rules & Regulations",
    description: "General rules governing the use and occupation of Erga Properties residential and commercial units.",
    file: "property-rules.pdf",
    id: undefined,
  },
  {
    title: "Managing Agent: What to Expect",
    description: "A plain-language guide for property owners on what a professional managing agent does and how Erga operates.",
    file: "managing-agent-guide.pdf",
    id: "landlord-pack",
  },
  {
    title: "Rental Application Checklist",
    description: "Documents and information required when applying to rent an Erga property.",
    file: "rental-application-checklist.pdf",
    id: undefined,
  },
  {
    title: "Lease Renewal Guide",
    description: "Understanding your rights and obligations when a lease comes up for renewal under South African law.",
    file: "lease-renewal-guide.pdf",
    id: undefined,
  },
];

const suburbs = [
  {
    name: "Alberton",
    municipality: "Ekurhuleni",
    avgRent: "R 7 500 – R 14 000",
    avgYield: "7.2%",
    profile: "Established residential suburb, strong sectional title demand. Close to N12/N3. Erga directly manages units here.",
    schools: ["Alberton High", "St Dominic's", "Bracken High"],
  },
  {
    name: "Kempton Park",
    municipality: "Ekurhuleni",
    avgRent: "R 6 800 – R 12 500",
    avgYield: "7.8%",
    profile: "High rental demand driven by OR Tambo proximity. Industrial and residential mix. Good entry-level investment.",
    schools: ["Kempton Park High", "Laerskool Kempton Park", "Edenglen High"],
  },
  {
    name: "Boksburg",
    municipality: "Ekurhuleni",
    avgRent: "R 7 000 – R 13 000",
    avgYield: "7.4%",
    profile: "Strong industrial and commercial node. Residential growth in Beyerspark and Sunward Park. Good long-term tenant base.",
    schools: ["Boksburg High", "Sunward Park High", "St Michaels"],
  },
  {
    name: "Glenanda / Glenairley",
    municipality: "City of Johannesburg",
    avgRent: "R 8 500 – R 18 000",
    avgYield: "6.8%",
    profile: "Commercial and medical precinct (Glencare Medical Centre). Mixed-use investment opportunity. Erga active here.",
    schools: ["Glenvista High", "Johannesburg South Academy"],
  },
  {
    name: "Edenvale",
    municipality: "Ekurhuleni",
    avgRent: "R 8 000 – R 15 000",
    avgYield: "6.9%",
    profile: "Popular with professionals. Close to OR Tambo and Sandton via N3. Strong sectional title market.",
    schools: ["Edenvale High", "Laerskool Edenvale", "Eastleigh College"],
  },
  {
    name: "Benoni",
    municipality: "Ekurhuleni",
    avgRent: "R 6 500 – R 11 500",
    avgYield: "8.1%",
    profile: "One of Ekurhuleni's highest-yield nodes. Large rental market, affordable entry prices, stable municipal services.",
    schools: ["Benoni High", "Rynfield Primary", "Lakefield College"],
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ToolsPage() {
  return (
    <>
      <PageBanner
        title="Tools & Resources"
        subtitle="Calculators, forms, downloads and suburb intelligence — everything you need in one place."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Documents and property management tools"
        breadcrumbs={[{ label: "Tools" }]}
      />

      {/* ── 1. Calculators ─────────────────────────────────────────────── */}
      <section id="calculators" className="bg-[#F8F8F6] border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            label="Calculators"
            title="Run the numbers before you decide"
            sub="Four interactive calculators covering every stage of the property journey."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {calculators.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group flex flex-col bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] p-6 transition-colors"
              >
                <div className="text-[#9A7B2F] mb-4">
                  <CalcIcon />
                </div>
                <h3 className="font-serif text-lg text-[#1B2A4A] mb-2 leading-snug group-hover:text-[#9A7B2F] transition-colors">
                  {c.label}
                </h3>
                <p className="text-[#1B2A4A]/60 text-sm leading-relaxed flex-1">{c.desc}</p>
                <span className="mt-5 text-[11px] uppercase tracking-widest text-[#9A7B2F] font-medium">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Forms ──────────────────────────────────────────────────── */}
      <section id="maintenance" className="bg-white border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            label="Forms"
            title="Applications, requests & enquiries"
            sub="Submit tenant applications, maintenance requests, and bond pre-qualification enquiries directly online."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {forms.map((f) => (
              <div key={f.label} className="flex flex-col border border-[#E5E7EB] bg-white p-6">
                <div className="text-[#9A7B2F] mb-4">
                  <FormIcon />
                </div>
                <h3 className="font-serif text-lg text-[#1B2A4A] mb-2 leading-snug">{f.label}</h3>
                <p className="text-[#1B2A4A]/60 text-sm leading-relaxed flex-1">{f.desc}</p>
                <Link
                  href={f.href}
                  target={f.external ? "_blank" : undefined}
                  rel={f.external ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center justify-center px-5 py-2.5 bg-[#1B2A4A] text-white text-xs tracking-widest uppercase hover:bg-[#9A7B2F] transition-colors"
                >
                  {f.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Downloads ─────────────────────────────────────────────── */}
      <section id="downloads" className="bg-[#F8F8F6] border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            label="Downloads"
            title="Free templates & guides"
            sub="Print-ready PDF documents for tenants, landlords, and property owners."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {downloads.map((item) => (
              <div
                key={item.file}
                id={item.id}
                className="flex flex-col border border-[#E5E7EB] bg-white p-7 hover:border-[#9A7B2F] transition-colors"
              >
                <div className="text-[#9A7B2F] mb-4">
                  <DownloadIcon />
                </div>
                <h3 className="font-serif text-lg text-[#1B2A4A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-[#1B2A4A]/60 text-sm leading-relaxed flex-1">{item.description}</p>
                <a
                  href={`/downloads/${item.file}`}
                  download
                  className="mt-6 inline-flex items-center gap-2 bg-[#1B2A4A] text-white px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-[#9A7B2F] transition-colors self-start"
                >
                  <DownloadIcon small />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Area Intelligence ──────────────────────────────────────── */}
      <section id="suburb-profiles" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            label="Area Intelligence"
            title="Suburb profiles — Gauteng"
            sub="Rental ranges, estimated yields, school zones, and Erga's on-the-ground notes for the areas we operate in."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {suburbs.map((s) => (
              <div key={s.name} className="border border-[#E5E7EB] bg-white overflow-hidden">
                <div className="bg-[#1B2A4A] px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-serif text-xl">{s.name}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{s.municipality} Municipality</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[#9A7B2F] font-serif text-xl">{s.avgYield}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">Est. Yield</p>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#9A7B2F] mb-1">Typical Rent Range</p>
                    <p className="text-[#1B2A4A] text-sm font-medium">{s.avgRent} / month</p>
                  </div>
                  <p className="text-[#1B2A4A]/65 text-sm leading-relaxed mb-4">{s.profile}</p>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#9A7B2F] mb-2">Nearby Schools</p>
                    <ul className="space-y-1">
                      {s.schools.map((school) => (
                        <li key={school} className="text-xs text-[#1B2A4A]/60 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#9A7B2F] shrink-0" />
                          {school}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#1B2A4A]/40 mt-10 text-center">
            Rental ranges and yield estimates are based on current market data and Erga's portfolio experience. For a formal rental valuation, <Link href="/contact" className="underline hover:text-[#9A7B2F]">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

/* ─── Sub-components ────────────────────────────────────────────────────── */

function SectionHeader({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-6 h-px bg-[#9A7B2F]" />
        <span className="text-[#9A7B2F] text-xs tracking-[0.25em] uppercase font-medium">{label}</span>
      </div>
      <h2 className="font-serif text-3xl text-[#1B2A4A] mb-3">{title}</h2>
      <p className="text-[#1B2A4A]/60 max-w-2xl">{sub}</p>
    </div>
  );
}

function CalcIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="10" y2="18" />
      <line x1="14" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function DownloadIcon({ small }: { small?: boolean }) {
  const s = small ? 14 : 28;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={small ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
