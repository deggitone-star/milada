import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getProductsByCategory } from "@/data/products";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import MillingTabs from "@/components/catalog/MillingTabs";

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
  const standart = getProductsByCategory("pvh-standart");
  const premium = getProductsByCategory("pvh-premium");

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

      {/* МОДЕЛИ — все фрезеровки с фильтром */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-3">Каталог моделей</p>
          <h2 className="h2 mb-3">Все фрезеровки в ПВХ-плёнке</h2>
          <p className="text-ink-muted mb-8 max-w-2xl leading-relaxed">
            {premium.length + standart.length} форм фрезеровки: {premium.length} премиум
            и {standart.length} стандартных. Любую модель изготовим по вашим размерам —
            с декором плёнки из каталога.
          </p>

          <MillingTabs standart={standart} premium={premium} />

          {/* Другие покрытия */}
          <div className="mt-10 bg-mint/10 border border-line rounded-soft p-5 text-sm text-ink-muted leading-relaxed">
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
