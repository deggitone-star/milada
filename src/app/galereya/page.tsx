import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { galleryProjects, galleryPhotos } from "@/data/gallery";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Галерея работ MILADA — мебель из наших фасадов | Ульяновск",
  description:
    "Галерея реальных проектов с фасадами MILADA: кухни, шкафы, тумбы, ванные и декоративные элементы. Фасады МДФ, ПВХ, HPL и эмаль от производителя в Ульяновске. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/galereya` },
  keywords: [
    "галерея мебельных фасадов",
    "фасады в интерьере фото",
    "кухни с фасадами milada",
    "мебель на заказ ульяновск фото",
    "примеры работ мебельные фасады",
    "фасады для кухни фото ульяновск",
  ],
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Галерея", url: `${siteConfig.url}/galereya` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        title="Галерея работ MILADA — мебель из наших фасадов"
        description="Реальные проекты с фасадами MILADA: кухни, шкафы, тумбы, ванные"
        url={`${siteConfig.url}/galereya`}
        itemCount={galleryPhotos.length}
      />

      {/* HERO */}
      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-ink-subtle mb-5">
            <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-ink-muted">Галерея</span>
          </nav>
          <p className="label mb-3">Наши работы</p>
          <h1 className="h1">Галерея — мебель из фасадов MILADA</h1>
          <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
            Реальные проекты, выполненные с нашими фасадами: кухни, шкафы, тумбы, мебель для ванной
            и декоративные элементы. Фасады МДФ, ПВХ-плёнка, HPL-пластик и эмаль.
          </p>
        </div>
      </div>

      {/* ГАЛЕРЕЯ */}
      <section className="section-py bg-bg">
        <div className="container-site">
          <ProjectGallery projects={galleryProjects} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-bg-dark">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-medium text-white mb-4">Хотите такие же фасады?</h2>
          <p className="text-white/60 mb-8">
            Изготовим фасады по вашим размерам в любом из материалов и декоров. Рассчитаем стоимость и подберём решение.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacts" className="btn-mint">Запросить расчёт</Link>
            <Link href="/catalog" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
