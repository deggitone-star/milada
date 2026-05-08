// src/app/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: `MILADA — Производство мебельных фасадов премиум-класса`,
  description:
    "Производство мебельных фасадов из эмали, шпона, HPL-пластика и стекла. Индивидуальный раскрой, любой цвет RAL, доставка по России. Заказать от производителя.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <AdvantagesSection />
      <CtaSection />
    </>
  );
}
