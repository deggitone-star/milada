// src/components/catalog/ProductGallery.tsx
// Галерея фото товара — основное + интерьер + дополнительные.
// Клик по главному фото открывает полноэкранный просмотр (Lightbox).
"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";

interface ProductGalleryProps {
  images: { src: string; alt: string; type: "product" | "interior" | "gallery" }[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const lightboxImages = images.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <div>
      {/* Главное фото — клик открывает фуллскрин */}
      <button
        type="button"
        onClick={() => setLightboxIndex(active)}
        aria-label={`Открыть фото «${title}» на весь экран`}
        className="relative aspect-[3/4] w-full bg-bg border border-line rounded-soft overflow-hidden cursor-zoom-in group"
      >
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

        {/* Иконка зума */}
        <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center text-ink transition-all opacity-0 group-hover:opacity-100 pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        </span>

        {/* Подпись типа фото */}
        {images[active].type === "interior" && (
          <span className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1.5 rounded-pill tracking-wider uppercase">
            Пример в интерьере
          </span>
        )}
      </button>

      {/* Миниатюры — переключают активное фото */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 mt-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
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

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => { setLightboxIndex(i); setActive(i); }}
        />
      )}
    </div>
  );
}
