"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import ProjectSlider, { type Project } from "@/components/ui/ProjectSlider";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

/* Производство — сгруппировано по типу съёмки */
const productionProjects: Project[] = [
  {
    id: "facility",
    title: "Здание производства",
    description: "Собственный завод в Ульяновске на ул. Хваткова, 11. Производственные площади оснащены современным оборудованием для полного цикла изготовления мебельных фасадов.",
    photos: [
      { src: `${CDN}/v1779706574/O_nas_bprpry.png`,                  alt: "Здание завода MILADA в Ульяновске, ул. Хваткова 11" },
      { src: `${CDN}/v1779706574/image-25-05-26-02-36-4_oftkzs.jpg`, alt: "Вход в производство мебельных фасадов MILADA" },
    ],
  },
  {
    id: "cnc-large",
    title: "ЧПУ-фрезеровка фасадов",
    description: "Раскрой и фрезеровка фасадов МДФ на ЧПУ-станках с автоматической системой пылеудаления. Точность реза ±0,1 мм, более 30 форм фрезеровки.",
    photos: [
      { src: `${CDN}/v1779706573/image-25-05-26-02-36_yxpk0g.jpg`,   alt: "ЧПУ-фрезеровка фасадов МДФ на заводе MILADA Ульяновск" },
      { src: `${CDN}/v1779706573/image-25-05-26-02-36-1_w8hino.jpg`, alt: "Фрезерный станок ЧПУ — раскрой фасадов MILADA" },
      { src: `${CDN}/v1779706573/image-25-05-26-02-36-2_fbt5ch.jpg`, alt: "Фрезеровка декоративных панелей на производстве MILADA" },
    ],
  },
];

