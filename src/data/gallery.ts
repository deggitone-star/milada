// src/data/gallery.ts
// Галерея проектов клиентов MILADA — мебель из наших фасадов.
// Простая лента: фото идут строго по порядку этого массива, без подписей.
// Порядок задан клиентом (связанные кадры идут рядом). Чтобы переставить — меняй порядок строк.

import type { LightboxImage } from "@/components/ui/Lightbox";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export const galleryPhotos: LightboxImage[] = [
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-5_accodf.jpg`,  alt: "Мебельные фасады MILADA — фото 1" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_ydyh3i.jpg`,  alt: "Мебельные фасады MILADA — фото 2" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-1_knsx0l.jpg`,  alt: "Мебельные фасады MILADA — фото 3" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-3_fbxldt.jpg`,  alt: "Мебельные фасады MILADA — фото 4" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-2_heqjiv.jpg`,  alt: "Мебельные фасады MILADA — фото 5" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_a2wior.webp`, alt: "Мебельные фасады MILADA — фото 6" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-3_g3byig.webp`, alt: "Мебельные фасады MILADA — фото 7" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27_pykxhf.jpg`,    alt: "Мебельные фасады MILADA — фото 8" },
  { src: `${CDN}/v1781727917/image-25-05-26-02-28_nj6ngt.jpg`,    alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 1" },
  { src: `${CDN}/v1781727917/image-25-05-26-02-28-1_grik6j.jpg`,  alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 2" },
  { src: `${CDN}/v1781727918/image-25-05-26-02-28-2_vvdt1u.jpg`,  alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 3" },
  { src: `${CDN}/v1781727918/image-25-05-26-02-28-3_okbqhy.jpg`,  alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 4" },
  { src: `${CDN}/v1781727916/image-25-05-26-02-28-4_klntdr.jpg`,  alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 5" },
  { src: `${CDN}/v1781727919/image-25-05-26-02-28-5_jrqocm.jpg`,  alt: "Кухня из фасадов MILADA — проект ЖК «ЖЕЛЕЗНО», Ульяновск — фото 6" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27-1_fnca2q.webp`, alt: "Мебельные фасады MILADA — фото 9" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27-2_yv3ami.webp`, alt: "Мебельные фасады MILADA — фото 10" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27_lfycit.webp`,   alt: "Мебельные фасады MILADA — фото 11" },
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-6_ro6te5.jpg`,  alt: "Мебельные фасады MILADA — фото 12" },
];
