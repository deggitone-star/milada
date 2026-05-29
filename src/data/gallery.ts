// src/data/gallery.ts
// Галерея проектов клиентов MILADA — мебель из наших фасадов.
// Чтобы добавить фото: залить на Cloudinary и добавить объект в массив.

import type { LightboxImage } from "@/components/ui/Lightbox";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export const galleryPhotos: LightboxImage[] = [
  { src: `${CDN}/v1779706218/image-25-05-26-02-27_pykxhf.jpg`,    alt: "Кухня с мраморным островом — фасады MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-3_fbxldt.jpg`,  alt: "Классическая кухня с фасадами MILADA" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-2_heqjiv.jpg`,  alt: "Тумба для ванной с рифлёными фасадами MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-2_yv3ami.webp`, alt: "Ванная комната с двойным умывальником — фасады MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_ydyh3i.jpg`,  alt: "Встроенный шкаф от пола до потолка — MILADA" },
  { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_a2wior.webp`, alt: "Рифлёные фасады шкафа крупным планом — MILADA" },
  { src: `${CDN}/v1779706218/image-25-05-26-02-27-1_knsx0l.jpg`,  alt: "Встроенный шкаф с золотыми ручками — фасады MILADA" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27-1_fnca2q.webp`, alt: "Настенная полка с декоративным орнаментом MILADA" },
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-5_accodf.jpg`,  alt: "ТВ-тумба с классической фрезеровкой — MILADA" },
  { src: `${CDN}/v1779706220/image-25-05-26-02-27-6_ro6te5.jpg`,  alt: "Классическая кухня MILADA — другой ракурс" },
  { src: `${CDN}/v1779706217/image-25-05-26-02-27_lfycit.webp`,   alt: "Декоративная полка с орнаментом крупным планом — MILADA" },
];
