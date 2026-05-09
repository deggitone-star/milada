"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Cloudinary трансформации для оптимальной загрузки:
// f_auto — автоформат (AVIF/WebP), q_auto — автокачество, w_1600 — макс ширина
const opt = (url: string, w = 1600) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const slides = [
  {
    eyebrow: "Производство с 2012 года",
    title: "Мебельные фасады MILADA",
    subtitle: "ПВХ, эмаль, HPL, камень. Собственное производство в Ульяновске, индивидуальный раскрой.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778323836/ChatGPT_Image_9_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._14_50_22_iin4ko.png"),
  },
  {
    eyebrow: "Более 100 декоров",
    title: "Любые материалы и фрезеровки",
    subtitle: "ПВХ плёнка, HPL-пластик, эмаль RAL, искусственный камень, патина.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778318952/ChatGPT_Image_9_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._13_28_02_3_z5bwrj.png"),
  },
  {
    eyebrow: "Опт и розница",
    title: "Поставки по всей России",
    subtitle: "Работаем с мебельными производствами и частными заказчиками.",
    image: opt("https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778318952/ChatGPT_Image_9_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._13_28_02_2_qziqqs.png"),
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % slides.length), 6000);
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

      <div className="container-site relative py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[460px]">
          <div>
            <p className="label mb-5">{slides[active].eyebrow}</p>
            <h1 className="h1 text-balance">{slides[active].title}</h1>
            <p className="mt-6 text-lg text-ink-muted max-w-md">{slides[active].subtitle}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/catalog" className="btn-primary">
                Смотреть каталог
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contacts" className="btn-outline">Получить расчёт</Link>
            </div>

            <div className="mt-12 flex items-center gap-2">
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

          <div className="relative aspect-[4/3] lg:aspect-square bg-bg rounded-soft overflow-hidden border border-line">
            {slides.map((s, i) => (
              <Image
                key={i}
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
    </section>
  );
}
