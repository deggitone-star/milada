import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "MILADA — Производство мебельных фасадов в Ульяновске | МДФ, ПВХ, HPL, эмаль",
  description:
    "Производство мебельных фасадов MILADA в Ульяновске с 2012 года. Фасады МДФ с ПВХ-плёнкой, эмаль по RAL, HPL-пластик, патина. Для мебельных компаний, салонов и дилеров. Работа по договору, доставка по России. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: siteConfig.url },
  keywords: [
    "мебельные фасады ульяновск",
    "производство мебельных фасадов ульяновск",
    "фасады мдф от производителя ульяновск",
    "купить мебельные фасады ульяновск",
    "фасады для кухни ульяновск",
    "фасады пвх ульяновск",
    "фасады оптом ульяновск",
    "мебельные фасады поволжье",
    "фасады с доставкой по россии",
    "milada фасады",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AdvantagesSection />

      {/* SEO-якорный блок — короткий, с перелинковкой */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">О производстве</p>
          <h2 className="h2 mb-6">Производство мебельных фасадов в Ульяновске</h2>

          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              <strong className="text-ink">MILADA</strong> — собственное производство мебельных фасадов в Ульяновске с 2012 года.
              Изготавливаем <Link href="/fasady-mdf" className="text-mint-dark hover:underline">фасады МДФ с ПВХ-плёнкой</Link>,{" "}
              <Link href="/krashenye-fasady" className="text-mint-dark hover:underline">эмалевые</Link>,{" "}
              <Link href="/hpl-fasady" className="text-mint-dark hover:underline">пластиковые HPL</Link>, патинированные и радиусные фасады для мебельных компаний, кухонных салонов, цехов и дилеров по всей России.
            </p>
            <p>
              Работаем по договору с юрлицами и ИП, принимаем серийные заказы и индивидуальные проекты, изготавливаем фасады под точные размеры заказчика. Доставка через проверенные транспортные компании по всей России. Подробнее об условиях работы — на странице <Link href="/dlya-mebelnyh-kompaniy" className="text-mint-dark hover:underline">для мебельных компаний</Link>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/catalog" className="btn-primary">Перейти в каталог</Link>
            <Link href="/dlya-mebelnyh-kompaniy" className="btn-outline">Условия для бизнеса</Link>
            <Link href="/about" className="btn-outline">О компании</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
