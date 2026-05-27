"use client";

import { useState } from "react";
import { FAQSchema, type FaqItem } from "@/components/seo/SchemaOrg";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  label?: string;
  background?: "default" | "alt" | "dark";
}

export default function FaqSection({
  items,
  title = "Часто задаваемые вопросы",
  label = "FAQ",
  background = "default",
}: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const bg =
    background === "alt"
      ? "bg-bg-alt border-y border-line"
      : background === "dark"
      ? "bg-bg-dark"
      : "bg-bg";

  const isDark = background === "dark";

  return (
    <section className={`section-py ${bg}`}>
      <FAQSchema items={items} />
      <div className="container-site max-w-4xl">
        <p className={`label mb-3 ${isDark ? "text-mint" : ""}`}>{label}</p>
        <h2 className={`h2 mb-10 ${isDark ? "text-white" : ""}`}>{title}</h2>

        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`border rounded-soft overflow-hidden transition-all ${
                  isDark
                    ? "border-white/15 bg-white/5"
                    : "border-line bg-bg"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className={`w-full text-left p-5 lg:p-6 flex items-center justify-between gap-4 transition-colors ${
                    isDark ? "hover:bg-white/5" : "hover:bg-bg-alt"
                  }`}
                  aria-expanded={open}
                >
                  <span className={`font-medium ${isDark ? "text-white" : "text-ink"}`}>
                    {item.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`shrink-0 transition-transform ${open ? "rotate-180" : ""} ${
                      isDark ? "text-white/60" : "text-ink-muted"
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {open && (
                  <div
                    className={`px-5 lg:px-6 pb-5 lg:pb-6 leading-relaxed ${
                      isDark ? "text-white/70" : "text-ink-muted"
                    }`}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
