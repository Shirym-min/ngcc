import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Header from "./Header";
import "./globals.css";
import { createCanonical, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.searchName,
  title: {
    default: `${siteConfig.searchName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: createCanonical("/")
  },
  openGraph: {
    title: `${siteConfig.searchName} | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.searchName,
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.searchName} | ${siteConfig.name}`,
    description: siteConfig.description
  },
  verification: {
    google: "eT9sHveeFbfvjXba3qAb6aMOkifUU75c7NAcO-pZ9pM"
  },
  category: "organization"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.searchName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.searchName,
  url: siteConfig.url,
  inLanguage: "ja-JP",
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [organizationSchema, websiteSchema];

  return (
    <html lang="ja">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
