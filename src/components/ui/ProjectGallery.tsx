"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "@/components/ui/Lightbox";
import type { GalleryProject } from "@/data/gallery";

interface ProjectGalleryProps {
  projects: GalleryProject[];
}

// Колонки внутри проекта зависят от числа кадров:
// 1 — одиночный кадр (ограничен по ширине), 2 — пара рядом, 3+ — сетка.
function colsClass(count: number): string {
  if (count === 1) return "grid-cols-1 sm:max-w-2xl";
  if (count === 2) return "grid-cols-2";
  return "grid-cols-2 sm:grid-cols-3";
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Плоский список всех фото — чтобы лайтбокс листал сквозь все проекты.
  const allPhotos: LightboxImage[] = projects.flatMap((p) => p.photos);

  // Стартовый глобальный индекс каждого проекта в плоском списке.
  let running = 0;
  const startIndex = projects.map((p) => {
    const start = running;
    running += p.photos.length;
    return start;
  });

  return (
    <>
      <div className="space-y-12 lg:space-y-16">
        {projects.map((project, pi) => (
          <div key={pi}>
            {/* Заголовок объекта */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="label">{String(pi + 1).padStart(2, "0")}</span>
              <h2 className="text-h3 font-medium text-ink">{project.title}</h2>
            </div>

            {/* Кадры объекта */}
            <div className={`grid ${colsClass(project.photos.length)} gap-2 lg:gap-3`}>
              {project.photos.map((img, i) => {
                const globalIndex = startIndex[pi] + i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative aspect-[4/3] overflow-hidden rounded-soft bg-bg-alt group cursor-zoom-in"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
