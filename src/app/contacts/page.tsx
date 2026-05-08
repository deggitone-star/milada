// src/app/contacts/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Свяжитесь с нами для расчёта стоимости мебельных фасадов. ${siteConfig.phone}. ${siteConfig.address}.`,
  alternates: {
    canonical: `${siteConfig.url}/contacts`,
  },
};

export default function ContactsPage() {
  return (
    <>
      <div
        className="bg-white border-b border-brand-100"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="container-site py-12 lg:py-16">
          <p className="section-label mb-3">Связаться</p>
          <h1 className="heading-section">Контакты</h1>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-light text-brand-950 mb-8">
                Реквизиты и адрес
              </h2>

              <dl className="space-y-6">
                <div>
                  <dt className="section-label mb-1">Телефон</dt>
                  <dd>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="font-sans text-lg text-brand-950 hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="section-label mb-1">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-sans text-lg text-brand-950 hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="section-label mb-1">Адрес</dt>
                  <dd className="font-sans text-brand-700">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="section-label mb-1">Режим работы</dt>
                  <dd className="font-sans text-brand-700">{siteConfig.workingHours}</dd>
                </div>
              </dl>

              {/* Map placeholder */}
              <div className="mt-10 aspect-video bg-brand-100 flex items-center justify-center text-brand-400 text-sm">
                {/* Вставьте Яндекс.Карты iframe */}
                <p>Карта — вставьте iframe Яндекс.Карты</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-light text-brand-950 mb-8">
                Получить расчёт
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Server component — форма (замените на server action или API route)
function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/your@email.com"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="Новая заявка с сайта MILADA" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="/contacts?sent=1" />

      <div>
        <label htmlFor="name" className="block text-sm font-sans text-brand-600 mb-2">
          Имя *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Иван Иванов"
          className="w-full border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-sans text-brand-950 placeholder:text-brand-300 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-sans text-brand-600 mb-2">
          Телефон *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+7 (___) ___-__-__"
          className="w-full border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-sans text-brand-950 placeholder:text-brand-300 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-sans text-brand-600 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@mail.ru"
          className="w-full border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-sans text-brand-950 placeholder:text-brand-300 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-sans text-brand-600 mb-2">
          Описание проекта
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Расскажите о вашем проекте: материал, примерные размеры, количество фасадов..."
          className="w-full border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-sans text-brand-950 placeholder:text-brand-300 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        Отправить заявку
      </button>

      <p className="text-xs text-brand-400">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}
