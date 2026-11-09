/* Small uppercase kicker above section headings.
   On navy/photo surfaces use the default gold-light;
   on white/cream surfaces pass muted prop for gold-deep. */
export default function Eyebrow({
  children,
  muted = false,
  center = false,
}: {
  children: string;
  muted?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={[
        "text-[11px] tracking-[0.2em] uppercase font-semibold mb-2",
        muted ? "text-gold-deep" : "text-gold-light",
        center ? "text-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
