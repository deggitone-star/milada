import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { tadzhCollections } from "@/data/tadzhCollections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/catalog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/materialy`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/materialy/plastik-hpl`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/dlya-mebelnyh-kompaniy`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/fasady-mdf`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hpl-fasady`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/kamennye-fasady`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/proizvodstvo-fasadov`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/tekhnicheskie-parametry`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/catalog/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/catalog/${product.category}/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const collectionPages: MetadataRoute.Sitemap = tadzhCollections.map((col) => ({
    url: `${base}/catalog/plastic/${col.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...collectionPages, ...productPages];
}
