"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/catalog/ProductCard";
import type { Product } from "@/types";

type Tab = "all" | "pvh-premium" | "pvh-standart";

interface Props {
  standart: Product[];
  premium: Product[];
}

export default function MillingTabs({ standart, premium }: Props) {
  const [tab, setTab] = useState<Tab>("all");

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "Все модели", count: premium.length + standart.length },
    { key: "pvh-premium", label: "Премиум", count: premium.length },
    { key: "pvh-standart", label: "Стандартные", count: standart.length },
  ];

  // Порядок разделов: сначала Премиум, потом Стандартные
  const sections = [
    {
      key: "pvh-premium" as const,
      title: "Премиум фрезеровки",
      text: "Сложный рельеф, глубокая проработка на ЧПУ. Выразительные формы для акцентных фасадов.",
      href: "/catalog/pvh-premium",
      items: premium,
    },
    {
      key: "pvh-standart" as const,
      title: "Стандартные фрезеровки",
      text: "Классические и современные формы. Базовая линейка для серийных заказов.",
      href: "/catalog/pvh-standart",
      items: standart,
    },
  ].filter((s) => tab === "all" || tab === s.key);

  return (
    <div>
      {/* ФИЛЬТР */}
      <div role="tablist" aria-label="Вид фрезеровки" className="flex flex-wrap gap-2 mb-10">
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
              <span className={["text-xs tabular-nums", active ? "text-white/60" : "text-ink-subtle"].join(" ")}>
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* РАЗДЕЛЫ: Премиум → Стандартные */}
      {sections.map((s, si) => (
        <section key={s.key} className={si > 0 ? "mt-16 pt-14 border-t border-line" : ""}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="h2">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted max-w-xl leading-relaxed">{s.text}</p>
            </div>
            <Link href={s.href} className="btn-ghost shrink-0 hidden sm:inline-flex">
              О серии →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {s.items.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={si === 0 && i < 4} />
            ))}
          </div>

          <Link href={s.href} className="btn-ghost mt-6 sm:hidden inline-flex">
            О серии →
          </Link>
        </section>
      ))}
    </div>
  );
}
