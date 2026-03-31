import type { MetadataRoute } from "next";

const baseUrl = "https://ngcc.vercel.app";
const pages = ["", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
