import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
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
