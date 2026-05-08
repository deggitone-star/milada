// src/app/catalog/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import CategoryCard from "@/components/catalog/CategoryCard";
import ProductCard from "@/components/catalog/ProductCard";

export const metadata: Metadata = {
  title: "Каталог мебельных фасадов",
  description:
    "Полный каталог мебельных фасадов: эмаль, шпон, HPL-пластик, стекло. Индивидуальный раскрой, любой цвет RAL. Производство в Москве.",
  alternates: {
    canonical: `${siteConfig.url}/catalog`,
  },
};

export default function CatalogPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="bg-white border-b border-brand-100"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="container-site py-12 lg:py-16">
          <p className="section-label mb-3">Каталог</p>
          <h1 className="heading-section">
            Все фасады
          </h1>
          <p className="mt-4 text-brand-500 max-w-xl">
            {products.length} позиций в {categories.length} категориях. Собственное производство, точный раскрой, доставка по России.
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="section-py bg-brand-50">
        <div className="container-site">
          <p className="section-label mb-8">По материалу</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* All products */}
      <section className="section-py bg-white">
        <div className="container-site">
          <p className="section-label mb-8">Все позиции</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
