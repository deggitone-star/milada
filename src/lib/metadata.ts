// src/lib/metadata.ts
import type { Metadata } from "next";
import { siteConfig } from "./config";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSeoMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: PageSeoProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || (siteConfig.ogImage.startsWith("http") ? siteConfig.ogImage : `${siteConfig.url}${siteConfig.ogImage}`);

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
      locale: "ru_RU",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    // Яндекс-специфичные мета-теги через other
    other: {
      "yandex-verification": "your_yandex_verification_code",
    },
  };
}
