# MILADA — Next.js 15 Production Site

Современный сайт производителя мебельных фасадов. Next.js 15, App Router, Tailwind CSS, TypeScript.

## Стек

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Images**: Cloudinary + next/image
- **Deploy**: Vercel
- **Analytics**: Яндекс.Метрика

## Структура проекта

```
src/
├── app/                    # App Router pages
│   ├── page.tsx            # Главная
│   ├── layout.tsx          # Root layout (шрифты, header, footer)
│   ├── globals.css
│   ├── sitemap.ts          # Автосайтмап
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404
│   ├── catalog/
│   │   ├── page.tsx        # Каталог
│   │   └── [category]/
│   │       ├── page.tsx    # Страница категории
│   │       └── [slug]/
│   │           └── page.tsx # Страница товара
│   ├── about/page.tsx      # О производстве
│   └── contacts/page.tsx   # Контакты
├── components/
│   ├── layout/             # Header, Footer
│   ├── catalog/            # ProductCard, CategoryCard
│   ├── sections/           # Hero, Featured, Categories, Advantages, CTA
│   └── ui/                 # YandexMetrika
├── data/
│   ├── products.ts         # JSON-каталог товаров
│   └── categories.ts       # Категории
├── lib/
│   ├── config.ts           # Конфигурация сайта
│   ├── metadata.ts         # SEO helpers
│   └── utils.ts            # cn(), cloudinaryUrl()
└── types/
    └── index.ts            # TypeScript типы
```

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Скопировать .env и заполнить
cp .env.example .env.local

# Разработка
npm run dev

# Сборка
npm run build

# Старт production
npm start
```

## Настройка .env.local

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_SITE_URL=https://yourdomain.ru
NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
NEXT_PUBLIC_PHONE=+7 (495) 000-00-00
NEXT_PUBLIC_EMAIL=info@facade-studio.ru
NEXT_PUBLIC_ADDRESS=Москва, ул. Производственная, 1
```

## Добавление товаров

Редактируйте `src/data/products.ts`. Каждый товар:

```ts
{
  title: "Название фасада",
  slug: "unique-slug",
  image: "https://res.cloudinary.com/your_cloud/...", // или Unsplash для dev
  description: "Описание для SEO и карточки товара",
  category: "enamel", // enamel | veneer | plastic | glass
  material: "МДФ 19мм + эмаль",
  finishes: ["White", "Black"],
  price: "от 3 200 ₽/м²",
  featured: true, // показать на главной
  new: false,
}
```

## Cloudinary

Загружайте изображения в Cloudinary и используйте публичный ID в поле `image`.
Функция `cloudinaryUrl()` в `src/lib/utils.ts` генерирует URL с оптимальными трансформациями.

## SEO

- Автоматический `sitemap.xml` → `/sitemap.xml`
- `robots.txt` с правилами для Яндекс.Бота → `/robots.txt`
- Canonical URLs на каждой странице
- OG-теги для социальных сетей
- Яндекс.Метрика (добавьте ID в `.env`)

## Deploy на Vercel

```bash
# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

Переменные окружения настройте в Vercel Dashboard → Settings → Environment Variables.
