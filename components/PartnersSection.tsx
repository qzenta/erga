import Image from "next/image";

/* ─── Brands & suppliers marquee ──────────────────────────────────────────
   Where Erga sources materials — labelled as suppliers, NOT partners, since
   no formal agreements exist (the 2 Jul 2026 sprint audit removed a marquee
   that claimed partner status). Voltex deliberately has no hyperlink per
   Daniel's instruction.                                                    */
const suppliers: { name: string; category: string; color: string; href?: string }[] = [
  { name: "Ellies",   category: "Surge Protection & Lighting",     color: "#E31E24", href: "https://ellies.co.za/" },
  { name: "Voltex",   category: "Electrical Wholesaler",           color: "#8DC63F" },
  { name: "ARB",      category: "Electrical Wholesaler",           color: "#C8102E", href: "https://arb.co.za/" },
  { name: "Gelmar",   category: "Hardware & Fittings",             color: "#E4002B", href: "https://www.gelmar.co.za/" },
  { name: "Hirsch's", category: "Appliances & Electronics",        color: "#ED1C24", href: "https://www.hirschs.co.za/" },
  { name: "Builders", category: "Building Materials & Hardware",   color: "#FDB913", href: "https://www.builders.co.za/" },
];

/* Duplicate for seamless infinite scroll */
const marqueeItems = [...suppliers, ...suppliers, ...suppliers];

/* ─── Confirmed Erga partners (real logos on file) ────────────────────── */
const featuredPartners: { name: string; src?: string; href: string }[] = [
  {
    name: "Sikatrix Business Accountants",
    src: "/sikatrix_logo.png",
    href: "https://www.sikatrix.com",
  },
  {
    name: "HeroPlumbers",
    src: "/heroplumbers_logo.png",
    href: "https://www.heroplumbers.co.za",
  },
  {
    // No logo asset yet — text-badge fallback below. Swap in a logo + rename
    // once the electrician sign-off conversation from the brief is settled.
    name: "Erga Electrical Services",
    href: "/electrical",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-14">

      {/* ── Confirmed partners ──────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Trusted partners</p>
          <h2 className="text-[#1B2A4A] text-[24px] font-bold">Our Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {featuredPartners.map((p) => {
            const external = p.href.startsWith("http");
            return (
              <a
                key={p.name}
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={p.name}
                className="group flex items-center justify-center bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] transition-colors"
                style={{ width: 180, height: 80, padding: "12px 20px" }}
              >
                {p.src ? (
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={140}
                    height={56}
                    className="object-contain w-auto h-auto max-h-[56px] max-w-[140px] group-hover:opacity-75 transition-opacity"
                  />
                ) : (
                  <span className="text-center text-[#1B2A4A] text-[13px] font-bold leading-snug group-hover:text-[#9A7B2F] transition-colors">
                    {p.name}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Brands & suppliers marquee ───────────────────────────────── */}
      <div className="border-t border-[#E5E7EB] pt-10">
        <div className="text-center mb-7 px-6">
          <p className="text-[#9A7B2F] text-[11px] tracking-[0.2em] uppercase font-semibold mb-1.5">
            Brands &amp; Suppliers We Work With
          </p>
          <p className="text-[#1B2A4A]/45 text-[12px]">
            We source quality materials from South Africa&apos;s leading electrical wholesalers and retailers.
          </p>
        </div>

        <div className="overflow-hidden marquee-wrapper">
          <div className="flex items-stretch marquee-track">
            {marqueeItems.map((brand, i) => {
              const inner = (
                <div
                  className="flex flex-col items-center justify-center bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] transition-colors px-6 py-4 h-full"
                  style={{ width: 176, height: 82 }}
                >
                  <div
                    className="w-7 h-1 mb-2 rounded-full"
                    style={{ background: brand.color }}
                  />
                  <p className="font-bold text-[#1B2A4A] text-[15px] leading-tight text-center">
                    {brand.name}
                  </p>
                  <p className="text-[#1B2A4A]/45 text-[10.5px] mt-1 tracking-wide text-center leading-tight">
                    {brand.category}
                  </p>
                </div>
              );
              return (
                <div key={i} className="flex-shrink-0 mx-2.5">
                  {brand.href ? (
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} — ${brand.category}`}
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
