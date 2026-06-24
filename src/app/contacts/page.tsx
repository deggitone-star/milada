import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import ContactSuccess from "@/components/ui/ContactSuccess";

export const metadata: Metadata = {
  title: "Контакты MILADA — производство мебельных фасадов, Ульяновск, ул. Хваткова 11",
  description: `Производство мебельных фасадов MILADA: адрес ${siteConfig.address}. Телефон: ${siteConfig.phone}. Email: ${siteConfig.email}. Заказ фасадов МДФ, ПВХ, эмаль, HPL — производство в Ульяновске, доставка по России.`,
  alternates: { canonical: `${siteConfig.url}/contacts` },
  keywords: [
    "milada контакты",
    "milada ульяновск адрес",
    "milada телефон",
    "мебельные фасады ульяновск адрес",
    "заказать фасады ульяновск",
    "купить фасады мдф ульяновск",
    "фасады хваткова ульяновск",
    "производство фасадов контакты",
  ],
};

export default function ContactsPage() {
  const breadcrumbs = [
    { name: "Главная", url: siteConfig.url },
    { name: "Контакты", url: `${siteConfig.url}/contacts` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-bg-alt border-b border-line" style={{ paddingTop: "var(--header-h)" }}>
        <div className="container-site py-10 lg:py-14">
          <p className="label mb-3">Связаться</p>
          <h1 className="h1">Контакты MILADA в Ульяновске</h1>
          <p className="mt-4 text-ink-muted max-w-2xl">
            Свяжитесь с нами для расчёта стоимости и заказа мебельных фасадов.
            Опт для мебельных компаний, салонов и дилеров.
          </p>
        </div>
      </div>

      <section className="section-py bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="h3 mb-8">Реквизиты</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="label mb-1.5">Телефон</dt>
                  <dd className="space-y-1">
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="block text-lg text-ink hover:text-mint-dark transition-colors">
                      {siteConfig.phone}
                    </a>
                    <a href={`tel:${siteConfig.phone2.replace(/\D/g, "")}`} className="block text-lg text-ink hover:text-mint-dark transition-colors">
                      {siteConfig.phone2}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label mb-1.5">Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg text-ink hover:text-mint-dark transition-colors">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label mb-1.5">Адрес производства</dt>
                  <dd className="text-ink">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="label mb-1.5">Режим работы</dt>
                  <dd className="text-ink">{siteConfig.workingHours}</dd>
                </div>
              </dl>

              <div className="mt-10 pt-8 border-t border-line">
                <h3 className="h3 mb-4">Как нас найти</h3>
                <p className="text-ink-muted leading-relaxed">
                  Производство MILADA расположено по адресу: г. Ульяновск,
                  ул. Хваткова, д. 11. Принимаем заказы на изготовление мебельных фасадов
                  для мебельных компаний, салонов и оптовых партнёров.
                </p>
              </div>
            </div>

            <div>
              <h2 className="h3 mb-8">Получить расчёт</h2>
              <Suspense fallback={null}>
                <ContactSuccess />
              </Suspense>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className="h3 mb-6">Мы на карте</h2>
            <div className="overflow-hidden rounded-soft border border-line">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=122995204091"
                title="MILADA на Яндекс Картах — производство мебельных фасадов в Ульяновске"
                className="w-full h-[380px] lg:h-[460px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/milada.73@mail.ru"
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="_subject" value="Новая заявка с сайта MILADA" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${siteConfig.url}/contacts?sent=1`} />
      <input type="hidden" name="_template" value="table" />
      {/* honeypot — невидимое поле-ловушка для ботов; formsubmit отбракует заявку, если оно заполнено */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="name" className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wider">Имя *</label>
        <input
          id="name" name="name" type="text" required placeholder="Иван Иванов"
          className="w-full bg-bg-alt border border-line rounded-soft px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wider">Телефон *</label>
        <input
          id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__"
          className="w-full bg-bg-alt border border-line rounded-soft px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wider">Email</label>
        <input
          id="email" name="email" type="email" placeholder="example@mail.ru"
          className="w-full bg-bg-alt border border-line rounded-soft px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wider">Описание проекта</label>
        <textarea
          id="message" name="message" rows={5}
          placeholder="Материал, размеры, количество фасадов..."
          className="w-full bg-bg-alt border border-line rounded-soft px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full">Отправить заявку</button>

      <p className="text-xs text-ink-subtle">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}
