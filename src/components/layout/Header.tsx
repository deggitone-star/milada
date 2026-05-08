// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "Производство" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-brand-50/95 backdrop-blur-sm border-b border-brand-200"
            : "bg-transparent"
        )}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="MILADA — главная">
            <Image
              src="/logo.png"
              alt="MILADA"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span className="ml-3 font-display text-xl font-semibold tracking-widest uppercase text-brand-950">
              MILADA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-sans text-sm tracking-wide transition-colors duration-200",
                  pathname.startsWith(href)
                    ? "text-accent"
                    : "text-brand-700 hover:text-brand-950"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="hidden md:block font-sans text-sm font-medium text-brand-950 hover:text-accent transition-colors"
          >
            {siteConfig.phone}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <span
              className={cn(
                "block h-px w-6 bg-brand-950 transition-all duration-300",
                menuOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-brand-950 transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-brand-950 transition-all duration-300",
                menuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-50 flex flex-col justify-center px-8 transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ paddingTop: "var(--header-h)" }}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-display text-4xl font-light transition-colors duration-200",
                pathname.startsWith(href) ? "text-accent" : "text-brand-950"
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="mt-12 font-sans text-lg text-brand-600"
        >
          {siteConfig.phone}
        </a>
      </div>
    </>
  );
}
