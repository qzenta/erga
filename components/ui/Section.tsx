import type { ReactNode } from "react";
import type { CSSProperties } from "react";

type Tone = "white" | "cream" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white text-navy",
  cream: "bg-cream text-navy",
  navy: "bg-navy text-white",
};

/* Section rhythm: py-16 md:py-24, tone-selected surface */
export default function Section({
  tone = "white",
  id,
  className = "",
  style,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section id={id} style={style} className={`${tones[tone]} text-16 py-16 md:py-24 ${className}`.trim()}>
      {children}
    </section>
  );
}
