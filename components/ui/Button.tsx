import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";

type Variant = "primary" | "outline-light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-gold-deep text-white hover:bg-navy",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
  ghost: "text-gold-deep underline underline-offset-4 hover:text-navy",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 min-h-[44px] text-[14px] font-semibold tracking-wide transition-colors";

/* Button that renders a Next Link for internal hrefs, or a plain anchor otherwise */
export default function Button({
  href,
  variant = "primary",
  onClick,
  ariaLabel,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  onClick?: MouseEventHandler;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  const internal = href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:");

  if (internal) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
