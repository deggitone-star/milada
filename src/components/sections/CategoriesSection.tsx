import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { products } from "@/data/products";

export default function CategoriesSection() {
  return (
    <section className="section-py bg-bg">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <p className="label mb-3">Каталог</p>
            <h2 className="h2">Категории фасадов</h2>
          </div>
          <Link href="/catalog" className="btn-ghost shrink-0">
            Все категории
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((cat) => {
            const count = products.filter(p => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group bg-bg-alt border border-line rounded-lg p-6 hover:border-ink transition-all duration-200"
              >
                <div className="text-ink-muted group-hover:text-mint-dark transition-colors">
                  <CategoryIcon slug={cat.slug} className="w-10 h-10" />
                </div>
                <h3 className="mt-6 text-base font-medium text-ink leading-tight">{cat.title}</h3>
                <p className="mt-1 text-xs text-ink-subtle">{count} {count === 1 ? "позиция" : count < 5 ? "позиции" : "позиций"}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
