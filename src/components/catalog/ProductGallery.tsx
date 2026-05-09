// src/components/catalog/ProductGallery.tsx
// Галерея фото товара — основное + интерьер + дополнительные
"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: { src: string; alt: string; type: "product" | "interior" | "gallery" }[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-bg border border-line rounded-soft overflow-hidden">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "transition-opacity duration-300",
              img.type === "interior" ? "object-cover" : "object-contain p-6",
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            priority={i === 0}
            quality={90}
          />
        ))}

        {/* Подпись типа фото */}
        {images[active].type === "interior" && (
          <span className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1.5 rounded-pill tracking-wider uppercase">
            Пример в интерьере
          </span>
        )}
      </div>

      {/* Thumbnails — показываем только если фото больше одного */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 mt-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "relative aspect-square bg-bg border rounded-soft overflow-hidden transition-all duration-200",
                i === active
                  ? "border-mint-dark ring-2 ring-mint/30"
                  : "border-line hover:border-ink-subtle"
              )}
              aria-label={`Фото ${i + 1}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="120px"
                className={img.type === "interior" ? "object-cover" : "object-contain p-2"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
