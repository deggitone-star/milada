import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт: сайт собирается в готовые файлы (папка out/),
  // запускается на любом хостинге без Node-сервера.
  output: "export",

  // Линт не должен ронять production-сборку (запускается отдельно через `npm run lint`)
  eslint: { ignoreDuringBuilds: true },

  images: {
    // В static export нет сервера оптимизации картинок — отдаём как есть.
    // Оптимизацию делает Cloudinary на своей стороне.
    unoptimized: true,
  },

  // Чистые URL без хвостовых слешей (как в sitemap/canonical).
  // На Apache раздачу .html для путей без расширения берёт на себя .htaccess.
  trailingSlash: false,
};

export default nextConfig;
