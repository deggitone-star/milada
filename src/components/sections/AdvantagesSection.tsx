// src/components/sections/AdvantagesSection.tsx

const advantages = [
  {
    num: "01",
    title: "Собственное производство",
    text: "Полный цикл на одном заводе — от раскроя МДФ до окончательной упаковки. Никаких посредников.",
  },
  {
    num: "02",
    title: "Точность до 0,1 мм",
    text: "Раскрой на немецких обрабатывающих центрах. Допуск по размерам не превышает десятой доли миллиметра.",
  },
  {
    num: "03",
    title: "Любой цвет RAL/NCS",
    text: "Смешиваем эмаль под любой оттенок из каталогов RAL, NCS и Pantone по образцу или коду.",
  },
  {
    num: "04",
    title: "Срок от 10 дней",
    text: "Стандартные заказы выполняем за 10–14 рабочих дней. Срочные — по отдельному согласованию.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="section-py bg-brand-950">
      <div className="container-site">
        <div className="mb-12 lg:mb-16">
          <p className="section-label text-accent/70 mb-3">Почему мы</p>
          <h2 className="font-display font-light text-display-md text-white">
            Стандарты,<br />
            <em className="not-italic text-accent">которые видны</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-800">
          {advantages.map(({ num, title, text }) => (
            <div key={num} className="bg-brand-950 p-8 lg:p-12 group">
              <span className="font-display text-5xl font-light text-brand-800 group-hover:text-accent transition-colors duration-300">
                {num}
              </span>
              <h3 className="mt-6 font-sans text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm text-brand-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
