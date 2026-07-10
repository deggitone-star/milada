import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Фасады МДФ в ПВХ-плёнке — стандартные и премиум фрезеровки | MILADA",
  description:
    "Мебельные фасады МДФ в ПВХ-плёнке от производителя MILADA в Ульяновске. Стандартные и премиум фрезеровки, более 20 форм, любой декор плёнки. Опт для мебельных компаний. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/pvh-plenka` },
  keywords: [
    "фасады мдф пвх плёнка",
    "фасады в пвх плёнке ульяновск",
    "плёночные фасады мдф от производителя",
    "мебельные фасады пвх оптом",
    "фрезерованные фасады мдф пвх",
  ],
};

const opt = (url: string, w = 1600) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const HERO_IMG = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/1_g3ao5n.png"
);

export default function PvhPlenkaPage() {
  const standartCount = getProductsByCategory("pvh-standart").length;
  const premiumCount = getProductsByCategory("pvh-premium").length;

  const cards = [
    {
      href: "/catalog/pvh-standart",
      title: "Стандартные фрезеровки",
      count: standartCount,
      image: getCategoryBySlug("pvh-standart")?.image,
      text: "Более 20 форм фрезеровки — классические и современные рисунки. Индивидуальный раскрой под ваши размеры.",
    },
    {
      href: "/catalog/pvh-premium",
      title: "Премиум фрезеровки",
      count: premiumCount,
      image: getCategoryBySlug("pvh-premium")?.image,
      text: "Сложные премиальные фрезеровки на современных ЧПУ-станках с высокой точностью обработки.",
    },
  ];

  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "ПВХ плёнка", url: `${siteConfig.url}/pvh-plenka` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HERO */}
      <section className="relative bg-bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Фасады МДФ в ПВХ-плёнке — производство MILADA Ульяновск"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/50" />
        </div>

        <div className="container-site relative z-10 py-20 lg:py-28">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">ПВХ плёнка</span>
          </nav>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
            Покрытие
          </p>
          <h1 className="text-h1 font-medium text-white leading-tight max-w-2xl">
            Фасады МДФ в ПВХ-плёнке
          </h1>
          <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
            МДФ-фасады с облицовкой ПВХ-плёнкой — практичное решение с огромным выбором
            декоров. Доступны в двух видах фрезеровки: стандартной и премиум.
          </p>
        </div>
      </section>

      {/* ДВА ВИДА ФРЕЗЕРОВКИ */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-3">Выберите фрезеровку</p>
          <h2 className="h2 mb-8">Стандартная и премиум</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-bg-alt border border-line rounded-soft overflow-hidden hover:border-ink hover:shadow-lift transition-all duration-200"
              >
                <div className="aspect-[4/3] bg-white overflow-hidden">
                  {c.image && (
                    <Image
                      src={opt(c.image, 800)}
                      alt={c.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-medium text-ink">{c.title}</h3>
                    <span className="text-xs text-ink-subtle shrink-0">{c.count} моделей</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-mint-dark">
                    Смотреть модели
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Другие покрытия */}
          <div className="mt-6 bg-mint/10 border border-line rounded-soft p-5 text-sm text-ink-muted leading-relaxed">
            Ту же фрезеровку можно выполнить и в другом покрытии —{" "}
            <Link href="/catalog/enamel" className="text-mint-dark font-medium hover:underline">эмали</Link>{" "}
            или{" "}
            <Link href="/catalog/patina" className="text-mint-dark font-medium hover:underline">с патиной</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
