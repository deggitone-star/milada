import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { plasticHPL, getCollectionDecorsCount, collectionUrlSlug } from "@/data/materials";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Пластиковые фасады HPL от производителя в Ульяновске — влагостойкие, 200+ декоров | MILADA",
  description:
    "Пластиковые фасады HPL от завода MILADA в Ульяновске. Влагостойкие, устойчивы к царапинам и выгоранию, срок службы 20+ лет. Декоры: дерево, мрамор, камень, однотонные. Опт для бизнеса, доставка по России. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/hpl-fasady` },
  keywords: [
    "hpl фасады ульяновск",
    "пластиковые фасады для кухни ульяновск",
    "фасады hpl пластик от производителя",
    "пластиковые фасады купить ульяновск",
    "hpl фасады от производителя",
    "влагостойкие фасады для кухни",
    "фасады hpl мдф ульяновск",
    "пластиковые мебельные фасады россия",
  ],
};

export default function HplFasadyPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "HPL фасады", url: `${siteConfig.url}/hpl-fasady` },
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
            <span className="text-white/80">HPL фасады</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Пластик высокого давления</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Пластиковые фасады HPL — максимальная стойкость
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Фасады на основе МДФ с облицовкой HPL-пластиком высокого давления. Абсолютная влагостойкость, устойчивость к царапинам, ударам и выгоранию. Срок службы более 20 лет.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog/plastic" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Каталог декоров HPL
            </Link>
          </div>
        </div>
      </section>

      {/* Что такое HPL */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">О материале</p>
          <h2 className="h2 mb-6">Что такое HPL-пластик</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              HPL (High Pressure Laminate) — ламинат высокого давления, один из самых прочных облицовочных материалов. Производится путём прессования нескольких слоёв бумаги, пропитанной термореактивными смолами, при температуре 150°C и давлении 90 кг/см².
            </p>
            <p>
              В результате получается материал, который не боится воды, не выгорает на солнце, не царапается при обычной эксплуатации и не деформируется при перепадах температур. HPL-фасады особенно востребованы для кухонь с активной эксплуатацией, ванных комнат, офисов, кафе и ресторанов.
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Преимущества</p>
          <h2 className="h2 mb-8">Почему выбирают HPL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Абсолютная влагостойкость", text: "HPL не впитывает воду. Подходит для кухонь, ванных, общественных помещений." },
              { title: "Устойчивость к царапинам", text: "Твёрдость поверхности HPL сопоставима с камнем. Не царапается при обычной эксплуатации." },
              { title: "Не выгорает", text: "UV-стабильность: цвет и рисунок сохраняются даже при прямом солнечном свете." },
              { title: "Простой уход", text: "Достаточно влажной тряпки. Не нужны специальные средства для ухода." },
              { title: "Богатый выбор декоров", text: "Дерево, мрамор, бетон, металлик, перламутр, фантазийные узоры — более 50 декоров." },
              { title: "Долговечность", text: "Срок службы более 20 лет без потери внешнего вида." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-bg border border-line rounded-soft p-5">
                <h3 className="text-base font-medium text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Коллекции HPL */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="label mb-3">Каталог</p>
              <h2 className="h2">Коллекции пластика HPL</h2>
            </div>
            <Link href="/catalog/plastic" className="btn-ghost shrink-0 hidden sm:inline-flex">Все декоры →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {plasticHPL.collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/catalog/plastic/${collectionUrlSlug(collection.slug)}`}
                className="group bg-bg-alt border border-line rounded-soft p-6 flex flex-col justify-between hover:border-mint hover:shadow-sm transition-all min-h-[140px]"
              >
                <div>
                  <h3 className="text-lg font-medium text-ink group-hover:text-mint-dark transition-colors">{collection.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{getCollectionDecorsCount(collection)} декоров</p>
                </div>
                <span className="mt-6 text-sm font-medium text-mint-dark">Смотреть коллекцию →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 p-6 lg:p-8 bg-bg-alt border border-line rounded-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-base font-medium text-ink">Выбрать декор пластика</p>
              <p className="mt-1 text-sm text-ink-muted">Дерево, мрамор, камень, однотонные, супермат, фантазийные</p>
            </div>
            <Link href="/catalog/plastic" className="btn-primary shrink-0">Каталог декоров →</Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Купить HPL фасады в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA производит пластиковые фасады HPL в Ульяновске. Работаем с мебельными компаниями, кухонными салонами и дилерами. Индивидуальный раскрой, доставка по России, работа по договору.
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
