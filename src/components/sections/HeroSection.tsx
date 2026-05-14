"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { messengers, siteConfig } from "@/lib/config";

const opt = (url: string, w = 1600) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const slides = [
  {
    eyebrow: "Производство · Ульяновск",
    title: "Производство мебельных фасадов с доставкой по России",
    mobileTitle: "Мебельные фасады от производителя",
    subtitle: "Фасады МДФ, ПВХ, эмаль, HPL и камень для мебельных компаний, салонов и дилеров. Серийные модели и индивидуальные заказы.",
    mobileSubtitle: "МДФ, ПВХ, эмаль, HPL, камень. Опт и розница.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/1_g3ao5n.png"),
  },
  {
    eyebrow: "12+ лет на рынке",
    title: "Производственный партнёр для мебельных компаний",
    mobileTitle: "Партнёр для мебельных компаний",
    subtitle: "Серийные поставки и индивидуальный раскрой. Работаем по договору, выдерживаем сроки и объёмы.",
    mobileSubtitle: "Серийные поставки, договор, сроки.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/2_m4bagt.png"),
  },
  {
    eyebrow: "100+ декоров",
    title: "Полный спектр мебельных фасадов",
    mobileTitle: "Полный спектр фасадов",
    subtitle: "ПВХ-плёнка, эмаль RAL, HPL-пластик, искусственный камень, патина, радиусные модели.",
    mobileSubtitle: "ПВХ, эмаль RAL, HPL, камень, патина.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/3_nykkjo.png"),
  },
];

const trustBadges = [
  { icon: "factory", text: "Собственное производство" },
  { icon: "calendar", text: "Сроки от 5 дней" },
  { icon: "truck", text: "Доставка по РФ" },
  { icon: "handshake", text: "Работаем с мебельными компаниями" },
];

function BadgeIcon({ name }: { name: string }) {
  const className = "w-4 h-4";
  switch (name) {
    case "factory":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2 20V8l5 3V8l5 3V8l5 3V8l5 3v9H2zM6 14h2M11 14h2M16 14h2M6 17h2M11 17h2M16 17h2"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M11 17l2 2 4-4M21 11V7a2 2 0 0 0-2-2h-3l-3-3H7a2 2 0 0 0-2 2v9l3 3h2"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative bg-bg-alt border-b border-line overflow-hidden"
      style={{ paddingTop: "var(--header-h)" }}
    >
      {/* Декоративный мятный круг */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-bg-mint blur-3xl opacity-60 pointer-events-none"
      />

      <div className="container-site relative">
        {/* ═══ MOBILE LAYOUT ═══ */}
        <div className="lg:hidden">
          {/* Фото сверху — edge-to-edge */}
          <div className="relative aspect-[16/10] -mx-4 sm:-mx-6 overflow-hidden">
            {slides.map((s, i) => (
              <Image
                key={i}
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                priority={i === 0}
                quality={80}
                className={cn(
                  "object-cover transition-opacity duration-700",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
            {/* Градиент снизу */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-alt to-transparent" />

            {/* Dots на фото */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-pill transition-all",
                    i === active ? "w-6 bg-white" : "w-3 bg-white/50"
                  )}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Текст — компактно */}
          <div className="py-6">
            <p className="label mb-3 text-[10px]">{slides[active].eyebrow}</p>
            <h1 className="text-[1.6rem] font-medium text-ink leading-tight tracking-tight">
              {slides[active].mobileTitle}
            </h1>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              {slides[active].mobileSubtitle}
            </p>

            {/* 2 кнопки в ряд */}
            <div className="mt-6 flex gap-2.5">
              <Link href="/catalog" className="btn-primary text-xs px-5 py-2.5">
                Каталог
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contacts" className="btn-outline text-xs px-5 py-2.5">
                Получить расчёт
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT ═══ */}
        <div className="hidden lg:block py-20">
          <div className="grid grid-cols-2 gap-16 items-center min-h-[480px]">
            <div>
              <p className="label mb-5">{slides[active].eyebrow}</p>
              <h1 className="h1 text-balance">{slides[active].title}</h1>
              <p className="mt-6 text-lg text-ink-muted max-w-xl">{slides[active].subtitle}</p>

              {/* CTA-кнопки */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/catalog" className="btn-primary">
                  Смотреть каталог
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contacts" className="btn-outline">Получить расчёт</Link>
                <a
                  href={messengers.max || "#max-pending"}
                  target={messengers.max ? "_blank" : undefined}
                  rel={messengers.max ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!messengers.max) {
                      e.preventDefault();
                      alert("Канал MAX скоро появится. Пока свяжитесь по телефону: " + siteConfig.phone);
                    }
                  }}
                  className="btn-outline"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Написать в MAX
                </a>
              </div>

              {/* Trust badges — только десктоп */}
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md">
                {trustBadges.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="text-mint-dark shrink-0">
                      <BadgeIcon name={icon} />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Slider dots */}
              <div className="mt-10 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={cn(
                      "h-1.5 rounded-pill transition-all",
                      i === active ? "w-8 bg-mint-dark" : "w-4 bg-line hover:bg-ink-subtle"
                    )}
                    aria-label={`Слайд ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Image — десктоп */}
            <div className="relative aspect-square bg-bg rounded-soft overflow-hidden border border-line">
              {slides.map((s, i) => (
                <Image
                  key={i}
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="50vw"
                  priority={i === 0}
                  quality={85}
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    i === active ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
