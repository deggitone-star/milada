import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      // Временно — для галереи проектов со старого сайта
      {
        protocol: "https",
        hostname: "milada73.ru",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Оптимизация для Яндекс SEO
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
