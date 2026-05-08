// src/lib/config.ts
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MILADA",
  description: "Производство мебельных фасадов премиум-класса. Эмаль, шпон, HPL-пластик, стекло. Собственное производство в Москве.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://facade-studio.ru",
  ogImage: "/og-image.jpg",
  phone: process.env.NEXT_PUBLIC_PHONE || "+7 (495) 000-00-00",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@facade-studio.ru",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Москва, ул. Производственная, 1",
  workingHours: "Пн–Пт: 9:00–18:00, Сб: 10:00–15:00",
};
