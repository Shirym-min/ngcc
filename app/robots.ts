import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: createSitemapUrl(),
    host: siteConfig.url
  };
}

function createSitemapUrl() {
  return `${siteConfig.url}/sitemap.xml`;
}
