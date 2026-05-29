import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Производство мебельных фасадов в Ульяновске — завод MILADA, полный цикл",
  description:
    "Собственный завод мебельных фасадов MILADA в Ульяновске. Полный цикл производства: раскрой МДФ, фрезеровка на ЧПУ, облицовка ПВХ/HPL, покраска эмалью, патинирование. Оборудование, технологии, контроль качества. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/proizvodstvo-fasadov` },
  keywords: [
    "производство мебельных фасадов ульяновск",
    "завод фасадов ульяновск",
    "фабрика мебельных фасадов поволжье",
    "изготовление фасадов мдф ульяновск",
    "производство кухонных фасадов россия",
    "фрезеровка фасадов чпу ульяновск",
    "производство фасадов пвх",
    "завод мдф фасадов",
  ],
};

const stages = [
  { num: "1", title: "Раскрой МДФ", text: "Автоматический раскрой плит МДФ на форматно-раскроечном станке. Точность реза ±0,1 мм. Оптимизация раскроя для минимизации отходов." },
  { num: "2", title: "Фрезеровка", text: "Нанесение декоративного рельефа на ЧПУ-станках. Более 30 форм фрезеровки — от классических до премиум-европейских." },
  { num: "3", title: "Нанесение покрытия", text: "В зависимости от типа фасада: мембранно-вакуумное прессование ПВХ-плёнки, многослойная покраска эмалью или облицовка HPL-пластиком." },
  { num: "4", title: "Сушка и обработка", text: "Сушка в специальных камерах при контролируемой температуре и влажности. Промежуточная шлифовка между слоями (для эмали)." },
  { num: "5", title: "Контроль качества", text: "Визуальный и инструментальный контроль каждого фасада: геометрия, покрытие, цвет, отсутствие дефектов. Отклонения не более ±0,5 мм." },
  { num: "6", title: "Упаковка и отгрузка", text: "Многослойная упаковка: гофрокартон, пенопласт, стрейч-плёнка. Маркировка каждой единицы. Доставка ТК по всей России." },
];

export default function ProizvodstvoPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Производство фасадов", url: `${siteConfig.url}/proizvodstvo-fasadov` },
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
            <span className="text-white/80">Производство фасадов</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Собственный завод</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Производство мебельных фасадов в Ульяновске
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Полный цикл производства на собственном заводе. От раскроя МДФ до готового упакованного фасада — все этапы под нашим контролем. Работаем с 2012 года.
          </p>
        </div>
      </section>

      {/* Цифры */}
      <section className="bg-bg border-b border-line">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {[
              { value: "14+", label: "лет на рынке" },
              { value: "500+", label: "проектов в год" },
              { value: "100+", label: "декоров и материалов" },
              { value: "5 дней", label: "минимальный срок" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-bg p-6 lg:p-8 text-center">
                <p className="text-3xl lg:text-4xl font-medium text-ink">{value}</p>
                <p className="mt-2 text-sm text-ink-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы производства */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-3">Процесс</p>
          <h2 className="h2 mb-10">6 этапов производства фасада</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {stages.map(({ num, title, text }) => (
              <div key={num} className="bg-bg p-6 lg:p-8">
                <p className="text-sm font-medium tracking-[0.15em] text-mint-dark mb-4">{num}</p>
                <h3 className="text-base font-medium text-ink mb-3">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Материалы */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Материалы и покрытия</p>
          <h2 className="h2 mb-8">Что мы производим</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA производит мебельные фасады из МДФ с различными типами покрытий. Каждый тип подходит для определённых задач и бюджетов.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "ПВХ-плёнка", desc: "100+ декоров, 3D-фрезеровки, стандарт и премиум", link: "/fasady-mdf" },
              { title: "HPL-пластик", desc: "Максимальная стойкость, 50+ декоров", link: "/hpl-fasady" },
              { title: "Эмаль", desc: "Любой цвет по RAL — матовый, глянец, металлик", link: "/krashenye-fasady" },
            ].map(({ title, desc, link }) => (
              <Link key={title} href={link} className="group bg-bg border border-line rounded-soft p-5 hover:border-ink hover:shadow-lift transition-all">
                <h3 className="text-base font-medium text-ink group-hover:text-mint-dark transition-colors">{title}</h3>
                <p className="text-sm text-ink-muted mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Контроль качества */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Качество</p>
          <h2 className="h2 mb-6">Система контроля качества</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Каждый фасад проходит многоступенчатый контроль: проверка геометрии (отклонения не более ±0,5 мм), визуальный контроль покрытия, проверка цвета на соответствие образцу, контроль кромки и торцов.
            </p>
            <p>
              Все материалы сертифицированы и соответствуют классу эмиссии E1 (безопасны для здоровья). МДФ-плиты, ПВХ-плёнки, эмали и HPL-пластик — от проверенных европейских и российских поставщиков.
            </p>
          </div>
        </div>
      </section>

      {/* SEO + CTA */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Заказать фасады от производителя в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA — производитель мебельных фасадов в Ульяновске с 2012 года. Работаем с мебельными компаниями, кухонными салонами, мебельными цехами и дилерами по всей России. Серийные заказы и индивидуальные проекты. Работа по договору, отсрочка для постоянных партнёров.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/dlya-mebelnyh-kompaniy" className="btn-outline">Условия для партнёров</Link>
            <Link href="/catalog" className="btn-ghost">Весь каталог</Link>
          </div>
        </div>
      </section>
    </>
  );
}
