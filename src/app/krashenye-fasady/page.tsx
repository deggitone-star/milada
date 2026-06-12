import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Крашеные фасады МДФ от производителя — эмаль по RAL, 1600+ оттенков | MILADA Ульяновск",
  description:
    "Крашеные фасады МДФ от завода MILADA в Ульяновске. Покраска эмалью: матовая, глянцевая, металлик. Любой цвет по каталогу RAL — 1600+ оттенков. Индивидуальный раскрой, доставка по России. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/krashenye-fasady` },
  keywords: [
    "крашеные фасады ульяновск",
    "крашеные фасады мдф от производителя",
    "эмалевые фасады ульяновск",
    "фасады эмаль по ral",
    "покраска фасадов мдф ульяновск",
    "крашеные фасады для кухни купить",
    "глянцевые фасады от производителя",
    "матовые эмалевые фасады",
    "фасады эмаль металлик",
  ],
};

const opt = (url: string, w = 2000) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const HERO_IMG = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/5_1_nakrql.png"
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
            Производим эмалевые фасады в Ульяновске. Матовые, глянцевые и металлик. Более 1600 оттенков RAL, идеальная поверхность.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog/enamel" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог эмалевых фасадов
            </Link>
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
              { title: "Матовая эмаль", text: "Бархатистая поверхность без бликов. Элегантный современный вид. Не оставляет отпечатков пальцев.", href: "/catalog/enamel/enamel-mat" },
              { title: "Глянцевая эмаль", text: "Зеркальный блеск с финишным лаком. Визуально расширяет пространство. Премиум-класс.", href: "/catalog/enamel/enamel-gloss" },
              { title: "Металлик", text: "Эффект перламутрового свечения. Уникальная игра света на поверхности. Для эксклюзивных интерьеров.", href: "/catalog/enamel/enamel-metallic" },
            ].map(({ title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-bg border border-line rounded-soft p-5 hover:border-ink hover:shadow-lift transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-medium text-ink group-hover:text-mint-dark transition-colors">{title}</h3>
                  <svg className="shrink-0 text-ink-subtle group-hover:text-mint-dark transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </Link>
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
              Эмалевые фасады подходят для кухонь, гостиных, гардеробных и ванных комнат. Срок изготовления — от 14 рабочих дней. Работаем с мебельными компаниями, салонами и дилерами по всей России.
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
