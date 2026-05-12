import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Каменные фасады для кухни — искусственный камень на МДФ | MILADA",
  description:
    "Каменные фасады МДФ от производителя. Искусственный камень с термостойким лаком. 18 цветов + 8 перламутровых. Производство в Ульяновске. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/kamennye-fasady` },
  keywords: [
    "каменные фасады", "фасады под камень", "каменные фасады для кухни",
    "фасады из искусственного камня", "каменные фасады мдф",
  ],
};

export default function KamennyeFasadyPage() {
  const products = getProductsByCategory("stone");

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каменные фасады", url: `${siteConfig.url}/kamennye-fasady` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-bg-dark" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Каменные фасады</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Искусственный камень</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Каменные фасады — эстетика камня без его веса
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Нанесение акрилового композита (искусственного камня) на МДФ-основу с последующим покрытием высокоглянцевым термостойким лаком. 18 однотонных цветов и 8 перламутровых вариантов.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog/stone" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог каменных фасадов
            </Link>
          </div>
        </div>
      </section>

      {/* О материале */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Технология</p>
          <h2 className="h2 mb-6">Как производятся каменные фасады</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Каменные фасады MILADA — инновационное решение на стыке натуральных материалов и современных технологий. На МДФ-основу наносится слой акрилового композита (искусственный камень), который воспроизводит текстуру и тактильные ощущения натурального камня.
            </p>
            <p>
              Финишное покрытие — высокоглянцевый термостойкий лак. Он защищает поверхность от нагрева (безопасно для кухонь), влаги, бытовой химии и механических повреждений.
            </p>
          </div>
        </div>
      </section>

      {/* Палитра */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Палитра</p>
          <h2 className="h2 mb-8">26 цветов каменных фасадов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg border border-line rounded-soft p-5">
              <h3 className="text-base font-medium text-ink mb-2">18 однотонных цветов</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                От классического белого и бежевого до глубокого чёрного и графитового. Нейтральная каменная текстура с лёгким блеском.
              </p>
            </div>
            <div className="bg-bg border border-line rounded-soft p-5">
              <h3 className="text-base font-medium text-ink mb-2">8 перламутровых вариантов</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Эффект мерцающего свечения. Перламутровые частицы в составе камня создают игру света при разном освещении.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Товары */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="label mb-3">Каталог</p>
              <h2 className="h2">Каменные фасады MILADA</h2>
            </div>
            <Link href="/catalog/stone" className="btn-ghost shrink-0 hidden sm:inline-flex">Все модели →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 2} />)}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Каменные фасады от производителя в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Каменные фасады особенно подходят для современных интерьеров в стиле минимализм, хай-тек и лофт. MILADA производит каменные фасады в Ульяновске для мебельных компаний, салонов и частных клиентов по всей России.
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
