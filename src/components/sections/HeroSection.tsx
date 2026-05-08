// src/components/sections/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      style={{ paddingTop: "var(--header-h)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85"
          alt="Мебельные фасады премиум класса"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/75 via-brand-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10">
        <div className="max-w-2xl">
          <p className="section-label text-accent/80 mb-6 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
            Производство с 2012 года
          </p>
          <h1 className="font-display font-light text-white text-display-xl leading-none tracking-tight animate-fade-up opacity-0 [animation-fill-mode:forwards] animate-delay-100">
            Фасады,<br />
            <em className="not-italic text-accent">которые</em><br />
            говорят за вас
          </h1>
          <p className="mt-8 font-sans text-lg text-white/70 leading-relaxed max-w-lg animate-fade-up opacity-0 [animation-fill-mode:forwards] animate-delay-200">
            Эмаль, шпон, HPL-пластик и стекло. Собственное производство, точный раскрой, доставка по России.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up opacity-0 [animation-fill-mode:forwards] animate-delay-300">
            <Link href="/catalog" className="btn-primary">
              Смотреть каталог
            </Link>
            <Link href="/contacts" className="btn-outline border-white/40 text-white hover:bg-white hover:text-brand-950">
              Получить расчёт
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 animate-fade-in opacity-0 [animation-fill-mode:forwards] animate-delay-400">
        <span className="text-xs font-sans text-white/40 tracking-widest uppercase writing-mode-vertical rotate-90">
          Scroll
        </span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
