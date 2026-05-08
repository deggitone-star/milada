// src/components/sections/FeaturedSection.tsx
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";

export default function FeaturedSection() {
  const products = getFeaturedProducts();

  return (
    <section className="section-py bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="section-label mb-3">Коллекция</p>
            <h2 className="heading-section">
              Популярные<br />
              <em className="not-italic text-accent">фасады</em>
            </h2>
          </div>
          <Link href="/catalog" className="btn-ghost shrink-0">
            Весь каталог →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
