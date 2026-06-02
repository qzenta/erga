import Image from "next/image";

/* ─── Confirmed Erga partners (real logos on file) ────────────────────── */
const featuredPartners = [
  {
    name: "Sikatrix Business Accountants",
    src: "/sikatrix_logo.png",
    href: "https://www.sikatrix.co.za",
  },
  {
    name: "HeroPlumbers",
    src: "/heroplumbers_logo.png",
    href: "https://www.heroplumbers.co.za",
  },
];

/* ─── Industry network — SA property ecosystem companies ──────────────── */
const industryNetwork: { name: string; category: string; color: string }[] = [
  { name: "ooba Home Loans",        category: "Bond Originator",       color: "#E8341C" },
  { name: "BetterBond",             category: "Bond Originator",       color: "#00529B" },
  { name: "TPN Credit Bureau",      category: "Rental Credit Bureau",  color: "#2D7D46" },
  { name: "PayProp",                category: "Rental Payments",       color: "#5B2D8E" },
  { name: "Lightstone Property",    category: "Property Data",         color: "#1A5276" },
  { name: "Absa Home Loans",        category: "Property Finance",      color: "#DC0000" },
  { name: "Santam",                 category: "Property Insurance",    color: "#003DA5" },
  { name: "Seeff Properties",       category: "Real Estate Network",   color: "#C0392B" },
  { name: "RE/MAX SA",              category: "Real Estate Network",   color: "#003087" },
  { name: "PPRA",                   category: "Industry Regulator",    color: "#1B2A4A" },
  { name: "TransUnion",             category: "Credit Bureau",         color: "#E8860A" },
  { name: "Standard Bank",          category: "Property Finance",      color: "#007AC2" },
];

/* Duplicate for seamless infinite scroll */
const marqueeItems = [...industryNetwork, ...industryNetwork];

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
          {featuredPartners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="group flex items-center justify-center bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] transition-colors"
              style={{ width: 180, height: 80, padding: "12px 20px" }}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={56}
                className="object-contain w-auto h-auto max-h-[56px] max-w-[140px] group-hover:opacity-75 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ── Industry network marquee ─────────────────────────────────── */}
      <div className="border-t border-[#E5E7EB] pt-10">
        <p className="text-center text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A]/35 font-medium mb-7 px-6">
          Property ecosystem — industry network
        </p>

        <div className="overflow-hidden marquee-wrapper">
          <div className="flex items-stretch marquee-track">
            {marqueeItems.map((company, i) => (
              <div key={i} className="flex-shrink-0 mx-2.5">
                <div
                  className="flex flex-col items-center justify-center bg-white border border-[#E5E7EB] hover:border-[#9A7B2F] transition-colors px-6 py-4 cursor-default"
                  style={{ width: 172, height: 80 }}
                >
                  {/* Coloured accent bar */}
                  <div
                    className="w-6 h-0.5 mb-2 rounded-full"
                    style={{ background: company.color }}
                  />
                  <p className="font-bold text-[#1B2A4A] text-[13px] leading-tight text-center">
                    {company.name}
                  </p>
                  <p className="text-[#1B2A4A]/40 text-[10px] mt-1 tracking-wide text-center leading-tight">
                    {company.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
