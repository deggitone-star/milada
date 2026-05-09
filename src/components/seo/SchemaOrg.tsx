// src/components/seo/SchemaOrg.tsx
// JSON-LD структурированные данные для Яндекс и Google поиска

import { siteConfig } from "@/lib/config";
import type { Product, Category } from "@/types";

// LocalBusiness — для главной и контактов
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: "MILADA",
    alternateName: "Милада",
    description: "Производство мебельных фасадов в Ульяновске. ПВХ, эмаль, HPL, камень, патина, радиусные фасады.",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    image: `${siteConfig.url}/icon-512.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Хваткова, д. 11",
      addressLocality: "Ульяновск",
      addressRegion: "Ульяновская область",
      postalCode: "432000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.314192,
      longitude: 48.403866,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "₽₽",
    areaServed: ["Ульяновск", "Ульяновская область", "Поволжье", "Россия"],
    foundingDate: "2012",
    sameAs: [], // здесь будут ссылки на соцсети, когда появятся
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization — отдельно для общего применения
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MILADA",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      areaServed: "RU",
      availableLanguage: "Russian",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product — для каждой страницы товара
export function ProductSchema({ product, category }: { product: Product; category?: Category }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "MILADA",
    },
    manufacturer: {
      "@type": "Organization",
      name: "MILADA",
      url: siteConfig.url,
    },
    category: category?.title,
    material: product.material,
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/catalog/${product.category}/${product.slug}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "RUB",
      seller: {
        "@type": "Organization",
        name: "MILADA",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList — для всех вложенных страниц
interface Breadcrumb {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: Breadcrumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// CollectionPage — для страниц категорий
export function CollectionPageSchema({
  title,
  description,
  url,
  itemCount,
}: {
  title: string;
  description: string;
  url: string;
  itemCount: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "MILADA",
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: itemCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
