// src/lib/decor-images.ts
// Резолвер артикулов декоров → Cloudinary URL

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dx9tcpnkg/image/upload";

/**
 * Артикул → имя файла (без расширения).
 * PL8055→8055, ORG-11→11, F9306→9306,
 * «1003 А»→1003_alt, 818-8→8, б/н→null.
 */
function articleToFilename(article: string): string | null {
  if (article === "б/н") return null;
  if (article.endsWith(" А")) return article.replace(" А", "") + "_alt";
  if (article.startsWith("PL")) return article.slice(2);
  if (article.startsWith("ORG-")) return article.slice(4);
  if (article.startsWith("F")) return article.slice(1);
  if (article.includes("-")) return article.split("-").pop() || null;
  return article;
}

/** Slug коллекции из materials.ts → slug папки на Cloudinary */
const MATERIAL_TO_FOLDER: Record<string, string> = {
  indiya: "india",
  "wood-and-stone": "wood-stone",
  klassik: "classic",
  provans: "provence",
};

/**
 * Возвращает Cloudinary URL фото декора с автооптимизацией.
 * Если фото нет в папке текущей коллекции — берёт из другой.
 */

const CROSS_COLLECTION: Record<string, string> = {
  // Wood & Stone → фото в другой коллекции
  "wood-and-stone:2503": "klassik",
  "wood-and-stone:103": "indiya",
  "wood-and-stone:1014": "klassik",
  // India → фото в другой коллекции
  "indiya:2503": "klassik",
  "indiya:101": "indiya",
  // Classic → фото в другой коллекции
  "klassik:7137": "provans",
  // Provence → фото в другой коллекции
  "provans:103": "indiya",
  "provans:4011": "indiya",
};

export function getDecorSrc(
  collectionSlug: string,
  article: string,
  imageId?: string,
): string {
  // Если задан imageId — использовать его вместо артикула
  const filename = imageId || articleToFilename(article);
  if (!filename) return "";

  const key = `${collectionSlug}:${article}`;
  const resolvedSlug = CROSS_COLLECTION[key] || collectionSlug;
  const folder = MATERIAL_TO_FOLDER[resolvedSlug] || resolvedSlug;
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_400/milada/decors/${folder}/${filename}`;
}
