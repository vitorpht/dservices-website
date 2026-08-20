import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";
import { getPhone } from "@/data/company";

type BuildMetadataOptions = {
  title?: string;
  /** Título completo — ignora o template do layout (ex.: homepage) */
  absoluteTitle?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  absoluteTitle,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);
  const ogTitle = absoluteTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.name);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "business",
    alternates: {
      canonical: url,
      languages: {
        "pt-PT": url,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — limpeza profissional na Figueira da Foz`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function localBusinessJsonLd() {
  const phone = getPhone();

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl(siteConfig.brandLogo),
    taxID: siteConfig.nif,
    foundingDate: String(siteConfig.foundedYear),
    ...(phone
      ? {
          telephone: phone.tel,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: phone.tel,
            areaServed: "PT",
            availableLanguage: ["Portuguese"],
          },
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Figueira da Foz",
      },
      {
        "@type": "AdministrativeArea",
        name: "Coimbra",
      },
    ],
    knowsAbout: [
      "Limpeza de escritórios",
      "Limpeza residencial",
      "Limpeza pós-obra",
      "Manutenção de limpeza",
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pt-PT",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.brandLogo),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "PT",
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesJsonLd(
  services: Array<{ name: string; description: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços de limpeza",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
        provider: {
          "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
          "@type": "City",
          name: "Figueira da Foz",
        },
      },
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function contactPageJsonLd(options?: {
  email?: string;
  phone?: string;
}) {
  const contactPoints = [];

  if (options?.email) {
    contactPoints.push({
      "@type": "ContactPoint",
      contactType: "customer service",
      email: options.email,
      areaServed: "PT",
      availableLanguage: ["Portuguese"],
    });
  }

  if (options?.phone) {
    contactPoints.push({
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: options.phone,
      areaServed: "PT",
      availableLanguage: ["Portuguese"],
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contacto/#contactpage`,
    name: `Contacto | ${siteConfig.name}`,
    url: absoluteUrl("/contacto/"),
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#business`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#business`,
      ...(contactPoints.length > 0 ? { contactPoint: contactPoints } : {}),
    },
  };
}
