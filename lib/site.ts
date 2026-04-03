import type { Metadata } from "next";

export const siteConfig = {
  name: "次世代共創会",
  shortName: "NGCC",
  url: "https://ngcc.vercel.app",
  description:
    "次世代共創会（NGCC）は、中高生ボランティアと地域をつなぎ、幼稚園支援と地域コミュニティ再建に取り組む団体です。",
  locale: "ja_JP",
  keywords: [
    "次世代共創会",
    "NGCC",
    "幼稚園支援",
    "中高生ボランティア",
    "地域コミュニティ",
    "葛飾こどもの園幼稚園"
  ]
} as const;

export function createCanonical(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = createCanonical(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: `${siteConfig.shortName} | ${siteConfig.name}`,
      locale: siteConfig.locale,
      type: "website"
    },
    twitter: {
      card: "summary",
      title,
      description
    }
  };
}
