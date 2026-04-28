import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildmychatbot.app"),
  title: "BuildMyChatbot - AI agents that turn questions into customers",
  description:
    "Your own AI agent to answer customer questions, keep visitors engaged, and send serious enquiries to your team with context.",
  openGraph: {
    title: "BuildMyChatbot - AI agents that turn questions into customers",
    description:
      "Source-grounded AI agents for smoother customer conversations, clearer next steps, and no platform lock-in.",
    url: "https://buildmychatbot.app",
    siteName: "BuildMyChatbot",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BuildMyChatbot - your own AI agent for customer conversations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMyChatbot - AI agents that turn questions into customers",
    description:
      "Source-grounded AI agents that answer questions, guide visitors, and hand serious enquiries to your team.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-mark.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-buildmychatbot-locale") ?? "en";

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
