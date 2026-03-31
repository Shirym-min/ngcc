export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ngcc.vercel.app/sitemap.xml",
  };
}