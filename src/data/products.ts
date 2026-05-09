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
  { title: "Классик", slug: "pvh-klassik", image: `${CDN}/v1778176541/milada/pvh-klassik.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Классик».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
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
  { title: "Иллюзия", slug: "pvh-illyuziya", image: `${CDN}/v1778176564/milada/pvh-illyuziya.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Иллюзия».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },
  { title: "Дуэт", slug: "pvh-duet", image: `${CDN}/v1778176565/milada/pvh-duet.png`, description: "Фасад МДФ с ПВХ плёнкой, фрезеровка «Дуэт».", category: "pvh-standart", material: "МДФ + ПВХ плёнка" },

  // ── МДФ + ПВХ Премиум ───────────────────────────────────────────────────────
  { title: "Арка Премиум", slug: "pvh-arka-premium", image: `${CDN}/v1778176567/milada/pvh-arka-premium.png`, description: "Премиум фрезеровка «Арка Премиум».", category: "pvh-premium", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Рио", slug: "pvh-rio", image: `${CDN}/v1778176569/milada/pvh-rio.png`, description: "Премиум фрезеровка «Рио».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Косичка Премиум", slug: "pvh-kosichka-premium", image: `${CDN}/v1778176570/milada/pvh-kosichka-premium.png`, description: "Премиум фрезеровка «Косичка Премиум».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Виктория", slug: "pvh-viktoriya", image: `${CDN}/v1778176572/milada/pvh-viktoriya.png`, description: "Премиум фрезеровка «Виктория».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Афины", slug: "pvh-afiny", image: `${CDN}/v1778176573/milada/pvh-afiny.png`, description: "Премиум фрезеровка «Афины».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Сицилия", slug: "pvh-sitsiliya", image: `${CDN}/v1778176575/milada/pvh-sitsiliya.png`, description: "Премиум фрезеровка «Сицилия».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Лжевыборка", slug: "pvh-lzhevyborka", image: `${CDN}/v1778176576/milada/pvh-lzhevyborka.png`, description: "Премиум фрезеровка «Лжевыборка».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Альба", slug: "pvh-alba", image: `${CDN}/v1778176578/milada/pvh-alba.png`, description: "Премиум фрезеровка «Альба».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Прага", slug: "pvh-praga", image: `${CDN}/v1778176579/milada/pvh-praga.png`, description: "Премиум фрезеровка «Прага».", category: "pvh-premium", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Мадрид", slug: "pvh-madrid", image: `${CDN}/v1778176581/milada/pvh-madrid.png`, description: "Премиум фрезеровка «Мадрид».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Мюнхен", slug: "pvh-myunkhen", image: `${CDN}/v1778176582/milada/pvh-myunkhen.png`, description: "Премиум фрезеровка «Мюнхен».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Берн", slug: "pvh-bern", image: `${CDN}/v1778176584/milada/pvh-bern.png`, description: "Премиум фрезеровка «Берн».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Рим", slug: "pvh-rim", image: `${CDN}/v1778176586/milada/pvh-rim.png`, description: "Премиум фрезеровка «Рим».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Мадрид с косичкой", slug: "pvh-madrid-kosichka", image: `${CDN}/v1778176587/milada/pvh-madrid-kosichka.png`, description: "Премиум фрезеровка «Мадрид с косичкой».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Варшава", slug: "pvh-varshava", image: `${CDN}/v1778176588/milada/pvh-varshava.png`, description: "Премиум фрезеровка «Варшава».", category: "pvh-premium", material: "МДФ + ПВХ плёнка" },
  { title: "Интегрированная ручка", slug: "pvh-int-ruchka", image: `${CDN}/v1778176590/milada/pvh-int-ruchka.png`, description: "Премиум фрезеровка с интегрированной ручкой.", category: "pvh-premium", material: "МДФ + ПВХ плёнка", new: true },
  {
    title: "Лион",
    slug: "pvh-lion",
    image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778359923/5_hw7uzw.png",
    interiorImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/v1778359923/ChatGPT_Image_10_%D0%BC%D0%B0%D1%8F_2026_%D0%B3._00_41_54_wgti7p.png",
    description: "Премиум фрезеровка «Лион» — глубокий рельеф с классическим обрамлением. Подходит для кухонь в стилях неоклассика, прованс и классика. Возможна отделка ПВХ-плёнкой любого декора из каталога производителя.",
    category: "pvh-premium",
    material: "МДФ + ПВХ плёнка",
    sizes: "Любые размеры под заказ, толщина 16-22 мм",
    finishes: ["Матовый", "Глянцевый", "Текстурный"],
    featured: true,
    new: true,
  },

  // ── Пластик HPL ─────────────────────────────────────────────────────────────
  { title: "Сосна тёмная (HPL)", slug: "hpl-sosna-dark", image: `${CDN}/v1778176591/milada/hpl-sosna-dark.jpg`, description: "HPL-пластик, декор «Сосна тёмная 2537». Влагостойкий, устойчив к царапинам.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Бук тёмный (HPL)", slug: "hpl-buk-dark", image: `${CDN}/v1778176592/milada/hpl-buk-dark.jpg`, description: "HPL-пластик, декор «Бук тёмный 2745».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Ольха (HPL)", slug: "hpl-olkha", image: `${CDN}/v1778176593/milada/hpl-olkha.jpg`, description: "HPL-пластик, декор «Ольха 2539».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Дуб рустикальный (HPL)", slug: "hpl-dub-rustikal", image: `${CDN}/v1778176594/milada/hpl-dub-rustikal.jpg`, description: "HPL-пластик, декор «Дуб рустикальный 2358».", category: "plastic", material: "МДФ + HPL пластик", featured: true },
  { title: "Перламутр зелёный (HPL)", slug: "hpl-perlamutr-green", image: `${CDN}/v1778176595/milada/hpl-perlamutr-green.jpg`, description: "HPL-пластик, декор «Перламутр зелёный 2567». Металлик.", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Перламутр красный (HPL)", slug: "hpl-perlamutr-red", image: `${CDN}/v1778176596/milada/hpl-perlamutr-red.jpg`, description: "HPL-пластик, декор «Перламутр красный 2550».", category: "plastic", material: "МДФ + HPL пластик" },
  { title: "Белый матовый (HPL)", slug: "hpl-white", image: `${CDN}/v1778176597/milada/hpl-white.jpg`, description: "HPL-пластик, декор «Белый бэкинг 2553». Матовый.", category: "plastic", material: "МДФ + HPL пластик", featured: true },
  { title: "Синий мрамор (HPL)", slug: "hpl-blue-marble", image: `${CDN}/v1778176598/milada/hpl-blue-marble.jpg`, description: "HPL-пластик, декор «Синий мрамор 2311».", category: "plastic", material: "МДФ + HPL пластик", new: true },
  { title: "Золотая нить (HPL)", slug: "hpl-gold-thread", image: `${CDN}/v1778176600/milada/hpl-gold-thread.jpg`, description: "HPL-пластик, декор «Золотая нить 6110».", category: "plastic", material: "МДФ + HPL пластик" },

  // ── Каменные фасады ─────────────────────────────────────────────────────────
  { title: "Каменный — Белый", slug: "stone-white", image: `${CDN}/v1778176600/milada/stone-white.jpg`, description: "Искусственный камень, цвет «Белый». Высокоглянцевый термостойкий лак.", category: "stone", material: "МДФ + искусственный камень", featured: true },
  { title: "Каменный — Бежевый", slug: "stone-beige", image: `${CDN}/v1778176601/milada/stone-beige.jpg`, description: "Искусственный камень, цвет «Бежевый».", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный — Светло-кофейный", slug: "stone-light-coffee", image: `${CDN}/v1778176602/milada/stone-light-coffee.jpg`, description: "Искусственный камень, цвет «Светло-кофейный».", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный — Коричневый", slug: "stone-brown", image: `${CDN}/v1778176604/milada/stone-brown.jpg`, description: "Искусственный камень, цвет «Коричневый».", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный — Голубой", slug: "stone-blue", image: `${CDN}/v1778176605/milada/stone-blue.jpg`, description: "Искусственный камень, цвет «Голубой».", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный — Серый", slug: "stone-grey", image: `${CDN}/v1778176606/milada/stone-grey.jpg`, description: "Искусственный камень, цвет «Серый».", category: "stone", material: "МДФ + искусственный камень", new: true },
  { title: "Каменный — Чёрный", slug: "stone-black", image: `${CDN}/v1778176607/milada/stone-black.jpg`, description: "Искусственный камень, цвет «Чёрный».", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный V-01 (перламутр)", slug: "stone-v01", image: `${CDN}/v1778176608/milada/stone-v01.jpg`, description: "Искусственный камень с перламутровым эффектом V-01.", category: "stone", material: "МДФ + искусственный камень" },
  { title: "Каменный V-02 (перламутр)", slug: "stone-v02", image: `${CDN}/v1778176609/milada/stone-v02.jpg`, description: "Искусственный камень с перламутровым эффектом V-02.", category: "stone", material: "МДФ + искусственный камень" },

  // ── Эмаль ───────────────────────────────────────────────────────────────────
  { title: "Эмаль матовая", slug: "enamel-mat", image: `${CDN}/v1778176610/milada/enamel-mat.jpg`, description: "МДФ с матовой эмалью. Любой цвет по каталогу RAL. Грунт + шлифовка + эмаль.", category: "enamel", material: "МДФ + эмаль", finishes: ["Матовый"], featured: true },
  { title: "Эмаль глянцевая", slug: "enamel-gloss", image: `${CDN}/v1778176611/milada/enamel-gloss.jpg`, description: "МДФ с глянцевой эмалью. Цвет по RAL. Финишный высокоглянцевый лак.", category: "enamel", material: "МДФ + эмаль + лак", finishes: ["Глянцевый"] },
  { title: "Эмаль металлик", slug: "enamel-metallic", image: `${CDN}/v1778176612/milada/enamel-metallic.jpg`, description: "МДФ с эмалью металлик. Цвет по RAL.", category: "enamel", material: "МДФ + эмаль металлик", finishes: ["Металлик"], new: true },

  // ── Патинированные ──────────────────────────────────────────────────────────
  { title: "Патинированный фасад", slug: "patina-classic", image: `${CDN}/v1778176614/milada/patina-classic.jpg`, description: "Фасад премиум-класса с эффектом состаривания. Ручная обработка красками и лаками.", category: "patina", material: "МДФ + ПВХ + патина", featured: true },

  // ── Дверные панели ──────────────────────────────────────────────────────────
  { title: "Дверная панель П1", slug: "door-panel-p1", image: `${CDN}/v1778177312/milada/door-panel-p1.png`, description: "Дверная накладка МДФ 6–16 мм. Для входных и межкомнатных дверей.", category: "door-panels", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Дверная панель П2", slug: "door-panel-p2", image: `${CDN}/v1778177316/milada/door-panel-p2.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П3", slug: "door-panel-p3", image: `${CDN}/v1778177319/milada/door-panel-p3.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П4", slug: "door-panel-p4", image: `${CDN}/v1778177323/milada/door-panel-p4.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П5", slug: "door-panel-p5", image: `${CDN}/v1778177326/milada/door-panel-p5.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П6", slug: "door-panel-p6", image: `${CDN}/v1778177328/milada/door-panel-p6.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П7", slug: "door-panel-p7", image: `${CDN}/v1778177331/milada/door-panel-p7.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },
  { title: "Дверная панель П8", slug: "door-panel-p8", image: `${CDN}/v1778177333/milada/door-panel-p8.png`, description: "Дверная накладка МДФ.", category: "door-panels", material: "МДФ + ПВХ плёнка" },

  // ── Дверные полотна купе ─────────────────────────────────────────────────────
  { title: "Купе — фрезеровка 1", slug: "kupe-standart-1", image: `${CDN}/v1778177336/milada/kupe-standart-1.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка", featured: true },
  { title: "Купе — фрезеровка 2", slug: "kupe-standart-2", image: `${CDN}/v1778177339/milada/kupe-standart-2.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе — фрезеровка 3", slug: "kupe-standart-3", image: `${CDN}/v1778177342/milada/kupe-standart-3.png`, description: "Дверное полотно для шкафа-купе, простая фрезеровка.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РХ1 — диагональ", slug: "kupe-rx1", image: `${CDN}/v1778177344/milada/kupe-rx1.png`, description: "Дверное полотно для купе с диагональными перекрытиями РХ1.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РХ2 — диагональ", slug: "kupe-rx2", image: `${CDN}/v1778177347/milada/kupe-rx2.png`, description: "Дверное полотно для купе с диагональными перекрытиями РХ2.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РО4 — прямое", slug: "kupe-ro4", image: `${CDN}/v1778177349/milada/kupe-ro4.png`, description: "Дверное полотно для купе с прямыми перекрытиями РО4.", category: "kupe", material: "МДФ + ПВХ плёнка" },
  { title: "Купе РО6 — прямое", slug: "kupe-ro6", image: `${CDN}/v1778177351/milada/kupe-ro6.png`, description: "Дверное полотно для купе с прямыми перекрытиями РО6.", category: "kupe", material: "МДФ + ПВХ плёнка" },

  // ── Радиусные фасады ─────────────────────────────────────────────────────────
  { title: "Радиусный фасад", slug: "radius-classic", image: `${CDN}/v1778176614/milada/patina-classic.jpg`, description: "Гнутый фасад МДФ. Внешний радиус 300 мм, высота 90–916 мм. Плёночные и пластиковые варианты.", category: "radius", material: "МДФ гнутый + ПВХ плёнка", new: true },

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
  { title: "Спинка кроватная СК1", slug: "headboard-sk1", image: `${CDN}/v1778177149/milada/headboard-sk1.png`, description: "Изголовье кровати МДФ «СК1». Экологически чистые материалы.", category: "headboards", material: "МДФ + ПВХ плёнка", featured: true },
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
