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
    default: `MILADA — Производство мебельных фасадов`,
    template: `%s | MILADA`,
  },
  description: siteConfig.description,
  keywords: [
    "мебельные фасады",
    "кухонные фасады",
    "фасады МДФ",
    "эмалевые фасады",
    "ПВХ фасады",
    "производство фасадов",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: "MILADA",
    title: `MILADA — Производство мебельных фасадов`,
    description: siteConfig.description,
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
