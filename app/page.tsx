import type { Metadata } from "next";
import Image from "next/image";
import { SITE, whatsappLink, telLink } from "@/lib/site";
import TrustStrip from "@/components/TrustStrip";
import CircuitTrace from "@/components/CircuitTrace";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Electrician Alberton | Erga Electrical Services Gauteng",
  },
  description:
    "Erga Electrical Services — Alberton's trusted electrician. Licensed inspection, transparent quoting, no surprises. Book online in minutes. Serving Alberton for over a decade.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

/* Short titles from the /electrical catalog — copy is derived from the
   existing service descriptions, nothing new is claimed. */
const services = [
  { title: "Fault Finding", desc: "Tripping breakers, dead sockets, flickering lights — traced and fixed properly." },
  { title: "DB Boards", desc: "New distribution boards and upgrades of overloaded boards to current standards." },
  { title: "CoC", desc: "Certificates of Compliance for property sales, transfers, and insurance." },
  { title: "Rewiring", desc: "Full or partial rewiring of older homes and commercial premises." },
  { title: "Plugs & Lights", desc: "Plug points, light fittings, dimmers, and switches — installed and tested." },
  { title: "Geyser & Stove", desc: "Safe, compliant electrical connections for geysers, stoves, and hobs." },
  { title: "Emergency", desc: "Urgent electrical faults get priority — tell us it's an emergency when you book." },
];

const howItWorks = [
  { n: "1", title: "Book", body: "Tell us what's wrong and when suits you." },
  { n: "2", title: "Inspect and quote", body: "Your electrician assesses the job on-site and quotes before any work starts." },
  { n: "3", title: "Approve", body: "Approve the itemised quote — only then does the work begin." },
];

const trustChips = [
  "Licensed inspection",
  "Itemised quotes",
  "R450 callout waived when you accept",
  "Gauteng-wide",
];

