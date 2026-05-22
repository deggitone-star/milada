import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { tadzhCollections, getCollectionBySlug } from "@/data/tadzhCollections";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

interface PageProps {
  params: Promise<{ collection: string }>;
}

export async function generateStaticParams() {
  return tadzhCollections.map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collection: slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) return {};
  return {
    title: col.seoTitle,
    description: col.seoDescription,
    alternates: { canonical: `${siteConfig.url}/catalog/plastic/${col.slug}` },
    keywords: [
      `пластиковые фасады ${col.title.toLowerCase()}`,
      `фасады hpl ${col.title.toLowerCase()}`,
      "пластиковые фасады для кухни",
      "hpl фасады купить ульяновск",
      "декоры пластиковых фасадов",
    ],
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { collection: slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) notFound();

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каталог", url: `${siteConfig.url}/catalog` },
    { name: "Пластиковые фасады HPL", url: `${siteConfig.url}/catalog/plastic` },
    { name: col.title, url: `${siteConfig.url}/catalog/plastic/${col.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-bg-dark relative overflow-hidden" style={{ paddingTop: "var(--header-h)" }}>
        {/* Фоновое фото */}
        <div className="absolute inset-0">
          <Image
            src={col.heroExample}
            alt={`Пластиковые фасады ${col.title} — пример в интерьере`}
            fill
            className="object-cover opacity-20"
            priority
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/70" />
        </div>

        <div className="container-site py-16 lg:py-24 relative z-10">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <Link href="/catalog/plastic" className="hover:text-white transition-colors">Пластиковые фасады</Link>
            <span>/</span>
            <span className="text-white/80">{col.title}</span>
          </nav>

          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
            Коллекция пластиковых фасадов
          </p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            {col.title} — {col.subtitle.toLowerCase()}
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            {col.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Рассчитать фасады</Link>
            <a
              href="#decors"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
            >
              Смотреть декоры ↓
            </a>
          </div>
        </div>
      </section>

      {/* ПРИМЕРЫ В ИНТЕРЬЕРЕ */}
      {col.examples.length > 1 && (
        <section className="section-py bg-bg">
          <div className="container-site">
            <p className="label mb-3">Варианты применения</p>
            <h2 className="h2 mb-8">Примеры в интерьере</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
              {col.examples.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-soft overflow-hidden border border-line bg-bg-alt">
                  <Image
                    src={src}
                    alt={`Фасады ${col.title} — пример ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* КАТАЛОГ ДЕКОРОВ */}
      <section id="decors" className="section-py bg-bg-alt border-y border-line" style={{ scrollMarginTop: "100px" }}>
        <div className="container-site">
          <p className="label mb-3">Каталог декоров</p>
          <h2 className="h2 mb-4">Декоры коллекции {col.title}</h2>
          <p className="text-sm text-ink-muted mb-8 max-w-2xl">
            Для выбора декора ориентируйтесь на реальные образцы. Цвета на экране могут незначительно отличаться от фактических. Перед заказом рекомендуем сверить декор с физическим образцом.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {col.catalogPages.map((src, i) => (
              <div key={i} className="relative rounded-soft overflow-hidden border border-line bg-white">
                <Image
                  src={src}
                  alt={`Декоры ${col.title} — страница ${i + 1}`}
                  width={680}
                  height={960}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-bg-dark">
        <div className="container-site text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
            Выбрали декор?
          </p>
          <h2 className="text-h2 font-medium text-white mb-4">
            Рассчитаем фасады в любом декоре
          </h2>
          <p className="text-white/60 mb-8">
            Назовите артикул декора из каталога — мы рассчитаем стоимость фасадов по вашим размерам. Индивидуальный раскрой, доставка по России.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Пластиковые фасады {col.title} — производство в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA производит мебельные фасады МДФ с облицовкой HPL-пластиком коллекции {col.title}. Все декоры из каталога доступны для заказа. Изготовление по индивидуальным размерам, доставка по Ульяновску и России.
            </p>
            <p>
              Фасады HPL отличаются абсолютной влагостойкостью, устойчивостью к царапинам и выгоранию. Срок службы более 20 лет. Подходят для кухонь, ванных, офисной мебели, кафе и ресторанов.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/catalog/plastic" className="btn-outline">Все пластиковые фасады</Link>
          </div>
        </div>
      </section>
    </>
  );
}
