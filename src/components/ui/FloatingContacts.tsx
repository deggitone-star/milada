// src/components/ui/FloatingContacts.tsx
// Плавающие кнопки связи — правый нижний угол
"use client";

import { useState, useEffect } from "react";
import { siteConfig, messengers } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function FloatingContacts() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закрытие по клику вне виджета
  useEffect(() => {
    if (!expanded) return;
    const close = () => setExpanded(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [expanded]);

  const phoneHref = `tel:${siteConfig.phone.replace(/\D/g, "")}`;
  const maxHref = messengers.max || "#max-pending";

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50 flex flex-col-reverse items-end gap-3 transition-all duration-300",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Раскрывающиеся кнопки */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300",
          expanded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-2"
        )}
      >
        {/* Звонок */}
        <a
          href={phoneHref}
          className="group flex items-center gap-3 bg-white border border-line rounded-pill pl-4 pr-5 py-3 shadow-lift hover:shadow-2xl hover:border-mint-dark transition-all duration-200"
          aria-label="Позвонить"
        >
          <span className="hidden md:block text-sm font-medium text-ink whitespace-nowrap">
            {siteConfig.phone}
          </span>
          <span className="md:hidden text-sm font-medium text-ink">Позвонить</span>
          <span className="w-9 h-9 rounded-full bg-mint-dark text-mint flex items-center justify-center shrink-0 group-hover:bg-ink transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>

        {/* MAX */}
        <a
          href={maxHref}
          target={messengers.max ? "_blank" : undefined}
          rel={messengers.max ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (!messengers.max) {
              e.preventDefault();
              alert("Канал MAX скоро появится. Пока свяжитесь по телефону: " + siteConfig.phone);
            }
          }}
          className="group flex items-center gap-3 bg-white border border-line rounded-pill pl-4 pr-5 py-3 shadow-lift hover:shadow-2xl hover:border-mint-dark transition-all duration-200"
          aria-label="Написать в MAX"
        >
          <span className="text-sm font-medium text-ink whitespace-nowrap">Написать в MAX</span>
          <span className="w-9 h-9 rounded-full bg-mint-dark text-mint flex items-center justify-center shrink-0 group-hover:bg-ink transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>

      {/* Главная кнопка */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          "w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lift hover:shadow-2xl transition-all duration-300",
          expanded
            ? "bg-ink text-white"
            : "bg-mint-dark text-white"
        )}
        aria-label={expanded ? "Закрыть" : "Связаться с нами"}
        aria-expanded={expanded}
      >
        {expanded ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          /* Облачко чата с тремя точками — понятная иконка «связаться» */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="10" r="1.2" fill="currentColor"/>
            <circle cx="12" cy="10" r="1.2" fill="currentColor"/>
            <circle cx="15.5" cy="10" r="1.2" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
}
