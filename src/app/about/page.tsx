// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "О производстве",
  description:
    "Собственный завод по производству мебельных фасадов в Москве. Немецкое оборудование, контроль качества на каждом этапе, более 500 проектов ежегодно.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "500+", label: "проектов в год" },
  { value: "2000", label: "м² производства" },
  { value: "0,1 мм", label: "допуск по размеру" },
];

const steps = [
  {
    num: "01",
    title: "Приём заказа",
    text: "Менеджер принимает спецификацию с размерами, материалом и цветом. Согласовываем детали и сроки.",
  },
  {
    num: "02",
    title: "Раскрой и фрезеровка",
    text: "Немецкие обрабатывающие центры Homag нарезают МДФ с допуском 0,1 мм. Фрезеруем торцы и профили.",
  },
  {
    num: "03",
    title: "Нанесение покрытия",
    text: "Автоматическая покрасочная линия или наклейка шпона / HPL. Сушка в климатических камерах.",
  },
  {
    num: "04",
    title: "Контроль качества",
    text: "Каждый фасад проходит проверку по 12 параметрам: геометрия, цвет, покрытие, кромка.",
  },
  {
    num: "05",
    title: "Упаковка и доставка",
    text: "Многослойная упаковка предотвращает царапины при транспортировке. Доставляем по Москве и России.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[55vh] min-h-[360px] flex items-end overflow-hidden bg-brand-950"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&q=80"
          alt="Производство мебельных фасадов"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <div className="container-site relative z-10 pb-12 lg:pb-20">
          <p className="section-label text-accent/80 mb-4">О нас</p>
          <h1 className="font-display font-light text-display-lg text-white leading-none">
            Производство,<br />
            <em className="not-italic text-accent">которое видно</em><br />
            в деталях
          </h1>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-accent">
        <div className="container-site py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-5xl font-light text-white">{value}</p>
                <p className="mt-2 text-sm font-sans text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="section-label mb-4">История</p>
              <h2 className="heading-section">
                Начали с мастерской,<br />
                <em className="not-italic text-accent">стали заводом</em>
              </h2>
              <div className="mt-8 space-y-4 text-brand-600 leading-relaxed">
                <p>
                  В 2012 году мы открыли небольшую мастерскую по изготовлению фасадов в Подмосковье. Первый год работали вручную — каждый фасад шлифовался и красился индивидуально.
                </p>
                <p>
                  К 2017 году установили первую автоматическую покрасочную линию и переехали в новый цех площадью 800 м². Объём заказов вырос втрое за два года.
                </p>
                <p>
                  Сегодня MILADA занимает 2000 м² производственных площадей, работает немецкое оборудование Homag, а ежегодно мы выпускаем более 500 индивидуальных проектов по всей России.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
              <Image
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80"
                alt="Производственный цех"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-brand-50">
        <div className="container-site">
          <div className="mb-12 lg:mb-16">
            <p className="section-label mb-3">Процесс</p>
            <h2 className="heading-section">
              Как рождается<br />
              <em className="not-italic text-accent">каждый фасад</em>
            </h2>
          </div>

          <div className="space-y-px bg-brand-200">
            {steps.map(({ num, title, text }) => (
              <div key={num} className="bg-brand-50 px-8 py-8 lg:px-12 lg:py-10 grid grid-cols-[auto_1fr] gap-8 items-start">
                <span className="font-display text-3xl font-light text-brand-300 w-12">{num}</span>
                <div>
                  <h3 className="font-sans font-medium text-brand-950">{title}</h3>
                  <p className="mt-2 text-sm text-brand-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-brand-950">
        <div className="container-site text-center">
          <h2 className="font-display font-light text-display-md text-white">
            Готовы обсудить<br />
            <em className="not-italic text-accent">ваш проект?</em>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contacts" className="btn-primary">
              Связаться с нами
            </Link>
            <Link href="/catalog" className="btn-outline border-white/30 text-white hover:bg-white hover:text-brand-950">
              Смотреть каталог
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
