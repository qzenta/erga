const partners = [
  {
    initials: "SB",
    name: "Sikatrix Business Accountants",
    label: "Accounting & Tax",
    href: "https://www.sikatrix.co.za",
  },
  {
    initials: "HP",
    name: "HeroPlumbers",
    label: "Plumbing & Maintenance",
    href: "https://www.heroplumbers.co.za",
  },
  {
    initials: "LP",
    name: "Legal Partner",
    label: "Legal & Compliance",
    href: null,
  },
  {
    initials: "IP",
    name: "Insurance Partner",
    label: "Property Insurance",
    href: null,
  },
  {
    initials: "BF",
    name: "Bond & Finance Partner",
    label: "Bond Origination",
    href: null,
  },
];

function PartnerTile({
  initials,
  name,
  label,
  href,
}: (typeof partners)[number]) {
  const inner = (
    <div className="flex flex-col items-center gap-3 px-10 py-2 min-w-[180px]">
      <div className="w-16 h-16 bg-navy flex items-center justify-center rounded-sm">
        <span className="font-serif text-gold text-lg font-semibold tracking-widest">
          {initials}
        </span>
      </div>
      <div className="text-center">
        <p className="text-navy font-medium text-sm leading-snug">{name}</p>
        <p className="text-gold text-xs tracking-wider uppercase mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

export default function PartnerMarquee() {
  return (
    <section className="bg-white border-t border-gold/20 py-16">
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl text-navy mb-2">
          Our Partners &amp; Associates
        </h2>
        <span className="block w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="overflow-hidden marquee-wrapper">
        <div className="flex marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <PartnerTile key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
