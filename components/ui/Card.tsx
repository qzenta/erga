import type { ReactNode } from "react";

/* Flat card — white surface, 1px line border, 2px hover lift with gold-deep border */
export default function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`bg-white border border-line hover:border-gold-deep hover:-translate-y-0.5 transition-all duration-200 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
