import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { seoLandingPagesBySlug } from "@/lib/seo-pages";

const page = seoLandingPagesBySlug["intercom-fin-alternative"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
};

export default function IntercomFinAlternativePage() {
  return <SeoLandingPage page={page} />;
}
