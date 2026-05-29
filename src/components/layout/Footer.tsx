import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { categories } from "@/data/categories";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/60">
      <div className="container-site py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="MILADA" width={48} height={48} quality={100} />
              <span className="font-semibold tracking-wider text-white text-lg">MILADA</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Производство мебельных фасадов с 2012 года. Собственный завод, индивидуальный раскрой.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-white/40 mb-4">Каталог</p>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/catalog/${cat.slug}`} className="text-sm hover:text-white transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-white/40 mb-4">Компания</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">О компании</Link></li>
              <li><Link href="/galereya" className="text-sm hover:text-white transition-colors">Галерея</Link></li>
              <li><Link href="/dlya-mebelnyh-kompaniy" className="text-sm hover:text-white transition-colors">Для бизнеса</Link></li>
              <li><Link href="/catalog" className="text-sm hover:text-white transition-colors">Все фасады</Link></li>
              <li><Link href="/contacts" className="text-sm hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-white/40 mb-4">Контакты</p>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-white/40">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-white/40">© {year} MILADA. Все права защищены.</p>
          <p className="text-xs text-white/40">Производство мебельных фасадов</p>
        </div>
      </div>
    </footer>
  );
}
