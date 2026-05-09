import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "MILADA — Мебельные фасады в Ульяновске | От производителя",
  description:
    "Производство мебельных фасадов MILADA в Ульяновске с 2012 года. Фасады МДФ с ПВХ-плёнкой, эмаль, HPL-пластик, камень, патина, радиусные. Любой цвет RAL. Опт и розница. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: siteConfig.url },
  keywords: [
    "мебельные фасады ульяновск",
    "производство фасадов ульяновск",
    "фасады для кухни ульяновск",
    "фасады мдф ульяновск",
    "купить фасады ульяновск",
    "фасады от производителя",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AdvantagesSection />

      {/* SEO-блок с ключевыми запросами и описанием компании */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <div className="prose prose-neutral max-w-none">
            <h2 className="h2 mb-6">Производство мебельных фасадов в Ульяновске</h2>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Компания <strong className="text-ink">MILADA</strong> — производитель мебельных фасадов в Ульяновске
                с 2012 года. Изготавливаем фасады МДФ с ПВХ-плёнкой, эмалевые, пластиковые HPL,
                каменные, патинированные и радиусные фасады для кухни и шкафов на заказ.
                Работаем с мебельными фабриками и частными клиентами по всей России.
              </p>

              <p>
                В каталоге MILADA представлено более 99 моделей фасадов в 12 категориях:
                от классических с фрезеровкой «Косичка» и «Арка» до премиум-вариантов
                с интегрированной ручкой. Изготавливаем по индивидуальным размерам, любой цвет
                по каталогу RAL.
              </p>

              <h3 className="h3 mt-8 mb-4">Почему выбирают MILADA</h3>
              <ul className="space-y-2">
                <li>— Собственное производство в Ульяновске</li>
                <li>— Более 12 лет опыта на рынке мебельных фасадов</li>
                <li>— 100+ декоров: ПВХ-плёнки, HPL-пластик, эмаль, искусственный камень</li>
                <li>— Срок изготовления от 10 рабочих дней</li>
                <li>— Доставка по Ульяновску, Поволжью и всей России</li>
                <li>— Работа с оптовиками и частными клиентами</li>
              </ul>

              <h3 className="h3 mt-8 mb-4">Виды фасадов в каталоге</h3>
              <p>
                <strong>Фасады МДФ с ПВХ-плёнкой</strong> — самое популярное решение
                для кухонных гарнитуров. Доступная цена, более 100 видов плёнок,
                сложные 3D-фрезеровки.
              </p>
              <p>
                <strong>Эмалевые фасады</strong> — премиум-сегмент с покраской по каталогу RAL.
                Матовые, глянцевые и металлик. Любой цвет под заказ.
              </p>
              <p>
                <strong>Пластиковые фасады HPL</strong> — устойчивые к влаге, царапинам и выгоранию.
                Огромный выбор декоров: дерево, мрамор, металлик, фантазийные.
              </p>
              <p>
                <strong>Каменные фасады</strong> — нанесение искусственного камня
                на МДФ-основу. 18 однотонных цветов и 8 перламутровых вариантов.
              </p>
              <p>
                <strong>Патинированные фасады</strong> — эффект состаривания вручную,
                для классических и антикварных интерьеров.
              </p>
              <p>
                Также производим <strong>радиусные фасады</strong>, <strong>дверные панели</strong>,
                <strong> полотна для шкафов-купе</strong>, <strong>спинки кроватные</strong>,
                <strong> декоративные элементы</strong> и накладки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
