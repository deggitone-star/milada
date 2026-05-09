import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import MaxButton from "@/components/ui/MaxButton";

const opt = (url: string, w = 2000) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`);

const CTA_IMAGE = opt(
  "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778322343/ChatGPT_Image_9_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._14_24_31_vz0h98.png"
);

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      {/* Фоновое фото */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_IMAGE}
          alt="Производство мебельных фасадов MILADA"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/50" />
      </div>

      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-mint blur-3xl opacity-[0.08] pointer-events-none z-[1]"
      />

      <div className="container-site relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-4">
              Заявка на расчёт
            </p>
            <h2 className="text-h2 font-medium text-white">
              Рассчитаем стоимость фасадов для вашего производства
            </h2>
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Работаем с мебельными компаниями и&nbsp;дилерами по&nbsp;всей России.
              Поможем подобрать материалы, покрытия и&nbsp;сроки производства.
            </p>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Производство в Ульяновске",
                "Доставка по РФ",
                "Ответ в течение часа",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/80">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-mint shrink-0">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>

            {/* Прямой телефон */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2">Связаться напрямую</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-2xl font-medium text-white hover:text-mint transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <MaxButton className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-mint transition-colors" />
              </div>
            </div>
          </div>

          {/* Right — quick form */}
          <form
            action="https://formsubmit.co/milada.73@mail.ru"
            method="POST"
            className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-soft p-6 lg:p-8 shadow-2xl"
          >
            <input type="hidden" name="_subject" value="Заявка с сайта MILADA — Расчёт фасадов" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/?sent=1" />
            <input type="hidden" name="_template" value="table" />

            <p className="text-xs font-medium tracking-[0.15em] uppercase text-mint mb-1">
              Заявка на расчёт
            </p>
            <p className="text-lg font-medium text-white mb-6">
              Перезвоним в течение часа
            </p>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Имя"
                required
                className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Компания"
                className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                required
                className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
              />
              <textarea
                name="message"
                placeholder="Материал, объем или тип фасадов"
                rows={3}
                className="w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-mint text-mint-dark font-medium text-sm px-6 py-3.5 rounded-pill hover:bg-mint-light transition-colors duration-200"
            >
              Получить расчёт
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="mt-4 text-[11px] text-white/50 leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.{" "}
              <Link href="/contacts" className="text-mint hover:underline">
                Развёрнутая форма
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
