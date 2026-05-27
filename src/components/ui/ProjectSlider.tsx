"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

export interface Project {
  id: string;
  title: string;
  description?: string;
  photos: { src: string; alt: string }[];
}

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const project = projects[activeProject];

  const goNext = () => {
    setActivePhoto((p) => (p + 1) % project.photos.length);
  };
  const goPrev = () => {
    setActivePhoto((p) => (p - 1 + project.photos.length) % project.photos.length);
  };

  const selectProject = (i: number) => {
    setActiveProject(i);
    setActivePhoto(0);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8">
        {/* Главное фото */}
        <div className="space-y-3">
          <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-bg-alt rounded-soft overflow-hidden group">
            <button
              type="button"
              onClick={() => setLightbox(project.photos[activePhoto])}
              className="absolute inset-0 cursor-zoom-in"
              aria-label="Открыть фото"
            >
              <Image
                src={project.photos[activePhoto].src}
                alt={project.photos[activePhoto].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-opacity duration-300"
                priority={activeProject === 0 && activePhoto === 0}
              />
            </button>

            {/* Навигация по фото проекта */}
            {project.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lift flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Предыдущее фото"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lift flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Следующее фото"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Счётчик */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                  {activePhoto + 1} / {project.photos.length}
                </div>
              </>
            )}

            {/* Подпись проекта */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-soft bg-white/90 backdrop-blur-sm">
              <p className="text-xs font-medium text-ink">{project.title}</p>
            </div>
          </div>

          {/* Точки навигации по фото в проекте */}
          {project.photos.length > 1 && (
            <div className="flex justify-center gap-1.5">
              {project.photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePhoto(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activePhoto ? "w-6 bg-ink" : "w-1.5 bg-ink-subtle hover:bg-ink-muted"
                  }`}
                  aria-label={`Фото ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Описание проекта */}
          {project.description && (
            <p className="text-sm text-ink-muted leading-relaxed mt-2">{project.description}</p>
          )}
        </div>

        {/* Список проектов справа */}
        <div className="lg:max-h-[560px] lg:overflow-y-auto" ref={thumbsRef}>
          <p className="label mb-3 hidden lg:block">Проекты</p>
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => selectProject(i)}
                className={`relative aspect-square rounded-soft overflow-hidden border-2 transition-all ${
                  i === activeProject
                    ? "border-ink shadow-lift"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={p.photos[0].src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 33vw, 160px"
                  className="object-cover"
                />
                {p.photos.length > 1 && (
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
                    {p.photos.length}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
