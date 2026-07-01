"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ErgoLogo from "@/components/ui/ErgoLogo";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Close mobile drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]"
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
                    active ? "text-[#9A7B2F]" : "text-[#1B2A4A] hover:text-[#9A7B2F]",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "block h-[2px] bg-[#9A7B2F] transition-all duration-200 mt-0.5",
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
                    ].join(" ")}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <Link
          href="/electrical#booking"
          className="hidden md:block px-5 py-2 bg-[#9A7B2F] text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-[#c2a14d] transition-colors shrink-0"
        >
          Book a Callout
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 text-[#1B2A4A]"
          onClick={() => setMobileOpen((v) => !v)}
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
        <div className="md:hidden bg-white border-t border-[#E5E7EB] shadow-xl">
          <ul className="divide-y divide-[#E5E7EB]">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-[14px] font-medium text-[#1B2A4A] hover:text-[#9A7B2F] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-5">
              <Link
                href="/electrical#booking"
                className="block text-center py-3 bg-[#9A7B2F] text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-[#c2a14d] transition-colors"
                onClick={() => setMobileOpen(false)}
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
