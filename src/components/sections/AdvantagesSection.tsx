const advantages = [
  { num: "12+",  label: "лет опыта", text: "На рынке производства фасадов с 2012 года" },
  { num: "500+", label: "проектов в год", text: "Индивидуальные заказы для частных клиентов и оптовых партнёров" },
  { num: "100+", label: "декоров",    text: "ПВХ плёнки, HPL-пластик, эмаль RAL, искусственный камень" },
  { num: "10",   label: "дней",       text: "Стандартный срок изготовления заказа" },
];

export default function AdvantagesSection() {
  return (
    <section className="section-py bg-bg">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <p className="label mb-3">О нас</p>
          <h2 className="h2">Почему MILADA</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {advantages.map(({ num, label, text }) => (
            <div key={label} className="bg-bg p-6 lg:p-8">
              <p className="text-3xl lg:text-4xl font-medium text-ink">{num}</p>
              <p className="mt-1 text-sm font-medium text-mint-dark">{label}</p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
