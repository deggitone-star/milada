import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function CtaSection() {
  return (
    <section className="section-py bg-bg-dark relative overflow-hidden">
      {/* Декоративный логотип на фоне */}
      <div aria-hidden className="absolute -right-20 -bottom-20 opacity-[0.04] pointer-events-none">
        <Image src="/logo.png" alt="" width={420} height={420} />
      </div>

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">Начать проект</p>
            <h2 className="text-h2 font-medium text-white">Нужен расчёт фасадов?</h2>
            <p className="mt-4 text-white/60 max-w-md">
              Оставьте заявку и менеджер свяжется в течение часа — обсудим материалы, размеры и сроки.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contacts" className="btn-mint">Получить расчёт</Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-pill hover:bg-white/5 transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
