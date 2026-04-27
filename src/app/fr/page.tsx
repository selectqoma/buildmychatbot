import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("fr");

export default function FrenchHome() {
  return <LandingPage content={siteContent.fr} />;
}
