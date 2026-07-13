"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/catalog/ProductCard";
import type { Product } from "@/types";

type Tab = "all" | "pvh-standart" | "pvh-premium";

interface Props {
  standart: Product[];
  premium: Product[];
}

export default function MillingTabs({ standart, premium }: Props) {
  const [tab, setTab] = useState<Tab>("all");

  const all = [...standart, ...premium];
  const items =
    tab === "all" ? all : tab === "pvh-standart" ? standart : premium;

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "Все модели", count: all.length },
    { key: "pvh-standart", label: "Стандартные", count: standart.length },
    { key: "pvh-premium", label: "Премиум", count: premium.length },
  ];

  return (
    <div>
      {/* ПЕРЕКЛЮЧАТЕЛЬ */}
      <div
        role="tablist"
        aria-label="Вид фрезеровки"
        className="flex flex-wrap gap-2 mb-8"
      >
        {tabs.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setTab(t.key)}
              className={[
                "inline-flex items-center gap-2 rounded-soft border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-ink border-ink text-white"
                  : "bg-white border-line text-ink-muted hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              {t.label}
              <span
                className={[
                  "text-xs tabular-nums",
                  active ? "text-white/60" : "text-ink-subtle",
                ].join(" ")}
              >
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* СЕТКА МОДЕЛЕЙ */}
      <div
        role="tabpanel"
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
      >
        {items.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} />
        ))}
      </div>

      {/* ССЫЛКИ НА SEO-СТРАНИЦЫ КАТЕГОРИЙ */}
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="text-ink-subtle">Подробнее о фрезеровках:</span>
        <Link
          href="/catalog/pvh-standart"
          className="text-mint-dark font-medium hover:underline"
        >
          Стандартные →
        </Link>
        <Link
          href="/catalog/pvh-premium"
          className="text-mint-dark font-medium hover:underline"
        >
          Премиум →
        </Link>
      </div>
    </div>
  );
}
