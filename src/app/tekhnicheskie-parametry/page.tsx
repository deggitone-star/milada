import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Технические параметры фасадов МДФ | MILADA Ульяновск",
  description:
    "Технические характеристики мебельных фасадов MILADA: профили торцов, типы лучей, обозначения исполнения рамок. Документация для мебельных производств. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/tekhnicheskie-parametry` },
};

const specs = [
  { alt: "Профиль торца фасада", src: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778829882/__2022-04-18_14.32.55_qdtnpn.png" },
  { alt: "Типы лучей", src: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778829882/__2022-04-18_14.32.59_nojlxv.png" },
  { alt: "Обозначения исполнения рамок", src: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778829882/__2022-04-18_14.33.08_dqmiik.png" },
  { alt: "Обозначения исполнения рамок — продолжение", src: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778829882/__2022-04-18_14.33.13_utx1ry.png" },
  { alt: "Обозначения исполнения рамок — схемы", src: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778829882/__2022-04-18_14.33.19_o233dm.png" },
];

export default function TechParamsPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Технические параметры", url: `${siteConfig.url}/tekhnicheskie-parametry` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <nav className="flex items-center gap-2 text-xs text-ink-subtle mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-ink-muted">Технические параметры</span>
          </nav>
          <p className="label mb-3">Документация</p>
          <h1 className="h1">Технические параметры фасадов</h1>
          <p className="mt-4 text-base text-ink-muted max-w-2xl leading-relaxed">
            Профили торцов, типы лучей и обозначения исполнения рамок для заказа фасадов.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site max-w-5xl space-y-8">
          {specs.map((spec, i) => (
            <Image
              key={i}
              src={spec.src}
              alt={`${spec.alt} — MILADA`}
              width={1200}
              height={800}
              className="w-full h-auto"
              quality={95}
            />
          ))}
        </div>
      </section>

      <section className="section-py bg-bg-alt border-t border-line">
        <div className="container-site max-w-4xl">
          <h2 className="h2 mb-4">Остались вопросы?</h2>
          <p className="text-ink-muted leading-relaxed mb-8">
            Свяжитесь с нами для уточнения технических деталей и параметров под ваш проект.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacts" className="btn-primary">Связаться с нами</Link>
            <Link href="/catalog" className="btn-outline">Смотреть каталог</Link>
          </div>
        </div>
      </section>
    </>
  );
}
