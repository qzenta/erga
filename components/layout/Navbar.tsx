"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ErgoLogo from "@/components/ui/ErgoLogo";
import MegaMenu, { type MegaMenuConfig } from "@/components/layout/MegaMenu";

/* ─── Unsplash placeholder helper ─────────────────────────────────────── */
const img = (q: string) =>
  `https://source.unsplash.com/featured/?${encodeURIComponent(q)}`;

/* ─── Nav data ────────────────────────────────────────────────────────── */
type SimpleItem = { label: string; href: string; disabled?: boolean };
type NavItem = {
  label: string;
  href?: string;
  mega?: MegaMenuConfig;
  simple?: SimpleItem[];
};

const NAV: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "RENT",
    mega: {
      columns: [
        { type: "image", src: img("residential rental South Africa interior"), alt: "Residential rentals" },
        {
          type: "links",
          heading: "Residential",
          items: [
            { label: "Residential To Let", href: "/listings?type=residential" },
            { label: "Sectional Title To Let", href: "/listings?type=sectional" },
            { label: "Garden Flat To Let", href: "/listings?type=garden-flat" },
            { label: "Student Accommodation", href: "/listings?type=student" },
          ],
        },
        { type: "image", src: img("office space South Africa"), alt: "Commercial rentals" },
        {
          type: "links",
          heading: "Commercial",
          items: [
            { label: "Office Space To Let", href: "/listings?type=office" },
            { label: "Retail To Let", href: "/listings?type=retail" },
            { label: "Industrial To Let", href: "/listings?type=industrial" },
            { label: "Mixed Use To Let", href: "/listings?type=mixed-use" },
          ],
        },
      ],
      ctas: [
        { label: "View All Rentals", href: "/listings" },
        { label: "Featured Listings", href: "/listings?featured=true" },
      ],
    },
  },
  {
    label: "BUY",
    mega: {
      columns: [
        { type: "image", src: img("modern house exterior South Africa"), alt: "Houses for sale" },
        {
          type: "links",
          heading: "Residential",
          items: [
            { label: "Houses For Sale", href: "/listings?sale=house" },
            { label: "Apartments For Sale", href: "/listings?sale=apartment" },
            { label: "Townhouses For Sale", href: "/listings?sale=townhouse" },
            { label: "New Developments", href: "/listings?sale=new-dev" },
          ],
        },
        { type: "image", src: img("commercial building South Africa"), alt: "Commercial for sale" },
        {
          type: "links",
          heading: "Commercial",
          items: [
            { label: "Commercial For Sale", href: "/listings?sale=commercial" },
            { label: "Industrial For Sale", href: "/listings?sale=industrial" },
            { label: "Mixed Use For Sale", href: "/listings?sale=mixed" },
          ],
        },
        { type: "image", src: img("vacant land South Africa"), alt: "Land for sale" },
        {
          type: "links",
          heading: "Other",
          items: [
            { label: "Vacant Land", href: "/listings?sale=land" },
            { label: "Agricultural", href: "/listings?sale=agricultural" },
            { label: "Smallholdings", href: "/listings?sale=smallholding" },
          ],
        },
      ],
      ctas: [
        { label: "View All Properties", href: "/listings" },
        { label: "Featured Properties", href: "/listings?featured=true" },
      ],
    },
  },
  {
    label: "SERVICES",
    mega: {
      columns: [
        { type: "image", src: img("property manager keys handover"), alt: "Property management" },
        {
          type: "links",
          heading: "Property Management",
          items: [
            { label: "Full Portfolio Management", href: "/services#portfolio" },
            { label: "Tenant Placement", href: "/services#tenant-placement" },
            { label: "Lease Administration", href: "/services#lease" },
            { label: "Arrears Management", href: "/services#arrears" },
          ],
        },
        { type: "image", src: img("financial report desk accountant"), alt: "Financial services" },
        {
          type: "links",
          heading: "Financial Services",
          items: [
            { label: "Rental Collections", href: "/services#collections" },
            { label: "Financial Reporting", href: "/services#reporting" },
            { label: "Municipal Billing", href: "/services#municipal" },
            { label: "Maintenance Coordination", href: "/services#maintenance" },
          ],
        },
      ],
      ctas: [
        { label: "Our Services", href: "/services" },
        { label: "Get a Quote", href: "/contact" },
      ],
    },
  },
  {
    label: "TOOLS",
    mega: {
      columns: [
        { type: "image", src: img("bond calculator mortgage South Africa"), alt: "Property calculators" },
        {
          type: "links",
          heading: "Calculators",
          items: [
            { label: "Bond Calculator", href: "/calculator" },
            { label: "Affordability Calculator", href: "/calculator#affordability" },
            { label: "Rental Yield Estimator", href: "/calculator#yield" },
            { label: "Transfer Cost Calculator", href: "/calculator#transfer" },
          ],
        },
        { type: "image", src: img("documents forms property lease"), alt: "Forms and downloads" },
        {
          type: "links",
          heading: "Forms & Downloads",
          items: [
            { label: "Tenant Application Form", href: "/tools#tenant-application" },
            { label: "Maintenance Request Form", href: "/tools#maintenance" },
            { label: "Rental Agreement Template", href: "/tools#lease-template" },
            { label: "Landlord Information Pack", href: "/tools#landlord-pack" },
          ],
        },
        { type: "image", src: img("South Africa suburb map area profile"), alt: "Area data" },
        {
          type: "links",
          heading: "Area Intelligence",
          items: [
            { label: "Suburb Profiles", href: "/tools#suburb-profiles" },
            { label: "Rental Price Index", href: "/tools#price-index" },
            { label: "School Zone Finder", href: "/tools#schools" },
            { label: "Municipal Rates Lookup", href: "/tools#rates" },
          ],
        },
      ],
      ctas: [
        { label: "All Tools", href: "/tools" },
        { label: "Bond Pre-Qualification", href: "/contact#bond" },
      ],
    },
  },
  {
    label: "RESOURCES",
    mega: {
      columns: [
        { type: "image", src: img("calculator documents real estate"), alt: "Property tools" },
        {
          type: "links",
          heading: "Tools",
          items: [
            { label: "Rental Calculator", href: "/calculator" },
            { label: "Affordability Calculator", href: "/calculator#affordability" },
            { label: "Area Profiles", href: "/resources#areas" },
            { label: "Tenant Application Form", href: "/listings#register" },
          ],
        },
        { type: "image", src: img("laptop blog writing property"), alt: "Property guides" },
        {
          type: "links",
          heading: "Learn",
          items: [
            { label: "Blog & News", href: "/resources" },
            { label: "Landlord Guides", href: "/resources#landlord" },
            { label: "Tenant Guides", href: "/resources#tenant" },
            { label: "Legal & Compliance", href: "/resources#legal" },
          ],
        },
      ],
      ctas: [
        { label: "Read Blog", href: "/resources" },
        { label: "Download Guides", href: "/tools" },
      ],
    },
  },
  {
    label: "ABOUT",
    mega: {
      columns: [
        { type: "image", src: img("professional team Johannesburg skyline"), alt: "About Erga" },
        {
          type: "links",
          heading: "Our Story",
          items: [
            { label: "Who We Are", href: "/about" },
            { label: "Our Team", href: "/about#team" },
            { label: "Why Choose Erga", href: "/about#why" },
            { label: "Our Portfolio", href: "/about#portfolio" },
          ],
        },
        { type: "image", src: img("handshake business partnership"), alt: "Partners" },
        {
          type: "links",
          heading: "Partners",
          items: [
            { label: "Sikatrix Business Accountants", href: "/about#sikatrix" },
            { label: "HeroPlumbers", href: "/about#heroplumbers" },
            { label: "Industry Partners", href: "/about#partners" },
          ],
        },
      ],
      ctas: [
        { label: "Meet the Team", href: "/about#team" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  },
  {
    label: "CONTACT",
    simple: [
      { label: "Contact Us", href: "/contact" },
      { label: "Report a Maintenance Issue", href: "/contact#maintenance" },
      { label: "Tenant Portal", href: "/contact#portal", disabled: true },
      { label: "WhatsApp Us", href: "https://wa.me/27000000000" },
    ],
  },
];

/* Exact match for "/" to avoid every route highlighting HOME */
function isRouteActive(pathname: string, href: string | undefined): boolean {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ─── Component ───────────────────────────────────────────────────────── */
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  /* Close on route change */
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  /* Close mega menu when focus leaves navbar */
  const handleNavMouseLeave = () => setActiveMenu(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]"
      style={{ height: 60 }}
    >
      <nav
        ref={navRef}
        className="relative mx-auto max-w-screen-xl h-full px-6 flex items-center justify-between"
        onMouseLeave={handleNavMouseLeave}
      >
        {/* Logo */}
        <Link href="/" aria-label="Erga Properties home" className="shrink-0">
          <ErgoLogo className="h-9 w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = activeMenu === item.label;
            const hasSub = !!(item.mega || item.simple);

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasSub ? setActiveMenu(item.label) : setActiveMenu(null)}
              >
                <Link
                  href={item.href ?? "#"}
                  className={[
                    "block px-3 py-1 text-[13px] font-medium uppercase tracking-[0.05em] transition-colors",
                    isActive || isRouteActive(pathname, item.href)
                      ? "text-[#9A7B2F]"
                      : "text-[#1B2A4A] hover:text-[#9A7B2F]",
                  ].join(" ")}
                >
                  {item.label}
                  {/* Gold underline bar — visible on hover (isActive) and active route */}
                  <span
                    className={[
                      "block h-[2px] bg-[#9A7B2F] transition-all duration-200 mt-0.5",
                      isActive || isRouteActive(pathname, item.href)
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0",
                    ].join(" ")}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>

                {/* Simple dropdown (CONTACT) */}
                {item.simple && (
                  <div
                    className={[
                      "absolute top-full left-0 min-w-[220px] bg-white shadow-xl border border-[#E5E7EB] border-t-2 border-t-[#9A7B2F] transition-all duration-200 z-50",
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none",
                    ].join(" ")}
                  >
                    <ul className="py-2">
                      {item.simple.map((s) =>
                        s.disabled ? (
                          <li key={s.label}>
                            <span className="flex items-center justify-between px-5 py-2.5 text-[13px] text-[#1B2A4A]/40 cursor-not-allowed select-none">
                              {s.label}
                              <span className="text-[10px] uppercase tracking-wider text-[#9A7B2F]/60">
                                Soon
                              </span>
                            </span>
                          </li>
                        ) : (
                          <li key={s.label}>
                            <Link
                              href={s.href}
                              target={s.href.startsWith("http") ? "_blank" : undefined}
                              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="block px-5 py-2.5 text-[13px] text-[#1B2A4A] hover:text-[#9A7B2F] hover:bg-[#F8F8F6] transition-colors"
                            >
                              {s.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Mega menu */}
                {item.mega && (
                  <MegaMenu config={item.mega} visible={isActive} />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 bg-[#9A7B2F] text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-[#c2a14d] transition-colors shrink-0"
        >
          Get a Quote
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
        <div className="md:hidden bg-white border-t border-[#E5E7EB] max-h-[calc(100vh-60px)] overflow-y-auto shadow-xl">
          <ul className="divide-y divide-[#E5E7EB]">
            {NAV.map((item) => {
              const allItems = item.mega
                ? item.mega.columns
                    .filter((c) => c.type === "links")
                    .flatMap((c) => (c as Extract<typeof c, { type: "links" }>).items)
                : item.simple ?? [];
              const hasChildren = allItems.length > 0;

              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-6 py-4 text-[13px] font-medium uppercase tracking-[0.05em] text-[#1B2A4A]"
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <svg
                          width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-[#F8F8F6] divide-y divide-[#E5E7EB]/60 pb-2">
                          {allItems.map((child) =>
                            child.disabled ? (
                              <li key={child.label}>
                                <span className="flex items-center justify-between px-8 py-3 text-[13px] text-[#1B2A4A]/40 cursor-not-allowed select-none">
                                  {child.label}
                                  <span className="text-[10px] uppercase tracking-wider text-[#9A7B2F]/60">
                                    Soon
                                  </span>
                                </span>
                              </li>
                            ) : (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  target={child.href.startsWith("http") ? "_blank" : undefined}
                                  rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="block px-8 py-3 text-[13px] text-[#1B2A4A] hover:text-[#9A7B2F] transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className="block px-6 py-4 text-[13px] font-medium uppercase tracking-[0.05em] text-[#1B2A4A] hover:text-[#9A7B2F] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            <li className="px-6 py-5">
              <Link
                href="/contact"
                className="block text-center py-3 bg-[#9A7B2F] text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:bg-[#c2a14d] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
