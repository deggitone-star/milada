import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import CategoryCard from "@/components/catalog/CategoryCard";
import ProductCard from "@/components/catalog/ProductCard";

export const metadata: Metadata = {
  title: "Каталог мебельных фасадов",
  description: "Полный каталог мебельных фасадов: ПВХ, эмаль, HPL-пластик, камень, патина. Индивидуальный раскрой, любой цвет RAL.",
  alternates: { canonical: `${siteConfig.url}/catalog` },
};

export default function CatalogPage() {
  return (
    <>
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">Каталог</p>
          <h1 className="h1">Все фасады</h1>
          <p className="mt-4 text-ink-muted max-w-xl">
            {products.length} позиций в {categories.length} категориях. Собственное производство, индивидуальный раскрой.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-6">По материалу</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {categories.map((cat) => <CategoryCard key={cat.slug} category={cat} />)}
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site">
          <p className="label mb-6">Все позиции</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
          </div>
        </div>
      </section>
    </>
  );
}
