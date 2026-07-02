import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/PartnersSection";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: {
    absolute: "Electrician Alberton | Erga Electrical Services Gauteng",
  },
  description:
    "Erga Electrical Services — Alberton's trusted electrician. Licensed inspection, transparent quoting, no surprises. Book online in minutes. Serving Alberton for over a decade.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const services = [
  {
    title: "Electrical Services",
    body: "Fault finding, DB board upgrades, CoC issuing, rewiring, and emergency callouts. Licensed inspection, transparent quoting.",
    image: "/images/electrical/electrician-ladder.jpg",
    alt: "Amos C., Erga's electrician, wiring a distribution board",
    tag: "Book online",
    href: "/electrical",
    cta: "Explore electrical services",
    pos: "70% 25%",
  },
  {
    title: "Property Management",
    body: "End-to-end management of your rental portfolio — tenant placement, collections, maintenance, and monthly reporting.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    alt: "Residential building managed by Erga",
    tag: "For owners",
    href: "/services",
    cta: "View property management",
    pos: "50% 50%",
  },
];

const howItWorks = [
  { n: "1", title: "Book Online", body: "Tell us what's wrong and when suits you." },
  { n: "2", title: "We Inspect", body: "Your electrician assesses the job on-site." },
  { n: "3", title: "Get a Quote", body: "Clear, itemised pricing before any work starts." },
  { n: "4", title: "Accept or Decline", body: "Approve the work, or a callout fee applies." },
];

const quickLinks = [
  {
    title: "Book a Callout",
    desc: "Tell us what's wrong and we'll schedule an on-site inspection at a time that suits you.",
    href: "/electrical#booking",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9.5 15.5l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Request a Quote",
    desc: "Need property management or a bigger electrical job priced? Ask for a formal quotation.",
    href: "/contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "CoC Certificates",
    desc: "Certificates of Compliance for property sales, transfers, and insurance claims.",
    href: "/electrical#services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="6" />
        <path d="M9 14.5L7.5 22l4.5-2.5L16.5 22 15 14.5M10 9l1.5 1.5L14.5 7.5" />
      </svg>
    ),
  },
  {
    title: "Customer Support",
    desc: "Email info@erga.co.za — we respond to every enquiry within one business day.",
    href: "/contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Hero — electrical-led */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(360px, 42vw, 480px)" }}>
        <Image
          src="/images/electrical/panel-closeup.jpg"
          alt="Distribution board wiring installed by Erga Electrical Services"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(27,42,74,0.95) 0%, rgba(27,42,74,0.88) 42%, rgba(27,42,74,0.6) 68%, rgba(27,42,74,0.35) 100%)",
          }}
        />
        <div className="relative z-10 flex items-center h-full min-h-[inherit]">
          <div className="mx-auto max-w-screen-xl w-full px-6 py-20">
            <div className="max-w-[600px]">
              <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
                Erga Electrical Services
              </p>
              <h1
                className="text-white font-bold leading-tight mb-4"
                style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
              >
                Meet Amos C. — Alberton&apos;s Trusted Electrician
              </h1>
              <p className="text-white/70 mb-8 leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 17px)" }}>
                Licensed inspection, transparent quoting, no surprises. Amos has served Alberton for over a decade — book him online in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/electrical#booking"
                  className="px-8 py-3.5 bg-[#9A7B2F] text-white text-[13px] font-semibold tracking-wide hover:bg-[#c2a14d] transition-colors text-center"
                >
                  Book a Callout
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 border border-white/30 text-white text-[13px] font-semibold tracking-wide hover:bg-white hover:text-[#1B2A4A] transition-colors text-center"
                >
                  Property Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* How it works — 4-step strip */}
      <section className="bg-white border-b border-[#E5E7EB] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <ol className="grid gap-8 md:grid-cols-4">
            {howItWorks.map((step) => (
              <li key={step.n} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#F8F8F6] flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <span className="font-bold text-[#9A7B2F] text-[18px]">{step.n}</span>
                </div>
                <h3 className="font-bold text-[#1B2A4A] text-[15px] mb-1.5">{step.title}</h3>
                <p className="text-[#1B2A4A]/55 text-[13px] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services — electrical leads, property management demoted below the fold */}
      <section className="bg-[#F8F8F6] py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">What we offer</p>
            <h2 className="text-[#1B2A4A] text-[28px] md:text-[34px] font-bold">
              Two ways we look after your property
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group block bg-white border border-[#E5E7EB] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: svc.pos }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-[#1B2A4A] text-[11px] font-semibold px-2.5 py-1">
                    {svc.tag}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-[#1B2A4A] text-[19px] font-bold mb-2 group-hover:text-[#9A7B2F] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[#1B2A4A]/55 text-[14px] leading-relaxed mb-4">{svc.body}</p>
                  <span className="text-[#9A7B2F] text-[13px] font-semibold">{svc.cta} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links — utility card row */}
      <section className="bg-white py-14 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] hover:shadow-md transition-all duration-200 p-6"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F8F6] text-[#9A7B2F] mb-4">
                  {card.icon}
                </span>
                <h3 className="text-[#1B2A4A] text-[15px] font-bold mb-1.5 group-hover:text-[#9A7B2F] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#1B2A4A]/60 text-[13px] leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band — electrical primary, property management secondary */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/electrical/electrician-ladder.jpg"
          alt="Erga electrician working on a distribution board"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/88" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">Ready to book?</p>
          <h2 className="text-white text-[28px] md:text-[40px] font-bold mb-5 leading-tight">
            Get a licensed electrician out today
          </h2>
          <p className="text-white/65 text-[15px] mb-10 leading-relaxed">
            Transparent quoting, no surprises. Book online and we&apos;ll be in touch to confirm a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/electrical#booking" className="px-8 py-3.5 bg-[#9A7B2F] text-white text-[13px] font-semibold tracking-wide hover:bg-[#c2a14d] transition-colors">
              Book a Callout
            </Link>
            <Link href="/services" className="px-8 py-3.5 border border-white/30 text-white text-[13px] font-semibold tracking-wide hover:bg-white hover:text-[#1B2A4A] transition-colors">
              Property Management
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
