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

  // Каждая страница экспортируется как папка с index.html (about/index.html и т.д.).
  // Сервер отдаёт их штатно (как главную), без правил .htaccess — работает при прямом заходе на любом хостинге.
  trailingSlash: true,

  // Стабильный build-ID: пути в _next/ не меняются между сборками,
  // поэтому точечная правка одной страницы меняет только её index.html → можно заливать частично.
  generateBuildId: async () => "milada",
};

export default nextConfig;
