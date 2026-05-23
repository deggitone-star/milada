// src/data/collectionBridge.ts
// Связывает URL-slug (tadzhCollections) с данными (materials.ts)

import { tadzhCollections, type TadzhCollection } from "./tadzhCollections";
import {
  plasticHPL,
  type Collection as MaterialCollection,
} from "./materials";

/** URL-slug → slug коллекции в materials.ts */
const URL_TO_MATERIAL: Record<string, string> = {
  india: "indiya",
  "wood-stone": "wood-and-stone",
  classic: "klassik",
  provence: "provans",
};

export interface FullCollection {
  meta: TadzhCollection;
  data: MaterialCollection;
}

export function getFullCollection(urlSlug: string): FullCollection | null {
  const meta = tadzhCollections.find((c) => c.slug === urlSlug);
  if (!meta) return null;

  const materialSlug = URL_TO_MATERIAL[urlSlug];
  if (!materialSlug) return null;

  const data = plasticHPL.collections.find((c) => c.slug === materialSlug);
  if (!data) return null;

  return { meta, data };
}

export function getAllCollectionSlugs(): string[] {
  return tadzhCollections.map((c) => c.slug);
}
