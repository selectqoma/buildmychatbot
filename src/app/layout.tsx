import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildmychatbot.app"),
  title: "BuildMyChatbot - AI enquiry systems for service businesses",
  description:
    "Done-for-you AI chat, smart intake, and automated follow-up systems that turn website visitors into qualified enquiries.",
  openGraph: {
    title: "BuildMyChatbot - AI enquiry systems for service businesses",
    description:
      "AI website assistants, enquiry flows, lead handoff, and follow-up installed for service businesses.",
    url: "https://buildmychatbot.app",
    siteName: "BuildMyChatbot",
    type: "website",
    locale: "en_US",
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
    title: "BuildMyChatbot - AI enquiry systems for service businesses",
    description:
      "Done-for-you AI systems that qualify visitors, route enquiries, and automate follow-up.",
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
