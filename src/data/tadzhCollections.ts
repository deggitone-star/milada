// src/data/tadzhCollections.ts
// Коллекции пластиковых фасадов HPL — каталог Тадж

export interface TadzhCollection {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroExample: string;
  examples: string[];
  catalogPages: string[];
}

export const tadzhCollections: TadzhCollection[] = [
  {
    slug: "india",
    title: "Индия",
    subtitle: "Однотонные и суперматовые фасады",
    description: "Коллекция однотонных декоров матовых и суперматовых оттенков — от нежных бежево-пудровых и ванильных тонов до глубоких карамельных оттенков. Серию Супермат отличает устойчивость к царапинам и лёгкий уход — поверхность не бликует на солнце и не оставляет отпечатков пальцев. Серия Сеговия с рисунком под штукатурку подобрана в тон к суперматовым декорам.",
    seoTitle: "Пластиковые фасады HPL коллекция Индия — однотонные и суперматовые | MILADA Ульяновск",
    seoDescription: "Пластиковые фасады HPL коллекция Индия: однотонные, суперматовые, Сеговия. Устойчивы к царапинам, не оставляют отпечатков. Производство фасадов MILADA, Ульяновск. ☎ +7 (8422) 27-82-02",
    heroExample: "/catalog/tadzh/india/examples/india_p03_example_01.webp",
    examples: [
      "/catalog/tadzh/india/examples/india_p03_example_01.webp",
    ],
    catalogPages: [
      "/catalog/tadzh/india/pages/india_decors_page_04.webp",
      "/catalog/tadzh/india/pages/india_decors_page_05.webp",
    ],
  },
  {
    slug: "wood-stone",
    title: "Wood & Stone",
    subtitle: "Декоры дерева, мрамора и камня",
    description: "Широкий ассортимент декоров под натуральное дерево, мрамор и камень. Реалистичные текстуры дуба, сосны, ели для тёплых интерьеров. Мраморные и каменные декоры — каррара, оникс, кварц, бетон — для современных кухонь и мебели в стиле минимализм и лофт.",
    seoTitle: "Пластиковые фасады HPL Wood & Stone — дерево, мрамор, камень | MILADA Ульяновск",
    seoDescription: "Пластиковые фасады HPL коллекция Wood & Stone: декоры дерева, мрамора, камня. Дуб, сосна, каррара, оникс, бетон. Производство фасадов MILADA, Ульяновск. ☎ +7 (8422) 27-82-02",
    heroExample: "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_01.webp",
    examples: [
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_01.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_02.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_03.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_04.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_05.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p06_example_06.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p14_example_01.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p14_example_02.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p14_example_03.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p14_example_04.webp",
      "/catalog/tadzh/wood-stone/examples/wood-stone_p14_example_05.webp",
    ],
    catalogPages: [
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_07.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_08.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_09.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_10.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_11.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_12.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_13.webp",
      "/catalog/tadzh/wood-stone/pages/wood_stone_decors_page_14.webp",
    ],
  },
  {
    slug: "classic",
    title: "Классик",
    subtitle: "Классические декоры для мебельных фасадов",
    description: "Классика, которая всегда современна. Самые популярные однотонные оттенки, декоры древесины, декоры под ткань, флористические узоры, мраморные текстуры. Поверхность пластиков в коллекции Классик имеет несколько видов тиснения: гладкая, шагрень или неглубокие древесные поры.",
    seoTitle: "Пластиковые фасады HPL Классик — однотонные, древесные, мраморные | MILADA Ульяновск",
    seoDescription: "Пластиковые фасады HPL коллекция Классик: однотонные, древесные, каменные, фантазийные декоры. Гладкая, шагрень, древесные поры. MILADA, Ульяновск. ☎ +7 (8422) 27-82-02",
    heroExample: "/catalog/tadzh/classic/examples/classic_p15_example_01.webp",
    examples: [
      "/catalog/tadzh/classic/examples/classic_p15_example_01.webp",
      "/catalog/tadzh/classic/examples/classic_p18_example_08.webp",
    ],
    catalogPages: [
      "/catalog/tadzh/classic/pages/classic_decors_page_16.webp",
      "/catalog/tadzh/classic/pages/classic_decors_page_17.webp",
      "/catalog/tadzh/classic/pages/classic_decors_page_18.webp",
    ],
  },
  {
    slug: "provence",
    title: "Прованс",
    subtitle: "Цветочные узоры и фантазийные декоры",
    description: "Богатый выбор изящных цветочных узоров и фантазийных рисунков в стиле Прованс. Декоры с цветами, лозой, камелиями, каплями и геометрическими узорами. Для кухонь и мебели в классическом и деревенском стиле.",
    seoTitle: "Пластиковые фасады HPL Прованс — цветочные и фантазийные декоры | MILADA Ульяновск",
    seoDescription: "Пластиковые фасады HPL коллекция Прованс: цветочные узоры, лоза, камелии, фантазийные декоры. Для кухонь в классическом стиле. MILADA, Ульяновск. ☎ +7 (8422) 27-82-02",
    heroExample: "/catalog/tadzh/provence/examples/provence_p19_example_01.webp",
    examples: [
      "/catalog/tadzh/provence/examples/provence_p19_example_01.webp",
      "/catalog/tadzh/provence/examples/provence_p19_example_02.webp",
    ],
    catalogPages: [
      "/catalog/tadzh/provence/pages/provence_decors_page_20.webp",
      "/catalog/tadzh/provence/pages/provence_decors_page_21.webp",
    ],
  },
];

export function getCollectionBySlug(slug: string): TadzhCollection | undefined {
  return tadzhCollections.find((c) => c.slug === slug);
}
