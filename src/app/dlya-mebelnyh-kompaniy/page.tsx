import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import MaxButton from "@/components/ui/MaxButton";

export const metadata: Metadata = {
  title: "Фасады для мебельных компаний — оптовые поставки | MILADA",
  description:
    "Производство мебельных фасадов для мебельных компаний, салонов, дилеров и цехов. Оптовые поставки по договору, отсрочка, доставка по РФ. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/dlya-mebelnyh-kompaniy` },
  keywords: [
    "фасады для мебельных компаний",
    "мебельные фасады оптом",
    "опт мебельные фасады",
    "поставщик фасадов для мебели",
    "фасады для мебельного производства",
    "сотрудничество с производителем фасадов",
  ],
};

const opt = (url: string, w = 2000) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const HERO_IMG = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778322343/ChatGPT_Image_9_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._14_24_31_vz0h98.png"
);

const audiences = [
  {
    icon: "factory",
    title: "Мебельные производства",
    text: "Серийные поставки фасадов МДФ, ПВХ, эмаль, HPL, камень для производственных линий.",
  },
  {
    icon: "store",
    title: "Кухонные салоны",
    text: "Стабильные поставки качественных фасадов для готовых кухонь и индивидуальных проектов.",
  },
  {
    icon: "tools",
    title: "Мебельные цеха",
    text: "Индивидуальный раскрой, мелкие и средние партии, оперативное изготовление.",
  },
  {
    icon: "network",
    title: "Дилеры и торговые сети",
    text: "Региональное представительство, выгодные оптовые цены, маркетинговая поддержка.",
  },
  {
    icon: "design",
    title: "Дизайнеры мебели",
    text: "Любая фрезеровка под индивидуальный проект, образцы материалов, технические консультации.",
  },
];

const conditions = [
  {
    label: "01",
    title: "Договор поставки",
    text: "Полный пакет документов: договор, счёт, акт, ТТН. Работа с НДС и без НДС.",
  },
  {
    label: "02",
    title: "Минимальный заказ",
    text: "Опт — от 50 м² фасадов. Для постоянных партнёров — индивидуальные условия.",
  },
  {
    label: "03",
    title: "Отсрочка платежа",
    text: "Для проверенных партнёров — отсрочка до 30 дней по согласованию.",
  },
  {
    label: "04",
    title: "Скидки от объёма",
    text: "Сетка скидок при объёмах от 100, 500 и 1000 м² в месяц.",
  },
  {
    label: "05",
    title: "Резерв материалов",
    text: "Запас популярных декоров на складе для оперативного выполнения заказов.",
  },
  {
    label: "06",
    title: "Персональный менеджер",
    text: "Один контакт по всем вопросам: расчёт, согласование, доставка, документы.",
  },
];

const benefits = [
  "Стабильное качество в любых партиях — от 50 до 5000 м²",
  "Срок изготовления крупных партий — от 7 рабочих дней",
  "Доставка собственным транспортом или ТК по РФ",
  "Многослойная упаковка, страхование грузов",
  "Образцы материалов и фасадов под ваш проект",
  "Технические консультации на этапе разработки мебели",
];

function AudienceIcon({ name }: { name: string }) {
  const className = "w-7 h-7";
  switch (name) {
    case "factory":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2 20V8l5 3V8l5 3V8l5 3V8l5 3v9H2zM6 14h2M11 14h2M16 14h2M6 17h2M11 17h2M16 17h2"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "store":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3 9l1-5h16l1 5M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9M3 9h18M9 21V13h6v8"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function PartnerPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Для мебельных компаний", url: `${siteConfig.url}/dlya-mebelnyh-kompaniy` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-bg-dark"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Производство фасадов MILADA для мебельных компаний"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
        </div>

        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-mint blur-3xl opacity-10 pointer-events-none"
        />

        <div className="container-site relative z-10 py-16 lg:py-24">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Для мебельных компаний</span>
          </nav>

          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">B2B-партнёрство</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Работаем с мебельными компаниями и дилерами
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Производитель мебельных фасадов в Ульяновске. Серийные поставки и индивидуальный раскрой
            для мебельных производств, кухонных салонов, цехов и дилеров по всей России.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#form" className="btn-mint">Запросить прайс и условия</a>
            <MaxButton className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors" />
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="mb-10 lg:mb-14">
            <p className="label mb-3">Кому подходит</p>
            <h2 className="h2">Производственный партнёр для B2B</h2>
            <p className="mt-3 text-ink-muted max-w-xl">
              Поставляем фасады мебельным предприятиям всех типов — от&nbsp;небольших цехов
              до&nbsp;крупных производственных линий.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {audiences.map(({ icon, title, text }) => (
              <div key={title} className="bg-bg-alt border border-line rounded-soft p-6 lg:p-7">
                <div className="text-mint-dark mb-5">
                  <AudienceIcon name={icon} />
                </div>
                <h3 className="text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <div className="mb-10 lg:mb-14">
            <p className="label mb-3">Условия сотрудничества</p>
            <h2 className="h2">Прозрачные правила работы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {conditions.map(({ label, title, text }) => (
              <div key={label} className="bg-bg-alt p-6 lg:p-8">
                <p className="text-sm font-medium tracking-[0.15em] text-mint-dark">{label}</p>
                <h3 className="mt-4 text-base font-medium text-ink">{title}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="label mb-3">Преимущества</p>
              <h2 className="h2">Что получает партнёр</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Опыт 12+ лет, собственное производство, контроль качества на&nbsp;каждом этапе
                и&nbsp;логистика по&nbsp;всей России.
              </p>
            </div>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-mint flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-mint-dark">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-ink leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section-py bg-bg-dark relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-mint blur-3xl opacity-[0.08] pointer-events-none"
        />

        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Заявка</p>
              <h2 className="text-h2 font-medium text-white">Запросить условия и прайс</h2>
              <p className="mt-4 text-white/70 max-w-md leading-relaxed">
                Расскажите о&nbsp;вашей компании и&nbsp;предполагаемом объёме —
                подготовим персональное коммерческое предложение в&nbsp;течение часа.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 mb-2">Связаться напрямую</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-2xl font-medium text-white hover:text-mint transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-sm text-white/50">{siteConfig.workingHours}</p>
              </div>
            </div>

            <form
              action="https://formsubmit.co/milada.73@mail.ru"
              method="POST"
              className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-soft p-6 lg:p-8"
            >
              <input type="hidden" name="_subject" value="B2B-заявка с сайта MILADA — Для мебельных компаний" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/dlya-mebelnyh-kompaniy?sent=1" />
              <input type="hidden" name="_template" value="table" />

              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Название компании *"
                  required
                  className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Город / регион"
                  className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    required
                    className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Объём в месяц, типы фасадов, особые требования"
                  rows={4}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-mint text-mint-dark font-medium text-sm px-6 py-3.5 rounded-pill hover:bg-mint-light transition-colors duration-200"
              >
                Получить КП
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="mt-4 text-[11px] text-white/50 leading-relaxed">
                Отправляя форму, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
