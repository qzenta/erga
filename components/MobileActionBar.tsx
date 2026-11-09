import { whatsappLink, telLink } from "@/lib/site";
import TrackedLink from "@/components/TrackedLink";
import type { TrackedEvent } from "@/components/TrackedLink";

/* Fixed bottom quick-contact bar — mobile only (md:hidden).
   Call | WhatsApp | Book, 48px+ tap height, safe-area aware. */
export default function MobileActionBar() {
  const items = [
    {
      label: "Call",
      href: telLink,
      event: "click_call" as TrackedEvent,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: whatsappLink(),
      event: "click_whatsapp" as TrackedEvent,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 0 1 21 11.5z" />
        </svg>
      ),
    },
    {
      label: "Book",
      href: "/electrical#booking",
      event: "click_book" as TrackedEvent,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M9.5 15.5l2 2 3.5-3.5" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-navy border-t border-gold/40"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <TrackedLink
            key={item.label}
            href={item.href}
            event={item.event}
            location="mobile_action_bar"
            className="flex flex-col items-center justify-center gap-1 min-h-[56px] py-1.5 text-white/90 transition-colors hover:text-white"
          >
            <span className="text-gold-light">{item.icon}</span>
            <span className="text-[11px] font-semibold tracking-wide uppercase">{item.label}</span>
          </TrackedLink>
        ))}
      </div>
    </nav>
  );
}
