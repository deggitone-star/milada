import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";
import ProductGallery from "@/components/catalog/ProductGallery";
import { BreadcrumbSchema, ProductSchema } from "@/components/seo/SchemaOrg";

interface Props { params: Promise<{ category: string; slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const category = getCategoryBySlug(product.category);
  const categoryName = category?.title || "";

  return {
    title: `Фасад ${product.title} — ${categoryName} | MILADA Ульяновск`,
    description: `${product.title} — ${product.description.slice(0, 140)} Производство MILADA, Ульяновск. ☎ +7 (8422) 27-82-02`,
    alternates: { canonical: `${siteConfig.url}/catalog/${product.category}/${product.slug}` },
    openGraph: {
      title: `${product.title} — мебельный фасад MILADA`,
      description: product.description,
      url: `${siteConfig.url}/catalog/${product.category}/${product.slug}`,
      images: [{ url: product.image, width: 800, height: 1000, alt: `Мебельный фасад ${product.title} от производителя MILADA` }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getProductsByCategory(categorySlug).filter((p) => p.slug !== slug).slice(0, 4);

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каталог", url: `${siteConfig.url}/catalog` },
    ...(category ? [{ name: category.title, url: `${siteConfig.url}/catalog/${categorySlug}` }] : []),
    { name: product.title, url: `${siteConfig.url}/catalog/${categorySlug}/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema product={product} category={category} />

      <div style={{ paddingTop: "var(--header-h)" }}>
        {/* Breadcrumb */}
        <div className="bg-bg-alt border-b border-line">
          <div className="container-site py-4">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-ink-subtle">
              <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/catalog" className="hover:text-ink transition-colors">Каталог</Link>
              <span>/</span>
              {category && (
                <>
                  <Link href={`/catalog/${categorySlug}`} className="hover:text-ink transition-colors">
                    {category.title}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-ink-muted">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Product */}
        <section className="bg-bg-alt">
          <div className="container-site py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <ProductGallery
                title={product.title}
                images={[
                  {
                    src: product.image,
                    alt: `Мебельный фасад ${product.title} от производителя MILADA в Ульяновске${product.material ? ` — ${product.material}` : ""}`,
                    type: "product",
                  },
                  ...(product.interiorImage
                    ? [{
                        src: product.interiorImage,
                        alt: `Кухня с фасадом ${product.title} — пример в интерьере, MILADA`,
                        type: "interior" as const,
                      }]
                    : []),
                  ...(product.gallery?.map((src, i) => ({
                    src,
                    alt: `${product.title} — фото ${i + 2}`,
                    type: "gallery" as const,
                  })) || []),
                ]}
              />

              <div className="flex flex-col">
                {category && <p className="label mb-4">{category.title}</p>}
                <h1 className="h1">Фасад {product.title}</h1>

                {product.price && (
                  <p className="mt-4 text-2xl font-medium text-mint-dark">{product.price}</p>
                )}

                <p className="mt-6 text-ink-muted leading-relaxed">{product.description}</p>

                <dl className="mt-8 space-y-3 border-t border-line pt-8">
                  {product.material && (
                    <div className="flex justify-between gap-4 text-sm">
                      <dt className="text-ink-subtle">Материал</dt>
                      <dd className="text-ink text-right">{product.material}</dd>
                    </div>
                  )}
                  {product.sizes && (
                    <div className="flex justify-between gap-4 text-sm">
                      <dt className="text-ink-subtle">Размеры</dt>
                      <dd className="text-ink text-right">{product.sizes}</dd>
                    </div>
                  )}
                  {product.finishes && product.finishes.length > 0 && (
                    <div className="flex justify-between gap-4 text-sm">
                      <dt className="text-ink-subtle">Отделка</dt>
                      <dd className="text-ink text-right">{product.finishes.join(", ")}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className="text-ink-subtle">Производитель</dt>
                    <dd className="text-ink text-right">MILADA, Ульяновск</dd>
                  </div>
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
                  <Link href={`/catalog/${categorySlug}`} className="btn-ghost">← В категорию</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-py bg-bg border-t border-line">
            <div className="container-site">
              <h2 className="h3 mb-6">Похожие фасады из категории «{category?.title}»</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {related.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
