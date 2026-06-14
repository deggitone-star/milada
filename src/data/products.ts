// src/data/products.ts
import type { Product } from "@/types";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export const products: Product[] = [

  // ── МДФ + ПВХ Стандарт ──────────────────────────────────────────────────────
  { title: "Косичка", slug: "pvh-kosichka", image: `${CDN}/v1778176531/milada/pvh-kosichka.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Косичка». Более 100 видов плёнок, индивидуальный раскрой.", category: "pvh-standart", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Арка", slug: "pvh-arka", image: `${CDN}/v1778176533/milada/pvh-arka.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Арка».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Квадро", slug: "pvh-kvadro", image: `${CDN}/v1778176534/milada/pvh-kvadro.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Квадро».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Идея", slug: "pvh-ideya", image: `${CDN}/v1778176537/milada/pvh-ideya.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Идея».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Пирамида", slug: "pvh-piramida", image: `${CDN}/v1778176538/milada/pvh-piramida.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Пирамида».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Омега", slug: "pvh-omega", image: `${CDN}/v1778176540/milada/pvh-omega.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Омега».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Классик", slug: "pvh-klassik", image: `${CDN}/v1778176541/milada/pvh-klassik.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Классик».", category: "pvh-standart", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Премьер", slug: "pvh-premer", image: `${CDN}/v1778176543/milada/pvh-premer.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Премьер».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Вега", slug: "pvh-vega", image: `${CDN}/v1778176544/milada/pvh-vega.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Вега».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Квадро Н", slug: "pvh-kvadro-n", image: `${CDN}/v1778176546/milada/pvh-kvadro-n.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Квадро Н».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Вега 2", slug: "pvh-vega-2", image: `${CDN}/v1778176547/milada/pvh-vega-2.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Вега 2».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Ретро", slug: "pvh-retro", image: `${CDN}/v1778176549/milada/pvh-retro.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Ретро».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Техно", slug: "pvh-tekhno", image: `${CDN}/v1778176550/milada/pvh-tekhno.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Техно».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Ретро 2", slug: "pvh-retro-2", image: `${CDN}/v1778176551/milada/pvh-retro-2.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Ретро 2».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Арка Р", slug: "pvh-arka-r", image: `${CDN}/v1778176553/milada/pvh-arka-r.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Арка Р».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Лабиринт", slug: "pvh-labirint", image: `${CDN}/v1778176555/milada/pvh-labirint.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Лабиринт».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Яна", slug: "pvh-yana", image: `${CDN}/v1778176556/milada/pvh-yana.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Яна».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Вертикаль", slug: "pvh-vertikal", image: `${CDN}/v1778176557/milada/pvh-vertikal.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Вертикаль».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Уголки", slug: "pvh-ugolki", image: `${CDN}/v1778176559/milada/pvh-ugolki.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Уголки».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Лира", slug: "pvh-lira", image: `${CDN}/v1778176560/milada/pvh-lira.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Лира».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Классик 2", slug: "pvh-klassik-2", image: `${CDN}/v1778176561/milada/pvh-klassik-2.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Классик 2».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Арка 2", slug: "pvh-arka-2", image: `${CDN}/v1778176563/milada/pvh-arka-2.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Арка 2».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Иллюзия", slug: "pvh-illyuziya", image: `${CDN}/v1778176564/milada/pvh-illyuziya.png`, description: "Премиум фрезеровка «Иллюзия».", category: "pvh-premium", material: "МДФ" },
  { title: "Дуэт", slug: "pvh-duet", image: `${CDN}/v1778176565/milada/pvh-duet.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Дуэт».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },

  // ── МДФ + ПВХ Премиум ───────────────────────────────────────────────────────
  { title: "Арка Премиум", slug: "pvh-arka-premium", image: `${CDN}/v1778176567/milada/pvh-arka-premium.png`, description: "Премиум фрезеровка «Арка Премиум».", category: "pvh-premium", material: "МДФ", featured: true },
  { title: "Рио", slug: "pvh-rio", image: `${CDN}/v1778176569/milada/pvh-rio.png`, description: "Премиум фрезеровка «Рио».", category: "pvh-premium", material: "МДФ" },
  { title: "Косичка Премиум", slug: "pvh-kosichka-premium", image: `${CDN}/v1778176570/milada/pvh-kosichka-premium.png`, description: "Премиум фрезеровка «Косичка Премиум».", category: "pvh-premium", material: "МДФ" },
  { title: "Виктория", slug: "pvh-viktoriya", image: `${CDN}/v1778176572/milada/pvh-viktoriya.png`, description: "Премиум фрезеровка «Виктория».", category: "pvh-premium", material: "МДФ" },
  { title: "Афины", slug: "pvh-afiny", image: `${CDN}/v1778176573/milada/pvh-afiny.png`, description: "Премиум фрезеровка «Афины».", category: "pvh-premium", material: "МДФ" },
  { title: "Сицилия", slug: "pvh-sitsiliya", image: `${CDN}/v1778176575/milada/pvh-sitsiliya.png`, description: "Премиум фрезеровка «Сицилия».", category: "pvh-premium", material: "МДФ" },
  { title: "Лжевыборка", slug: "pvh-lzhevyborka", image: `${CDN}/v1778176576/milada/pvh-lzhevyborka.png`, description: "Премиум фрезеровка «Лжевыборка».", category: "pvh-premium", material: "МДФ" },
  { title: "Альба", slug: "pvh-alba", image: `${CDN}/v1778176578/milada/pvh-alba.png`, description: "Премиум фрезеровка «Альба».", category: "pvh-premium", material: "МДФ" },
  { title: "Прага", slug: "pvh-praga", image: `${CDN}/v1778176579/milada/pvh-praga.png`, description: "Премиум фрезеровка «Прага».", category: "pvh-premium", material: "МДФ", featured: true },
  { title: "Мадрид", slug: "pvh-madrid", image: `${CDN}/v1778176581/milada/pvh-madrid.png`, description: "Премиум фрезеровка «Мадрид».", category: "pvh-premium", material: "МДФ" },
  { title: "Мюнхен", slug: "pvh-myunkhen", image: `${CDN}/v1778176582/milada/pvh-myunkhen.png`, description: "Премиум фрезеровка «Мюнхен».", category: "pvh-premium", material: "МДФ" },
  { title: "Берн", slug: "pvh-bern", image: `${CDN}/v1778176584/milada/pvh-bern.png`, description: "Премиум фрезеровка «Берн».", category: "pvh-premium", material: "МДФ" },
  { title: "Рим", slug: "pvh-rim", image: `${CDN}/v1778176586/milada/pvh-rim.png`, description: "Премиум фрезеровка «Рим».", category: "pvh-premium", material: "МДФ" },
  { title: "Мадрид с косичкой", slug: "pvh-madrid-kosichka", image: `${CDN}/v1778176587/milada/pvh-madrid-kosichka.png`, description: "Премиум фрезеровка «Мадрид с косичкой».", category: "pvh-premium", material: "МДФ" },
  { title: "Варшава", slug: "pvh-varshava", image: `${CDN}/v1778176588/milada/pvh-varshava.png`, description: "Премиум фрезеровка «Варшава».", category: "pvh-premium", material: "МДФ" },
  {
    title: "Волна 1",
    slug: "pvh-lion",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778359923/5_hw7uzw.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/1_g3ao5n.png",
    description: "Премиум фрезеровка «Волна 1» — глубокий рельеф с классическим обрамлением. Подходит для кухонь в стилях неоклассика, прованс и классика. Любой декор из каталога производителя.",
    category: "pvh-premium",
    material: "МДФ",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый", "Глянцевый", "Текстурный"],
    featured: true,
    new: true,
    gallery: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781274052/volna-1-razrez_dhuud1.png"],
  },
  {
    title: "Волна 2",
    slug: "pvh-volna-2",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781273886/volna2_lvyqg1.jpg",
    description: "Премиум фрезеровка «Волна 2» — прямоугольный рельеф с чёткими гранями. Выразительная геометрия для современных и минималистичных фасадов. Любой декор из каталога производителя.",
    category: "pvh-premium",
    material: "МДФ",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый", "Глянцевый", "Текстурный"],
    new: true,
    gallery: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781274052/volna-2-razrez_siwe9w.png"],
  },
  {
    title: "Волна 3",
    slug: "pvh-volna-3",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781273886/volna3_imnxph.jpg",
    description: "Премиум фрезеровка «Волна 3» — мелкий частый рельеф, тонкое рифление. Деликатная фактура для лаконичных фасадов в современном стиле. Любой декор из каталога производителя.",
    category: "pvh-premium",
    material: "МДФ",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый", "Глянцевый", "Текстурный"],
    new: true,
    gallery: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781274052/volna-3-razrez_xknivm.png"],
  },
  {
    title: "Волна 4",
    slug: "pvh-volna-4",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781273885/volna4_bnmgxe.jpg",
    description: "Премиум фрезеровка «Волна 4» — крупная округлая волна, мягкий пластичный рельеф. Акцентное решение для выразительных фасадов. Любой декор из каталога производителя.",
    category: "pvh-premium",
    material: "МДФ",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый", "Глянцевый", "Текстурный"],
    new: true,
    gallery: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781274052/volna-4-razrez_v5quvo.png"],
  },
  { title: "Интегрированная ручка", slug: "pvh-int-ruchka", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1779709005/__2022-04-17_22.59.21-46f13d93b9_qbp3xm.png", description: "Премиум фрезеровка с интегрированной ручкой. Только в эмали.", category: "pvh-premium", material: "МДФ + эмаль", badge: "Эмаль" },
  { title: "Инт. ручка 1", slug: "pvh-int-ruchka-1", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832136/milada/pvh-int-ruchka-1.png", description: "Интегрированная ручка, вариант 1. Безручечное решение для минималистичных интерьеров. Только в эмали.", category: "pvh-premium", material: "МДФ + эмаль", badge: "Эмаль" },
  { title: "Инт. ручка 2", slug: "pvh-int-ruchka-2", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832138/milada/pvh-int-ruchka-2.png", description: "Интегрированная ручка, вариант 2. Безручечное решение для современных кухонь. Только в эмали.", category: "pvh-premium", material: "МДФ + эмаль", badge: "Эмаль" },

  // ── Пластик HPL ─────────────────────────────────────────────────────────────
  {
    title: "Сосна тёмная (HPL)",
    slug: "hpl-sosna-dark",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778830849/PHL1_odlhr1.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778830723/Plastik2_adq4yn.png",
    gallery: ["https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778830724/plastik3_lnifbn.png"],
    description: "HPL-пластик, декор «Сосна тёмная 2537». Влагостойкий, устойчив к царапинам и выгоранию. Натуральная текстура древесины с глубоким тёмным оттенком.",
    category: "plastic",
    material: "МДФ + HPL пластик",
  },
  { title: "Бук тёмный (HPL)", slug: "hpl-buk-dark", image: `${CDN}/v1778176592/milada/hpl-buk-dark.jpg`, description: "HPL-пластик, декор «Бук тёмный 2745».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Ольха (HPL)", slug: "hpl-olkha", image: `${CDN}/v1778176593/milada/hpl-olkha.jpg`, description: "HPL-пластик, декор «Ольха 2539».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Дуб рустикальный (HPL)", slug: "hpl-dub-rustikal", image: `${CDN}/v1778176594/milada/hpl-dub-rustikal.jpg`, description: "HPL-пластик, декор «Дуб рустикальный 2358».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр зелёный (HPL)", slug: "hpl-perlamutr-green", image: `${CDN}/v1778176595/milada/hpl-perlamutr-green.jpg`, description: "HPL-пластик, декор «Перламутр зелёный 2567». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр красный (HPL)", slug: "hpl-perlamutr-red", image: `${CDN}/v1778176596/milada/hpl-perlamutr-red.jpg`, description: "HPL-пластик, декор «Перламутр красный 2550».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Белый матовый (HPL)", slug: "hpl-white", image: `${CDN}/v1778176597/milada/hpl-white.jpg`, description: "HPL-пластик, декор «Белый бэкинг 2553». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Синий мрамор (HPL)", slug: "hpl-blue-marble", image: `${CDN}/v1778176598/milada/hpl-blue-marble.jpg`, description: "HPL-пластик, декор «Синий мрамор 2311».", category: "plastic", material: "МДФ + HPL пластик", new: true },
  { title: "Золотая нить (HPL)", slug: "hpl-gold-thread", image: `${CDN}/v1778176600/milada/hpl-gold-thread.jpg`, description: "HPL-пластик, декор «Золотая нить 6110».", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Древесные глянцевые (новые)
  { title: "Бук красный (HPL)", slug: "hpl-buk-red", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832143/milada/hpl-buk-red-2771.jpg", description: "HPL-пластик, декор «Бук красный 2771». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Пензенский орех (HPL)", slug: "hpl-penz-oreh", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832145/milada/hpl-penz-oreh-2359.jpg", description: "HPL-пластик, декор «Пензенский орех 2359». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Яблоня (HPL)", slug: "hpl-yablonya", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832148/milada/hpl-yablonya-2523.jpg", description: "HPL-пластик, декор «Яблоня 2523». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Светлый дуб (HPL)", slug: "hpl-svetly-dub", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832150/milada/hpl-svetly-dub-2360.jpg", description: "HPL-пластик, декор «Светлый дуб 2360». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Бук (HPL)", slug: "hpl-buk", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832151/milada/hpl-buk-2762.jpg", description: "HPL-пластик, декор «Бук 2762». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Древесные матовые
  { title: "Камыш тёмный (HPL)", slug: "hpl-kamysh-dark", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832153/milada/hpl-kamysh-dark-2315.jpg", description: "HPL-пластик, декор «Камыш тёмный 2315». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Камыш светлый (HPL)", slug: "hpl-kamysh-light", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832154/milada/hpl-kamysh-light-2327.jpg", description: "HPL-пластик, декор «Камыш светлый 2327». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Дуб рустикальный матовый (HPL)", slug: "hpl-dub-rustikal-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832156/milada/hpl-dub-rustikal-mat-2358.jpg", description: "HPL-пластик, декор «Дуб рустикальный 2358». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Пензенский орех матовый (HPL)", slug: "hpl-penz-oreh-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832158/milada/hpl-penz-oreh-mat-2359.jpg", description: "HPL-пластик, декор «Пензенский орех 2359». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Светлый дуб матовый (HPL)", slug: "hpl-svetly-dub-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832159/milada/hpl-svetly-dub-mat-2360.jpg", description: "HPL-пластик, декор «Светлый дуб 2360». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Яблоня матовая (HPL)", slug: "hpl-yablonya-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832161/milada/hpl-yablonya-mat-2523.jpg", description: "HPL-пластик, декор «Яблоня 2523». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Бук тёмный матовый (HPL)", slug: "hpl-buk-dark-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832162/milada/hpl-buk-dark-mat-2745.jpg", description: "HPL-пластик, декор «Бук тёмный 2745». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Бамбук (HPL)", slug: "hpl-bambuk", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832164/milada/hpl-bambuk-2743.jpg", description: "HPL-пластик, декор «Бамбук 2743-E1». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Дуб с патиной (HPL)", slug: "hpl-dub-patina", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832165/milada/hpl-dub-patina-2916.jpg", description: "HPL-пластик, декор «Дуб с патиной 2916-К». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Однотонные глянцевые металлики (новые)
  { title: "Перламутр сиреневый (HPL)", slug: "hpl-perlamutr-lilac", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832168/milada/hpl-perlamutr-lilac-2566.jpg", description: "HPL-пластик, декор «Перламутр сиреневый 2566». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр бежевый (HPL)", slug: "hpl-perlamutr-beige", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832170/milada/hpl-perlamutr-beige-2562.jpg", description: "HPL-пластик, декор «Перламутр бежевый 2562». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр синий (HPL)", slug: "hpl-perlamutr-blue", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832171/milada/hpl-perlamutr-blue-2373.jpg", description: "HPL-пластик, декор «Перламутр синий 2373». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр малиновый (HPL)", slug: "hpl-perlamutr-malin", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832172/milada/hpl-perlamutr-malin-2375.jpg", description: "HPL-пластик, декор «Перламутр малиновый 2375». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр оранжевый (HPL)", slug: "hpl-perlamutr-orange", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832174/milada/hpl-perlamutr-orange-2549.jpg", description: "HPL-пластик, декор «Перламутр оранжевый 2549». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Паутинка голубая (HPL)", slug: "hpl-pautinka-blue", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832175/milada/hpl-pautinka-blue-2929.jpg", description: "HPL-пластик, декор «Паутинка голубая 2929». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Паутинка пурпурная (HPL)", slug: "hpl-pautinka-purple", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832177/milada/hpl-pautinka-purple-2930.jpg", description: "HPL-пластик, декор «Паутинка пурпурная 2930». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Паутинка оранжевая (HPL)", slug: "hpl-pautinka-orange", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832179/milada/hpl-pautinka-orange-2933.jpg", description: "HPL-пластик, декор «Паутинка оранжевая 2933». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Паутинка лазурная (HPL)", slug: "hpl-pautinka-azure", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832180/milada/hpl-pautinka-azure-2935.jpg", description: "HPL-пластик, декор «Паутинка лазурная 2935». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр красный (HPL)", slug: "hpl-perlamutr-red-2", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832182/milada/hpl-perlamutr-red-2550.jpg", description: "HPL-пластик, декор «Перламутр красный 2550». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Однотонные глянцевые
  { title: "Салатовый (HPL)", slug: "hpl-salatovy", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832183/milada/hpl-salatovy-2214.jpg", description: "HPL-пластик, декор «Салатовый 2214». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Красный (HPL)", slug: "hpl-krasny", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832185/milada/hpl-krasny-2013.jpg", description: "HPL-пластик, декор «Красный 2013». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Кремовый глянцевый (HPL)", slug: "hpl-kremovy-gl", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832186/milada/hpl-kremovy-gl-2559.jpg", description: "HPL-пластик, декор «Кремовый 2559». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Однотонные матовые
  { title: "Белый бэкинг (HPL)", slug: "hpl-bely-backing", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832187/milada/hpl-bely-backing-2553.jpg", description: "HPL-пластик, декор «Белый бэкинг 2553». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Кремовый матовый (HPL)", slug: "hpl-kremovy-mat", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832188/milada/hpl-kremovy-mat-2559.jpg", description: "HPL-пластик, декор «Кремовый 2559». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Белые цветы (HPL)", slug: "hpl-belye-cvety", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832190/milada/hpl-belye-cvety-2553z.jpg", description: "HPL-пластик, декор «Белые цветы 2553-Z». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Чёрные цветы (HPL)", slug: "hpl-chernye-cvety", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832191/milada/hpl-chernye-cvety-2024z.jpg", description: "HPL-пластик, декор «Чёрные цветы 2024-Z». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Красный пиксель (HPL)", slug: "hpl-krasny-pixel", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832193/milada/hpl-krasny-pixel-2013x.jpg", description: "HPL-пластик, декор «Красный пиксель 2013-X». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Оранжевый пиксель (HPL)", slug: "hpl-oranzhev-pixel", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832194/milada/hpl-oranzhev-pixel-2203x.jpg", description: "HPL-пластик, декор «Оранжевый пиксель 2203-X». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Сиреневый пиксель (HPL)", slug: "hpl-sireneviy-pixel", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832195/milada/hpl-sireneviy-pixel-2025x.jpg", description: "HPL-пластик, декор «Сиреневый пиксель 2025-X». Матовый.", category: "plastic", material: "МДФ + HPL пластик" },

  // HPL — Фантазийные глянцевые
  { title: "Ткань светлая (HPL)", slug: "hpl-tkan-svetlaya", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832198/milada/hpl-tkan-svetlaya-2275.jpg", description: "HPL-пластик, декор «Ткань светлая 2275». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Ткань (HPL)", slug: "hpl-tkan", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832200/milada/hpl-tkan-2267.jpg", description: "HPL-пластик, декор «Ткань 2267». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Бежевый змеевик (HPL)", slug: "hpl-bezhev-zmeevik", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832201/milada/hpl-bezhev-zmeevik-2248.jpg", description: "HPL-пластик, декор «Бежевый змеевик 2248». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Синяя бутылка (HPL)", slug: "hpl-sinaya-butylka", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832203/milada/hpl-sinaya-butylka-2164.jpg", description: "HPL-пластик, декор «Синяя бутылка 2164». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Иней зелёный (HPL)", slug: "hpl-iney-zeleny", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832204/milada/hpl-iney-zeleny-2146.jpg", description: "HPL-пластик, декор «Иней зелёный 2146». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Зелёная ветка (HPL)", slug: "hpl-zelenaya-vetka", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832205/milada/hpl-zelenaya-vetka-2099.jpg", description: "HPL-пластик, декор «Зелёная ветка 2099». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Зелёный малахит (HPL)", slug: "hpl-zeleny-malahit", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832207/milada/hpl-zeleny-malahit-2069.jpg", description: "HPL-пластик, декор «Зелёный малахит 2069». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Оникс (HPL)", slug: "hpl-oniks", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832208/milada/hpl-oniks-2067.jpg", description: "HPL-пластик, декор «Оникс 2067». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Кошачьи лапки (HPL)", slug: "hpl-koshachi-lapki", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832210/milada/hpl-koshachi-lapki-2060.jpg", description: "HPL-пластик, декор «Кошачьи лапки 2060». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Иней голубой (HPL)", slug: "hpl-iney-goluboy", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832211/milada/hpl-iney-goluboy-2166.jpg", description: "HPL-пластик, декор «Иней голубой 2166». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Ракушка (HPL)", slug: "hpl-rakushka", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832213/milada/hpl-rakushka-2390.jpg", description: "HPL-пластик, декор «Ракушка 2390». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Гречка (HPL)", slug: "hpl-grechka", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832215/milada/hpl-grechka-2800.jpg", description: "HPL-пластик, декор «Гречка 2800». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Змеевик (HPL)", slug: "hpl-zmeevik", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832216/milada/hpl-zmeevik-2102.jpg", description: "HPL-пластик, декор «Змеевик 2102». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Лиственница (HPL)", slug: "hpl-listvennica", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832218/milada/hpl-listvennica-2286.jpg", description: "HPL-пластик, декор «Лиственница 2286». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Осень (HPL)", slug: "hpl-osen", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832219/milada/hpl-osen-2122.jpg", description: "HPL-пластик, декор «Осень 2122». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Акация чёрная (HPL)", slug: "hpl-akacia-chernaya", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832223/milada/hpl-akacia-chernaya-2779.jpg", description: "HPL-пластик, декор «Акация чёрная 2779». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Акация белая (HPL)", slug: "hpl-akacia-belaya", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832225/milada/hpl-akacia-belaya-2326.jpg", description: "HPL-пластик, декор «Акация белая 2326». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Акация красная (HPL)", slug: "hpl-akacia-krasnaya", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832228/milada/hpl-akacia-krasnaya-2780.jpg", description: "HPL-пластик, декор «Акация красная 2780». Глянцевый.", category: "plastic", material: "МДФ + HPL пластик" },


  // ── Эмаль ───────────────────────────────────────────────────────────────────
  {
    title: "Эмаль матовая",
    slug: "enamel-mat",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781458313/matovaya_2_nsf0e5.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778778624/matovaya_lu7tfs.png",
    gallery: [
      "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/5_1_nakrql.png",
    ],
    description: "Премиальные фасады МДФ с покрытием матовой эмалью. Любой цвет из каталога RAL — более 1600 оттенков на выбор. Технология производства включает 7 этапов: грунтование, шлифовка, нанесение эмали в несколько слоёв, промежуточные сушки, финишная полировка. Идеальная плоскость и однотонность поверхности. Бархатистая матовая фактура поглощает свет без бликов.",
    category: "enamel",
    material: "МДФ + матовая эмаль",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый"],
    featured: true,
  },
  {
    title: "Эмаль глянцевая",
    slug: "enamel-gloss",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781458313/Glanec_qakctd.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778778624/glyanec_w8lxfg.png",
    gallery: [
      "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778777181/emal-2_pehsgm.png",
    ],
    description: "Премиальные фасады МДФ с покрытием глянцевой эмалью. Зеркальный блеск с финишным высокоглянцевым лаком. Любой цвет из каталога RAL — более 1600 оттенков. Визуально расширяет пространство, придаёт интерьеру глубину и роскошь.",
    category: "enamel",
    material: "МДФ + эмаль + лак",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Глянцевый"],
    featured: true,
  },
  {
    title: "Эмаль металлик",
    slug: "enamel-metallic",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781458313/metalicc_nm0m4l.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778778624/Metakil_primer_haxxoj.png",
    gallery: [
      "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778777190/emal-metalik-1_ac7myd.png",
    ],
    description: "Эксклюзивные фасады МДФ с покрытием эмаль металлик. Перламутровое свечение с мелкими металлическими частицами в составе эмали. Уникальная игра света при разном освещении. Любой цвет по каталогу RAL.",
    category: "enamel",
    material: "МДФ + эмаль металлик",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Металлик"],
    featured: true,
  },

  // ── Патинированные ──────────────────────────────────────────────────────────
  { title: "Патинированный фасад", slug: "patina-classic", image: `${CDN}/v1778176614/milada/patina-classic.jpg`, description: "Фасад премиум-класса с эффектом состаривания. Ручная обработка красками и лаками.", category: "patina", material: "МДФ + ПВХ + патина" },

  // ── Дверные панели ──────────────────────────────────────────────────────────
  { title: "Дверная панель П1", slug: "door-panel-p1", image: `${CDN}/v1778177312/milada/door-panel-p1.png`, description: "Дверная накладка МДФ 6–16 мм. Для входных и межкомнатных дверей.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П2", slug: "door-panel-p2", image: `${CDN}/v1778177316/milada/door-panel-p2.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П3", slug: "door-panel-p3", image: `${CDN}/v1778177319/milada/door-panel-p3.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П4", slug: "door-panel-p4", image: `${CDN}/v1778177323/milada/door-panel-p4.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П5", slug: "door-panel-p5", image: `${CDN}/v1778177326/milada/door-panel-p5.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П6", slug: "door-panel-p6", image: `${CDN}/v1778177328/milada/door-panel-p6.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П7", slug: "door-panel-p7", image: `${CDN}/v1778177331/milada/door-panel-p7.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П8", slug: "door-panel-p8", image: `${CDN}/v1778177333/milada/door-panel-p8.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П9", slug: "door-panel-p9", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832230/milada/door-panel-p9.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П10", slug: "door-panel-p10", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832232/milada/door-panel-p10.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П11", slug: "door-panel-p11", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832234/milada/door-panel-p11.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П12", slug: "door-panel-p12", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832237/milada/door-panel-p12.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П13", slug: "door-panel-p13", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832239/milada/door-panel-p13.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П14", slug: "door-panel-p14", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832242/milada/door-panel-p14.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П15", slug: "door-panel-p15", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832244/milada/door-panel-p15.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П16", slug: "door-panel-p16", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832246/milada/door-panel-p16.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П17", slug: "door-panel-p17", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832249/milada/door-panel-p17.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П18", slug: "door-panel-p18", image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778832251/milada/door-panel-p18.png", description: "Дверная накладка МДФ 6–16 мм.", category: "door-panels", material: "МДФ + ПВХ плёнка" },

  // ── Дверные полотна купе ─────────────────────────────────────────────────────
  { title: "Купе — фрезеровка 1", slug: "kupe-standart-1", image: `${CDN}/v1778177336/milada/kupe-standart-1.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе — фрезеровка 2", slug: "kupe-standart-2", image: `${CDN}/v1778177339/milada/kupe-standart-2.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе — фрезеровка 3", slug: "kupe-standart-3", image: `${CDN}/v1778177342/milada/kupe-standart-3.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РХ1 — диагональ", slug: "kupe-rx1", image: `${CDN}/v1778177344/milada/kupe-rx1.png`, description: "Дверное полотно для купе с диагональными перекрытиями РХ1.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РХ2 — диагональ", slug: "kupe-rx2", image: `${CDN}/v1778177347/milada/kupe-rx2.png`, description: "Дверное полотно для купе с диагональными перекрытиями РХ2.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РО4 — прямое", slug: "kupe-ro4", image: `${CDN}/v1778177349/milada/kupe-ro4.png`, description: "Дверное полотно для купе с прямыми перекрытиями РО4.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РО6 — прямое", slug: "kupe-ro6", image: `${CDN}/v1778177351/milada/kupe-ro6.png`, description: "Дверное полотно для купе с прямыми перекрытиями РО6.", category: "kupe", material: "МДФ + ПВХ плёнка" },

  // ── Радиусные фасады ─────────────────────────────────────────────────────────
  { title: "Радиусный плёночный", slug: "radius-plenochny", image: `${CDN}/v1780260477/radius-plyonochny_lfcm84.png`, description: "Гнутый фасад МДФ с облицовкой ПВХ-плёнкой. Внешний радиус 300 мм, высота 90–916 мм. Декор под дерево и однотонные плёнки.", category: "radius", material: "МДФ гнутый + ПВХ плёнка", new: true },
  { title: "Радиусный пластиковый", slug: "radius-plastikovy", image: `${CDN}/v1780260635/radius-plastik_aabxxn.png`, description: "Гнутый фасад МДФ с облицовкой HPL-пластиком. Внешний радиус 300 мм, высота 90–916 мм. Влагостойкий, устойчив к царапинам.", category: "radius", material: "МДФ гнутый + HPL-пластик", new: true },

  // ── Декоративные элементы ────────────────────────────────────────────────────
  { title: "Пилястры", slug: "decor-pilyastry", image: `${CDN}/v1778177354/milada/decor-pilyastry.png`, description: "Декоративные пилястры МДФ для мебельных фасадов.", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Пилястры Премиум", slug: "decor-pilyastry-premium", image: `${CDN}/v1778177357/milada/decor-pilyastry-premium.png`, description: "Декоративные пилястры премиум класса.", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Гусек", slug: "decor-gusek", image: `${CDN}/v1778177360/milada/decor-gusek.png`, description: "Декоративный карниз «Гусек».", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Коромысло", slug: "decor-koromyslo", image: `${CDN}/v1778177362/milada/decor-koromyslo.png`, description: "Декоративный элемент «Коромысло».", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Планка декоративная", slug: "decor-planka", image: `${CDN}/v1778177364/milada/decor-planka.png`, description: "Декоративная планка для оформления фасадов.", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Багет", slug: "decor-baget", image: `${CDN}/v1778177366/milada/decor-baget.png`, description: "Декоративный багет МДФ.", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Световая планка", slug: "decor-svetovaya-planka", image: `${CDN}/v1778177368/milada/decor-svetovaya-planka.png`, description: "Световая планка для подсветки фасадов.", category: "decor-elements", material: "МДФ + ПВХ плёнка" },
  { title: "Молдинг ПВХ", slug: "decor-molding", image: `${CDN}/v1778177371/milada/decor-molding.png`, description: "Молдинг ПВХ декоративный.", category: "decor-elements", material: "ПВХ" },

  // ── Спинки кроватные ─────────────────────────────────────────────────────────
  { title: "Спинка кроватная СК1", slug: "headboard-sk1", image: `${CDN}/v1778177149/milada/headboard-sk1.png`, description: "Изголовье кровати МДФ «СК1». Экологически чистые материалы.", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК2", slug: "headboard-sk2", image: `${CDN}/v1778177150/milada/headboard-sk2.png`, description: "Изголовье кровати МДФ «СК2».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК3", slug: "headboard-sk3", image: `${CDN}/v1778177151/milada/headboard-sk3.png`, description: "Изголовье кровати МДФ «СК3».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК4", slug: "headboard-sk4", image: `${CDN}/v1778177153/milada/headboard-sk4.png`, description: "Изголовье кровати МДФ «СК4».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК5", slug: "headboard-sk5", image: `${CDN}/v1778177154/milada/headboard-sk5.png`, description: "Изголовье кровати МДФ «СК5».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК6", slug: "headboard-sk6", image: `${CDN}/v1778177155/milada/headboard-sk6.png`, description: "Изголовье кровати МДФ «СК6».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК7", slug: "headboard-sk7", image: `${CDN}/v1778177157/milada/headboard-sk7.png`, description: "Изголовье кровати МДФ «СК7».", category: "headboards", material: "МДФ + ПВХ плёнка" },
  { title: "Спинка кроватная СК8", slug: "headboard-sk8", image: `${CDN}/v1778177158/milada/headboard-sk8.png`, description: "Изголовье кровати МДФ «СК8».", category: "headboards", material: "МДФ + ПВХ плёнка" },

  // ── Декоры ───────────────────────────────────────────────────────────────────
  { title: "Декор Sy0849", slug: "decor-sy0849", image: `${CDN}/v1778177373/milada/decor-sy0849.png`, description: "Декоративная накладка Sy0849 для мебельных фасадов.", category: "decors", material: "МДФ + ПВХ плёнка" },
  { title: "Декор Sy11168", slug: "decor-sy11168", image: `${CDN}/v1778177375/milada/decor-sy11168.png`, description: "Декоративная накладка Sy11168.", category: "decors", material: "МДФ + ПВХ плёнка" },
  { title: "Декор Sy15150", slug: "decor-sy15150", image: `${CDN}/v1778177378/milada/decor-sy15150.png`, description: "Декоративная накладка Sy15150.", category: "decors", material: "МДФ + ПВХ плёнка" },
  { title: "Декор Sy8833", slug: "decor-sy8833", image: `${CDN}/v1778177380/milada/decor-sy8833.png`, description: "Декоративная накладка Sy8833.", category: "decors", material: "МДФ + ПВХ плёнка" },
  { title: "Декор Sy0711-3", slug: "decor-sy0711-3", image: `${CDN}/v1778177382/milada/decor-sy0711-3.png`, description: "Декоративная накладка широкая Sy0711-3.", category: "decors", material: "МДФ + ПВХ плёнка" },
  { title: "Декор Sy1192", slug: "decor-sy1192", image: `${CDN}/v1778177384/milada/decor-sy1192.png`, description: "Декоративная накладка широкая Sy1192.", category: "decors", material: "МДФ + ПВХ плёнка" },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getNewProducts = (): Product[] =>
  products.filter((p) => p.new);
