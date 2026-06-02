"use client";

import Link from "next/link";
import Image from "next/image";

export type MegaColumn =
  | { type: "image"; src: string; alt: string }
  | { type: "links"; heading: string; items: { label: string; href: string; disabled?: boolean }[] };

export type MegaMenuConfig = {
  columns: MegaColumn[];
  ctas: { label: string; href: string }[];
};

type Props = {
  config: MegaMenuConfig;
  visible: boolean;
};

export default function MegaMenu({ config, visible }: Props) {
  return (
    <div
      role="region"
      aria-hidden={!visible}
      className={[
        "absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-screen-xl",
        "bg-white shadow-xl border-t border-[#9A7B2F]",
        "transition-all duration-200 origin-top",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none",
      ].join(" ")}
    >
      {/* Column grid */}
      <div className="flex px-8 py-6 gap-6">
        {config.columns.map((col, i) => {
          if (col.type === "image") {
            return (
              <div
                key={i}
                className="relative w-40 shrink-0 overflow-hidden rounded-sm"
                style={{ height: 160 }}
              >
                <Image
                  src={col.src}
                  alt={col.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="160px"
                />
              </div>
            );
          }

          return (
            <div key={i} className="min-w-[160px] flex-1">
              <p
                className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A7B2F]"
              >
                {col.heading}
              </p>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    {item.disabled ? (
                      <span className="flex items-center gap-1.5 text-[13px] text-[#1B2A4A]/40 cursor-not-allowed select-none">
                        {item.label}
                        <span className="text-[10px] tracking-wider uppercase text-[#9A7B2F]/60">
                          Soon
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-[13px] text-[#1B2A4A] hover:underline decoration-[#9A7B2F] underline-offset-2 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA strip */}
      {config.ctas.length > 0 && (
        <div className="bg-[#9A7B2F] px-8 py-3 flex items-center gap-4">
          {config.ctas.map((cta) => (
            <Link
              key={cta.href + cta.label}
              href={cta.href}
              className="text-white text-[11px] font-medium uppercase tracking-[0.1em] hover:underline decoration-white/60"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
