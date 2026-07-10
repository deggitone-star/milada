// Единая форма заявки. Используется на «Контактах» и «Для мебельных компаний»,
// чтобы обе формы были идентичны по полям. variant меняет только цвета под фон.

interface Props {
  variant?: "light" | "dark";
  subject: string;
  next: string;
}

export default function LeadForm({ variant = "light", subject, next }: Props) {
  const dark = variant === "dark";

  const input = dark
    ? "w-full bg-white/[0.05] border border-white/15 rounded-soft px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-mint focus:bg-white/[0.08] transition-all"
    : "w-full bg-bg-alt border border-line rounded-soft px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink transition-colors";

  const wrap = dark
    ? "bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-soft p-6 lg:p-8"
    : "bg-bg-alt border border-line rounded-soft p-6 lg:p-8";

  const note = dark ? "text-white/50" : "text-ink-subtle";

  return (
    <form
      action="https://formsubmit.co/milada.73@mail.ru"
      method="POST"
      className={wrap}
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={next} />
      <input type="hidden" name="_template" value="table" />
      {/* honeypot — ловушка для ботов */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="space-y-3">
        <input type="text" name="name" placeholder="Имя" className={input} />
        <input
          type="text"
          name="company"
          placeholder="Название компании *"
          required
          className={input}
        />
        <input type="text" name="city" placeholder="Город / регион" className={input} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="tel"
            name="phone"
            placeholder="Телефон *"
            required
            className={input}
          />
          <input type="email" name="email" placeholder="Email" className={input} />
        </div>
        <textarea
          name="message"
          placeholder="Объём в месяц, типы фасадов, особые требования"
          rows={4}
          className={`${input} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-mint text-mint-dark font-medium text-sm px-6 py-3.5 rounded-pill hover:bg-mint-light transition-colors duration-200"
      >
        Получить КП
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <p className={`mt-4 text-[11px] leading-relaxed ${note}`}>
        Отправляя форму, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
