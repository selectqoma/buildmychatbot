import type { Metadata } from "next";
import {
  localePaths,
  type Locale,
  type SiteContent,
  siteContent,
} from "@/lib/site-content";

export const siteUrl = "https://buildmychatbot.app";

export const languageAlternates: Record<string, string> = {
  en: "/",
  "x-default": "/",
  fr: "/fr",
  "fr-BE": "/fr",
  nl: "/nl",
  "nl-BE": "/nl",
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_BE",
  nl: "nl_BE",
};

export function createPageMetadata(locale: Locale): Metadata {
  const content = siteContent[locale];
  const path = localePaths[locale];

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      siteName: "BuildMyChatbot",
      type: "website",
      locale: openGraphLocales[locale],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "BuildMyChatbot - AI enquiry systems for service businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createJsonLd(content: SiteContent) {
  const url = `${siteUrl}${localePaths[content.locale]}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "BuildMyChatbot",
        url: siteUrl,
        logo: `${siteUrl}/buildmychatbot-logo-transparent.png`,
        email: "hello@buildmychatbot.app",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.meta.title,
        description: content.meta.description,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Belgium",
          },
          {
            "@type": "Place",
            name: "European Union",
          },
        ],
        availableLanguage: ["English", "French", "Dutch"],
        serviceType: "Done-for-you AI enquiry system implementation",
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
