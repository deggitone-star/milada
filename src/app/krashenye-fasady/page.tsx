import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Крашеные фасады МДФ — эмаль по RAL | MILADA Ульяновск",
  description:
    "Крашеные фасады МДФ от производителя. Эмаль матовая, глянцевая, металлик. Любой цвет по каталогу RAL — 1600+ оттенков. Производство в Ульяновске. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/krashenye-fasady` },
  keywords: [
    "крашеные фасады", "крашеные фасады мдф", "эмалевые фасады",
    "фасады эмаль", "фасады по ral", "крашеные фасады для кухни",
    "покраска фасадов", "фасады эмаль ульяновск",
  ],
};

const opt = (url: string, w = 2000) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const HERO_IMG = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778527676/ChatGPT_Image_12_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._02_25_06_kgk9m1.png"
);

export default function KrashenyeFasadyPage() {
  const enamelProducts = getProductsByCategory("enamel");

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Крашеные фасады", url: `${siteConfig.url}/krashenye-fasady` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg-dark" style={{ paddingTop: "var(--header-h)" }}>
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMG} alt="Крашеные фасады МДФ — эмаль по RAL" fill sizes="100vw" className="object-cover opacity-30" priority quality={85} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
        </div>
        <div className="container-site relative z-10 py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Крашеные фасады</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Эмаль по RAL</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Крашеные фасады МДФ — любой цвет по каталогу RAL
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Производим эмалевые фасады в Ульяновске. Матовые, глянцевые и металлик. Более 1600 оттенков RAL, 7-этапная технология покраски, идеальная поверхность.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog/enamel" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог эмалевых фасадов
            </Link>
          </div>
        </div>
      </section>

      {/* Технология */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Технология</p>
          <h2 className="h2 mb-6">Как производятся крашеные фасады</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Крашеные (эмалевые) фасады — это МДФ-основа, покрытая высококачественной итальянской эмалью. Технология включает 7 последовательных этапов, каждый из которых контролируется мастером.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {[
              { step: "1", title: "Грунтование", text: "Нанесение грунта на МДФ-основу для идеальной адгезии" },
              { step: "2", title: "Шлифовка", text: "Ручная шлифовка поверхности до идеальной гладкости" },
              { step: "3", title: "Нанесение эмали", text: "Покраска в 2-3 слоя с промежуточными сушками" },
              { step: "4", title: "Сушка и полировка", text: "Сушка в камере и финишная обработка" },
            ].map(({ step, title, text }) => (
              <div key={step} className="bg-bg p-5 lg:p-6">
                <p className="text-sm font-medium text-mint-dark mb-3">{step}</p>
                <h3 className="text-base font-medium text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Три типа покрытия */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Виды эмали</p>
          <h2 className="h2 mb-8">Три типа покрытия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Матовая эмаль", text: "Бархатистая поверхность без бликов. Элегантный современный вид. Не оставляет отпечатков пальцев." },
              { title: "Глянцевая эмаль", text: "Зеркальный блеск с финишным лаком. Визуально расширяет пространство. Премиум-класс." },
              { title: "Металлик", text: "Эффект перламутрового свечения. Уникальная игра света на поверхности. Для эксклюзивных интерьеров." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-bg border border-line rounded-soft p-5">
                <h3 className="text-base font-medium text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Товары */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="label mb-3">Каталог</p>
              <h2 className="h2">Эмалевые фасады MILADA</h2>
            </div>
            <Link href="/catalog/enamel" className="btn-ghost shrink-0 hidden sm:inline-flex">Все модели →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {enamelProducts.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 2} />)}
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Заказать крашеные фасады в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA производит крашеные фасады МДФ в Ульяновске с 2012 года. Используем итальянскую эмаль премиум-класса и современное оборудование для нанесения покрытия. Любой цвет по каталогам RAL, NCS и Pantone.
            </p>
            <p>
              Эмалевые фасады подходят для кухонь, гостиных, гардеробных и ванных комнат. Срок изготовления — от 14 рабочих дней. Работаем с мебельными компаниями, салонами и частными клиентами по всей России.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/fasady-mdf" className="btn-outline">Все фасады МДФ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
