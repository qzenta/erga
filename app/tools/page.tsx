import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "Tools & Downloads | Erga Properties" },
  description:
    "Free property management templates for tenants, landlords and property owners in South Africa — move-in checklists, lease guides, codes of conduct and more.",
};

const downloads = [
  {
    title: "Tenant Move-In Checklist",
    description:
      "A step-by-step checklist covering everything a new tenant needs to do before and on moving day.",
    file: "tenant-checklist.pdf",
  },
  {
    title: "Tenant Code of Conduct",
    description:
      "Expected standards of behaviour and responsibilities for all tenants in Erga-managed properties.",
    file: "tenant-code-of-conduct.pdf",
  },
  {
    title: "Property Rules & Regulations",
    description:
      "General rules governing the use and occupation of Erga Properties residential and commercial units.",
    file: "property-rules.pdf",
  },
  {
    title: "Managing Agent: What to Expect",
    description:
      "A plain-language guide for property owners on what a professional managing agent does and how Erga operates.",
    file: "managing-agent-guide.pdf",
  },
  {
    title: "Rental Application Checklist",
    description:
      "Documents and information required when applying to rent an Erga property.",
    file: "rental-application-checklist.pdf",
  },
  {
    title: "Lease Renewal Guide",
    description:
      "Understanding your rights and obligations when a lease comes up for renewal under South African law.",
    file: "lease-renewal-guide.pdf",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageBanner
        title="Tools & Downloads"
        subtitle="Free templates and practical documents for tenants, landlords, and property owners."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Documents and property management tools"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Tools & Downloads" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-navy/75 max-w-2xl mx-auto text-lg text-center mb-14">
            Practical documents for tenants, landlords, and property owners.
            Download, print, and keep for reference.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <DownloadCard key={item.file} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DownloadCard({
  title,
  description,
  file,
}: {
  title: string;
  description: string;
  file: string;
}) {
  return (
    <div className="flex flex-col border border-gold/30 bg-white p-8 hover:border-gold transition-colors">
      <div className="text-gold mb-5">
        <DownloadIcon />
      </div>
      <h2 className="text-xl text-navy mb-3 leading-snug">{title}</h2>
      <p className="text-navy/75 leading-relaxed text-sm flex-1">{description}</p>
      <a
        href={`/downloads/${file}`}
        download
        className="mt-6 inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-gold transition-colors self-start"
      >
        <DownloadIcon small />
        Download PDF
      </a>
    </div>
  );
}

function DownloadIcon({ small }: { small?: boolean }) {
  const size = small ? 14 : 32;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={small ? 2 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
