// src/data/categories.ts
import type { Category } from "@/types";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export const categories: Category[] = [
  { slug: "pvh-standart", title: "МДФ с ПВХ — Стандарт", description: "Фасады МДФ с ПВХ плёнкой. Более 20 форм фрезеровки, более 100 видов плёнок. Индивидуальный раскрой.", image: `${CDN}/v1778176541/milada/pvh-klassik.png` },
  { slug: "pvh-premium", title: "МДФ — Премиум", description: "Премиальные фрезеровки МДФ. Европейские мотивы, интегрированные ручки.", image: `${CDN}/v1778176579/milada/pvh-praga.png` },
  { slug: "plastic", title: "Пластиковые фасады HPL", description: "МДФ с облицовкой HPL-пластиком. Влагостойкие, устойчивы к царапинам. Огромный выбор декоров.", image: `${CDN}/v1778176594/milada/hpl-dub-rustikal.jpg` },
  { slug: "patina", title: "Патинированные фасады", description: "Фасады премиум-класса с эффектом состаривания. Ручная обработка красками и лаками.", image: `${CDN}/v1778176614/milada/patina-classic.jpg` },
  { slug: "stone", title: "Каменные фасады", description: "Нанесение искусственного камня на МДФ. 18 цветов + перламутровые варианты.", image: `${CDN}/v1778176600/milada/stone-white.jpg` },
  { slug: "door-panels", title: "Дверные панели", description: "Накладки МДФ для дверей толщиной 6–16 мм. Для входных и межкомнатных дверей.", image: `${CDN}/v1778177331/milada/door-panel-p7.png` },
  { slug: "kupe", title: "Дверные полотна для купе", description: "Дверные полотна для шкафов-купе. Простые фрезеровки, диагональные и прямые перекрытия.", image: `${CDN}/v1778177336/milada/kupe-standart-1.png` },
  { slug: "radius", title: "Радиусные фасады", description: "Гнутые фасады МДФ. Внешний радиус 300 мм, высота 90–916 мм. Плёночные и пластиковые.", image: `${CDN}/v1778176614/milada/patina-classic.jpg` },
  { slug: "decor-elements", title: "Декоративные элементы", description: "Карнизы, пилястры, планки, молдинги и багеты МДФ для оформления фасадов.", image: `${CDN}/v1778177354/milada/decor-pilyastry.png` },
  { slug: "headboards", title: "Спинки кроватные", description: "Изголовья кроватей МДФ. Эксклюзивный дизайн, современные производственные линии.", image: `${CDN}/v1778177149/milada/headboard-sk1.png` },
  { slug: "decors", title: "Декоры", description: "Декоративные накладки МДФ различных форм и размеров для мебельных фасадов.", image: `${CDN}/v1778177373/milada/decor-sy0849.png` },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
