import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "О компании MILADA — производство мебельных фасадов в Ульяновске",
  description:
    "MILADA — производитель мебельных фасадов в Ульяновске с 2012 года. Собственный завод, более 500 проектов в год, евростандарты качества. ☎ +7 (8422) 27-82-02",
  alternates: { canonical: `${siteConfig.url}/about` },
  keywords: [
    "milada ульяновск",
    "о компании милада",
    "производитель фасадов ульяновск",
    "завод мебельных фасадов",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
