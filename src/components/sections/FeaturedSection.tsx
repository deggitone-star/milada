import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";

export default function FeaturedSection() {
  const products = getFeaturedProducts().slice(0, 8);

  return (
    <section className="section-py bg-bg-alt border-y border-line">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <p className="label mb-3">Популярное</p>
            <h2 className="h2">Хиты каталога</h2>
          </div>
          <Link href="/catalog" className="btn-ghost shrink-0">
            Весь каталог
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
