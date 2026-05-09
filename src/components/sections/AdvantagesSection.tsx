const advantages = [
  {
    num: "01",
    title: "Собственное производство",
    text: "Полный цикл изготовления на собственном заводе в Ульяновске. Без посредников и торговых наценок.",
  },
  {
    num: "02",
    title: "Стабильные сроки",
    text: "Серийное производство от 5 рабочих дней. Выдерживаем оговорённые сроки даже на крупных партиях.",
  },
  {
    num: "03",
    title: "Контроль качества",
    text: "Многоступенчатая проверка на каждом этапе производства. Соответствие евростандартам.",
  },
  {
    num: "04",
    title: "Индивидуальный раскрой",
    text: "Изготовление под точные размеры заказчика. Допуски по размерам и геометрии в пределах ±0,5 мм.",
  },
  {
    num: "05",
    title: "Работа по договору",
    text: "Официальное оформление, отсрочка платежей для постоянных партнёров, документы для бухгалтерии.",
  },
  {
    num: "06",
    title: "Доставка по России",
    text: "Поставки через проверенные транспортные компании. Многослойная упаковка, страхование грузов.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="section-py bg-bg">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <p className="label mb-3">Почему выбирают MILADA</p>
          <h2 className="h2">Условия работы с производством</h2>
          <p className="mt-4 text-base text-ink-muted max-w-xl leading-relaxed">
            12+ лет опыта в производстве мебельных фасадов для мебельных компаний, салонов и дилеров по всей России.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {advantages.map(({ num, title, text }) => (
            <div key={num} className="bg-bg p-6 lg:p-8 group">
              <p className="text-sm font-medium tracking-[0.15em] text-mint-dark">{num}</p>
              <h3 className="mt-4 text-base font-medium text-ink">{title}</h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