/* Галерея — сгруппирована по реальным проектам клиентов */
const galleryProjects: Project[] = [
  {
    id: "kitchen-marble-island",
    title: "Кухня с мраморным островом",
    description: "Светлая кухня с массивным островом, облицованным мрамором. Минималистичные фасады без ручек.",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27_pykxhf.jpg`, alt: "Кухня с мраморным островом — фасады MILADA" },
    ],
  },
  {
    id: "bathroom-fluted",
    title: "Ванная комната с рифлёными фасадами",
    description: "Двойной умывальник с рифлёными фасадами в светлых тонах. Латунная фурнитура.",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27-2_heqjiv.jpg`,  alt: "Тумба для ванной с рифлёными фасадами MILADA" },
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-2_yv3ami.webp`, alt: "Ванная комната с двойным умывальником — фасады MILADA" },
    ],
  },
  {
    id: "wardrobe-classic-white",
    title: "Классический шкаф с золотом",
    description: "Распашной шкаф с филёнчатыми фасадами и длинными латунными ручками.",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27-1_knsx0l.jpg`, alt: "Встроенный шкаф с золотыми ручками — фасады MILADA" },
    ],
  },
  {
    id: "decorative-shelf",
    title: "Декоративная полка с орнаментом",
    description: "Настенная полка с восточным орнаментом — резная боковина из МДФ с золотой отделкой.",
    photos: [
      { src: `${CDN}/v1779706217/image-25-05-26-02-27-1_fnca2q.webp`, alt: "Настенная полка с декоративным орнаментом MILADA" },
      { src: `${CDN}/v1779706217/image-25-05-26-02-27_lfycit.webp`,   alt: "Декоративная полка с орнаментом крупным планом — MILADA" },
    ],
  },
  {
    id: "wardrobe-fluted-modern",
    title: "Современный шкаф с рифлением",
    description: "Встроенный шкаф во всю стену с комбинированными рифлёными фасадами без видимой фурнитуры.",
    photos: [
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_ydyh3i.jpg`,  alt: "Встроенный шкаф от пола до потолка — MILADA" },
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_a2wior.webp`, alt: "Рифлёные фасады шкафа крупным планом — MILADA" },
    ],
  },
  {
    id: "kitchen-classic",
    title: "Классическая кухня",
    description: "Светлая кухня в классическом стиле с филёнчатыми фасадами, витражными вставками и хрустальной люстрой.",
    photos: [
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-3_fbxldt.jpg`, alt: "Классическая кухня с фасадами MILADA" },
      { src: `${CDN}/v1779706220/image-25-05-26-02-27-6_ro6te5.jpg`, alt: "Классическая кухня MILADA — другой ракурс" },
    ],
  },
  {
    id: "tv-stand-classic",
    title: "ТВ-тумба с классической фрезеровкой",
    description: "ТВ-тумба с рамочной фрезеровкой в светло-бежевых тонах, латунные ручки и декоративный молдинг.",
    photos: [
      { src: `${CDN}/v1779706220/image-25-05-26-02-27-5_accodf.jpg`, alt: "ТВ-тумба с классической фрезеровкой — MILADA" },
    ],
  },
];

/* FAQ — для FAQ Schema и блока на странице */
const faqs = [
  {
    q: "Где находится производство?",
    a: "Собственный завод MILADA находится в Ульяновске по адресу ул. Хваткова, 11. Принимаем заказы лично и удалённо.",
  },
  {
    q: "Какие фасады вы производите?",
    a: "Фасады МДФ с ПВХ-плёнкой (стандартные и премиум фрезеровки), пластиковые фасады HPL, эмалевые, патинированные, каменные, радиусные фасады, декоративные элементы, спинки кроватные, дверные панели и полотна для шкафов-купе.",
  },
  {
    q: "Работаете ли с другими регионами?",
    a: "Да, отгружаем фасады по всей России через транспортные компании. Активно работаем с мебельными компаниями и салонами Поволжья и осваиваем новые регионы.",
  },
  {
    q: "Можно ли заказать индивидуальные размеры?",
    a: "Да, все фасады изготавливаются по вашим размерам. Минимальный заказ — от одной штуки. Для оптовых клиентов — отдельные условия.",
  },
  {
    q: "Какие сроки изготовления?",
    a: "Стандартный срок изготовления — от 5 рабочих дней. Точный срок зависит от объёма и типа фасада, обсуждается при оформлении заказа.",
  },
  {
    q: "Сотрудничаете с мебельными компаниями?",
    a: "Да, у нас отдельная программа для мебельных компаний, кухонных салонов, цехов и дилеров: договор, отсрочка платежа, персональный менеджер. Подробнее — на странице «Для бизнеса».",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">О компании</p>
          <h1 className="h1">Производство мебельных фасадов MILADA в Ульяновске с 2012 года</h1>
          <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
            Собственный завод по изготовлению фасадов МДФ, ПВХ, HPL, эмали и патины.
            Работаем с мебельными компаниями, кухонными салонами и дилерами по всей России.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/catalog" className="btn-outline">Каталог фасадов</Link>
          </div>
        </div>
      </div>

      {/* ОСНОВНОЙ ТЕКСТ */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <p className="label mb-3">О компании</p>
              <h2 className="h2">Мебельные фасады для бизнеса и дома</h2>
            </div>

            <div className="lg:col-span-2 space-y-5 text-ink-muted leading-relaxed">
              <p>
                Компания <strong className="text-ink">«Милада»</strong> в Ульяновске специализируется на производстве и продаже мебельных фасадов с 2012 года.
                Большой ассортимент материалов, расцветок и текстур не оставит равнодушным ни одного покупателя.
              </p>
              <p>
                Все сырьё, используемое для изготовления фасадов, соответствует евростандартам качества.
                Компания не стоит на месте: занимаем передовые позиции по всему Поволжью и осваиваем новые регионы.
                Для создания новых моделей регулярно проводим мониторинг модных тенденций на рынке производства мебели и фасадов.
              </p>
              <p>
                Своим покупателям мы предоставляем отличное качество по выгодным ценам и минимальные сроки изготовления.
                Фасады представлены в огромной цветовой гамме и множестве дизайнерских решений.
                Активно внедряем новые технологии и каждый раз повышаем качество продукции.
              </p>
              <p className="pt-2">
                <strong className="text-ink">Что мы производим:</strong>
              </p>
              <ul className="space-y-1.5 ml-1">
                <li>— <Link href="/fasady-mdf" className="text-mint-dark hover:underline">Фасады МДФ</Link> с ПВХ-плёнкой (стандартные и премиум фрезеровки)</li>
                <li>— <Link href="/hpl-fasady" className="text-mint-dark hover:underline">Пластиковые фасады HPL</Link></li>
                <li>— Патинированные фасады</li>
                <li>— <Link href="/krashenye-fasady" className="text-mint-dark hover:underline">Эмаль</Link> (матовая, глянцевая, металлик)</li>
                <li>— <Link href="/kamennye-fasady" className="text-mint-dark hover:underline">Каменные фасады</Link></li>
                <li>— Радиусные фасады</li>
                <li>— Декоративные элементы и спинки кроватные</li>
                <li>— Дверные панели и полотна для шкафов-купе</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОИЗВОДСТВО — слайдер */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <p className="label mb-3">Производство</p>
            <h2 className="h2">Собственный завод в Ульяновске</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Полный цикл производства: раскрой МДФ, фрезеровка на ЧПУ, облицовка ПВХ или HPL, покраска эмалью, патинирование.
            </p>
          </div>
          <ProjectSlider projects={productionProjects} />
        </div>
      </section>

      {/* ГАЛЕРЕЯ — слайдер с проектами */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <p className="label mb-3">Проекты клиентов</p>
            <h2 className="h2">Мебель из наших фасадов</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Реальные проекты, выполненные с фасадами MILADA — кухни, шкафы, тумбы и декоративные элементы.
            </p>
          </div>
          <ProjectSlider projects={galleryProjects} />

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

      {/* FAQ */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Часто задаваемые вопросы</p>
          <h2 className="h2 mb-8">Ответы на популярные вопросы</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-bg border border-line rounded-soft overflow-hidden"
              >
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 list-none">
                  <h3 className="text-base font-medium text-ink">{f.q}</h3>
                  <svg
                    className="shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-ink-muted leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
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
              <Link
                href="/contacts"
                className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
              >
                Написать
              </Link>
              <Link
                href="/dlya-mebelnyh-kompaniy"
                className="inline-flex items-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
              >
                Для бизнеса
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
