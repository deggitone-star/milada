// src/types/index.ts

export interface Product {
  title: string;
  slug: string;
  image: string;
  description: string;
  category: string;
  // Расширенные поля
  material?: string;
  finishes?: string[];
  sizes?: string;
  price?: string;
  featured?: boolean;
  new?: boolean;
  // Дополнительные фото
  interiorImage?: string;   // фото фасада в интерьере (кухня и т.д.)
  gallery?: string[];        // дополнительные фото — галерея миниатюр
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}
