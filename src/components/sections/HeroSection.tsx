"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "Производство с 2012 года",
    title: "Мебельные фасады MILADA",
    subtitle: "ПВХ, эмаль, HPL, камень. Собственное производство, индивидуальный раскрой.",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778176567/milada/pvh-arka-premium.png",
  },
  {
    eyebrow: "Более 100 декоров",
    title: "Любые материалы и фрезеровки",
    subtitle: "ПВХ плёнка, HPL-пластик, эмаль RAL, искусственный камень, патина.",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778176594/milada/hpl-dub-rustikal.jpg",
  },
  {
    eyebrow: "Опт и розница",
    title: "Поставки по всей России",
    subtitle: "Работаем с мебельными производствами и частными заказчиками.",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778176600/milada/stone-white.jpg",
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
      <div className="container-site py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[460px]">
          {/* Left — text */}
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

            {/* Slider dots */}
            <div className="mt-12 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1 rounded-full transition-all",
                    i === active ? "w-8 bg-ink" : "w-4 bg-line hover:bg-ink-subtle"
                  )}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative aspect-[4/3] lg:aspect-square bg-bg rounded-lg overflow-hidden border border-line">
            {slides.map((s, i) => (
              <Image
                key={i}
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
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
