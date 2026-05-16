import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/calculator", label: "Calculator" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/faqs", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="border-t-2 border-gold" />

      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 items-start text-sm">
        {/* Logo + tagline + socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo variant="footer" />
          <p className="text-white/50 text-xs leading-relaxed text-center md:text-left">
            Erga Concepts (Pty) Ltd<br />
            Trading as Erga Properties
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-gold transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-gold transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gold transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xs tracking-widest uppercase text-gold mb-4">
            Quick Links
          </h3>
          <nav aria-label="Footer quick links">
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xs tracking-widest uppercase text-gold mb-0">
            Contact
          </h3>
          <a
            href="mailto:info@erga.co.za"
            className="text-white/85 hover:text-gold transition-colors text-sm"
          >
            info@erga.co.za
          </a>
          <address className="not-italic text-white/60 text-xs leading-relaxed">
            37 Kamferbos Street<br />
            Brackendowns<br />
            Alberton, 1448<br />
            Gauteng, South Africa
          </address>
          <div className="text-xs text-white/50 leading-relaxed">
            <span className="block text-white/70 uppercase tracking-widest text-[10px] mb-1">
              Office Hours
            </span>
            Mon–Fri 08:00–17:00
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gold/25">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p className="text-center md:text-left">
            &copy; 2026 Erga Concepts (Pty) Ltd
            <span className="mx-1.5 text-gold/50">|</span>
            Trading as Erga Properties
          </p>

          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold/40">|</span>}
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>

          <p className="text-center md:text-right text-white/40">
            Registered in South Africa &bull; 37 Kamferbos Street, Brackendowns, Alberton, 1448
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
