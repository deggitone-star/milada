// src/data/materials.ts
// Каталог материалов от поставщика Тадж (taj-ul.ru)
// Пока только пластик HPL, плёнка ПВХ будет добавлена позже

export interface Decor {
  name: string;
  article: string;
  isNew?: boolean;
  /** Имя файла на Cloudinary (без расширения), если отличается от артикула.
   *  Используется для Прованса, где один артикул = разные рисунки. */
  imageId?: string;
}

export interface SubGroup {
  title: string;
  surface?: string;   // тип поверхности
  size?: string;       // размер листа
  decors: Decor[];
}

export interface Collection {
  slug: string;
  title: string;
  description: string;
  subGroups: SubGroup[];
}

export interface MaterialType {
  slug: string;
  title: string;
  description: string;
  supplier: string;
  collections: Collection[];
}

// ─── ПЛАСТИК HPL ────────────────────────────────────────────────────────────

export const plasticHPL: MaterialType = {
  slug: "plastik-hpl",
  title: "Пластик HPL",
  description: "Ламинат высокого давления для облицовки мебельных фасадов. Широкий ассортимент декоров от компании Тадж: однотонные, древесные, каменные, фантазийные.",
  supplier: "Тадж",
  collections: [

    // ── ИНДИЯ ──────────────────────────────────────────────────────────────
    {
      slug: "indiya",
      title: "Индия",
      description: "Однотонные декоры матовых и суперматовых оттенков — от нежных бежево-пудровых до глубоких карамельных. Серию Супермат отличает устойчивость к царапинам, лёгкий уход и отсутствие отпечатков пальцев. Серия Сеговия с рисунком под штукатурку подобрана в тон к суперматовым декорам.",
      subGroups: [
        {
          title: "Однотон",
          surface: "Гладкая поверхность",
          size: "1300×3050×0,5",
          decors: [
            { name: "Белый бэкинг", article: "103" },
            { name: "Белый глянец", article: "101" },
            { name: "Сливочный", article: "2376" },
            { name: "Карамельный", article: "2008" },
            { name: "Серый", article: "2503" },
            { name: "Дымчатый", article: "1633" },
            { name: "Небесно-голубой", article: "1056", isNew: true },
            { name: "Зелёный грин", article: "1040", isNew: true },
            { name: "Жёлтый лимон", article: "1057", isNew: true },
            { name: "Манго", article: "1029", isNew: true },
            { name: "Насыщенный красный", article: "1064", isNew: true },
          ],
        },
        {
          title: "Супермат",
          surface: "Гладкая поверхность",
          size: "1300×3050×0,5",
          decors: [
            { name: "Белый супермат", article: "1003" },
            { name: "Молочный супермат", article: "1020" },
            { name: "Ванильный супермат", article: "4011" },
            { name: "Персиковый супермат", article: "1052" },
            { name: "Песчаный супермат", article: "1033" },
            { name: "Туманный супермат", article: "1051" },
            { name: "Пепельный супермат", article: "8106" },
            { name: "Мышиный супермат", article: "120" },
            { name: "Штормовой супермат", article: "1707" },
          ],
        },
        {
          title: "Сеговия",
          surface: "Текстура — имитация штукатурки",
          size: "1300×3050×0,5",
          decors: [
            { name: "Белая сеговия", article: "1003 А" },
            { name: "Персиковая сеговия", article: "1052 А" },
            { name: "Туманная сеговия", article: "1051 А" },
            { name: "Пепельная сеговия", article: "8106 А" },
          ],
        },
      ],
    },

    // ── WOOD & STONE ──────────────────────────────────────────────────────
    {
      slug: "wood-and-stone",
      title: "Wood & Stone",
      description: "Широкий ассортимент декоров под дерево, мрамор и камень.",
      subGroups: [
        {
          title: "Однотон бэкинг",
          surface: "Гладкая / шагрень",
          size: "1300×3050×0,5 / 1300×2440×0,5",
          decors: [
            { name: "Белый бэкинг", article: "103" },
            { name: "Серый бэкинг", article: "1014" },
          ],
        },
        {
          title: "Древесные",
          surface: "Шагрень",
          size: "1300×2440×0,5",
          decors: [
            { name: "Метрополитан", article: "2046" },
            { name: "Кантри", article: "2047" },
            { name: "Дуб Вотан", article: "2052" },
            { name: "Дуб Юкон", article: "2074" },
            { name: "Бискайская сосна", article: "2058" },
            { name: "Сосна Пандероса", article: "2057" },
            { name: "Сосна Онтарио", article: "2092" },
            { name: "Флагстафф", article: "2095" },
            { name: "Дуб выбеленный", article: "2022" },
            { name: "Дуб Сонома светлый", article: "2085" },
            { name: "Фрост", article: "2148" },
            { name: "Джанго", article: "2153" },
          ],
        },
        {
          title: "Каменные",
          surface: "Шагрень",
          size: "1300×2440×0,5",
          decors: [
            { name: "Мрамор Каррара", article: "3014" },
            { name: "Мрамор Марквина белый", article: "3028" },
            { name: "Мрамор белый", article: "3027" },
            { name: "Мрамор Марквина синий", article: "3034" },
            { name: "Мрамор серый", article: "3031" },
            { name: "Мрамор бежевый", article: "3020" },
            { name: "Мрамор Марквина чёрный", article: "3029" },
            { name: "Даркстоун", article: "3125" },
            { name: "Серый каспий", article: "3087" },
            { name: "Бронзовый каспий", article: "3086" },
            { name: "Каспий чёрное золото", article: "3103" },
            { name: "Фаерстоун", article: "3100" },
            { name: "Чёрный тунис", article: "3074" },
            { name: "Будда", article: "3080" },
            { name: "Марцена тёмный", article: "3085" },
            { name: "Марцена", article: "3084" },
            { name: "Розовый кварц", article: "3114" },
            { name: "Обсидиан", article: "3115" },
            { name: "Боско", article: "3118" },
            { name: "Азул", article: "3124" },
            { name: "Опал светлый", article: "3062" },
            { name: "Опал тёмный", article: "3064" },
            { name: "Бора-Бора", article: "4102" },
            { name: "Рамбла", article: "4081" },
            { name: "Бетао", article: "3045" },
            { name: "Лофт", article: "3102" },
            { name: "Гранж", article: "3119" },
            { name: "Бажео", article: "3139" },
            { name: "Лаос", article: "3138" },
            { name: "Мрамор верде", article: "3157" },
            { name: "Лавант", article: "3094" },
            { name: "Имперадор", article: "3060" },
            { name: "Семолина бежевая", article: "б/н", imageId: "semolina" },
            { name: "Вево", article: "3104" },
            { name: "Антарес", article: "4040" },
            { name: "Чёрная бронза", article: "4059" },
            { name: "Калакатта", article: "4030" },
            { name: "Арвика", article: "4075" },
            { name: "Старк", article: "3145" },
            { name: "Асти", article: "3146" },
            { name: "Крит", article: "3173" },
            { name: "Мауи", article: "3168" },
            { name: "Мрамор Дорато", article: "3155" },
            { name: "Терра", article: "3153" },
          ],
        },
      ],
    },

    // ── КЛАССИК ──────────────────────────────────────────────────────────
    {
      slug: "klassik",
      title: "Классик",
      description: "Самые популярные классические декоры: однотонные оттенки, древесина, ткань, флористика, мрамор. Несколько видов тиснения: гладкая, шагрень, неглубокие древесные поры.",
      subGroups: [
        {
          title: "Однотон матовый",
          surface: "Гладкая поверхность",
          size: "1220×2440×0,5 / 0,6",
          decors: [
            { name: "Белый бэкинг", article: "103" },
            { name: "Серый", article: "2503" },
            { name: "Шоколад", article: "7137" },
          ],
        },
        {
          title: "Однотон глянцевый",
          surface: "Гладкая поверхность",
          size: "1220×2440×0,6",
          decors: [
            { name: "Белый глянец", article: "3002" },
            { name: "Красный глянец", article: "2013" },
            { name: "Лайм глянец", article: "8001" },
            { name: "Перламутр серый глянец", article: "2378" },
          ],
        },
        {
          title: "Фантазийные",
          surface: "Глянец / матовая",
          size: "1220×2440×0,6",
          decors: [
            { name: "Шотландка день", article: "PL8055" },
            { name: "Шотландка ночь", article: "PL8053" },
            { name: "Кард пепел", article: "1522" },
            { name: "Кард беж", article: "1523" },
            { name: "Снежный шиповник", article: "ORG-11" },
          ],
        },
        {
          title: "Древесные",
          surface: "Матовая / глянец",
          size: "1220×2440×0,6",
          decors: [
            { name: "Клён", article: "2900" },
            { name: "Бук", article: "2762" },
            { name: "Лён белый", article: "2059" },
            { name: "Меранти Лайт", article: "2273" },
            { name: "Вяз левис", article: "ORG-51" },
            { name: "Дуб рустикальный", article: "2358" },
            { name: "Яблоня", article: "2523" },
            { name: "Кошачьи лапки", article: "2060" },
            { name: "Камыш тёмный", article: "2315" },
          ],
        },
        {
          title: "Каменные",
          surface: "Матовая / глянец",
          size: "1220×2440×0,6",
          decors: [
            { name: "Мрамор светлый", article: "2071" },
            { name: "Мрамор греческий", article: "1445" },
            { name: "Мрамор Парфенон", article: "7153" },
            { name: "Мрамор Антико", article: "F9306" },
            { name: "Мрамор Афина", article: "7373" },
            { name: "Бежевый мрамор", article: "6112" },
            { name: "Синий мрамор", article: "2311" },
            { name: "Мрамор Неро", article: "7570" },
            { name: "Магнезит", article: "1430" },
            { name: "Гранит светлый", article: "1470" },
            { name: "Гранит тёмный", article: "1471" },
          ],
        },
      ],
    },

    // ── ПРОВАНС ──────────────────────────────────────────────────────────
    {
      slug: "provans",
      title: "Прованс",
      description: "Богатый выбор изящных цветочных узоров и фантазийных рисунков в стиле Прованса.",
      subGroups: [
        {
          title: "Фантазийные — цветы и лозы",
          surface: "Матовая",
          size: "1220×2440×0,6",
          decors: [
            { name: "Белый бэкинг", article: "103" },
            { name: "Белые цветы", article: "2553" },
            { name: "Ванильные цветы", article: "2812" },
            { name: "Пряные цветы", article: "2502" },
            { name: "Серые цветы", article: "2503" },
            { name: "Шоколадные цветы", article: "7137" },
            { name: "Чёрные цветы", article: "2024" },
            { name: "Красные цветы", article: "2013" },
            { name: "Оранжевые цветы", article: "2203" },
            { name: "Зелёные цветы", article: "2809" },
            { name: "Белая лоза", article: "2553" },
            { name: "Ванильная лоза", article: "2812", imageId: "2812_alt" },
            { name: "Серая лоза", article: "2503", imageId: "2503_alt" },
            { name: "Шоколадная лоза", article: "7137", imageId: "7137_alt" },
            { name: "Зелёная лоза", article: "2809", imageId: "2809_alt" },
            { name: "Роза белая", article: "2553", imageId: "2553_rose" },
          ],
        },
        {
          title: "Фантазийные — узоры и текстуры",
          surface: "Матовая / глянец",
          size: "1220×2440×0,6",
          decors: [
            { name: "Роза ванильная", article: "2812" },
            { name: "Роза шоколадная", article: "7137" },
            { name: "Ванильная камелия", article: "4011" },
            { name: "Шоколадная камелия", article: "539" },
            { name: "Чёрная камелия", article: "142" },
            { name: "Квадрант ванильный", article: "4011" },
            { name: "Квадрант шоколадный", article: "539" },
            { name: "Квадрант чёрный", article: "142" },
            { name: "Жемчуг", article: "2085" },
            { name: "Белые листья", article: "2289" },
            { name: "Капли зелёные", article: "818-8" },
            { name: "Капли синие", article: "818" },
            { name: "Прованс", article: "999" },
            { name: "Золотая нить", article: "6110" },
            { name: "Бежевый змеевик", article: "2248" },
          ],
        },
      ],
    },
  ],
};

// Подсчёт общего количества декоров
export function getTotalDecorsCount(material: MaterialType): number {
  return material.collections.reduce(
    (total, col) => total + col.subGroups.reduce(
      (sub, sg) => sub + sg.decors.length, 0
    ), 0
  );
}

export function getCollectionDecorsCount(collection: Collection): number {
  return collection.subGroups.reduce((sum, sg) => sum + sg.decors.length, 0);
}

// URL-слаг коллекции HPL (внутренний slug → slug маршрута /catalog/plastic/[collection])
export function collectionUrlSlug(materialSlug: string): string {
  const map: Record<string, string> = {
    indiya: "india",
    "wood-and-stone": "wood-stone",
    klassik: "classic",
    provans: "provence",
  };
  return map[materialSlug] || materialSlug;
}
