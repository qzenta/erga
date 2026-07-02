import Image from "next/image";

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
    </section>
  );
}
