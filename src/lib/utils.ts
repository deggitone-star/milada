// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Cloudinary URL builder с трансформациями
 */
export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "auto" | "webp" | "avif";
    crop?: "fill" | "fit" | "scale";
  } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return publicId; // fallback to direct URL

  const {
    width,
    height,
    quality = 80,
    format = "auto",
    crop = "fill",
  } = options;

  const transforms = [
    "f_" + format,
    "q_" + quality,
    width ? "w_" + width : "",
    height ? "h_" + height : "",
    (width || height) ? "c_" + crop : "",
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}
