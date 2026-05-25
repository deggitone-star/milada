"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import Lightbox from "@/components/ui/Lightbox";

const stats = [
  { value: "14+",  label: "лет опыта" },
  { value: "500+", label: "проектов в год" },
  { value: "100+", label: "декоров" },
  { value: "10",   label: "дней срок" },
];

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

/* Фото производства и здания — блок «О нас» */
const aboutPhotos = [
  { src: `${CDN}/v1779706574/O_nas_bprpry.png`,                   alt: "Здание завода MILADA в Ульяновске" },
  { src: `${CDN}/v1779706574/image-25-05-26-02-36-4_oftkzs.jpg`,  alt: "Вход в производство MILADA" },
  { src: `${CDN}/v1779706573/image-25-05-26-02-36_yxpk0g.jpg`,    alt: "ЧПУ-фрезеровка фасадов МДФ на заводе MILADA" },
  { src: `${CDN}/v1779706573/image-25-05-26-02-36-1_w8hino.jpg`,  alt: "Фрезерный станок ЧПУ — раскрой фасадов MILADA" },
  { src: `${CDN}/v1779706573/image-25-05-26-02-36-2_fbt5ch.jpg`,  alt: "Фрезеровка декоративных панелей на производстве MILADA" },
];

/* Галерея — все реальные фото мебели из фасадов MILADA */
const gallery = [
  { src: `${CDN}/v1779706218/image-25-05-26-02-27_pykxhf.jpg`,    alt: "Кухонный остров с мраморной отделкой — фасады MILADA" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27_lfycit.webp`,   alt: "Экран для радиатора с фрезеровкой MILADA" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-1_knsx0l.jpg`,  alt: "Встроенный шкаф с золотыми ручками — фасады MILADA" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27-1_fnca2q.webp`, alt: "Настенная полка с декоративным орнаментом MILADA" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-2_heqjiv.jpg`,  alt: "Тумба для ванной с рифлёными фасадами MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-2_yv3ami.webp`, alt: "Ванная комната с двойным умывальником — фасады MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-3_fbxldt.jpg`,  alt: "Классическая кухня с фасадами MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_ydyh3i.jpg`,  alt: "Встроенный шкаф от пола до потолка — MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_a2wior.webp`, alt: "Рифлёные фасады шкафа крупным планом — MILADA" },
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-5_accodf.jpg`,  alt: "ТВ-тумба с классической фрезеровкой — MILADA" },
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-6_ro6te5.jpg`,  alt: "Настенный шкафчик с орнаментом — фасады MILADA" },
];

export default function AboutPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">О компании</p>
          <h1 className="h1">Производство мебельных фасадов MILADA в Ульяновске</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            Производитель с 2012 года. Собственный завод, индивидуальный раскрой, опт и розница по всей России.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-bg p-6 lg:p-8">
                <p className="text-3xl lg:text-4xl font-medium text-ink">{value}</p>
                <p className="mt-2 text-sm text-ink-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          {/* Фото производства — 2 ряда */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-12">
            {/* Ряд 1: здание (2 колонки) + вход (1 колонка) */}
            <div className="col-span-2 relative overflow-hidden rounded-soft aspect-[16/9]">
              <Image
                src={aboutPhotos[0].src}
                alt={aboutPhotos[0].alt}
                fill
                sizes="(max-width: 1024px) 66vw, 66vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-soft aspect-[16/9]">
              <Image
                src={aboutPhotos[1].src}
                alt={aboutPhotos[1].alt}
                fill
                sizes="(max-width: 1024px) 33vw, 33vw"
                className="object-cover"
              />
            </div>
            {/* Ряд 2: 3 фото станков */}
            {aboutPhotos.slice(2).map((photo, i) => (
              <div key={i} className="relative overflow-hidden rounded-soft aspect-[16/9]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="label mb-3">О производстве</p>
              <h2 className="h2">Качество, проверенное временем</h2>
            </div>

            <div className="lg:col-span-2 space-y-5 text-ink-muted leading-relaxed">
              <p>
                Компания «Милада» в Ульяновске специализируется на производстве и продаже <strong className="text-ink">мебельных фасадов</strong> с 2012 года. Большой ассортимент
                материалов, расцветок и текстур не оставит равнодушным ни одного покупателя.
              </p>
              <p>Мы предлагаем мебельные фасады:</p>
              <ul className="space-y-1.5 ml-1">
                <li>— Фасады МДФ с ПВХ-плёнкой (стандарт и премиум фрезеровки)</li>
                <li>— Пластиковые фасады HPL</li>
                <li>— Патинированные фасады</li>
                <li>— Эмаль (матовая, глянцевая, металлик)</li>
                <li>— Каменные фасады</li>
                <li>— Радиусные фасады</li>
                <li>— Декоративные элементы и спинки кроватные</li>
                <li>— Дверные панели и полотна для шкафов-купе</li>
              </ul>
              <p>
                Всё сырьё, используемое для изготовления, отвечает евростандартам качества.
                Компания не стоит на месте: мы занимаем передовые позиции в Поволжье
                и осваиваем новые регионы.
              </p>
              <p>
                Для создания новых моделей мы регулярно проводим мониторинг модных тенденций
                на рынке производства мебели. Своим покупателям мы предоставляем отличное качество
                по выгодным ценам и в минимальные сроки.
              </p>
              <p>
                Фасады представлены в огромной цветовой гамме и множестве дизайнерских решений.
                Компания активно внедряет новые технологии в процессе производства, постоянно повышая
                качество продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-3">Галерея</p>
          <h2 className="h2 mb-10">Мебель из наших фасадов</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {gallery.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="relative aspect-[4/3] bg-bg-alt border border-line rounded-soft overflow-hidden group cursor-zoom-in"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/catalog" className="btn-outline">
              Смотреть весь каталог
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-h2 font-medium text-white">Готовы обсудить ваш проект?</h2>
              <p className="mt-4 text-white/60 max-w-md">
                Позвоните или оставьте заявку — менеджер ответит на все вопросы и подберёт нужные материалы.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center bg-mint text-mint-dark font-medium text-sm px-6 py-3 rounded-pill hover:bg-mint-light transition-colors"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
              >
                Написать
              </Link>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
