import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "MILADA — Производство мебельных фасадов",
  description: "Производство мебельных фасадов из ПВХ, эмали, HPL-пластика и камня. Любой цвет RAL, индивидуальный раскрой, доставка по России.",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AdvantagesSection />
      <CtaSection />
    </>
  );
}
