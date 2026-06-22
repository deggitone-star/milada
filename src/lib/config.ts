// src/lib/config.ts
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MILADA",
  description: "Производство мебельных фасадов в Ульяновске. ПВХ, эмаль, HPL, патина. Опт для бизнеса, доставка по Поволжью и России.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://milada73.ru",
  ogImage: "https://res.cloudinary.com/dx9tcpnkg/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1778775340/CTA_an2w49.png",
  phone: "+7 (8422) 27-82-02",
  phone2: "+7 (902) 128-32-22",
  email: "milada.73@mail.ru",
  address: "г. Ульяновск, ул. Хваткова, д. 11",
  workingHours: "Пн–Пт: 8:00–16:00",
};

// Ссылки на мессенджеры — клиент добавит когда создаст аккаунты
export const messengers = {
  // MAX — российский мессенджер. Когда клиент создаст канал, замените на свою ссылку
  // Пример: "https://max.ru/milada73"
  max: "https://max.ru/u/f9LHodD0cOJXHBUsC5uP7RQ2j5gGUnnQ463rx7RoFy8LUn45OYlzMm1i2Q4",
  // Telegram (если будет)
  telegram: "",
  // WhatsApp Business (если будет)
  whatsapp: "",
};
