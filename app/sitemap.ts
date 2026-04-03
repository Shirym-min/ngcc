import type { MetadataRoute } from "next";

import { createCanonical } from "@/lib/site";

const pages = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: createCanonical(path),
    lastModified,
    changeFrequency,
    priority
  }));
}
