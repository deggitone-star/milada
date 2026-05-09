import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import SuppliersSection from "@/components/sections/SuppliersSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "MILADA — Производство мебельных фасадов с доставкой по России",
  description:
    "Производство мебельных фасадов в Ульяновске для мебельных компаний, салонов и дилеров. Фасады МДФ, ПВХ, эмаль, HPL, камень. Доставка по РФ. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: siteConfig.url },
  keywords: [
    "производство мебельных фасадов",
    "мебельные фасады для производства",
    "фасады для мебельных компаний",
    "фасады оптом",
    "мебельные фасады ульяновск",
    "производство фасадов ульяновск",
    "фасады с доставкой по россии",
    "фасады мдф для мебельных компаний",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AdvantagesSection />
      <SuppliersSection />

      {/* SEO-блок под B2B */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <div className="prose prose-neutral max-w-none">
            <p className="label mb-3">О производстве</p>
            <h2 className="h2 mb-6">Производство мебельных фасадов в Ульяновске</h2>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                <strong className="text-ink">MILADA</strong> — производитель мебельных фасадов
                в&nbsp;Ульяновске с&nbsp;2012 года. Изготавливаем фасады МДФ с&nbsp;ПВХ-плёнкой,
                эмалевые, пластиковые HPL, каменные, патинированные и&nbsp;радиусные фасады
                для мебельных компаний, кухонных салонов, мебельных цехов и&nbsp;дилеров
                по&nbsp;всей России.
              </p>

              <p>
                Работаем по&nbsp;договору с&nbsp;юридическими лицами и&nbsp;ИП. Принимаем
                серийные заказы для мебельных производств и&nbsp;индивидуальные проекты.
                Срок изготовления — от&nbsp;5 рабочих дней. Доставка через проверенные
                транспортные компании по&nbsp;всей России с&nbsp;многослойной упаковкой.
              </p>

              <h3 className="h3 mt-8 mb-4">Условия работы</h3>
              <ul className="space-y-2 ml-1">
                <li>— Минимальный заказ для опта — от 50 м² фасадов</li>
                <li>— Отсрочка платежа для постоянных партнёров</li>
                <li>— Полный пакет документов для бухгалтерии</li>
                <li>— Индивидуальный раскрой с&nbsp;допусками ±0,5 мм</li>
                <li>— Контроль качества на&nbsp;каждом этапе производства</li>
                <li>— Доставка по&nbsp;Поволжью и&nbsp;всей России</li>
              </ul>

              <h3 className="h3 mt-8 mb-4">Категории продукции</h3>
              <p>
                <strong>Фасады МДФ с&nbsp;ПВХ-плёнкой</strong> — стандартные и&nbsp;премиум фрезеровки.
                Более 100 декоров плёнки: однотонные, под дерево, металлик, глянец.
              </p>
              <p>
                <strong>Эмалевые фасады</strong> — покраска по&nbsp;каталогу RAL.
                Матовые, глянцевые и&nbsp;металлик. Любой цвет под заказ.
              </p>
              <p>
                <strong>Пластиковые фасады HPL</strong> — повышенная стойкость к&nbsp;влаге,
                царапинам и&nbsp;выгоранию.
              </p>
              <p>
                <strong>Каменные фасады</strong> — нанесение искусственного камня на&nbsp;МДФ.
                18 однотонных цветов и&nbsp;8 перламутровых.
              </p>
              <p>
                Также производим: <strong>радиусные фасады</strong>, <strong>дверные панели</strong>,
                <strong> полотна для шкафов-купе</strong>, <strong>спинки кроватные</strong>,
                <strong> декоративные элементы</strong> и&nbsp;накладки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
