// src/components/ui/Lightbox.tsx
"use client";

import { useEffect, useCallback, useRef, useState } from "react";
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

  // свайп-состояние
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  // сбрасываем смещение при смене фото
  useEffect(() => {
    setDragX(0);
    setIsDragging(false);
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // если жест преимущественно горизонтальный — тянем фото
    if (Math.abs(dx) > Math.abs(dy)) {
      setDragX(dx);
    }
  };

  const onTouchEnd = () => {
    const threshold = 60; // px для смены фото
    if (hasMany && Math.abs(dragX) > threshold) {
      if (dragX < 0) goNext();
      else goPrev();
    } else {
      setDragX(0);
    }
    touchStartX.current = null;
    touchStartY.current = null;
    setIsDragging(false);
  };

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

      {/* Стрелки — только десктоп (на мобиле свайп) */}
      {hasMany && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Предыдущее фото"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}
      {hasMany && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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

      {/* Картинка — со свайпом */}
      <div
        className="relative w-[92vw] h-[80vh] max-w-5xl touch-pan-y"
        style={{
          transform: `translateX(${dragX}px)`,
          transition: isDragging ? "none" : "transform 0.25s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={fullResSrc}
          alt={current.alt}
          fill
          className="object-contain select-none pointer-events-none"
          sizes="92vw"
          quality={90}
          priority
          draggable={false}
        />
      </div>

      {/* Точки-индикаторы на мобиле */}
      {hasMany && (
        <div className="md:hidden absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
