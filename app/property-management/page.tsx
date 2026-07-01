import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: {
    absolute: "Erga Properties | Property Management Johannesburg, Gauteng",
  },
  description:
    "Erga Properties offers professional property management and managing agent services across Johannesburg and Gauteng. Contact us today.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const quickActions = [
  {
    icon: SearchIcon,
    label: "Find a rental",
    desc: "Browse available residential and commercial properties across Gauteng.",
    href: "/listings",
    cta: "View listings",
  },
  {
    icon: KeyIcon,
    label: "Manage my property",
    desc: "Let Erga handle tenant placement, collections, and maintenance.",
    href: "/services",
    cta: "Our services",
  },
  {
    icon: CalcIcon,
    label: "Run the numbers",
    desc: "Bond calculator, affordability, rental yield, and transfer costs.",
    href: "/tools",
    cta: "Open tools",
  },
];

const services = [
  {
    title: "Portfolio Management",
    body: "End-to-end management of your units — maintenance, collections, reporting. You stay hands-off.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    alt: "Residential building managed by Erga",
    tag: "For owners",
    href: "/services",
  },
  {
    title: "Managing Agent Services",
    body: "Tenant vetting, lease admin, arrears management, monthly financial reports to you.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    alt: "Professional property management office",
    tag: "For owners",
    href: "/services",
  },
  {
    title: "Tenant Support",
    body: "Fair lease administration, responsive maintenance handling, and clear communication throughout.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format&fit=crop",
    alt: "Well-maintained apartment interior",
    tag: "For tenants",
    href: "/contact",
  },
];

const featured = [
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop",
    alt: "3-bedroom home Alberton",
    type: "Residential",
    title: "3-Bedroom Family Home",
    location: "Alberton, Ekurhuleni",
    rent: "R 12 500",
    beds: 3, baths: 2, sqm: 145,
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop",
    alt: "2-bedroom apartment Kempton Park",
    type: "Sectional Title",
    title: "2-Bedroom Apartment",
    location: "Kempton Park, Ekurhuleni",
    rent: "R 8 500",
    beds: 2, baths: 1, sqm: 82,
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&auto=format&fit=crop",
    alt: "Office suite Glenanda",
    type: "Commercial",
    title: "Open-Plan Office Suite",
    location: "Glenanda, Johannesburg",
    rent: "R 22 000",
    beds: 0, baths: 2, sqm: 210,
  },
];

