import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";

interface Props { params: Promise<{ category: string; slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `${siteConfig.url}/catalog/${product.category}/${product.slug}` },
    openGraph: { images: [{ url: product.image, width: 800, height: 600 }] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getProductsByCategory(categorySlug).filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <div style={{ paddingTop: "var(--header-h)" }}>
        <div className="bg-bg-alt border-b border-line">
          <div className="container-site py-4">
            <nav className="flex items-center gap-2 text-xs text-ink-subtle">
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

        <section className="bg-bg-alt">
          <div className="container-site py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="relative aspect-[3/4] bg-bg border border-line rounded-soft overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                  priority
                />
                {product.new && (
                  <span className="absolute top-4 left-4 bg-mint text-ink text-[10px] font-semibold px-3 py-1.5 rounded-pill tracking-wider uppercase">
                    Новинка
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                {category && <p className="label mb-4">{category.title}</p>}
                <h1 className="h1">{product.title}</h1>

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
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/contacts" className="btn-primary">Заказать фасад</Link>
                  <Link href="/catalog" className="btn-ghost">← Каталог</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-py bg-bg border-t border-line">
            <div className="container-site">
              <p className="label mb-6">Похожие фасады</p>
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
