import Link from "next/link";
import ErgoLogo from "@/components/ui/ErgoLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/electrical", label: "Electrical Services" },
  { href: "/property-management", label: "Property Management" },
  { href: "/listings", label: "Listings" },
  { href: "/rent", label: "Rent" },
  { href: "/buy", label: "Buy" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#portfolio", label: "Portfolio Management" },
  { href: "/services#managing-agent", label: "Managing Agent" },
  { href: "/services#tenant-placement", label: "Tenant Placement" },
  { href: "/services#collections", label: "Rental Collections" },
  { href: "/contact", label: "Get a Quote" },
  { href: "/listings#register", label: "Apply as Tenant" },
];

const resourceLinks = [
  { href: "/resources", label: "Blog & Guides" },
  { href: "/calculator", label: "Bond Calculator" },
  { href: "/tools", label: "Tools & Downloads" },
  { href: "/faqs", label: "FAQs" },
  { href: "/downloads/tenant-checklist", label: "Tenant Checklist" },
  { href: "/downloads/managing-agent-guide", label: "Owner Guide" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#1B2A4A] text-white">
      <div className="h-0.5 bg-[#9A7B2F]" />

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
            Professional property management<br />
            across Gauteng since 2015.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3 mt-1">
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-[#9A7B2F] transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-[#9A7B2F] transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-[#9A7B2F] transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-[#9A7B2F] font-semibold mb-4">
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
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-[#9A7B2F] font-semibold mb-4">
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
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-[#9A7B2F] font-semibold mb-4">
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
          <h3 className="text-[11px] tracking-[0.18em] uppercase text-[#9A7B2F] font-semibold">
            Contact Us
          </h3>
          <a
            href="mailto:info@erga.co.za"
            className="text-white/80 hover:text-[#9A7B2F] text-[13px] transition-colors"
          >
            info@erga.co.za
          </a>
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
            className="mt-1 inline-flex items-center justify-center px-5 py-2.5 bg-[#9A7B2F] text-white text-[12px] font-semibold tracking-wide hover:bg-[#c2a14d] transition-colors self-start"
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

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
