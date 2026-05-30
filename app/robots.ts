import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/home", "/add-balance", "/make-payment"] },
    sitemap: "https://xleet.to/sitemap.xml",
  };
}
