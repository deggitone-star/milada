import Link from "next/link";
import CategoryIcon from "@/components/ui/CategoryIcon";
import type { Category } from "@/types";
import { products } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const count = products.filter(p => p.category === category.slug).length;

  return (
    <Link
      href={`/catalog/${category.slug}`}
      className="group bg-bg-alt border border-line rounded-lg p-6 hover:border-ink transition-all duration-200 block"
    >
      <div className="text-ink-muted group-hover:text-mint-dark transition-colors">
        <CategoryIcon slug={category.slug} className="w-10 h-10" />
      </div>
      <h3 className="mt-6 text-base font-medium text-ink leading-tight">{category.title}</h3>
      <p className="mt-1 text-xs text-ink-subtle">
        {count} {count === 1 ? "позиция" : count < 5 ? "позиции" : "позиций"}
      </p>
    </Link>
  );
}
