"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type SubItem = { label: string; href: string; desc?: string };
type NavItem = { label: string; href?: string; children?: SubItem[] };

const nav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Own Portfolio Management", href: "/services#portfolio", desc: "Directly managed residential & commercial units" },
      { label: "Managing Agent Services", href: "/services#managing-agent", desc: "Hands-off, professional management for owners" },
      { label: "Tenant Support", href: "/services#tenants", desc: "Responsive, fair support for all tenants" },
    ],
  },
  {
    label: "Listings",
    href: "/listings",
    children: [
      { label: "All Properties", href: "/listings" },
      { label: "Residential Units", href: "/listings" },
      { label: "Register as Tenant", href: "/listings#register" },
      { label: "Owner Enquiries", href: "/contact" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Erga", href: "/about" },
      { label: "Our Values & Approach", href: "/about#approach" },
      { label: "Our Journey", href: "/about#journey" },
      { label: "Associations", href: "/about#associations" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Guides & Articles", href: "/resources" },
      { label: "FAQs", href: "/faqs" },
      { label: "Bond Calculator", href: "/calculator" },
      { label: "Tools & Downloads", href: "/tools" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent border-b border-white/10"
          : "bg-navy border-b border-gold/20 shadow-md",
      ].join(" ")}
      ref={menuRef}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" aria-label="Erga Properties home" className="shrink-0 z-10">
          <Image
            src="/erga_logo.svg"
            alt="Erga Properties"
            width={160}
            height={36}
            priority
            className="h-9 w-auto"
            style={transparent ? { filter: "brightness(0) invert(1)" } : undefined}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children ? setActiveMenu(item.label) : setActiveMenu(null)}
            >
              <Link
                href={item.href ?? "#"}
                className={[
                  "flex items-center gap-1 px-4 py-2 transition-colors hover:text-gold-light",
                  transparent ? "text-white/90" : "text-white/80",
                  pathname === item.href ? "text-gold-light" : "",
                ].filter(Boolean).join(" ")}
              >
                {item.label}
                {item.children && (
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div
                  className={[
                    "absolute top-full left-0 min-w-[260px] bg-white shadow-xl border border-gray-100 transition-all duration-200 origin-top-left",
                    activeMenu === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none",
                  ].join(" ")}
                >
                  <div className="h-0.5 bg-gold" />
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="flex flex-col px-5 py-3 hover:bg-cream group transition-colors"
                        >
                          <span className="text-navy font-medium text-sm group-hover:text-gold transition-colors">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="text-charcoal/60 text-xs mt-0.5 leading-relaxed">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="ml-3 px-5 py-2 bg-gold text-white text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="md:hidden p-2 text-white z-10"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
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
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden bg-navy border-t border-gold/20 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-6 py-4 text-white/80 text-sm font-medium"
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className="bg-white/5 divide-y divide-white/5">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-8 py-3 text-white/70 text-sm hover:text-gold-light transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-6 py-4 text-white/80 text-sm font-medium hover:text-gold-light transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-6 py-5">
              <Link
                href="/contact"
                className="block text-center py-3 bg-gold text-white text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
