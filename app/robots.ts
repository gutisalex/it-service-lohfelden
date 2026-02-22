import type { MetadataRoute } from "next";

const siteUrl = "https://www.it-service-lohfelden.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/imprint", "/privacy"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
