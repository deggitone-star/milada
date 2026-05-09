// src/components/sections/SuppliersSection.tsx
// Полоса с поставщиками — для усиления доверия
// Текстовый вариант (без логотипов), позже можно заменить на реальные логотипы

const suppliers = [
  { name: "Hettich",     desc: "Мебельная фурнитура · Германия" },
  { name: "BOYARD",      desc: "Мебельная фурнитура" },
  { name: "Тадж",        desc: "ПВХ-плёнки и пластик" },
  { name: "Интервесп",   desc: "Деревообрабатывающее оборудование" },
  { name: "МДМ-ТЕХНО",   desc: "Производственное оборудование" },
  { name: "МДМ-Комплект",desc: "Комплектующие и фурнитура" },
];

export default function SuppliersSection() {
  return (
    <section className="py-12 lg:py-16 bg-bg-alt border-y border-line">
      <div className="container-site">
        <p className="label text-center mb-8">
          Используем материалы и оборудование от
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line">
          {suppliers.map(({ name, desc }) => (
            <div
              key={name}
              className="bg-bg-alt p-5 lg:p-6 flex flex-col items-center justify-center text-center min-h-[100px]"
            >
              <p className="text-base lg:text-lg font-medium text-ink">{name}</p>
              <p className="mt-1 text-[11px] text-ink-subtle leading-tight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
