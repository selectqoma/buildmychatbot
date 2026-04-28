import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { seoLandingPagesBySlug } from "@/lib/seo-pages";

const page = seoLandingPagesBySlug["ai-support-agent-b2b-saas"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
};

export default function AiSupportAgentB2BSaasPage() {
  return <SeoLandingPage page={page} />;
}
