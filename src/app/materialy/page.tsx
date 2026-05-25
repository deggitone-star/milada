import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { plasticHPL, getTotalDecorsCount } from "@/data/materials";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Материалы для мебельных фасадов — пластик HPL, плёнка ПВХ | MILADA Ульяновск",
  description:
    "Каталог материалов для производства мебельных фасадов MILADA: пластик HPL, плёнка ПВХ. Декоры дерева, мрамора, камня, однотонные. Ульяновск. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/materialy` },
};

const materials = [
  {
    title: "Пластик HPL",
    href: "/catalog/plastic",
    count: getTotalDecorsCount(plasticHPL),
    description: "Ламинат высокого давления — однотонные, древесные, каменные, фантазийные декоры. 4 коллекции.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-current">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  // Плёнка ПВХ будет добавлена после получения финального каталога
];

export default function MaterialyPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Материалы", url: `${siteConfig.url}/materialy` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-ink-subtle mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-ink-muted">Материалы</span>
          </nav>
          <p className="label mb-3">Каталог материалов</p>
          <h1 className="h1">Материалы для фасадов</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            Каталог декоров и покрытий, которые мы используем в производстве мебельных фасадов. Выберите материал и декор — мы изготовим фасады по вашим размерам.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <Link
                key={mat.href}
                href={mat.href}
                className="group bg-bg-alt border border-line rounded-soft p-8 hover:border-ink hover:shadow-lift transition-all duration-200 block"
              >
                <div className="text-ink-muted group-hover:text-mint-dark transition-colors mb-6">
                  {mat.icon}
                </div>
                <h2 className="text-xl font-medium text-ink mb-2">{mat.title}</h2>
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{mat.description}</p>
                <p className="text-xs font-medium text-mint-dark">
                  {mat.count} декоров →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
