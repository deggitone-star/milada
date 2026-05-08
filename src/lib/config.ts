// src/lib/config.ts
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MILADA",
  description: "Производство мебельных фасадов в Ульяновске. ПВХ, эмаль, HPL, камень, патина. Индивидуальный раскрой, доставка по Поволжью и России.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://milada.ru",
  ogImage: "/og-image.jpg",
  phone: "+7 (8422) 27-82-02",
  email: "milada.73@mail.ru",
  address: "г. Ульяновск, ул. Хваткова, д. 11",
  workingHours: "Пн–Пт: 8:00–17:00",
};
