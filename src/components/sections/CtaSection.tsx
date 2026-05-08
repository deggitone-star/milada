// src/components/sections/CtaSection.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function CtaSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Начать проект</p>
          <h2 className="heading-section text-balance">
            Рассчитайте стоимость<br />
            <em className="not-italic text-accent">вашего заказа</em>
          </h2>
          <p className="mt-6 font-sans text-brand-500 leading-relaxed max-w-xl mx-auto">
            Оставьте заявку, и наш менеджер свяжется с вами в течение часа — обсудим материалы, размеры и сроки.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contacts" className="btn-primary">
              Получить расчёт
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="btn-outline"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
