import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { plasticHPL, getTotalDecorsCount, getCollectionDecorsCount } from "@/data/materials";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/SchemaOrg";
import DecorGrid from "@/components/catalog/DecorGrid";

const totalDecors = getTotalDecorsCount(plasticHPL);

export const metadata: Metadata = {
  title: "Каталог пластика HPL — декоры для мебельных фасадов | MILADA Ульяновск",
  description: `${totalDecors} декоров пластика HPL для мебельных фасадов: дерево, мрамор, камень, однотонные, фантазийные. Коллекции Индия, Wood & Stone, Классик, Прованс. Производство фасадов — MILADA, Ульяновск. ☎ +7 (8422) 27-82-02`,
  alternates: { canonical: `${siteConfig.url}/materialy/plastik-hpl` },
  keywords: [
    "пластик hpl декоры", "каталог пластика hpl", "hpl пластик для фасадов",
    "декоры пластика для кухни", "пластик hpl купить ульяновск",
    "hpl пластик дерево мрамор камень", "мебельный пластик каталог",
  ],
};

export default function PlastikHplPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Материалы", url: `${siteConfig.url}/materialy` },
    { name: "Пластик HPL", url: `${siteConfig.url}/materialy/plastik-hpl` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        title="Каталог пластика HPL — декоры для мебельных фасадов"
        description={`${totalDecors} декоров пластика HPL от поставщика Тадж для мебельных фасадов MILADA`}
        url={`${siteConfig.url}/materialy/plastik-hpl`}
        itemCount={totalDecors}
      />

      {/* HERO */}
      <section className="bg-bg-dark" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-16 lg:py-24">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/materialy" className="hover:text-white transition-colors">Материалы</Link>
            <span>/</span>
            <span className="text-white/80">Пластик HPL</span>
          </nav>

          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
            Каталог материалов
          </p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Пластик HPL — каталог декоров
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            {totalDecors} декоров пластика высокого давления в 4 коллекциях: однотонные, суперматовые, древесные, каменные, фантазийные. Все декоры доступны для производства фасадов MILADA.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link
              href="/hpl-fasady"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
            >
              О фасадах HPL
            </Link>
          </div>
        </div>
      </section>

      {/* NAV — быстрые ссылки на коллекции */}
      <section className="bg-bg-alt border-b border-line sticky top-[76px] z-30">
        <div className="container-site py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {plasticHPL.collections.map((col) => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="shrink-0 text-sm font-medium text-ink-muted hover:text-ink px-4 py-2 rounded-pill border border-line hover:border-ink-subtle transition-all"
            >
              {col.title}
              <span className="ml-1.5 text-xs text-ink-subtle">{getCollectionDecorsCount(col)}</span>
            </a>
          ))}
        </div>
      </section>

      {/* КОЛЛЕКЦИИ — с фото декоров */}
      {plasticHPL.collections.map((collection, colIdx) => (
        <section
          key={collection.slug}
          id={collection.slug}
          className={colIdx % 2 === 0 ? "section-py bg-bg" : "section-py bg-bg-alt border-y border-line"}
          style={{ scrollMarginTop: "140px" }}
        >
          <div className="container-site">
            <div className="mb-10 max-w-3xl">
              <p className="label mb-3">Коллекция</p>
              <h2 className="h2">{collection.title}</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{collection.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-sm text-ink-subtle">
                  {getCollectionDecorsCount(collection)} декоров
                </span>
                <Link
                  href={`/catalog/plastic/${collectionUrlSlug(collection.slug)}`}
                  className="text-sm font-medium text-mint-dark hover:text-ink transition-colors"
                >
                  Страница коллекции →
                </Link>
              </div>
            </div>

            <DecorGrid
              subGroups={collection.subGroups}
              collectionSlug={collection.slug}
            />
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-py bg-bg-dark">
        <div className="container-site text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
            Выбрали декор?
          </p>
          <h2 className="text-h2 font-medium text-white mb-4">
            Закажите фасады HPL с любым декором
          </h2>
          <p className="text-white/60 mb-8">
            Все декоры из каталога доступны для производства мебельных фасадов. Индивидуальный раскрой, доставка по России.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/hpl-fasady" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Подробнее о HPL
            </Link>
            <Link href="/catalog/plastic" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог фасадов HPL
            </Link>
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Пластик HPL для мебельных фасадов в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA использует пластик HPL (High Pressure Laminate) от ведущего российского поставщика мебельных комплектующих — компании Тадж (Ульяновск). В каталоге представлено {totalDecors} декоров в четырёх коллекциях: Индия, Wood &amp; Stone, Классик и Прованс.
            </p>
            <p>
              Коллекция «Индия» включает однотонные матовые и суперматовые декоры — от нежных бежево-пудровых до глубоких карамельных оттенков. Суперматовые поверхности устойчивы к царапинам, не бликуют на солнце и не оставляют отпечатков пальцев. Серия «Сеговия» с рисунком под штукатурку идеально комбинируется с суперматовыми декорами.
            </p>
            <p>
              Коллекция «Wood &amp; Stone» — широкий ассортимент декоров под натуральное дерево (дуб, сосна, ель) и природный камень (мрамор, оникс, кварц). Каменные декоры особенно популярны для кухонных фасадов и мебели в современном стиле.
            </p>
            <p>
              Все декоры доступны для заказа на производстве MILADA в Ульяновске. Мы изготавливаем фасады МДФ с облицовкой HPL-пластиком по индивидуальным размерам с доставкой по России.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/catalog" className="btn-outline">Весь каталог фасадов</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** materials.ts slug → URL slug */
function collectionUrlSlug(materialSlug: string): string {
  const map: Record<string, string> = {
    indiya: "india",
    "wood-and-stone": "wood-stone",
    klassik: "classic",
    provans: "provence",
  };
  return map[materialSlug] || materialSlug;
}
