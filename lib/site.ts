export const SITE = {
  name: "Erga Electrical Services",
  legalName: "Erga Concepts (Pty) Ltd",
  tradingAs: "Erga Properties",
  email: "info@erga.co.za",
  whatsappNumber: "27650775630",
} as const;

export const whatsappLink = (msg = "Hi Erga, I need an electrician. ") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const mailLink = `mailto:${SITE.email}`;
