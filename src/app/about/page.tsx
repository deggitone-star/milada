import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "О компании MILADA — производство мебельных фасадов в Ульяновске",
  description:
    "MILADA — производитель мебельных фасадов в Ульяновске с 2012 года. Собственный завод, более 500 проектов в год, евростандарты качества. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/about` },
  keywords: [
    "milada ульяновск",
    "о компании милада",
    "производитель фасадов ульяновск",
    "завод мебельных фасадов",
  ],
};

const stats = [
  { value: "14+",  label: "лет опыта" },
  { value: "500+", label: "проектов в год" },
  { value: "100+", label: "декоров" },
  { value: "10",   label: "дней срок" },
];

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

const gallery = [
  { src: `${CDN}/v1778176567/milada/pvh-arka-premium.png`, alt: "Фасад МДФ премиум фрезеровка от MILADA" },
  { src: `${CDN}/v1778176594/milada/hpl-dub-rustikal.jpg`, alt: "Пластиковый фасад HPL дуб MILADA" },
  { src: `${CDN}/v1778176600/milada/stone-white.jpg`,      alt: "Каменный фасад MILADA Ульяновск" },
  { src: `${CDN}/v1778176610/milada/enamel-mat.jpg`,       alt: "Эмалевый матовый фасад MILADA" },
  { src: `${CDN}/v1778176579/milada/pvh-praga.png`,        alt: "Премиум фрезеровка Прага MILADA" },
  { src: `${CDN}/v1778177149/milada/headboard-sk1.png`,    alt: "Кроватная спинка МДФ MILADA" },
  { src: `${CDN}/v1778176614/milada/patina-classic.jpg`,   alt: "Патинированный фасад MILADA" },
  { src: `${CDN}/v1778177331/milada/door-panel-p7.png`,    alt: "Дверная панель МДФ MILADA" },
];

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "О компании", url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

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
          <h2 className="h2 mb-10">Продукция MILADA</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {gallery.map((item, i) => (
              <div key={i} className="relative aspect-square bg-bg-alt border border-line rounded-soft overflow-hidden group">
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
    </>
  );
}
