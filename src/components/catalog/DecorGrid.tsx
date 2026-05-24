// src/components/catalog/DecorGrid.tsx
import type { SubGroup } from "@/data/materials";
import { getDecorSrc } from "@/lib/decor-images";
import DecorCard from "./DecorCard";

interface DecorGridProps {
  subGroups: SubGroup[];
  collectionSlug: string; // slug из materials.ts (indiya, wood-and-stone…)
}

export default function DecorGrid({
  subGroups,
  collectionSlug,
}: DecorGridProps) {
  return (
    <div className="space-y-14 lg:space-y-20">
      {subGroups.map((sg, idx) => (
        <div key={idx}>
          {/* ── Заголовок подгруппы ── */}
          <div className="mb-6 pb-4 border-b border-line">
            <h3 className="h3">{sg.title}</h3>
            <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-ink-muted">
              {sg.surface && (
                <span className="flex items-center gap-1">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
                  </svg>
                  {sg.surface}
                </span>
              )}
              {sg.size && (
                <span className="flex items-center gap-1">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  {sg.size} мм
                </span>
              )}
              <span>
                {sg.decors.length}{" "}
                {pluralDecors(sg.decors.length)}
              </span>
            </div>
          </div>

          {/* ── Сетка карточек ── */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 lg:gap-4">
            {sg.decors.map((decor) => (
              <DecorCard
                key={`${collectionSlug}-${decor.article}-${decor.name}`}
                name={decor.name}
                article={decor.article}
                imageSrc={getDecorSrc(collectionSlug, decor.article, decor.imageId)}
                surface={sg.surface}
                isNew={decor.isNew}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function pluralDecors(n: number): string {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return "декоров";
  if (last === 1) return "декор";
  if (last >= 2 && last <= 4) return "декора";
  return "декоров";
}
