import type { ReactNode } from "react";

/* Page gutter container — max-w-6xl with consistent horizontal padding */
export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
