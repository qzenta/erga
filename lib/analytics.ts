/* Tiny GA4 gtag helper — all calls are guarded so the site works
   fine when analytics is blocked or absent. */

type GtagFn = (type: string, event: string, params?: Record<string, unknown>) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as { gtag?: GtagFn };
  return typeof w.gtag === "function" ? w.gtag : undefined;
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  const gtag = getGtag();
  if (gtag) gtag("event", event, params);
}

export function trackGenerateLead(method: string) {
  trackEvent("generate_lead", { method });
}
