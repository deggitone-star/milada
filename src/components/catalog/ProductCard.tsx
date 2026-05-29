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

        {/* Бейдж — есть фото в интерьере */}
        {product.interiorImage && (
          <span className="absolute top-3 left-3 bg-ink/90 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-pill tracking-wider uppercase flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            В интерьере
          </span>
        )}
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
