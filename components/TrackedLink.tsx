"use client";

import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export type TrackedEvent = "click_call" | "click_whatsapp" | "click_book";

/* Anchor (or Link for internal hrefs) that fires a GA4 event on click.
   The event is best-effort and guarded inside trackEvent. */
export default function TrackedLink({
  href,
  event,
  location,
  onClick,
  className = "",
  ariaLabel,
  children,
}: {
  href: string;
  event: TrackedEvent;
  location: string;
  onClick?: MouseEventHandler;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const handleClick: MouseEventHandler = (e) => {
    trackEvent(event, { location });
    if (onClick) onClick(e);
  };

  const internal = href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:");

  if (internal) {
    return (
      <Link href={href} onClick={handleClick} aria-label={ariaLabel} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
