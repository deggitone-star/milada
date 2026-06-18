const advantages = [
  {
    num: "1",
    title: "Собственное производство",
    text: "Полный цикл изготовления на собственном производственном предприятии в Ульяновске, более 14 лет на рынке. Работаем напрямую без посредников и торговых наценок.",
  },
  {
    num: "2",
    title: "Индивидуальный раскрой",
    text: "Изготавливаем фасады под точные размеры заказчика — под серийные заказы мебельных производств и небольшие партии.",
  },
  {
    num: "3",
    title: "Контроль качества",
    text: "Контролируем каждый этап производства — от раскроя МДФ до финишной обработки. Используем материалы евростандарта.",
  },
  {
    num: "4",
    title: "Работа по договору",
    text: "Официальное оформление с юрлицами и ИП. Полный пакет документов для бухгалтерии. Отсрочка платежей для постоянных партнёров.",
  },
  {
    num: "5",
    title: "Доставка по России",
    text: "Отгружаем фасады через проверенные транспортные компании по всей России. Многослойная упаковка для безопасной перевозки.",
  },
  {
    num: "6",
    title: "Опыт с 2012 года",
    text: "Работаем на рынке мебельных фасадов более 13 лет. Среди клиентов — мебельные компании, кухонные салоны и дилеры Поволжья и других регионов.",
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
            Производство мебельных фасадов в Ульяновске для мебельных компаний, салонов и дилеров по всей России.
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
