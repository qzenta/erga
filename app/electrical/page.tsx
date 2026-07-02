import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ElectricalBookingForm from "@/components/ElectricalBookingForm";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: {
    absolute: "Electrician Alberton | CoC & Electrical Services Gauteng — Erga",
  },
  description:
    "Alberton's trusted electrician. Licensed inspection, transparent quoting, Certificate of Compliance (CoC) issuing, and emergency callouts across Gauteng. Book online in minutes.",
};

const howItWorks = [
  { n: "1", title: "Book Online", body: "Tell us what's wrong and when suits you." },
  { n: "2", title: "We Inspect", body: "Your electrician assesses the job on-site." },
  { n: "3", title: "Get a Quote", body: "Clear, itemised pricing before any work starts." },
  { n: "4", title: "Accept or Decline", body: "Approve the work, or a callout fee applies if you decide not to proceed." },
];

const recentWork = [
  { src: "/images/electrical/electrician-seated.jpg", alt: "Erga electrician working on distribution board wiring" },
  { src: "/images/electrical/panel-closeup.jpg", alt: "Completed distribution board wiring, close up" },
  { src: "/images/electrical/ceiling-lighting.jpg", alt: "Ambient ceiling lighting installed by Erga Electrical Services" },
];

const faqs = [
  {
    q: "What happens if I don't accept the quote?",
    a: "A callout fee of R450 applies to cover the electrician's travel and inspection time. This is disclosed and agreed to when you book, before any visit is scheduled.",
  },
  {
    q: "Is it waived if I go ahead with the work?",
    a: "Yes — if you approve the quote, the R450 is absorbed into your final invoice. You only pay it standalone if you decline.",
  },
  {
    q: "How is the work priced?",
    a: "Every job is quoted individually after an on-site inspection. You receive clear, itemised pricing before any work starts — nothing begins until you approve the quote.",
  },
  {
    q: "Which areas do you cover?",
    a: "We're based in Alberton and serve the greater Gauteng area. If you're unsure whether we reach you, mention your suburb when booking and we'll confirm.",
  },
  {
    q: "Do you issue Certificates of Compliance (CoC)?",
    a: "Yes — CoC issuing for property sales, transfers, and insurance is one of our core services. Mention that you need a CoC when you book.",
  },
  {
    q: "How soon will you get back to me?",
    a: "We respond to all bookings within one business day to confirm a time. For urgent electrical issues, say so in your booking and we'll prioritise it.",
  },
];

const catalog: { title: string; desc: string; icon: IconName }[] = [
  {
    title: "Fault Finding & Repairs",
    desc: "Tripping breakers, dead sockets, flickering lights — we trace the cause and fix it properly, first time.",
    icon: "search",
  },
  {
    title: "DB Board Installation & Upgrades",
    desc: "New distribution boards, upgrades of overloaded boards, and re-organisation to current safety standards.",
    icon: "panel",
  },
  {
    title: "Certificate of Compliance (CoC)",
    desc: "CoC issuing for property sales, transfers, and insurance — inspection and remedial work included.",
    icon: "certificate",
  },
  {
    title: "Home & Office Rewiring",
    desc: "Full or partial rewiring of older homes and commercial premises, done neatly with minimal disruption.",
    icon: "cable",
  },
  {
    title: "Plug Points, Lights & Switches",
    desc: "New plug points, light fittings, dimmers, and switches — installed, tested, and finished cleanly.",
    icon: "plug",
  },
  {
    title: "Geyser & Stove Connections",
    desc: "Safe, compliant electrical connections for geysers, stoves, ovens, and hobs.",
    icon: "flame",
  },
  {
    title: "Ceiling Fan Installation",
    desc: "Supply and installation of ceiling fans, including switching and speed control.",
    icon: "fan",
  },
  {
    title: "Electric Fence & Alarm Wiring",
    desc: "Wiring for electric fences and alarm systems, neatly routed and fully tested.",
    icon: "shield",
  },
  {
    title: "Data Cabling / Network Points",
    desc: "Structured cabling and network points for home offices and small businesses.",
    icon: "network",
  },
  {
    title: "Surge Protection Installation",
    desc: "Surge arrestors fitted at the DB board to protect appliances and sensitive electronics.",
    icon: "surge",
  },
  {
    title: "Emergency Callouts",
    desc: "Urgent electrical faults get priority — tell us it's an emergency when you book.",
    icon: "clock",
  },
];

type IconName =
  | "search" | "panel" | "certificate" | "cable" | "plug" | "flame"
  | "fan" | "shield" | "network" | "surge" | "clock";

