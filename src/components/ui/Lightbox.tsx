// src/components/ui/Lightbox.tsx
"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const current = images[index];
  const hasMany = images.length > 1;

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMany) goNext();
      if (e.key === "ArrowLeft" && hasMany) goPrev();
    },
    [onClose, goNext, goPrev, hasMany]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!current) return null;

  const fullResSrc = current.src.replace(/\/w_\d+/, "/w_1600").replace(/\/q_auto/, "/q_90");

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Закрыть */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Закрыть"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Назад */}
      {hasMany && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Предыдущее фото"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Вперёд */}
      {hasMany && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Следующее фото"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Счётчик + подпись */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20 pointer-events-none px-4">
        {hasMany && (
          <p className="text-white/50 text-xs mb-1">{index + 1} / {images.length}</p>
        )}
        <p className="text-white/80 text-sm">{current.alt}</p>
      </div>

      {/* Картинка */}
      <div
        className="relative w-[90vw] h-[82vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={fullResSrc}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="90vw"
          quality={90}
          priority
        />
      </div>
    </div>
  );
}
