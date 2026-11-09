import type { MetadataRoute } from "next";

const BASE = "https://www.erga.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/electrical",
    "/services",
    "/contact",
    "/about",
    "/faqs",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