const realWork = [
  {
    src: "/images/electrical/electrician-seated.jpg",
    alt: "Erga electrician working on distribution board wiring",
    caption: "Distribution board wiring",
  },
  {
    src: "/images/electrical/panel-closeup.jpg",
    alt: "Completed distribution board wiring, close up",
    caption: "Distribution board detail",
  },
  {
    src: "/images/electrical/ceiling-lighting.jpg",
    alt: "Ambient ceiling lighting installed by Erga Electrical Services",
    caption: "Ceiling lighting installation",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: electrical-first */}
      <section className="hero relative overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/electrical/panel-closeup.jpg"
            alt="Distribution board wiring installed by Erga Electrical Services"
            fill
            priority
            className="hero-zoom object-cover"
            style={{ objectPosition: "50% 22%" }}
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(27,42,74,0.95) 0%, rgba(27,42,74,0.88) 42%, rgba(27,42,74,0.6) 68%, rgba(27,42,74,0.35) 100%)",
          }}
        />
        {/* Faint circuit-trace accent */}
        <CircuitTrace className="hidden md:block absolute right-10 top-1/4 w-64 text-gold/40 z-[5]" />

        <div className="relative z-10 flex items-center h-full min-h-[inherit] w-full">
          <Container className="w-full">
            <div className="max-w-[600px] py-20">
              <Eyebrow>Erga Electrical Services</Eyebrow>
              <h1
                className="font-display font-display-600 text-white mb-4"
                style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1 }}
              >
                Alberton&apos;s trusted electrician, quoted before we start.
              </h1>
              <p
                className="text-white/70 mb-8 leading-relaxed max-w-[62ch]"
                style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
              >
                Licensed inspection, transparent quoting, no surprises.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Button href="/electrical#booking" variant="primary">
                  Book a Callout
                </Button>
                <Button href={telLink} variant="outline-light" ariaLabel={`Call ${SITE.phoneDisplay}`}>
                  Call {SITE.phoneDisplay}
                </Button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline underline-offset-4 text-[14px] font-semibold tracking-wide px-2 py-2 hover:text-white transition-colors"
                >
                  WhatsApp us
                </a>
              </div>

              {/* Trust chips — all existing claims */}
              <ul className="flex flex-wrap gap-2 mt-8">
                {trustChips.map((chip) => (
                  <li
                    key={chip}
                    className="border border-white/25 bg-white/5 text-white/85 text-[12px] font-medium px-3 py-1.5 rounded-full"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </section>

      {/* 2 — Trust strip */}
      <TrustStrip />

      {/* 3 — What we do */}
      <Section tone="cream" id="services">
        <Container>
          <Reveal>
            <Eyebrow muted>What we do</Eyebrow>
            <h2 className="font-display text-[clamp(26px,3.4vw,40px)] mb-10">Electrical services</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={Math.min(i, 3) * 80}>
                <Card className="h-full p-6">
                  <h3 className="text-navy text-[16px] font-bold mb-2">{svc.title}</h3>
                  <p className="text-navy/60 text-[14px] leading-relaxed">{svc.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-navy/60 text-[14px] max-w-[62ch]">
              Don&apos;t see your job listed? View the{" "}
              <a href="/electrical#services" className="text-gold-deep underline underline-offset-4 hover:text-navy transition-colors">
                full electrical services catalog
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 4 — How it works: 3 steps */}
      <Section tone="white">
        <Container>
          <Reveal>
            <div className="text-center mb-4">
              <Eyebrow muted center>
                Simple process
              </Eyebrow>
              <h2 className="font-display text-[clamp(26px,3.4vw,40px)]">How it works</h2>
            </div>
          </Reveal>

          <Reveal>
            <CircuitTrace className="hidden md:block mx-auto my-6 w-[320px] text-gold/50" />
          </Reveal>

          <ol className="grid gap-10 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <li key={step.n}>
                <Reveal delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-4 border border-line">
                      <span className="font-bold text-gold-deep text-[18px]">{step.n}</span>
                    </div>
                    <h3 className="font-bold text-navy text-[15px] mb-1.5">{step.title}</h3>
                    <p className="text-navy/55 text-[13px] leading-relaxed max-w-[62ch]">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 — Real work (existing photos, no new claims) */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <div className="text-center mb-10">
              <Eyebrow muted center>
                On the job
              </Eyebrow>
              <h2 className="font-display text-[clamp(26px,3.4vw,40px)]">Recent work</h2>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {realWork.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 80}>
                <figure>
                  <div className="relative overflow-hidden border border-line" style={{ height: 220 }}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-2 text-[13px] text-navy/60">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6 — Property management (secondary, compact, no photo) */}
      <Section tone="navy">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Property management</Eyebrow>
              <h2 className="font-display text-[clamp(26px,3.4vw,40px)] mb-4">Looking after rentals too</h2>
              <p className="text-white/70 leading-relaxed max-w-[62ch] mb-8">
                End-to-end management of your rental portfolio — tenant placement, collections,
                maintenance, and monthly reporting — from the same team that keeps your property
                electrically safe.
              </p>
              <Button href="/services" variant="outline-light">
                View property management
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7 — Final CTA band */}
      <Section tone="cream" className="border-t border-line">
        <Container>
          <div className="text-center">
            <Reveal>
              <Eyebrow muted center>
                Ready when you are
              </Eyebrow>
              <h2 className="font-display text-[clamp(26px,3.4vw,40px)] mb-4">
                Get a licensed electrician out today
              </h2>
              <p className="text-navy/60 text-[15px] mb-8 max-w-[62ch] mx-auto">
                Transparent quoting, no surprises. Book online and we&apos;ll be in touch to confirm a time.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3">
                <Button href="/electrical#booking" variant="primary">
                  Book a Callout
                </Button>
                <Button href={telLink} variant="ghost" ariaLabel={`Call ${SITE.phoneDisplay}`}>
                  Call {SITE.phoneDisplay}
                </Button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center text-gold-deep underline underline-offset-4 text-[14px] font-semibold px-2 hover:text-navy transition-colors"
                >
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
