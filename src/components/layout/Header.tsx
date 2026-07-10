"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

type NavChild = { href: string; label: string };
type NavItem = { href?: string; label: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  { href: "/catalog",                  label: "Каталог" },
  { label: "Фрезеровки", children: [
    { href: "/catalog/pvh-premium",    label: "Премиум" },
    { href: "/catalog/pvh-standart",   label: "Стандартные" },
  ] },
  { href: "/galereya",                 label: "Галерея" },
  { href: "/dlya-mebelnyh-kompaniy",   label: "Для бизнеса" },
  { href: "/about",                    label: "О компании" },
  { href: "/contacts",                 label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled || menuOpen ? "bg-bg/95 backdrop-blur-sm border-line" : "bg-bg border-transparent"
        )}
        style={{ height: "var(--header-h)", paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="container-site h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="MILADA">
            <Image
              src="/logo.png"
              alt="MILADA"
              width={48}
              height={48}
              priority
              quality={100}
            />
            <span className="font-semibold tracking-wider text-ink text-lg">MILADA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors",
                      item.children.some((c) => pathname.startsWith(c.href)) ? "text-ink" : "text-ink-muted group-hover:text-ink"
                    )}
                  >
                    {item.label}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-bg border border-line rounded-soft shadow-lg py-2 min-w-[190px]">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-bg-alt",
                            pathname.startsWith(c.href) ? "text-ink" : "text-ink-muted hover:text-ink"
                          )}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname.startsWith(item.href!) ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="hidden md:block text-sm font-medium text-ink hover:text-mint-dark transition-colors"
          >
            {siteConfig.phone}
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Меню"
          >
            <span className={cn("block h-px w-6 bg-ink transition-transform", menuOpen && "rotate-45 translate-y-[7px]")} />
            <span className={cn("block h-px w-6 bg-ink transition-opacity", menuOpen && "opacity-0")} />
            <span className={cn("block h-px w-6 bg-ink transition-transform", menuOpen && "-rotate-45 -translate-y-[7px]")} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg flex flex-col px-6 transition-opacity duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="py-3 border-b border-line">
                <span className="text-2xl font-medium text-ink-muted block">{item.label}</span>
                <div className="mt-3 flex flex-col gap-3 pl-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={cn(
                        "text-lg font-medium",
                        pathname.startsWith(c.href) ? "text-ink" : "text-ink-muted"
                      )}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "text-2xl font-medium py-3 border-b border-line",
                  pathname.startsWith(item.href!) ? "text-ink" : "text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <a
          href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
          className="mt-8 text-lg text-ink-muted"
        >
          {siteConfig.phone}
        </a>
      </div>
    </>
  );
}
