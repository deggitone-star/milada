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
 */
export function getDecorSrc(
  collectionSlug: string,
  article: string,
): string {
  const filename = articleToFilename(article);
  if (!filename) return "";

  const folder = MATERIAL_TO_FOLDER[collectionSlug] || collectionSlug;
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_400/milada/decors/${folder}/${filename}`;
}
