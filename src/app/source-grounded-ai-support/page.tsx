import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { seoLandingPagesBySlug } from "@/lib/seo-pages";

const page = seoLandingPagesBySlug["source-grounded-ai-support"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
};

export default function SourceGroundedAiSupportPage() {
  return <SeoLandingPage page={page} />;
}
