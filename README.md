# MILADA — производство мебельных фасадов

Корпоративный B2B-сайт производителя мебельных фасадов (Ульяновск). Каталог продукции, SEO-страницы, форма заявки.

## Стек

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Шрифт**: системный стек (без внешних зависимостей)
- **Images**: Cloudinary + next/image
- **Analytics**: Яндекс.Метрика
- **Deploy**: Vercel или российский Node-хостинг (Timeweb Cloud / RelaxDev)

## Быстрый старт

```bash
npm install
cp .env.example .env.local   # заполнить значения
npm run dev                  # разработка
npm run build                # production-сборка
npm start                    # запуск production
npm run lint                 # проверка ESLint
```

## Переменные окружения (.env.local)

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dx9tcpnkg
NEXT_PUBLIC_SITE_URL=https://milada73.ru
NEXT_PUBLIC_YANDEX_METRIKA_ID=         # ID счётчика, когда будет зарегистрирован
```

Контактные данные (телефон, email, адрес, мессенджеры) хранятся в `src/lib/config.ts`.

## Структура

```
src/
├── app/            # страницы (App Router): главная, каталог, категории, товары,
│                   # SEO-лендинги, about, contacts, sitemap.ts, robots.ts
├── components/     # layout (Header/Footer), catalog (ProductCard и т.д.),
│                   # sections (Hero/CTA и т.д.), seo (Schema.org), ui
├── data/           # products.ts, categories.ts, category-seo.ts, materials.ts
├── lib/            # config.ts (конфиг сайта), metadata.ts (SEO), utils.ts
└── types/          # TypeScript-типы
```

## Каталог

Товары — в `src/data/products.ts`, категории — в `src/data/categories.ts`.
Пример товара:

```ts
{
  title: "Эмаль матовая",
  slug: "enamel-mat",
  image: "https://res.cloudinary.com/dx9tcpnkg/image/upload/...",
  description: "Описание для карточки и SEO",
  category: "enamel",            // slug категории из categories.ts
  material: "МДФ + матовая эмаль",
  finishes: ["Матовый"],
  featured: true,                // показать в подборках
  new: true,                     // ярлык «Новинка»
  interiorImage: "https://...",  // фото в интерьере (опционально)
  gallery: ["https://..."],      // доп. фото (опционально)
  badge: "Эмаль",                // ярлычок на карточке (опционально)
}
```

Изображения загружаются в Cloudinary (cloud `dx9tcpnkg`); `next/image` отдаёт их оптимизированными.

## SEO

- `sitemap.xml` и `robots.txt` генерируются автоматически (`src/app/sitemap.ts`, `robots.ts`).
- Canonical, OpenGraph и Schema.org проставляются на страницах; базовый домен — `NEXT_PUBLIC_SITE_URL`.
- При смене домена достаточно поменять `NEXT_PUBLIC_SITE_URL` — canonical/sitemap/og обновятся.

## Деплой

Сборка git-based: пуш в репозиторий → платформа собирает (`npm run build`) и запускает (`npm start`).
Переменные окружения задаются в панели хостинга. Домен и SSL привязываются на стороне хостинга.
