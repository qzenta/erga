import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "Resources & Insights | Erga Properties" },
  description:
    "Property guides and articles for landlords and tenants in South Africa. Covering the Rental Housing Act, managing agents, and rental market insights for Gauteng.",
};

type Article = {
  category: string;
  title: string;
  excerpt: string;
  comingSoon: boolean;
  href?: string;
  buttonLabel?: string;
};

const articles: Article[] = [
  {
    category: "Landlord Guide",
    title: "What to Look for in a Managing Agent in Gauteng",
    excerpt:
      "Appointing the right managing agent is one of the most important decisions a property owner can make. We break down the key qualities, red flags, and questions to ask before signing a mandate.",
    comingSoon: true,
  },
  {
    category: "Tenant Rights",
    title: "Tenant Rights and Obligations Under the Rental Housing Act",
    excerpt:
      "South Africa's Rental Housing Act provides important protections for both tenants and landlords. Here is what every tenant in Gauteng should know before signing a lease.",
    comingSoon: true,
  },
  {
    category: "Financial",
    title: "How to Calculate a Fair Rental Escalation in South Africa",
    excerpt:
      "Annual rental escalations are standard practice but must be handled correctly. We explain how to calculate a fair and legally sound escalation using CPI and market benchmarks.",
    comingSoon: true,
  },
  {
    category: "Tools",
    title: "Bond Calculator",
    excerpt:
      "Use our free bond calculator to estimate your monthly repayments, total interest, and loan term for any South African property purchase.",
    comingSoon: false,
    href: "/calculator",
    buttonLabel: "Open Calculator",
  },
  {
    category: "Tenant Guide",
    title: "Moving In Checklist for New Tenants",
    excerpt:
      "From signing your lease to receiving your keys, this checklist covers everything a new tenant needs to prepare for a smooth move-in experience in South Africa.",
    comingSoon: true,
  },
  {
    category: "Tools",
    title: "Downloads & Templates",
    excerpt:
      "Access our free library of tenant checklists, codes of conduct, lease guides and property management templates — all tailored for South African property law.",
    comingSoon: false,
    href: "/tools",
    buttonLabel: "View Downloads",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageBanner
        title="Resources & Insights"
        subtitle="Practical guides and articles for property owners and tenants in South Africa."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Professional working at desk with documents"
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-navy/75 max-w-2xl mx-auto text-lg text-center mb-14">
            Practical guides and articles for property owners and tenants in
            South Africa.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleCard({
  category,
  title,
  excerpt,
  comingSoon,
  href,
  buttonLabel,
}: Article) {
  return (
    <div className="relative border border-gold/30 bg-white flex flex-col overflow-hidden hover:border-gold transition-colors">
      <div className="p-8 flex flex-col flex-1">
        <span className="inline-block text-xs tracking-widest uppercase text-gold border border-gold/40 px-3 py-1 mb-5 self-start">
          {category}
        </span>
        <h2 className="text-xl text-navy mb-4 leading-snug">{title}</h2>
        <p className="text-navy/75 leading-relaxed flex-1">{excerpt}</p>
        <div className="mt-6">
          {href ? (
            <Link
              href={href}
              className="inline-flex items-center text-sm tracking-widest uppercase text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              {buttonLabel ?? "Read More"} &rarr;
            </Link>
          ) : (
            <span className="inline-flex items-center text-sm tracking-widest uppercase text-navy border-b border-gold pb-1 opacity-40 cursor-default">
              Read More &rarr;
            </span>
          )}
        </div>
      </div>

      {comingSoon && (
        <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
          <span className="bg-navy/80 text-white text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}
