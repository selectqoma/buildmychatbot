import type { MetadataRoute } from "next";
import {
  languageAlternates,
  siteUrl,
} from "@/lib/seo";
import { seoLandingPages } from "@/lib/seo-pages";

const lastModified = new Date("2026-04-28");

function absolutePath(path: string) {
  return `${siteUrl}${path}`;
}

function absoluteAlternates() {
  return Object.fromEntries(
    Object.entries(languageAlternates).map(([language, path]) => [
      language,
      absolutePath(path),
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: absoluteAlternates(),
      },
    },
    {
      url: absolutePath("/fr"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: absoluteAlternates(),
      },
    },
    {
      url: absolutePath("/nl"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: absoluteAlternates(),
      },
    },
    {
      url: absolutePath("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absolutePath("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...seoLandingPages.map((page) => ({
      url: absolutePath(`/${page.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
