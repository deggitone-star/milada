import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";
import { plasticHPL, getTotalDecorsCount } from "@/data/materials";
import { getProductsByCategory } from "@/data/products";
import CategoryCard from "@/components/catalog/CategoryCard";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/SchemaOrg";

const plasticDecors = getTotalDecorsCount(plasticHPL);

// Стандартные и премиум фрезеровки показываем одной карточкой «ПВХ плёнка» —
// как на главной. Поэтому категорий в сетке на одну меньше, чем в данных.
const pvhCount =
  getProductsByCategory("pvh-standart").length +
  getProductsByCategory("pvh-premium").length;
const shownCategories = categories.length - 1;

export const metadata: Metadata = {
  title: "Каталог мебельных фасадов от производителя в Ульяновске — МДФ, ПВХ, HPL, эмаль | MILADA",
  description:
    `Каталог мебельных фасадов MILADA: ${shownCategories} категорий, 99+ разновидностей фрезеровок МДФ и ${plasticDecors} декоров HPL-пластика. Фасады с ПВХ-плёнкой, эмаль, патина, дверные панели. Производство в Ульяновске, доставка по РФ. ☎ +7 (8422) 27-82-02`,
  alternates: { canonical: `${siteConfig.url}/catalog` },
  keywords: [
    "каталог мебельных фасадов ульяновск",
    "мебельные фасады от производителя каталог",
    "фасады мдф каталог с ценами",
    "фасады для кухни каталог ульяновск",
    "купить мебельные фасады ульяновск",
    "фасады пвх каталог",
    "фасады hpl пластик каталог",
    "эмалевые фасады каталог",
    "патинированные фасады купить",
  ],
};

export default function CatalogPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каталог", url: `${siteConfig.url}/catalog` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        title="Каталог мебельных фасадов MILADA — производство в Ульяновске"
        description={`${shownCategories} категорий мебельных фасадов от производителя MILADA`}
        url={`${siteConfig.url}/catalog`}
        itemCount={shownCategories}
      />

      {/* HERO */}
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">Каталог продукции</p>
          <h1 className="h1">Мебельные фасады от производителя в Ульяновске</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            {shownCategories} категорий фасадов, 99+ разновидностей фрезеровок МДФ и {plasticDecors} декоров HPL-пластика.
            Собственное производство, индивидуальный раскрой, доставка по России.
          </p>
        </div>
      </div>

      {/* КАТЕГОРИИ */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-6">Выберите тип фасада</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {/* ПВХ плёнка — объединяет стандартную и премиум фрезеровку (как на главной) */}
            <Link
              href="/pvh-plenka"
              className="group bg-bg-alt border border-line rounded-soft p-6 hover:border-ink hover:shadow-lift transition-all duration-200"
            >
              <div className="text-ink-muted group-hover:text-mint-dark transition-colors">
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                  <rect x="6" y="10" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="6" y="22" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 16h20M12 28h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="mt-6 text-base font-medium text-ink leading-tight">ПВХ плёнка</h3>
              <p className="mt-1 text-xs text-ink-subtle">
                Стандартные и премиум · {pvhCount} моделей
              </p>
            </Link>

            {categories
              .filter((cat) => cat.slug !== "pvh-standart" && cat.slug !== "pvh-premium")
              .map((cat) => <CategoryCard key={cat.slug} category={cat} />)}
          </div>
        </div>
      </section>

      {/* БЫСТРЫЕ ССЫЛКИ — популярные направления */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <p className="label mb-6">Популярные направления</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/catalog/pvh-standart",
                title: "Стандартные фрезеровки",
                text: "Стандартные фрезеровки в плёнке ПВХ или эмали, более 20 форм. Самый популярный вариант для кухонь и корпусной мебели.",
              },
              {
                href: "/catalog/plastic",
                title: "Пластиковые фасады HPL",
                text: `${plasticDecors} декоров пластика высокого давления. Влагостойкие, устойчивы к царапинам и выгоранию. Срок службы 20+ лет.`,
              },
              {
                href: "/catalog/pvh-premium",
                title: "Премиум фрезеровки",
                text: "Европейские мотивы, интегрированные ручки, сложные профили. Для кухонь и мебели премиум-класса.",
              },
              {
                href: "/fasady-bez-ruchek",
                title: "Фасады с интегрированной ручкой",
                text: "МДФ с интегрированной ручкой — захват фрезеруется в фасаде. Минимализм без выступающей фурнитуры.",
              },
              {
                href: "/catalog/patina",
                title: "Патина",
                text: "Покрытие с эффектом состаривания. Наносится на любую фрезеровку — стандартную и премиум, поверх плёнки или эмали.",
              },
              {
                href: "/catalog/enamel",
                title: "Эмаль",
                text: "Покрытие эмалью на любой фрезеровке — стандартной и премиум. Любой цвет по каталогу RAL: матовый, глянец, металлик.",
              },
              {
                href: "/hpl-fasady",
                title: "О фасадах HPL подробнее",
                text: "Что такое HPL-пластик, преимущества, технические характеристики и сравнение с другими материалами.",
              },
            ].map(({ href, title, text }) => (
              <Link
                key={href}
                href={href}
                className="group block p-6 bg-bg border border-line rounded-soft hover:border-ink hover:shadow-lift transition-all"
              >
                <h3 className="text-base font-medium text-ink group-hover:text-mint-dark transition-colors">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{text}</p>
                <p className="mt-3 text-xs font-medium text-mint-dark">Подробнее →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Производство мебельных фасадов MILADA — Ульяновск</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA — производитель мебельных фасадов в Ульяновске с 2012 года. В каталоге представлены фасады из МДФ с ПВХ-плёнкой (стандартные и премиум фрезеровки), пластиковые фасады HPL, эмалевые фасады (матовые, глянцевые, металлик), патинированные фасады, радиусные фасады, дверные панели и полотна для шкафов-купе.
            </p>
            <p>
              Для пластиковых фасадов HPL доступно {plasticDecors} декоров в четырёх коллекциях: Индия (однотонные и суперматовые), Wood &amp; Stone (дерево, мрамор, камень), Классик и Прованс (цветочные и фантазийные). Все декоры можно посмотреть на странице <Link href="/catalog/plastic" className="text-mint-dark hover:underline">каталога пластика HPL</Link>.
            </p>
            <p>
              Работаем с мебельными компаниями, кухонными салонами и дилерами. Индивидуальный раскрой по вашим размерам, доставка по всей России через транспортные компании.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/about" className="btn-outline">О компании</Link>
            <Link href="/dlya-mebelnyh-kompaniy" className="btn-outline">Для бизнеса</Link>
          </div>
        </div>
      </section>
    </>
  );
}
