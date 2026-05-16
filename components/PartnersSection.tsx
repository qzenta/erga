import Image from "next/image";

// Section A — confirmed partners with real logos
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

// Section B — associate network placeholders
const associates = [
  { initials: "LP", label: "Legal Partner" },
  { initials: "IP", label: "Insurance Partner" },
  { initials: "BF", label: "Bond & Finance" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white border-t border-gold/20 py-16">
      {/* Section A: Our Partners */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-navy mb-2">
            Our Partners
          </h2>
          <span className="block w-16 h-[2px] bg-gold mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {featuredPartners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="group flex items-center justify-center bg-white border border-navy/15 hover:border-gold transition-colors"
              style={{ width: 180, height: 80, padding: "12px 20px" }}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={56}
                className="object-contain w-auto h-auto max-h-[56px] max-w-[140px] group-hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>

        {/* Section B: Associate Network */}
        <div className="border-t border-gold/15 pt-10">
          <p className="text-center text-[11px] tracking-widest uppercase text-navy/40 mb-7">
            Associate Network
          </p>
        </div>
      </div>

      <div className="overflow-hidden marquee-wrapper">
        <div className="flex items-center marquee-track">
          {/* 4 copies per half × 2 halves = 8 sets — ensures no gap at any viewport width */}
          {[...Array(4)].flatMap((_, s) =>
            associates.map((a, i) => (
              <div key={`a-${s}-${i}`} className="flex-shrink-0 mx-4">
                <div
                  className="w-[110px] h-[110px] bg-navy flex items-center justify-center rounded-sm"
                  title={a.label}
                >
                  <span className="font-serif text-gold text-2xl font-semibold tracking-widest">
                    {a.initials}
                  </span>
                </div>
              </div>
            ))
          )}
          {[...Array(4)].flatMap((_, s) =>
            associates.map((a, i) => (
              <div key={`b-${s}-${i}`} className="flex-shrink-0 mx-4">
                <div
                  className="w-[110px] h-[110px] bg-navy flex items-center justify-center rounded-sm"
                  title={a.label}
                >
                  <span className="font-serif text-gold text-2xl font-semibold tracking-widest">
                    {a.initials}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
