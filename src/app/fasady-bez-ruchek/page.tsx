import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getProductBySlug } from "@/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Фасады с интегрированной ручкой — МДФ без ручек от производителя | MILADA Ульяновск",
  description:
    "Фасады МДФ с интегрированной ручкой от производителя MILADA в Ульяновске. Чистая геометрия без выступающей фурнитуры — минимализм для современных кухонь. Покрытие любого цвета, индивидуальный раскрой, опт для мебельных компаний. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/fasady-bez-ruchek` },
  keywords: [
    "фасады без ручек",
    "фасады без ручек ульяновск",
    "кухня без ручек",
    "фасады с интегрированной ручкой",
    "интегрированная ручка фасад мдф",
    "безручечные фасады от производителя",
    "фасады с фрезерованной ручкой",
    "минималистичные фасады для кухни",
    "фасады без ручек мдф купить",
  ],
};

const HANDLELESS_SLUGS = ["pvh-int-ruchka", "pvh-int-ruchka-1", "pvh-int-ruchka-2"];

export default function FasadyBezRuchekPage() {
  const products = HANDLELESS_SLUGS
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Фасады с интегрированной ручкой", url: `${siteConfig.url}/fasady-bez-ruchek` },
  ];

  const advantages = [
    {
      title: "Непрерывные линии",
      text: "Фасады смыкаются без выступающей фурнитуры — геометрия мебели остаётся цельной и спокойной.",
    },
    {
      title: "Ничего лишнего",
      text: "Ручка фрезеруется в самом фасаде. Не нужно подбирать и докупать фурнитуру, нечему отвалиться или выйти из моды.",
    },
    {
      title: "Проще в уходе",
      text: "Нет выступающих ручек, за которые цепляется одежда и где скапливается загрязнение. Ровная поверхность легко чистится.",
    },
    {
      title: "Тренд современных кухонь",
      text: "Безручечные фасады — один из главных запросов в дизайне кухонь: минимализм, интеграция мебели в интерьер.",
    },
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
            <span className="text-white/80">Фасады с интегрированной ручкой</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Минимализм</p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-3xl">
            Фасады с интегрированной ручкой
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Производим безручечные фасады в Ульяновске. Ручка фрезеруется прямо в фасаде — чистая
            геометрия без выступающей фурнитуры. Несколько профилей захвата, покрытие любого цвета.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link
              href="/catalog/pvh-premium"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
            >
              Премиум фрезеровки
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-py bg-bg-alt border-b border-line">
        <div className="container-site">
          <p className="label mb-3">Почему без ручек</p>
          <h2 className="h2 mb-8">Безручечный фасад — это про целостность</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map(({ title, text }) => (
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
              <h2 className="h2">Фасады с интегрированной ручкой</h2>
            </div>
            <Link href="/catalog/pvh-premium" className="btn-ghost shrink-0 hidden sm:inline-flex">
              Все премиум-фасады →
            </Link>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {products.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 2} />)}
            </div>
          ) : (
            <p className="text-ink-muted">Скоро добавим модели в этот раздел.</p>
          )}
        </div>
      </section>

      {/* SEO-текст */}
      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-6">Заказать фасады без ручек в Ульяновске</h2>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>
              MILADA производит мебельные фасады в Ульяновске с 2012 года. Фасады с интегрированной
              ручкой — это МДФ, в котором захват фрезеруется прямо в кромке фасада: отдельная
              фурнитура не нужна, а поверхность остаётся ровной и цельной. Такое решение хорошо
              работает в минималистичных кухнях, гардеробных и корпусной мебели, где важна чистая
              геометрия без выступающих элементов.
            </p>
            <p>
              Доступно несколько профилей захвата и покрытие любого цвета на выбор из каталога
              производителя. Делаем индивидуальный раскрой под проект. Работаем с мебельными
              компаниями, кухонными салонами и дилерами в Ульяновске, Поволжье и по России —
              отгружаем фасады под сборку, без наценки розницы.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Запросить расчёт</Link>
            <Link href="/catalog/pvh-premium" className="btn-outline">Премиум фрезеровки</Link>
            <Link href="/dlya-mebelnyh-kompaniy" className="btn-outline">Для бизнеса</Link>
          </div>
        </div>
      </section>
    </>
  );
}