function ServiceIcon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v3l2 1.5" /></svg>;
    case "panel":
      return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M4 9h16M9 13h.01M9 17h.01M13 13h4M13 17h4" /></svg>;
    case "certificate":
      return <svg {...common}><circle cx="12" cy="9" r="6" /><path d="M9 14.5L7.5 22l4.5-2.5L16.5 22 15 14.5M10 9l1.5 1.5L14.5 7.5" /></svg>;
    case "cable":
      return <svg {...common}><path d="M4 6h7a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h1M4 6l3-3M4 6l3 3" /></svg>;
    case "plug":
      return <svg {...common}><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8zM12 17v5" /></svg>;
    case "flame":
      return <svg {...common}><path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.5-6-4.2-8.5C13.6 5 13 3.5 13 2c-3 2-4.4 4.5-4.4 6.7 0 1 .2 1.8.5 2.6-1-.5-1.8-1.4-2.3-2.5C5.7 10.2 5 12 5 13.8 5 18.6 8.5 22 12 22z" /></svg>;
    case "fan":
      return <svg {...common}><circle cx="12" cy="12" r="2" /><path d="M12 10c0-4 1.5-6 3.5-6S19 6 17 8.5 12 10 12 10zM14 12c4 0 6 1.5 6 3.5S18 19 15.5 17 14 12 14 12zM12 14c0 4-1.5 6-3.5 6S5 18 7 15.5 12 14 12 14zM10 12c-4 0-6-1.5-6-3.5S6 5 8.5 7 10 12 10 12z" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v5M12 15.5h.01" /></svg>;
    case "network":
      return <svg {...common}><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v4M5 17v-3h14v3M12 11v3" /></svg>;
    case "surge":
      return <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
  }
}

export default function ElectricalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "clamp(320px, 38vw, 420px)", paddingTop: 60 }}
      >
        <Image
          src="/images/electrical/electrician-ladder.jpg"
          alt="Amos C., Erga's electrician, wiring a distribution board"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "78% 28%" }}
          sizes="100vw"
        />
        {/* Left-heavy gradient: dark where the text sits, lighter on the right so Amos's face stays visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,24,41,0.94) 0%, rgba(27,42,74,0.88) 45%, rgba(27,42,74,0.45) 75%, rgba(27,42,74,0.2) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-screen-xl w-full px-6 py-16">
          <div className="max-w-[620px]">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
              Erga Electrical Services
            </p>
            <h1 className="text-white font-bold leading-tight mb-4" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
              Meet Amos C. — Alberton&apos;s Trusted Electrician
            </h1>
            <p className="text-white/70 mb-8 leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 17px)" }}>
              Licensed inspection, transparent quoting, no surprises. Amos has served Alberton for over a decade — book him online in minutes.
            </p>
            <Link
              href="#booking"
              className="inline-block px-8 py-3.5 bg-gold text-white text-[13px] font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              Book a Callout
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* How It Works */}
      <section className="bg-white border-b border-[#E5E7EB] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Simple process</p>
            <h2 className="text-navy text-[28px] md:text-[34px] font-bold">How It Works</h2>
          </div>
          <ol className="grid gap-10 md:grid-cols-4">
            {howItWorks.map((step) => (
              <li key={step.n} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#F8F8F6] flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <span className="font-bold text-gold text-[18px]">{step.n}</span>
                </div>
                <h3 className="font-bold text-navy text-[15px] mb-1.5">{step.title}</h3>
                <p className="text-navy/55 text-[13px] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services catalog */}
      <section id="services" className="bg-[#F8F8F6] py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">What we do</p>
            <h2 className="text-navy text-[28px] md:text-[34px] font-bold">Electrical Services</h2>
            <p className="text-navy/55 text-[14px] mt-3 max-w-xl mx-auto">
              Quote-based pricing tailored to your job — more services will be added over time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {catalog.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] hover:shadow-md transition-all duration-200 p-6 flex flex-col items-start"
              >
                <div className="w-11 h-11 rounded-full bg-[#F8F8F6] border border-[#9A7B2F]/25 flex items-center justify-center text-gold mb-4">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="text-navy text-[16px] font-bold mb-2 leading-snug">{item.title}</h3>
                <p className="text-navy/60 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-navy/55 text-[14px]">
            Don&apos;t see your job listed?{" "}
            <Link href="#booking" className="text-gold underline underline-offset-4 hover:text-navy transition-colors">
              Describe it in a booking
            </Link>{" "}
            — if it&apos;s electrical, we&apos;ll quote it.
          </p>
        </div>
      </section>

      {/* Recent Work */}
      <section className="bg-white py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">On the job</p>
            <h2 className="text-navy text-[28px] md:text-[34px] font-bold">Recent Work</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {recentWork.map((photo) => (
              <div key={photo.src} className="relative overflow-hidden" style={{ height: 260 }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="callout-faq" className="bg-white py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Good to know</p>
            <h2 className="text-navy text-[28px] font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="divide-y divide-gold/20 border border-gold/20">
            {faqs.map((item) => (
              <div key={item.q} className="px-6 py-6">
                <h3 className="font-bold text-navy text-[15px] mb-2">{item.q}</h3>
                <p className="text-navy/70 leading-relaxed text-[14px]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="bg-[#F8F8F6] py-16">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Book online</p>
            <h2 className="text-navy text-[28px] font-bold">Request a Callout</h2>
          </div>
          <div className="bg-white border border-[#E5E7EB] p-8">
            <ElectricalBookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
