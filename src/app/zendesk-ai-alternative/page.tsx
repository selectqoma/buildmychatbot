import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { seoLandingPagesBySlug } from "@/lib/seo-pages";

const page = seoLandingPagesBySlug["zendesk-ai-alternative"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
};

export default function ZendeskAiAlternativePage() {
  return <SeoLandingPage page={page} />;
}
