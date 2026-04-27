import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildmychatbot.app"),
  title: {
    default: "BuildMyChatbot — Custom AI support agents for SaaS, deployed in 2 weeks",
    template: "%s — BuildMyChatbot",
  },
  description:
    "We build a custom chatbot trained on your docs that handles 40–60% of tier-1 customer questions. Fixed price. No platform lock-in. Deployed in 2 weeks.",
  applicationName: "BuildMyChatbot",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BuildMyChatbot — Custom AI support agents for SaaS",
    description:
      "Custom AI chatbot trained on your docs. Handles 40–60% of tier-1 questions. Fixed price, deployed in 2 weeks.",
    url: "/",
    siteName: "BuildMyChatbot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMyChatbot — Custom AI support agents for SaaS",
    description:
      "Custom AI chatbot trained on your docs. Handles 40–60% of tier-1 questions. Fixed price, deployed in 2 weeks.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
