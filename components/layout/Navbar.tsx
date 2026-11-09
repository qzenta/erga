"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ErgoLogo from "@/components/ui/ErgoLogo";
import { SITE, telLink } from "@/lib/site";

/* ─── Nav data — trades-first ordering per CC brief ──────────────────────
   Home | Electrical | Property Management | Contact
   "Property Management" points at /services — the standalone
   /property-management page was retired and 301-redirected there once its
   content was folded into /services as a section (see next.config.ts).
   Other routes (listings, tools, resources, etc.) remain live but are no
   longer surfaced in the top nav.                                        */
const NAV = [
  { label: "Home", href: "/" },
  { label: "Electrical", href: "/electrical" },
  { label: "Property Management", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/* Exact match for "/" to avoid every route highlighting HOME */
function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ─── Component ───────────────────────────────────────────────────────── */
export default function Navbar() {
  /* Store the pathname at which the menu was opened; the drawer renders only
     while the pathname still matches, so navigation closes it without an effect. */
  const [openAt, setOpenAt] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = openAt === pathname;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-line"
      style={{ height: 60 }}
    >
      <nav className="relative mx-auto max-w-screen-xl h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Erga home" className="shrink-0">
          <ErgoLogo className="h-9 w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const active = isRouteActive(pathname, item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={[
                    "block px-3 py-1 text-[14px] font-medium tracking-[-0.01em] transition-colors",
                    active ? "text-gold" : "text-navy hover:text-gold",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "block h-[2px] bg-gold transition-all duration-200 mt-0.5",
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
                    ].join(" ")}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right group — phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={telLink}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-navy hover:text-gold transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/electrical#booking"
            className="px-5 py-2 bg-gold-deep text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-navy transition-colors"
          >
            Book a Callout
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 text-navy"
          onClick={() => setOpenAt(mobileOpen ? null : pathname)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-line shadow-xl">
          <ul className="divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-[14px] font-medium text-navy hover:text-gold transition-colors"
                  onClick={() => setOpenAt(null)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-5">
              <Link
                href="/electrical#booking"
                className="block text-center py-3 bg-gold-deep text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-navy transition-colors"
                onClick={() => setOpenAt(null)}
              >
                Book a Callout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
