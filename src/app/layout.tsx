// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YandexMetrika from "@/components/ui/YandexMetrika";
import FloatingContacts from "@/components/ui/FloatingContacts";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/SchemaOrg";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1f4d3f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "MILADA — Мебельные фасады в Ульяновске | От производителя",
  description:
    "Производство мебельных фасадов в Ульяновске с 2012 года. ПВХ, эмаль, HPL, патина, радиусные. Опт для бизнеса. Доставка по России. ☎ +7 (8422) 27-82-02",
  keywords: [
    "мебельные фасады",
    "мебельные фасады ульяновск",
    "фасады для кухни",
    "фасады мдф",
    "фасады мдф ульяновск",
    "производство фасадов",
    "производство фасадов ульяновск",
    "фасады пвх",
    "эмалевые фасады",
    "пластиковые фасады",
    "купить фасады ульяновск",
    "фасады на заказ",
    "MILADA",
    "Милада",
  ],
  authors: [{ name: "MILADA" }],
  creator: "MILADA",
  publisher: "MILADA",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: "MILADA",
    title: "MILADA — Мебельные фасады в Ульяновске | От производителя",
    description:
      "Производство мебельных фасадов в Ульяновске с 2012 года. ПВХ, эмаль, HPL, патина, радиусные. Опт для бизнеса.",
    images: [{ url: "https://res.cloudinary.com/dx9tcpnkg/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1778775340/CTA_an2w49.png", width: 1200, height: 630, alt: "MILADA — Производство мебельных фасадов" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MILADA — Мебельные фасады в Ульяновске",
    description: "Производство мебельных фасадов с 2012 года. Опт для бизнеса.",
    images: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1778775340/CTA_an2w49.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
    ? { other: { "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <YandexMetrika />
        {/* Глобальные Schema.org — на каждой странице */}
        <LocalBusinessSchema />
        <OrganizationSchema />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}
