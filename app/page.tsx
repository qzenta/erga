import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/PartnersSection";

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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop",
    alt: "Electrician working on a distribution board",
    tag: "Book online",
    href: "/electrical",
    cta: "Explore electrical services",
  },
  {
    title: "Property Management",
    body: "End-to-end management of your rental portfolio — tenant placement, collections, maintenance, and monthly reporting.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    alt: "Residential building managed by Erga",
    tag: "For owners",
    href: "/services",
    cta: "View property management",
  },
];

const howItWorks = [
  { n: "1", title: "Book Online", body: "Tell us what's wrong and when suits you." },
  { n: "2", title: "We Inspect", body: "Your electrician assesses the job on-site." },
  { n: "3", title: "Get a Quote", body: "Clear, itemised pricing before any work starts." },
  { n: "4", title: "Accept or Decline", body: "Approve the work, or a callout fee applies." },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Hero — electrical-led */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(360px, 42vw, 480px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80&auto=format&fit=crop"
          alt="Licensed electrician inspecting a distribution board"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(27,42,74,0.94) 0%, rgba(27,42,74,0.88) 42%, rgba(27,42,74,0.55) 68%, rgba(27,42,74,0.25) 100%)",
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

      {/* CTA band — electrical primary, property management secondary */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80&auto=format&fit=crop"
          alt="Electrical distribution board"
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
