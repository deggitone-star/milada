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

  // Декоры (ПВХ-накладки, розетки) — товарные фото Bramek на тёмном фоне,
  // очень разных пропорций: розетка 90×90 квадратная, дверной декор 300×870 вытянутый.
  //
  // Цепочка трансформаций Cloudinary:
  //   e_make_transparent:N — вырезает однородный фон (N = агрессивность, 10–70)
  //   c_pad,ar_3:4,b_white — вписывает в единый холст 3:4, освободившееся заливает белым
  //
  // ⚙️ Если фон убрался не полностью — увеличь TRANSPARENT_LEVEL (50, 70).
  //    Если начало выедать светлые завитки самого декора — уменьши (20, 15).
  const TRANSPARENT_LEVEL = 30;

  const isDecor = product.category === "decors";
  const imageSrc =
    isDecor && product.image.includes("/image/upload/")
      ? product.image.replace(
          "/image/upload/",
          `/image/upload/e_make_transparent:${TRANSPARENT_LEVEL}/c_pad,ar_3:4,w_600,b_white,f_jpg,q_auto/`
        )
      : product.image;

  return (
    <Link
      href={`/catalog/${product.category}/${product.slug}`}
      className="group block"
      title={`Фасад ${product.title} — MILADA`}
    >
      {/* Image */}
      <div
        className={[
          "relative aspect-[3/4] border border-line rounded-soft overflow-hidden",
          "group-hover:border-ink-subtle group-hover:shadow-lift transition-all duration-200",
          isDecor ? "bg-white" : "bg-bg-alt",
        ].join(" ")}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={[
            "object-contain transition-transform duration-500 group-hover:scale-[1.03]",
            isDecor ? "p-0" : "p-3",
          ].join(" ")}
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
        {/* Ярлычок — материал/особенность (например, «Эмаль») */}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-mint text-ink text-[10px] font-semibold px-2.5 py-1 rounded-pill tracking-wider uppercase">
            {product.badge}
          </span>
        )}
      </div>
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
