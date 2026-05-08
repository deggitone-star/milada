// src/components/sections/CategoriesSection.tsx
import { categories } from "@/data/categories";
import CategoryCard from "@/components/catalog/CategoryCard";

export default function CategoriesSection() {
  return (
    <section className="section-py bg-brand-50">
      <div className="container-site">
        <div className="mb-12 lg:mb-16">
          <p className="section-label mb-3">Материалы</p>
          <h2 className="heading-section">
            Четыре типа<br />
            <em className="not-italic text-accent">фасадов</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
