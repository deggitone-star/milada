import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import CategoryCard from "@/components/catalog/CategoryCard";
import ProductCard from "@/components/catalog/ProductCard";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Каталог мебельных фасадов в Ульяновске — все модели | MILADA",
  description:
    "Полный каталог мебельных фасадов от производителя MILADA в Ульяновске. Фасады МДФ ПВХ, эмаль, HPL-пластик, камень, патина — 99 моделей в 12 категориях. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/catalog` },
  keywords: [
    "каталог мебельных фасадов",
    "купить фасады ульяновск",
    "фасады для кухни каталог",
    "виды мебельных фасадов",
  ],
};

export default function CatalogPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Каталог", url: `${siteConfig.url}/catalog` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        title="Каталог мебельных фасадов MILADA"
        description="Все мебельные фасады от производителя MILADA в Ульяновске"
        url={`${siteConfig.url}/catalog`}
        itemCount={products.length}
      />

      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">Каталог</p>
          <h1 className="h1">Каталог мебельных фасадов</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            {products.length} моделей фасадов в {categories.length} категориях. Производство в Ульяновске,
            индивидуальный раскрой, доставка по России.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <p className="label mb-6">По материалу</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {categories.map((cat) => <CategoryCard key={cat.slug} category={cat} />)}
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site">
          <h2 className="h2 mb-2">Все мебельные фасады MILADA</h2>
          <p className="text-ink-muted mb-8">
            {products.length} моделей фасадов МДФ от производителя в Ульяновске
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
          </div>
        </div>
      </section>
    </>
  );
}
