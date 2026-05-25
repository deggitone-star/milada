import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { getCategorySeo } from "@/data/category-seo";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/SchemaOrg";
import { tadzhCollections } from "@/data/tadzhCollections";

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  // plastic has its own dedicated page at /catalog/plastic/page.tsx
  return categories.filter((c) => c.slug !== "plastic").map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const seo = getCategorySeo(slug);

  return {
    title: seo?.metaTitle || category.title,
    description: seo?.metaDescription || category.description,
    alternates: { canonical: `${siteConfig.url}/catalog/${slug}` },
    openGraph: {
      title: seo?.metaTitle || category.title,
      description: seo?.metaDescription || category.description,
      url: `${siteConfig.url}/catalog/${slug}`,
      images: [{ url: category.image, width: 1200, height: 630, alt: category.title }],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);
  const seo = getCategorySeo(slug);
  const heroImage = items[0]?.image || category.image;

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каталог", url: `${siteConfig.url}/catalog` },
    { name: category.title, url: `${siteConfig.url}/catalog/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        title={seo?.h1 || category.title}
        description={seo?.metaDescription || category.description}
        url={`${siteConfig.url}/catalog/${slug}`}
        itemCount={items.length}
      />

      {/* HERO BANNER */}
      <section
        className="relative overflow-hidden bg-bg-dark"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${category.title} — производство MILADA Ульяновск`}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/60" />
        </div>

        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-mint blur-3xl opacity-10 pointer-events-none"
        />

        <div className="container-site relative z-10 py-16 lg:py-24">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white/80">{category.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-soft bg-mint/15 backdrop-blur-sm flex items-center justify-center text-mint shrink-0">
                  <CategoryIcon slug={category.slug} className="w-8 h-8" />
                </div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint">Каталог</p>
              </div>

              <h1 className="text-h1 font-medium text-white leading-tight max-w-2xl">
                {seo?.h1 || category.title}
              </h1>
              <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
                {seo?.intro || category.description}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-soft px-5 py-4 shrink-0 lg:self-end">
              <p className="text-3xl font-medium text-white">{items.length}</p>
              <p className="text-xs text-white/60 mt-0.5">
                {items.length === 1 ? "позиция" : items.length < 5 ? "позиции" : "позиций"} в каталоге
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* КОЛЛЕКЦИИ ДЕКОРОВ — только для пластика */}
      {slug === "plastic" && (
        <section className="section-py bg-bg-alt border-y border-line">
          <div className="container-site">
            <p className="label mb-3">Коллекции декоров</p>
            <h2 className="h2 mb-3">Выберите коллекцию пластиковых фасадов</h2>
            <p className="text-ink-muted mb-8 max-w-2xl">
              4 коллекции декоров HPL-пластика: однотонные, дерево, камень, мрамор, фантазийные узоры. Все декоры доступны для производства фасадов.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tadzhCollections.map((col) => (
                <Link
                  key={col.slug}
                  href={`/catalog/plastic/${col.slug}`}
                  className="group block rounded-soft border border-line overflow-hidden hover:border-ink hover:shadow-lift transition-all duration-200"
                >
                  <div className="relative aspect-[4/3] bg-bg">
                    <Image
                      src={col.heroExample}
                      alt={`Фасады ${col.title}`}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={75}
                    />
                  </div>
                  <div className="p-5 bg-bg">
                    <h3 className="text-base font-medium text-ink group-hover:text-mint-dark transition-colors">
                      {col.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted line-clamp-2">{col.subtitle}</p>
                    <p className="mt-3 text-xs font-medium text-mint-dark">Смотреть декоры →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS */}
      <section className="section-py bg-bg">
        <div className="container-site">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {items.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
            </div>
          ) : (
            <p className="text-ink-subtle">В этой категории пока нет товаров.</p>
          )}
        </div>
      </section>

      {/* SEO TEXT */}
      {seo && (
        <section className="section-py bg-bg-alt border-t border-line">
          <div className="container-site max-w-4xl">
            <h2 className="h2 mb-8">О категории «{category.title}»</h2>

            <div className="space-y-5 text-ink-muted leading-relaxed">
              {seo.fullText.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {seo.features && seo.features.length > 0 && (
              <>
                <h3 className="h3 mt-10 mb-5">Преимущества</h3>
                <ul className="space-y-2.5 text-ink-muted">
                  {seo.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-mint-dark shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-10 pt-8 border-t border-line flex flex-wrap gap-3">
              <Link href="/contacts" className="btn-primary">
                Запросить расчёт
              </Link>
              <Link href="/catalog" className="btn-outline">
                Все категории
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
