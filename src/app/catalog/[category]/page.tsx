import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.description} Производство, индивидуальный раскрой.`,
    alternates: { canonical: `${siteConfig.url}/catalog/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <>
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <nav className="flex items-center gap-2 text-xs text-ink-subtle mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-ink transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-ink-muted">{category.title}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="text-mint-dark shrink-0">
              <CategoryIcon slug={category.slug} className="w-12 h-12" />
            </div>
            <div>
              <h1 className="h1">{category.title}</h1>
              <p className="mt-3 text-ink-muted max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="text-sm text-ink-subtle mb-6">
            {items.length} {items.length === 1 ? "позиция" : items.length < 5 ? "позиции" : "позиций"}
          </p>
          {items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {items.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
            </div>
          ) : (
            <p className="text-ink-subtle">В этой категории пока нет товаров.</p>
          )}
        </div>
      </section>
    </>
  );
}
