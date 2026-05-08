// src/data/gallery.ts
// Галерея реальных проектов клиентов MILADA. Фото со старого сайта.
// TODO: перезалить на Cloudinary через Colab после первого деплоя.

const BASE = "https://milada73.ru";

// 63 фото проектов
export const gallery: string[] = Array.from({ length: 63 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `${BASE}/images/gallery3/phoca_thumb_l_${num}.jpg`;
});
