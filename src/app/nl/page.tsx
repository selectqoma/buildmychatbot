import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("nl");

export default function DutchHome() {
  return <LandingPage content={siteContent.nl} />;
}
