import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "О компании",
  description: "Компания MILADA в Ульяновске — производство и продажа мебельных фасадов. ПВХ, эмаль, HPL-пластик, камень, патина, радиусные фасады, спинки кроватные.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const stats = [
  { value: "12+",  label: "лет опыта" },
  { value: "500+", label: "проектов в год" },
  { value: "100+", label: "декоров" },
  { value: "10",   label: "дней срок" },
];

// Галерея реальных фото фасадов из Cloudinary
const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

const gallery = [
  { src: `${CDN}/v1778176567/milada/pvh-arka-premium.png`,    alt: "Фасад МДФ премиум фрезеровка" },
  { src: `${CDN}/v1778176594/milada/hpl-dub-rustikal.jpg`,    alt: "Пластиковый фасад HPL дуб" },
  { src: `${CDN}/v1778176600/milada/stone-white.jpg`,         alt: "Каменный фасад" },
  { src: `${CDN}/v1778176610/milada/enamel-mat.jpg`,          alt: "Эмалевый фасад" },
  { src: `${CDN}/v1778176579/milada/pvh-praga.png`,           alt: "Премиум фрезеровка Прага" },
  { src: `${CDN}/v1778177149/milada/headboard-sk1.png`,       alt: "Спинка кроватная" },
  { src: `${CDN}/v1778176614/milada/patina-classic.jpg`,      alt: "Патинированный фасад" },
  { src: `${CDN}/v1778177331/milada/door-panel-p7.png`,       alt: "Дверная панель" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">О компании</p>
          <h1 className="h1">MILADA</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            Производство и продажа мебельных фасадов в Ульяновске. Большой ассортимент материалов, расцветок и текстур.
          </p>
        </div>
      </div>

      {/* Stats */}
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

      {/* About text */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="label mb-3">О производстве</p>
              <h2 className="h2">Качество, проверенное временем</h2>
            </div>

            <div className="lg:col-span-2 space-y-5 text-ink-muted leading-relaxed">
              <p>
                Компания «Милада» в&nbsp;Ульяновске специализируется на&nbsp;производстве и&nbsp;продаже фасадов для мебели. Большой ассортимент материалов, расцветок и&nbsp;текстур не&nbsp;оставит равнодушным ни&nbsp;одного покупателя.
              </p>
              <p>Мы предлагаем мебельные фасады:</p>
              <ul className="space-y-1.5 ml-1">
                <li>— Фасады МДФ с ПВХ плёнкой (стандарт и премиум)</li>
                <li>— Пластиковые фасады HPL</li>
                <li>— Патинированные фасады</li>
                <li>— Эмаль (матовая, глянцевая, металлик)</li>
                <li>— Каменные фасады</li>
                <li>— Радиусные фасады</li>
                <li>— Декоративные элементы и спинки кроватные</li>
                <li>— Дверные панели и полотна для шкафов-купе</li>
              </ul>
              <p>
                Всё сырьё, используемое для изготовления, отвечает евростандартам качества. Компания не&nbsp;стоит на&nbsp;месте: мы&nbsp;занимаем передовые позиции в&nbsp;Поволжье и&nbsp;осваиваем новые регионы.
              </p>
              <p>
                Для создания новых моделей мы&nbsp;регулярно проводим мониторинг модных тенденций на&nbsp;рынке производства мебели. Своим покупателям мы&nbsp;предоставляем отличное качество по&nbsp;выгодным ценам и&nbsp;в&nbsp;минимальные сроки.
              </p>
              <p>
                Фасады представлены в&nbsp;огромной цветовой гамме и&nbsp;множестве дизайнерских решений. Компания активно внедряет новые технологии в&nbsp;процессе производства, постоянно повышая качество продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-3">Галерея</p>
          <h2 className="h2 mb-10">Наша продукция</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square bg-bg-alt border border-line rounded-soft overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
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

      {/* CTA */}
      <section className="section-py bg-bg-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-h2 font-medium text-white">Готовы обсудить ваш проект?</h2>
              <p className="mt-4 text-white/60 max-w-md">
                Позвоните или оставьте заявку — менеджер ответит на все вопросы и&nbsp;подберёт нужные материалы.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center bg-mint text-ink font-medium text-sm px-6 py-3 rounded-soft hover:bg-mint-light transition-colors"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-soft hover:bg-white/5 transition-colors"
              >
                Написать
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
