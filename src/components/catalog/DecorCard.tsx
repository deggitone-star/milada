// src/components/catalog/DecorCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface DecorCardProps {
  name: string;
  article: string;
  imageSrc: string;
  surface?: string;
  isNew?: boolean;
}

export default function DecorCard({
  name,
  article,
  imageSrc,
  surface,
  isNew,
}: DecorCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = imageSrc.length > 0;

  return (
    <div className="group relative">
      {/* Текстура */}
      <div className="relative aspect-square bg-bg border border-line rounded-soft overflow-hidden group-hover:border-ink-subtle group-hover:shadow-lift transition-all duration-200">
        {hasImage && !imgError ? (
          <Image
            src={imageSrc}
            alt={`Декор ${name} (арт. ${article})`}
            fill
            sizes="(max-width: 480px) 33vw, (max-width: 768px) 25vw, (max-width: 1280px) 16vw, 140px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={80}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink-subtle text-[11px]">
            Фото
          </div>
        )}

        {isNew && (
          <span className="absolute top-1.5 left-1.5 bg-mint text-mint-dark text-[9px] font-semibold px-1.5 py-0.5 rounded-pill uppercase tracking-wider leading-none">
            New
          </span>
        )}
      </div>

      {/* Инфо */}
      <div className="mt-2">
        <p className="text-[13px] font-medium text-ink leading-tight line-clamp-2 group-hover:text-mint-dark transition-colors">
          {name}
        </p>
        <span className="mt-0.5 block text-[11px] text-ink-subtle font-mono">
          арт. {article}
        </span>
        {surface && (
          <span className="mt-0.5 block text-[10px] text-ink-subtle leading-snug">
            {surface}
          </span>
        )}
      </div>
    </div>
  );
}
