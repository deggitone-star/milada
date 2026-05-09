import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const altText = `Мебельный фасад ${product.title}${product.material ? ` — ${product.material}` : ""} от производителя MILADA Ульяновск`;

  // Категория для технической пометки
  const categoryLabel: Record<string, string> = {
    "pvh-standart":   "Серия Стандарт",
    "pvh-premium":    "Серия Премиум",
    "plastic":        "HPL",
    "patina":         "Премиум",
    "enamel":         "Эмаль",
    "stone":          "Камень",
    "door-panels":    "Дверная панель",
    "kupe":           "Купе",
    "radius":         "Радиусный",
    "decor-elements": "Декоративный",
    "headboards":     "Спинка",
    "decors":         "Накладка",
  };

  return (
    <Link
      href={`/catalog/${product.category}/${product.slug}`}
      className="group block"
      title={`Фасад ${product.title} — MILADA`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-bg-alt border border-line rounded-soft overflow-hidden group-hover:border-ink-subtle group-hover:shadow-lift transition-all duration-200">
        <Image
          src={product.image}
          alt={altText}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
          quality={85}
        />
      </div>

      {/* Info — техническая, B2B-стиль */}
      <div className="pt-3">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-subtle">
          {categoryLabel[product.category] || ""}
        </p>
        <h3 className="mt-1 text-sm font-medium text-ink group-hover:text-mint-dark transition-colors leading-tight">
          {product.title}
        </h3>
        {product.material && (
          <p className="mt-1 text-xs text-ink-subtle">{product.material}</p>
        )}
      </div>
    </Link>
  );
}
