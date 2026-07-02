import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ElectricalBookingForm from "@/components/ElectricalBookingForm";

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
  { src: "/images/electrical/electrician-ladder.jpg", alt: "Erga electrician installing distribution board wiring" },
  { src: "/images/electrical/panel-closeup.jpg", alt: "Completed distribution board wiring, close up" },
  { src: "/images/electrical/ceiling-lighting.jpg", alt: "Ambient ceiling lighting installed by Erga Electrical Services" },
];

const catalog = [
  { title: "Fault Finding & Repairs", desc: "Diagnosing and fixing electrical faults, trips, and outages." },
  { title: "DB Board Installation & Upgrades", desc: "Distribution board installation, upgrades, and compliance work." },
  { title: "Certificate of Compliance (CoC)", desc: "CoC issuing for property sales, transfers, and insurance." },
  { title: "Home & Office Rewiring", desc: "Full or partial rewiring for homes and commercial premises." },
  { title: "Plug Points, Lights & Switches", desc: "Installation of plug points, light fittings, and switches." },
  { title: "Geyser & Stove Connections", desc: "Electrical connections for geysers and stoves." },
  { title: "Ceiling Fan Installation", desc: "Supply and installation of ceiling fans." },
  { title: "Electric Fence & Alarm Wiring", desc: "Wiring for electric fences and alarm systems." },
  { title: "Data Cabling / Network Points", desc: "Structured cabling and network point installation." },
  { title: "Surge Protection Installation", desc: "Surge protection to safeguard your appliances and equipment." },
  { title: "Emergency Callouts", desc: "Fast response for urgent electrical issues." },
];

export default function ElectricalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "clamp(320px, 38vw, 420px)", paddingTop: 60 }}
      >
        <Image
          src="/images/electrical/electrician-seated.jpg"
          alt="Erga electrician at work on a distribution board"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "70% 30%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, rgba(27,42,74,0.85) 0%, rgba(13,24,41,0.75) 100%)",
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
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-full bg-[#F8F8F6] flex items-center justify-center text-gold mb-4">
                  <BoltIcon />
                </div>
                <h3 className="text-navy text-[15px] font-bold mb-1.5">{item.title}</h3>
                <p className="text-navy/55 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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

      {/* Callout Fee FAQ */}
      <section id="callout-faq" className="bg-white py-16 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Callout fee</p>
            <h2 className="text-navy text-[28px] font-bold">Callout Fee FAQ</h2>
          </div>

          <div className="divide-y divide-gold/20 border border-gold/20">
            <div className="px-6 py-6">
              <h3 className="font-bold text-navy text-[15px] mb-2">
                What happens if I don&apos;t accept the quote?
              </h3>
              <p className="text-navy/70 leading-relaxed text-[14px]">
                A callout fee of R450 applies to cover the electrician&apos;s travel and
                inspection time. This is disclosed and agreed to when you book, before
                any visit is scheduled.
              </p>
            </div>
            <div className="px-6 py-6">
              <h3 className="font-bold text-navy text-[15px] mb-2">
                Is it waived if I go ahead with the work?
              </h3>
              <p className="text-navy/70 leading-relaxed text-[14px]">
                Yes — if you approve the quote, the R450 is absorbed into your final
                invoice. You only pay it standalone if you decline.
              </p>
            </div>
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

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
