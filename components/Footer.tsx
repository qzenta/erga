import Link from "next/link";
import Image from "next/image";
import ErgoLogo from "@/components/ui/ErgoLogo";
import TrackedLink from "@/components/TrackedLink";
import { SITE, whatsappLink, mailLink } from "@/lib/site";

/* ─── Confirmed partners — prominent placement, they're special ──────────
   Sikatrix intentionally left out pending Daniel's confirmation (2 Jul
   2026) — re-add once he signs off. Real logo asset for HeroPlumbers only;
   Erga Electrical Services is an internal link, shown as a wordmark.      */
const footerPartners: { name: string; src?: string; href: string }[] = [
  { name: "HeroPlumbers", src: "/heroplumbers_logo.png", href: "https://www.heroplumbers.co.za" },
  { name: "Erga Electrical Services", href: "/electrical" },
];

const navLinks = [
  { href: "/electrical", label: "Electrical Services" },
  { href: "/", label: "Home" },
  { href: "/services", label: "Property Management" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/electrical#booking", label: "Book a Callout" },
  { href: "/electrical#services", label: "CoC Certificates" },
  { href: "/electrical#services", label: "Emergency Callouts" },
  { href: "/services#property-management", label: "Managing Agent" },
  { href: "/contact", label: "Get a Quote" },
];

const resourceLinks = [
  { href: "/electrical#callout-faq", label: "Electrical FAQ" },
  { href: "/resources", label: "Blog & Guides" },
  { href: "/tools", label: "Tools & Downloads" },
  { href: "/faqs", label: "FAQs" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="h-0.5 bg-gold" />

      {/* Our Partners — prominent, distinct band (Sikatrix pending confirmation) */}
      <div className="border-b border-white/10 bg-white/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-center text-[11px] tracking-[0.2em] uppercase text-gold-light font-semibold mb-5">
            Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {footerPartners.map((p) => {
              const external = p.href.startsWith("http");
              return (
                <a
                  key={p.name}
                  href={p.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={p.name}
                  className="group flex items-center justify-center bg-white border border-white/10 hover:border-gold transition-colors"
                  style={{ width: 210, height: 92, padding: "14px 24px" }}
                >
                  {p.src ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={p.src}
                        alt={p.name}
                        fill
                        className="object-contain group-hover:opacity-75 transition-opacity"
                        sizes="180px"
                      />
                    </div>
                  ) : (
                    <span className="text-center text-navy text-[14px] font-bold leading-snug group-hover:text-gold transition-colors">
                      {p.name}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <ErgoLogo className="h-10 w-auto brightness-0 invert" />
          <p className="text-white/50 text-[12px] leading-relaxed">
            Erga Concepts (Pty) Ltd<br />
            Trading as Erga Properties<br />
            Alberton, Gauteng
          </p>
          <p className="text-white/40 text-[11px] leading-relaxed">
            Trusted property management and<br />
            electrical services across Gauteng.
          </p>
          {/* Socials — hidden until real profile URLs exist (was linking to "#") */}
          {/* <div className="flex items-center gap-3 mt-1">
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-gold transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors">
              <InstagramIcon />
            </a>
          </div> */}
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-gold-light font-semibold mb-4">
            Navigate
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-gold-light font-semibold mb-4">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Resources */}
        <div>
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-gold-light font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2.5">
            {resourceLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-gold-light font-semibold">
            Contact Us
          </h3>
          <a
            href={mailLink}
            className="text-white font-semibold hover:text-gold-light text-[13px] transition-colors underline underline-offset-4 decoration-white/30"
          >
            {SITE.email}
          </a>
          <TrackedLink
            href={whatsappLink()}
            event="click_whatsapp"
            location="footer"
            className="text-white/80 hover:text-gold text-[13px] transition-colors self-start"
          >
            Chat on WhatsApp
          </TrackedLink>
          <address className="not-italic text-white/55 text-[12px] leading-relaxed">
            37 Kamferbos Street<br />
            Brackendowns, Alberton<br />
            1448, Gauteng<br />
            South Africa
          </address>
          <div className="text-[12px] text-white/50">
            <span className="block text-white/65 text-[11px] uppercase tracking-widest mb-1">Office Hours</span>
            Mon – Fri: 08:00 – 17:00
          </div>
          <Link
            href="/contact"
            className="mt-1 inline-flex items-center justify-center px-5 py-2.5 bg-gold-deep text-white text-[12px] font-semibold tracking-wide hover:bg-white hover:text-navy transition-colors self-start"
          >
            Send a message
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p className="text-center md:text-left">
            © 2026 Erga Concepts (Pty) Ltd — Trading as Erga Properties
          </p>

          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-center md:text-right text-white/30">
            Registered in South Africa &nbsp;·&nbsp;{" "}
            <a href="https://qzenta.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Powered by Qzenta</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Social icons removed in Cycle 1 — the social block they rendered linked to "#".
   Re-add them (with real profile URLs) when Daniel restores that block. */
