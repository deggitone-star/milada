import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "О компании MILADA — завод мебельных фасадов в Ульяновске с 2012 года",
  description:
    "MILADA — завод мебельных фасадов в Ульяновске. Собственное производство с 2012 года, более 500 проектов в год, оборудование с ЧПУ. Фасады МДФ, ПВХ, эмаль, HPL, камень. Опт и розница, доставка по России. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/about` },
  keywords: [
    "milada ульяновск",
    "милада мебельные фасады",
    "завод мебельных фасадов ульяновск",
    "производитель фасадов ульяновск",
    "фабрика фасадов ульяновск",
    "производство кухонных фасадов ульяновск",
    "мебельные фасады от производителя ульяновск",
    "фасады мдф завод поволжье",
    "купить фасады напрямую от производителя",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
