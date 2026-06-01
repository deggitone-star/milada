// src/data/gallery.ts
// Галерея проектов клиентов MILADA — мебель из наших фасадов.
// Фото сгруппированы по объектам: каждый проект — отдельный блок с заголовком.
// Чтобы добавить фото: залить на Cloudinary и вставить в photos нужного проекта
// (или добавить новый объект-проект).

import type { LightboxImage } from "@/components/ui/Lightbox";

const CDN = "https://res.cloudinary.com/dx9tcpnkg/image/upload";

export interface GalleryProject {
  title: string;
  photos: LightboxImage[];
}

export const galleryProjects: GalleryProject[] = [
  {
    title: "Кухня с мраморным островом",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27_pykxhf.jpg`, alt: "Кухня с мраморным островом — фасады MILADA" },
    ],
  },
  {
    title: "Классическая кухня",
    photos: [
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-3_fbxldt.jpg`,  alt: "Классическая кухня с фасадами MILADA" },
      { src: `${CDN}/v1779706220/image-25-05-26-02-27-6_ro6te5.jpg`,  alt: "Классическая кухня MILADA — другой ракурс" },
      { src: `${CDN}/v1780068842/image-25-05-26-02-27-3_aog3fx.webp`, alt: "Классическая кухня MILADA — общий план" },
    ],
  },
  {
    title: "Мебель для ванной",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27-2_heqjiv.jpg`,  alt: "Тумба для ванной с рифлёными фасадами MILADA" },
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-2_yv3ami.webp`, alt: "Ванная комната с двойным умывальником — фасады MILADA" },
    ],
  },
  {
    title: "Встроенный шкаф с рифлёными фасадами",
    photos: [
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_ydyh3i.jpg`,  alt: "Встроенный шкаф от пола до потолка — MILADA" },
      { src: `${CDN}/v1779706219/image-25-05-26-02-27-4_a2wior.webp`, alt: "Рифлёные фасады шкафа крупным планом — MILADA" },
    ],
  },
  {
    title: "Шкаф с золотыми ручками",
    photos: [
      { src: `${CDN}/v1779706218/image-25-05-26-02-27-1_knsx0l.jpg`, alt: "Встроенный шкаф с золотыми ручками — фасады MILADA" },
    ],
  },
  {
    title: "Декоративная полка с орнаментом",
    photos: [
      { src: `${CDN}/v1779706217/image-25-05-26-02-27-1_fnca2q.webp`, alt: "Настенная полка с декоративным орнаментом MILADA" },
      { src: `${CDN}/v1779706217/image-25-05-26-02-27_lfycit.webp`,   alt: "Декоративная полка с орнаментом крупным планом — MILADA" },
    ],
  },
  {
    title: "ТВ-зона",
    photos: [
      { src: `${CDN}/v1779706220/image-25-05-26-02-27-5_accodf.jpg`, alt: "ТВ-тумба с классической фрезеровкой — MILADA" },
    ],
  },
];

// Плоский список всех фото — для лайтбокса и обратной совместимости
// (используется на /about как превью galleryPhotos.slice(0, 6)).
export const galleryPhotos: LightboxImage[] = galleryProjects.flatMap((p) => p.photos);
