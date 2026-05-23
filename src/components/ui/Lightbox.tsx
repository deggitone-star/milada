// src/components/ui/Lightbox.tsx
"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  // Для полного разрешения — убираем w_400 из Cloudinary URL
  const fullResSrc = src.replace(/\/w_\d+/, "/w_1600").replace(/\/q_auto/, "/q_90");

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      {/* Кнопка закрытия */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Закрыть"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Подпись */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10 pointer-events-none">
        <p className="text-white/80 text-sm">{alt}</p>
      </div>

      {/* Картинка */}
      <div
        className="relative w-[90vw] h-[90vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={fullResSrc}
          alt={alt}
          fill
          className="object-contain cursor-zoom-out"
          sizes="90vw"
          quality={90}
          priority
          onClick={onClose}
        />
      </div>
    </div>
  );
}
