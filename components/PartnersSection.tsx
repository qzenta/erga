import Image from "next/image";

/* ─── Brands & suppliers marquee ──────────────────────────────────────────
   Where Erga sources materials — labelled as suppliers, NOT partners, since
   no formal agreements exist (the 2 Jul 2026 sprint audit removed a marquee
   that claimed partner status). Deliberately NOT hyperlinked to any of
   these — Erga doesn't promote outside brands for free (Daniel, 2 Jul 2026).
   Real logos pulled from each brand's own site; Builders' logo could not be
   sourced (JS-only storefront, no static asset in markup, favicon too small
   to use) — shown as a plain wordmark instead.                             */
const suppliers: { name: string; category: string; logo?: string; fallbackColor?: string }[] = [
  { name: "Ellies",   category: "Surge Protection & Lighting",   logo: "/suppliers/ellies.png" },
  { name: "Voltex",   category: "Electrical Wholesaler",         logo: "/suppliers/voltex.png" },
  { name: "ARB",      category: "Electrical Wholesalers",        logo: "/suppliers/arb.png" },
  { name: "Gelmar",   category: "Hardware & Fittings",           logo: "/suppliers/gelmar.png" },
  { name: "Hirsch's", category: "Appliances & Electronics",      logo: "/suppliers/hirschs.webp" },
  { name: "Builders", category: "Building Materials & Hardware", fallbackColor: "#EE7203" },
];

/* Duplicate for seamless infinite scroll */
const marqueeItems = [...suppliers, ...suppliers, ...suppliers];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-14">
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
          {marqueeItems.map((brand, i) => (
            <div key={i} className="flex-shrink-0 mx-2.5">
              <div
                className="flex flex-col items-center justify-between bg-white border border-[#E5E7EB] px-5 py-4 h-full"
                style={{ width: 190, height: 104 }}
              >
                <div className="relative w-full flex-1 flex items-center justify-center">
                  {brand.logo ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                        sizes="160px"
                      />
                    </div>
                  ) : (
                    <p
                      className="font-bold text-[17px] leading-tight text-center"
                      style={{ color: brand.fallbackColor }}
                    >
                      {brand.name}
                    </p>
                  )}
                </div>
                <p className="text-[#1B2A4A]/40 text-[10px] mt-1.5 tracking-wide text-center leading-tight">
                  {brand.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
