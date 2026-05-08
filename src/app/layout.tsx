// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YandexMetrika from "@/components/ui/YandexMetrika";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MILADA — Производство мебельных фасадов",
    template: "%s | MILADA",
  },
  description: siteConfig.description,
  keywords: [
    "мебельные фасады",
    "кухонные фасады",
    "фасады МДФ",
    "эмалевые фасады",
    "ПВХ фасады",
    "производство фасадов",
    "MILADA",
    "Ульяновск",
  ],
  // Иконки — favicon и mobile bookmark icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#1f4d3f",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: "MILADA",
    title: "MILADA — Производство мебельных фасадов",
    description: siteConfig.description,
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "MILADA" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <head><YandexMetrika /></head>
      <body className="bg-bg text-ink font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
