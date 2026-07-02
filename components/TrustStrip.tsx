/* Navy trust bar shown directly under page heroes — Voltex-inspired pattern */

const items = [
  {
    title: "Licensed Inspection",
    desc: "Every job starts with a proper on-site assessment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Transparent Quotes",
    desc: "Clear, itemised pricing before any work starts",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "R450 Callout Fee",
    desc: "Waived in full when you accept the quote",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7c0 2.6-5 1.7-5 4.4 0 1 1.1 1.8 2.5 1.8s2.5-.8 2.5-1.8" />
      </svg>
    ),
  },
  {
    title: "Gauteng-Wide",
    desc: "Based in Alberton, serving the greater Gauteng area",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1B2A4A] border-t-2 border-[#9A7B2F]">
      <div className="mx-auto max-w-6xl px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="text-[#9A7B2F] shrink-0 mt-0.5">{item.icon}</span>
            <div>
              <p className="text-white text-[13px] font-bold leading-tight">{item.title}</p>
              <p className="text-white/55 text-[11.5px] leading-snug mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
