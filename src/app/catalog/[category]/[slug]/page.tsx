// src/app/catalog/[category]/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `${siteConfig.url}/catalog/${product.category}/${product.slug}`,
    },
    openGraph: {
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getProductsByCategory(categorySlug)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <div style={{ paddingTop: "var(--header-h)" }}>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-brand-100">
          <div className="container-site py-4">
            <nav className="flex items-center gap-2 text-xs text-brand-400">
              <Link href="/" className="hover:text-brand-950 transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/catalog" className="hover:text-brand-950 transition-colors">Каталог</Link>
              <span>/</span>
              {category && (
                <>
                  <Link href={`/catalog/${categorySlug}`} className="hover:text-brand-950 transition-colors">
                    {category.title}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-brand-700">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Product */}
        <section className="bg-white">
          <div className="container-site py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-brand-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {product.new && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent text-white text-xs font-sans font-medium px-4 py-1.5 tracking-wide">
                      Новинка
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <p className="section-label mb-4">{category?.title}</p>
                <h1 className="font-display font-light text-display-md text-brand-950">
                  {product.title}
                </h1>

                {product.price && (
                  <p className="mt-4 text-2xl font-sans font-light text-accent">
                    {product.price}
                  </p>
                )}

                <p className="mt-6 text-brand-600 leading-relaxed">{product.description}</p>

                {/* Specs */}
                <dl className="mt-8 space-y-4 border-t border-brand-100 pt-8">
                  {product.material && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-brand-400">Материал</dt>
                      <dd className="text-sm text-brand-950 text-right">{product.material}</dd>
                    </div>
                  )}
                  {product.sizes && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-brand-400">Размеры</dt>
                      <dd className="text-sm text-brand-950 text-right">{product.sizes}</dd>
                    </div>
                  )}
                  {product.finishes && product.finishes.length > 0 && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-sm text-brand-400">Варианты отделки</dt>
                      <dd className="text-sm text-brand-950 text-right">{product.finishes.join(", ")}</dd>
                    </div>
                  )}
                </dl>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contacts" className="btn-primary">
                    Заказать фасад
                  </Link>
                  <Link href="/catalog" className="btn-ghost">
                    ← Все фасады
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-py bg-brand-50">
            <div className="container-site">
              <p className="section-label mb-8">Похожие фасады</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