const stats = [
  { value: "10+", label: "Years in property" },
  { value: "50+", label: "Properties managed" },
  { value: "200+", label: "Tenants served" },
  { value: "100%", label: "Gauteng-wide" },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function PropertyManagementPage() {
  return (
    <>
      <HeroSlider />

      {/* Quick actions — 3 clean cards, Zillow-style */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="grid md:grid-cols-3 gap-5">
            {quickActions.map(({ icon: Icon, label, desc, href, cta }) => (
              <Link
                key={label}
                href={href}
                className="group border border-[#E5E7EB] hover:border-[#9A7B2F] hover:shadow-md transition-all p-6 bg-white"
              >
                <div className="w-11 h-11 rounded-full bg-[#F8F8F6] flex items-center justify-center text-[#9A7B2F] mb-4">
                  <Icon />
                </div>
                <h3 className="text-[#1B2A4A] text-[16px] font-bold mb-2">{label}</h3>
                <p className="text-[#1B2A4A]/55 text-[13px] leading-relaxed mb-4">{desc}</p>
                <span className="text-[#9A7B2F] text-[13px] font-semibold group-hover:underline">
                  {cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F8F8F6] py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">What we offer</p>
            <h2 className="text-[#1B2A4A] text-[28px] md:text-[34px] font-bold">
              Property management, done properly
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group block bg-white border border-[#E5E7EB] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="relative overflow-hidden" style={{ height: 210 }}>
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-[#1B2A4A] text-[11px] font-semibold px-2.5 py-1">
                    {svc.tag}
                  </span>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-[#1B2A4A] text-[17px] font-bold mb-2 group-hover:text-[#9A7B2F] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[#1B2A4A]/55 text-[13px] leading-relaxed mb-4">{svc.body}</p>
                  <span className="text-[#9A7B2F] text-[13px] font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="bg-white py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Available now</p>
              <h2 className="text-[#1B2A4A] text-[28px] md:text-[34px] font-bold">Featured properties</h2>
            </div>
            <Link href="/listings" className="hidden md:flex items-center gap-1.5 text-[#9A7B2F] text-[13px] font-semibold hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.title}
                href="/listings"
                className="group block bg-white border border-[#E5E7EB] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="relative overflow-hidden" style={{ height: 205 }}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-[#1B2A4A] text-white text-[11px] font-semibold px-2.5 py-1">
                    {p.type}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#1B2A4A] text-[15px] leading-snug">{p.title}</h3>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-[#9A7B2F] text-[18px] leading-none">{p.rent}</p>
                      <p className="text-[11px] text-[#1B2A4A]/40 mt-0.5">/month</p>
                    </div>
                  </div>
                  <p className="text-[#1B2A4A]/50 text-[12px] mb-3 flex items-center gap-1.5">
                    <PinIcon /> {p.location}
                  </p>
                  <div className="flex items-center gap-4 pt-3 border-t border-[#E5E7EB] text-[12px] text-[#1B2A4A]/55">
                    {p.beds > 0 && <span className="flex items-center gap-1.5"><BedIcon /> {p.beds} bed{p.beds > 1 ? "s" : ""}</span>}
                    <span className="flex items-center gap-1.5"><BathIcon /> {p.baths} bath{p.baths > 1 ? "s" : ""}</span>
                    <span className="flex items-center gap-1.5"><SqmIcon /> {p.sqm} m²</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 md:hidden text-center">
            <Link href="/listings" className="text-[#9A7B2F] text-[13px] font-semibold hover:underline">View all listings →</Link>
          </div>
        </div>
      </section>

      {/* About — bold sans, stats, image */}
      <section className="bg-[#F8F8F6] py-16 border-b border-[#E5E7EB]">
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
              <p className="font-bold text-[40px] text-[#9A7B2F] leading-none">50+</p>
              <p className="text-white/60 text-[12px] mt-1">Properties managed</p>
            </div>
          </div>

          <div>
            <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">About Erga</p>
            <h2 className="text-[#1B2A4A] text-[28px] md:text-[34px] font-bold mb-5 leading-tight">
              Johannesburg's trusted property management partner
            </h2>
            <p className="text-[#1B2A4A]/65 leading-relaxed mb-5 text-[15px]">
              Erga Concepts (Pty) Ltd is a Gauteng-based property company offering direct portfolio management and professional managing agent services to property owners across the province.
            </p>
            <p className="text-[#1B2A4A]/55 leading-relaxed mb-8 text-[14px]">
              Financial discipline, hands-on oversight, transparent reporting, and reliable rent collection — so your investment performs the way it should.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#9A7B2F]/40 pl-4">
                  <p className="font-bold text-[#9A7B2F] text-[28px] leading-none">{s.value}</p>
                  <p className="text-[#1B2A4A]/55 text-[12px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-[#1B2A4A] text-[14px] font-semibold hover:text-[#9A7B2F] transition-colors group">
              Learn more about us
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80&auto=format&fit=crop"
          alt="Aerial view of Gauteng"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/88" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">Ready to get started?</p>
          <h2 className="text-white text-[28px] md:text-[40px] font-bold mb-5 leading-tight">
            Let Erga manage your property
          </h2>
          <p className="text-white/65 text-[15px] mb-10 leading-relaxed">
            Whether you own one unit or a large portfolio — we bring the expertise and financial discipline to protect and grow your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-8 py-3.5 bg-[#9A7B2F] text-white text-[13px] font-semibold tracking-wide hover:bg-[#c2a14d] transition-colors">
              Get in touch
            </Link>
            <Link href="/calculator" className="px-8 py-3.5 border border-white/30 text-white text-[13px] font-semibold tracking-wide hover:bg-white hover:text-[#1B2A4A] transition-colors">
              Try our calculators
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */
function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
}
function KeyIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="5.5" /><path d="M21 2l-9.6 9.6M15.5 7.5l3 3" /></svg>;
}
function CalcIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /></svg>;
}
function PinIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function BedIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16M2 8h20v12M2 12h20" /></svg>;
}
function BathIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6 L9 2 A1 1 0 0 1 10 2 L10 6" /><path d="M2 12 h20 v3 a6 6 0 0 1-6 6 H8 a6 6 0 0 1-6-6 v-3z" /><path d="M2 12 V7 a2 2 0 0 1 2-2 h2" /></svg>;
}
function SqmIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" /><path d="M3 9h18M9 3v18" /></svg>;
}
