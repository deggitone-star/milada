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

  // ── Эмаль ───────────────────────────────────────────────────────────────────
  {
    title: "Эмаль матовая",
    slug: "enamel-mat",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1781458313/matovaya_2_nsf0e5.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778778624/matovaya_lu7tfs.png",
    gallery: [
      "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778775339/5_1_nakrql.png",
    ],
    description: "Фасады МДФ с покрытием матовой эмалью. Любой цвет по каталогу RAL.",
    category: "enamel",
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
    description: "Фасады МДФ с покрытием глянцевой эмалью. Любой цвет по каталогу RAL.",
    category: "enamel",
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
    description: "Фасады МДФ с покрытием эмаль металлик. Любой цвет по каталогу RAL.",
    category: "enamel",
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
