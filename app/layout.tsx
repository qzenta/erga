import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erga.co.za"),
  title: {
    default: "Electrician Alberton | Erga Electrical Services",
    template: "%s | Erga",
  },
  description:
    "Erga Electrical Services — Alberton's trusted electrician. Licensed inspection, transparent quoting, no surprises. Book online in minutes. Serving Alberton for over a decade.",
  keywords: [
    "electrician Alberton",
    "certificate of compliance Gauteng",
    "DB board upgrade",
    "emergency electrician Alberton",
    "Erga Electrical Services",
    "electrical services Gauteng",
    "property management Alberton",
    "managing agent Gauteng",
  ],
  icons: {
    icon: [
      { url: "/erga_favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/erga_favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/erga_favicon.png",
    apple: "/erga_favicon.png",
  },
  openGraph: {
    title: "Electrician Alberton | Erga Electrical Services",
    description:
      "Erga Electrical Services — Alberton's trusted electrician. Licensed inspection, transparent quoting, no surprises. Book online in minutes.",
    url: "https://www.erga.co.za",
    siteName: "Erga Electrical Services",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/images/electrical/electrician-ladder.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Alberton | Erga Electrical Services",
    description:
      "Erga Electrical Services — Alberton's trusted electrician. Licensed inspection, transparent quoting, no surprises.",
  },
};

/* Inline script (before hydration): marks the document as JS-enabled so the
   .reveal pre-reveal hiding in globals.css only applies when it can resolve. */
const jsFlagScript = 'document.documentElement.classList.add("js")';

/* Local-business structured data — only facts already on the site. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: SITE.name,
  url: "https://www.erga.co.za",
  telephone: SITE.phoneTel,
  email: SITE.email,
  areaServed: "Alberton, Gauteng",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlagScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy pb-[calc(56px+env(safe-area-inset-bottom))] md:pb-0">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
