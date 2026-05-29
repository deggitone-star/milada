"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "@/components/ui/Lightbox";

interface CollageGalleryProps {
  images: LightboxImage[];
  /** Индекс фото, которые будут крупными (span 2). По умолчанию первое. */
  featured?: number[];
}

export default function CollageGallery({ images, featured = [0] }: CollageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4">
        {images.map((img, i) => {
          const isFeatured = featured.includes(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`relative overflow-hidden rounded-soft bg-bg-alt group cursor-zoom-in ${
                isFeatured ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              {/* Иконка зума */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
