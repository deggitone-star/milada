// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-300">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="MILADA">
              <Image src="/logo.png" alt="MILADA" width={44} height={44} className="rounded-full" />
              <span className="font-display text-xl font-semibold tracking-widest uppercase text-white">
                MILADA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-400">
              Производство мебельных фасадов премиум-класса с 2012 года. Собственное производство в Москве.
            </p>
          </div>

          {/* Catalog */}
          <div>
            <p className="section-label text-brand-500 mb-5">Каталог</p>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/catalog/${cat.slug}`}
                    className="text-sm text-brand-400 hover:text-white transition-colors duration-200"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <p className="section-label text-brand-500 mb-5">Компания</p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "О производстве" },
                { href: "/catalog", label: "Все фасады" },
                { href: "/contacts", label: "Контакты" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-brand-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="section-label text-brand-500 mb-5">Контакты</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-sm text-brand-400 hover:text-white transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-brand-400 hover:text-white transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-brand-500">{siteConfig.address}</li>
              <li className="text-sm text-brand-500">{siteConfig.workingHours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-brand-600">
            © {year} MILADA. Все права защищены.
          </p>
          <p className="text-xs text-brand-600">
            Производство мебельных фасадов в Москве
          </p>
        </div>
      </div>
    </footer>
  );
}
