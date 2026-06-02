import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erga.co.za"),
  title: {
    default: "Erga Properties | Excellence in Property Management",
    template: "%s | Erga Properties",
  },
  description:
    "Erga Properties is a Johannesburg-based property company offering direct portfolio management and professional managing agent services across Gauteng.",
  keywords: [
    "Erga Properties",
    "property management Johannesburg",
    "managing agent Gauteng",
    "residential property Kempton Park",
    "Alberton property management",
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
    title: "Erga Properties | Excellence in Property Management",
    description:
      "Professional property management and managing agent services across Gauteng.",
    url: "https://www.erga.co.za",
    siteName: "Erga Properties",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
