import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { products } from "@/data/products";
import { plasticHPL, getTotalDecorsCount } from "@/data/materials";

const plasticDecorsCount = getTotalDecorsCount(plasticHPL);

export default function CategoriesSection() {
  return (
    <section className="section-py bg-bg">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <p className="label mb-3">Производственный каталог</p>
            <h2 className="h2">Типы фасадов и материалов</h2>
            <p className="mt-4 text-base text-ink-muted max-w-xl leading-relaxed">
              {categories.length} категорий продукции для мебельных производств, салонов и дилеров.
            </p>
          </div>
          <Link href="/catalog" className="btn-ghost shrink-0 hidden sm:inline-flex">
            Все категории
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((cat) => {
            const isPlastic = cat.slug === "plastic";
            const count = isPlastic ? plasticDecorsCount : products.filter(p => p.category === cat.slug).length;
            const unit = isPlastic
              ? (count === 1 ? "декор" : count < 5 ? "декора" : "декоров")
              : (count === 1 ? "модель" : count < 5 ? "модели" : "моделей");
            return (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group bg-bg-alt border border-line rounded-soft p-6 hover:border-ink hover:shadow-lift transition-all duration-200"
              >
                <div className="text-ink-muted group-hover:text-mint-dark transition-colors">
                  <CategoryIcon slug={cat.slug} className="w-10 h-10" />
                </div>
                <h3 className="mt-6 text-base font-medium text-ink leading-tight">{cat.title}</h3>
                <p className="mt-1 text-xs text-ink-subtle">
                  {count} {unit}
                </p>
              </Link>
            );
          })}

          {/* Технические параметры — отдельная карточка */}
          <Link
            href="/tekhnicheskie-parametry"
            className="group bg-bg-alt border border-line rounded-soft p-6 hover:border-ink hover:shadow-lift transition-all duration-200"
          >
            <div className="text-ink-muted group-hover:text-mint-dark transition-colors">
              <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mt-6 text-base font-medium text-ink leading-tight">Технические параметры</h3>
            <p className="mt-1 text-xs text-ink-subtle">Схемы и размеры</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
