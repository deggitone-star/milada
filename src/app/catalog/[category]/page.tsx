import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/catalog/ProductCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.description} Производство, индивидуальный раскрой.`,
    alternates: { canonical: `${siteConfig.url}/catalog/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);
  // Берём первый товар категории как фон hero (если есть)
  const heroImage = items[0]?.image || category.image;

  return (
    <>
      {/* HERO BANNER ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-bg-dark"
        style={{ paddingTop: "var(--header-h)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={category.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
            quality={85}
          />
          {/* Затемняющий градиент: слева темнее (для читаемости текста), справа прозрачнее */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
          {/* Дополнительный тёмный оверлей снизу */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/60" />
        </div>

        {/* Декоративный мятный круг — отсылка к лого */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-mint blur-3xl opacity-10 pointer-events-none"
        />

        {/* Content */}
        <div className="container-site relative z-10 py-16 lg:py-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white/80">{category.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-5xl">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-soft bg-mint/15 backdrop-blur-sm flex items-center justify-center text-mint shrink-0">
                  <CategoryIcon slug={category.slug} className="w-8 h-8" />
                </div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint">Каталог</p>
              </div>

              <h1 className="text-h1 font-medium text-white leading-tight max-w-2xl">
                {category.title}
              </h1>
              <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
                {category.description}
              </p>
            </div>

            {/* Кол-во позиций — справа */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-soft px-5 py-4 shrink-0 lg:self-end">
              <p className="text-3xl font-medium text-white">{items.length}</p>
              <p className="text-xs text-white/60 mt-0.5">
                {items.length === 1 ? "позиция" : items.length < 5 ? "позиции" : "позиций"} в каталоге
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS ────────────────────────────────────────────────── */}
      <section className="section-py bg-bg">
        <div className="container-site">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {items.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 4} />)}
            </div>
          ) : (
            <p className="text-ink-subtle">В этой категории пока нет товаров.</p>
          )}
        </div>
      </section>
    </>
  );
}
