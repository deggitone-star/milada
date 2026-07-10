import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import CollageGallery from "@/components/ui/CollageGallery";
import PhotoSlider from "@/components/ui/PhotoSlider";
import { galleryPhotos } from "@/data/gallery";
import type { LightboxImage } from "@/components/ui/Lightbox";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export const metadata: Metadata = {
  title: "О компании MILADA — производство мебельных фасадов в Ульяновске с 2012 года",
  description:
    "MILADA — собственное производство мебельных фасадов в Ульяновске. Производим фасады МДФ, ПВХ, HPL, эмаль и патину. Работаем с мебельными компаниями, салонами и дилерами по всей России. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/about` },
  keywords: [
    "milada ульяновск", "милада мебельные фасады",
    "завод мебельных фасадов ульяновск", "производитель фасадов ульяновск",
    "производство кухонных фасадов ульяновск", "фасады мдф завод поволжье",
  ],
};

/* Фото производства */
const heroImage = `${CDN}/v1779706574/O_nas_bprpry.png`;

const productionPhotos: LightboxImage[] = [
  { src: `${CDN}/v1779706574/O_nas_bprpry.png`,                  alt: "Здание производства мебельных фасадов MILADA в Ульяновске" },
  { src: `${CDN}/v1779706574/image-25-05-26-02-36-4_oftkzs.jpg`, alt: "Вход в производство MILADA — вывеска" },
  { src: `${CDN}/v1779706573/image-25-05-26-02-36_yxpk0g.jpg`,   alt: "ЧПУ-фрезеровка фасадов МДФ на производстве MILADA в Ульяновске" },
  { src: `${CDN}/v1779706573/image-25-05-26-02-36-2_fbt5ch.jpg`, alt: "Фрезеровка декоративных панелей на производстве MILADA" },
  { src: `${CDN}/v1781768977/photo_2026-06-18_14-47-59_b4bei4.jpg`, alt: "Фрезерный станок ЧПУ — раскрой фасадов MILADA" },
];

/* Галерея проектов — превью из общего файла данных */
const galleryPreview = galleryPhotos.slice(0, 6);

const facadeTypes = [
  { label: "Фасады МДФ / ПВХ", href: "/fasady-mdf" },
  { label: "Пластик HPL", href: "/hpl-fasady" },
  { label: "Эмаль", href: "/krashenye-fasady" },
  { label: "С интегрированной ручкой", href: "/fasady-bez-ruchek" },
  { label: "Патина", href: "/catalog/patina" },
  { label: "Радиусные", href: "/catalog/radius" },
  { label: "Декор. элементы", href: "/catalog/decor-elements" },
  { label: "Дверные панели", href: "/catalog/door-panels" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO с фото */}
      <section className="relative bg-bg-dark overflow-hidden" style={{ paddingTop: "var(--header-h)" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Завод мебельных фасадов MILADA в Ульяновске"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/50" />
        </div>

        <div className="container-site relative z-10 py-16 lg:py-28">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">О компании</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Производство мебельных фасадов в Ульяновске с 2012 года
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Собственное производство полного цикла. Работаем с мебельными компаниями, кухонными салонами и дилерами по всей России.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог фасадов
            </Link>
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ — сжатый текст + чипсы */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="label mb-3">Кто мы</p>
              <h2 className="h2">Мебельные фасады европейского качества</h2>
            </div>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Компания <strong className="text-ink">«Милада»</strong> специализируется на производстве мебельных фасадов с 2012 года. Большой ассортимент материалов, расцветок и текстур, всё сырьё соответствует евростандартам качества.
              </p>
              <p>
                Занимаем передовые позиции по всему Поволжью и осваиваем новые регионы. Регулярно обновляем ассортимент по модным тенденциям, внедряем новые технологии и предлагаем отличное качество по выгодным ценам в минимальные сроки.
              </p>

              {/* Чипсы типов фасадов */}
              <div className="pt-3">
                <p className="text-sm text-ink-subtle mb-3">Что мы производим:</p>
                <div className="flex flex-wrap gap-2">
                  {facadeTypes.map((t) =>
                    t.href ? (
                      <Link
                        key={t.label}
                        href={t.href}
                        className="text-sm px-3.5 py-1.5 rounded-pill border border-line bg-bg-alt text-ink hover:border-ink hover:bg-bg transition-all"
                      >
                        {t.label}
                      </Link>
                    ) : (
                      <span
                        key={t.label}
                        className="text-sm px-3.5 py-1.5 rounded-pill border border-line bg-bg-alt text-ink-muted"
                      >
                        {t.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОИЗВОДСТВО — коллаж */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <div className="mb-8 max-w-2xl">
            <p className="label mb-3">Производство</p>
            <h2 className="h2">Собственное производство в Ульяновске</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Полный цикл: раскрой МДФ, фрезеровка на ЧПУ, облицовка ПВХ и HPL, покраска эмалью, патинирование.
            </p>
          </div>
          <PhotoSlider images={productionPhotos} />
        </div>
      </section>

      {/* ГАЛЕРЕЯ ПРОЕКТОВ — коллаж */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="mb-8 max-w-2xl">
            <p className="label mb-3">Проекты</p>
            <h2 className="h2">Мебель из наших фасадов</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Реальные проекты, выполненные с фасадами MILADA — кухни, шкафы, тумбы и декоративные элементы.
            </p>
          </div>
          <CollageGallery images={galleryPreview} />

          <div className="mt-10 text-center">
            <Link href="/galereya" className="btn-outline">
              Смотреть все проекты
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* КОНТАКТНЫЙ БЛОК */}
      <section className="section-py bg-bg-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Связаться с нами</p>
              <h2 className="text-h2 font-medium text-white">Готовы обсудить ваш проект?</h2>
              <p className="mt-4 text-white/60 max-w-md">
                Позвоните или оставьте заявку — менеджер ответит на вопросы, рассчитает стоимость и подберёт материалы.
              </p>
              <div className="mt-8 space-y-3 text-white/80 text-sm">
                <p><span className="text-white/50">Адрес: </span>{siteConfig.address}</p>
                <p><span className="text-white/50">Телефон: </span><a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-mint transition-colors">{siteConfig.phone}</a></p>
                <p><span className="text-white/50">Email: </span><a href={`mailto:${siteConfig.email}`} className="hover:text-mint transition-colors">{siteConfig.email}</a></p>
                <p><span className="text-white/50">Часы работы: </span>Пн-Пт 8:00–16:00</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center bg-mint text-mint-dark font-medium text-sm px-6 py-3 rounded-pill hover:bg-mint-light transition-colors"
              >
                {siteConfig.phone}
              </a>
              <Link href="/contacts" className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
                Написать
              </Link>
              <Link href="/dlya-mebelnyh-kompaniy" className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
                Для бизнеса
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
