// src/lib/config.ts
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MILADA",
  description: "Производство мебельных фасадов в Ульяновске. ПВХ, эмаль, HPL, патина. Опт для бизнеса, доставка по Поволжью и России.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://milada73.ru",
  ogImage: "/og-image.jpg",
  phone: "+7 (8422) 27-82-02",
  email: "milada.73@mail.ru",
  address: "г. Ульяновск, ул. Хваткова, д. 11",
  workingHours: "Пн–Пт: 8:00–17:00",
};

// Ссылки на мессенджеры — клиент добавит когда создаст аккаунты
export const messengers = {
  // MAX — российский мессенджер. Когда клиент создаст канал, замените на свою ссылку
  // Пример: "https://max.ru/milada73"
  max: "",
  // Telegram (если будет)
  telegram: "",
  // WhatsApp Business (если будет)
  whatsapp: "",
};
