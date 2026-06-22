"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "@/components/ui/Lightbox";

interface PhotoSliderProps {
  images: LightboxImage[];
}

export default function PhotoSlider({ images }: PhotoSliderProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative">
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-3 lg:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1"
        >
          {images.map((img, i) => (
            <button
              key={i}
              data-card
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative shrink-0 snap-start w-[82%] sm:w-[48%] lg:w-[32%] aspect-[4/3] overflow-hidden rounded-soft bg-bg-alt cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 32vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Стрелки (десктоп) */}
        <button
          type="button"
          aria-label="Назад"
          onClick={() => scrollByCard(-1)}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md items-center justify-center text-ink hover:bg-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          type="button"
          aria-label="Вперёд"
          onClick={() => scrollByCard(1)}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md items-center justify-center text-ink hover:bg-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
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
