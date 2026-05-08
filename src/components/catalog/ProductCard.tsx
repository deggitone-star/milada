// src/components/catalog/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link
      href={`/catalog/${product.category}/${product.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="product-card-img aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {product.new && (
            <span className="bg-accent text-white text-xs font-sans font-medium px-3 py-1 tracking-wide">
              Новинка
            </span>
          )}
          {product.featured && !product.new && (
            <span className="bg-brand-950 text-white text-xs font-sans font-medium px-3 py-1 tracking-wide">
              Хит
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <h3 className="font-display text-xl font-light text-brand-950 group-hover:text-accent transition-colors duration-200">
          {product.title}
        </h3>
        {product.material && (
          <p className="mt-1 text-sm text-brand-500 font-sans">{product.material}</p>
        )}
        {product.price && (
          <p className="mt-2 text-sm font-medium font-sans text-brand-700">{product.price}</p>
        )}
      </div>
    </Link>
  );
}
