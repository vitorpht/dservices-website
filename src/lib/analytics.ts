type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type MarketingEvent =
  | "cta_click"
  | "nav_click"
  | "generate_lead"
  | "contact_submit"
  | "quote_submit"
  | "form_error"
  | "phone_click"
  | "email_click"
  | "whatsapp_click";

export function trackEvent(event: MarketingEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const data = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  if (typeof window.fbq === "function") {
    if (event === "generate_lead" || event === "quote_submit" || event === "contact_submit") {
      window.fbq("track", "Lead", payload);
    } else {
      window.fbq("trackCustom", event, payload);
    }
  }
}

export function trackCtaClick(location: string, label: string, href: string) {
  trackEvent("cta_click", { location, label, href });
}

export function trackLead(source: "contact" | "quote", method = "form") {
  trackEvent("generate_lead", { source, method });
  trackEvent(source === "quote" ? "quote_submit" : "contact_submit", {
    source,
    method,
  });
}
