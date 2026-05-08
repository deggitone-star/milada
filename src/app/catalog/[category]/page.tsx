// src/app/catalog/[category]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: `${category.description} Производство в Москве. Индивидуальный раскрой.`,
    alternates: {
      canonical: `${siteConfig.url}/catalog/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />

        <div className="container-site relative z-10 pb-12 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white/80">{category.title}</span>
          </nav>
          <h1 className="font-display font-light text-display-md text-white">
            {category.title}
          </h1>
          <p className="mt-3 text-white/60 max-w-lg">{category.description}</p>
        </div>
      </div>

      {/* Products */}
      <section className="section-py bg-white">
        <div className="container-site">
          <p className="text-sm text-brand-400 mb-8">
            {categoryProducts.length} {categoryProducts.length === 1 ? "позиция" : "позиций"}
          </p>
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {categoryProducts.map((product, i) => (
                <ProductCard key={product.slug} product={product} priority={i < 3} />
              ))}
            </div>
          ) : (
            <p className="text-brand-400">В этой категории пока нет товаров.</p>
          )}
        </div>
      </section>
    </>
  );
}
