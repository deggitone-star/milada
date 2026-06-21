import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Фасады МДФ от производителя в Ульяновске — ПВХ, эмаль, HPL, патина | MILADA",
  description:
    "Завод фасадов МДФ MILADA в Ульяновске. ПВХ-плёнка, эмаль по RAL, HPL-пластик, патина. Стандартные и премиум фрезеровки, индивидуальный раскрой. Опт для бизнеса, доставка по РФ. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/fasady-mdf` },
  keywords: [
    "фасады мдф ульяновск",
    "фасады мдф от производителя ульяновск",
    "купить фасады мдф ульяновск",
    "мдф фасады для кухни ульяновск",
    "фасады мдф пвх от производителя",
    "мебельные фасады мдф оптом",
    "фасады мдф с фрезеровкой",
    "фасады мдф поволжье россия",
  ],
};

const opt = (url: string, w = 2000) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const HERO_IMG = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/1_g3ao5n.png"
);

export default function FasadyMdfPage() {
  const standart = getProductsByCategory("pvh-standart").slice(0, 4);
  const premium = getProductsByCategory("pvh-premium").slice(0, 4);

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Фасады МДФ", url: `${siteConfig.url}/fasady-mdf` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg-dark" style={{ paddingTop: "var(--header-h)" }}>
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMG} alt="Фасады МДФ от производителя MILADA" fill sizes="100vw" className="object-cover opacity-30" priority quality={85} />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
        </div>
        <div className="container-site relative z-10 py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Фасады МДФ</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Производство в Ульяновске</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Фасады МДФ от производителя
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Производим фасады из МДФ с покрытием ПВХ-плёнкой, эмалью и HPL-пластиком. Стандартные и премиум фрезеровки, индивидуальный раскрой под любые размеры. Доставка по всей России.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Смотреть каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Что такое МДФ */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">О материале</p>
          <h2 className="h2 mb-6">Что такое фасады МДФ</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              МДФ (Medium Density Fibreboard) — плита средней плотности из мелкодисперсных древесных волокон. Это основной материал для производства мебельных фасадов в России и Европе: он прочнее ДСП, не боится влаги, идеально поддаётся фрезеровке и покрытию декоративными материалами.
            </p>
            <p>
              Компания MILADA использует МДФ европейского качества толщиной 16-22 мм. На основу наносится одно из трёх покрытий: ПВХ-плёнка (мембранно-вакуумное прессование), эмаль (многослойная покраска по RAL) или HPL-пластик (ламинирование высокого давления).
            </p>
          </div>
        </div>
      </section>

      {/* Виды покрытий */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <p className="label mb-3">Виды покрытий</p>
          <h2 className="h2 mb-10">Три типа покрытия фасадов МДФ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            <div className="bg-bg-alt p-6 lg:p-8">
              <p className="text-sm font-medium tracking-[0.15em] text-mint-dark mb-4">ПВХ-плёнка</p>
              <h3 className="text-lg font-medium text-ink mb-3">Самое популярное решение</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Декоративная плёнка наносится методом мембранно-вакуумного прессования. Декоры: однотонные, под дерево, металлик, глянец. Доступная цена, сложные 3D-фрезеровки.
              </p>
              <Link href="/catalog/pvh-standart" className="inline-block mt-4 text-sm text-mint-dark hover:underline">Каталог ПВХ →</Link>
            </div>
            <div className="bg-bg-alt p-6 lg:p-8">
              <p className="text-sm font-medium tracking-[0.15em] text-mint-dark mb-4">Эмаль</p>
              <h3 className="text-lg font-medium text-ink mb-3">Премиум-сегмент</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Многослойная покраска по каталогу RAL. Матовая, глянцевая или металлик.
              </p>
              <Link href="/krashenye-fasady" className="inline-block mt-4 text-sm text-mint-dark hover:underline">Подробнее об эмали →</Link>
            </div>
            <div className="bg-bg-alt p-6 lg:p-8">
              <p className="text-sm font-medium tracking-[0.15em] text-mint-dark mb-4">HPL-пластик</p>
              <h3 className="text-lg font-medium text-ink mb-3">Максимальная стойкость</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Пластик высокого давления — абсолютная влагостойкость, устойчивость к царапинам и выгоранию. Декоры: дерево, мрамор, металлик, бетон.
              </p>
              <Link href="/hpl-fasady" className="inline-block mt-4 text-sm text-mint-dark hover:underline">Подробнее о HPL →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Стандартные фрезеровки */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="label mb-3">ПВХ Стандарт</p>
              <h2 className="h2">Стандартные фрезеровки МДФ</h2>
              <p className="mt-3 text-base text-ink-muted">24 классических формы фрезеровки для кухонь и корпусной мебели.</p>
            </div>
            <Link href="/catalog/pvh-standart" className="btn-ghost shrink-0 hidden sm:inline-flex">Все модели →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {standart.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 2} />)}
          </div>
        </div>
      </section>

      {/* Премиум фрезеровки */}
      <section className="section-py bg-bg-alt border-y border-line">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="label mb-3">ПВХ Премиум</p>
              <h2 className="h2">Премиум фрезеровки</h2>
              <p className="mt-3 text-base text-ink-muted">Европейские мотивы, интегрированные ручки, сложные многоуровневые рельефы.</p>
            </div>
            <Link href="/catalog/pvh-premium" className="btn-ghost shrink-0 hidden sm:inline-flex">Все модели →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {premium.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 2} />)}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-py bg-bg">
        <div className="container-site max-w-4xl">
          <p className="label mb-3">Почему МДФ</p>
          <h2 className="h2 mb-8">Преимущества фасадов из МДФ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Прочность", text: "МДФ плотнее и прочнее ДСП. Не крошится при фрезеровке, держит крепёж, не деформируется." },
              { title: "Влагостойкость", text: "При правильном покрытии МДФ не боится влаги — подходит для кухонь и ванных комнат." },
              { title: "Любая фрезеровка", text: "Однородная структура МДФ позволяет вырезать сложные 3D-рельефы и интегрированные ручки." },
              { title: "Экологичность", text: "МДФ производится из натуральных древесных волокон без токсичных смол. Класс эмиссии E1." },
              { title: "Разнообразие покрытий", text: "ПВХ-плёнка, эмаль, HPL-пластик, патина — любое покрытие на одной основе." },
              { title: "Доступная цена", text: "МДФ дешевле массива дерева и шпона, при этом не уступает по внешнему виду." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-bg-alt border border-line rounded-soft p-5">
                <h3 className="text-base font-medium text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Купить фасады МДФ в Ульяновске от производителя</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              Компания MILADA производит мебельные фасады из МДФ в Ульяновске с 2012 года. Работаем с мебельными компаниями, кухонными салонами, мебельными цехами и дилерами по всей России. Принимаем серийные заказы и индивидуальные проекты.
            </p>
            <p>
              В каталоге более 99 моделей фасадов: от классических фрезеровок (Косичка, Арка, Квадро) до премиум-серий европейского уровня (Прага, Мадрид, Виктория, Рим). Изготавливаем по индивидуальным размерам с допусками ±0,5 мм.
            </p>
            <p>
              Условия для оптовых клиентов: работа по договору, отсрочка платежа, доставка через проверенные транспортные компании с многослойной упаковкой.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/catalog" className="btn-outline">Весь каталог</Link>
          </div>
        </div>
      </section>
    </>
  );
}
