import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  // SEO-оптимизированный alt с ключевыми запросами
  const altText = `Мебельный фасад ${product.title}${product.material ? ` — ${product.material}` : ""} от производителя MILADA Ульяновск`;

  return (
    <Link
      href={`/catalog/${product.category}/${product.slug}`}
      className="group block"
      title={`Фасад ${product.title} — MILADA`}
    >
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
        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {product.new && (
            <span className="bg-mint text-ink text-[10px] font-semibold px-2 py-1 rounded-pill tracking-wider uppercase">
              Новинка
            </span>
          )}
          {product.featured && !product.new && (
            <span className="bg-ink text-white text-[10px] font-semibold px-2 py-1 rounded-pill tracking-wider uppercase">
              Хит
            </span>
          )}
        </div>
      </div>

      <div className="pt-3">
        <h3 className="text-sm font-medium text-ink group-hover:text-mint-dark transition-colors leading-tight">
          {product.title}
        </h3>
        {product.material && (
          <p className="mt-1 text-xs text-ink-subtle">{product.material}</p>
        )}
      </div>
    </Link>
  );
}
