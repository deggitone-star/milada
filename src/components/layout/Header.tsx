"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about",   label: "О компании" },
  { href: "/contacts",label: "Контакты" },
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
          scrolled || menuOpen ? "bg-bg/95 backdrop-blur-sm border-line" : "bg-bg/80 border-transparent"
        )}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-site h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="MILADA">
            <Image src="/logo.png" alt="MILADA" width={36} height={36} className="rounded-full" priority />
            <span className="font-semibold tracking-wider text-ink text-base">MILADA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname.startsWith(href) ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
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
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-2xl font-medium py-3 border-b border-line",
                pathname.startsWith(href) ? "text-ink" : "text-ink-muted"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="mt-8 text-lg text-ink-muted"
        >
          {siteConfig.phone}
        </a>
      </div>
    </>
  );
}
