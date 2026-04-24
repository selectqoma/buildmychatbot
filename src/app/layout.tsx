import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildMyChatbot - Custom AI support agents for SaaS, deployed in 2 weeks",
  description:
    "We build a custom chatbot trained on your docs that handles 40-60% of tier-1 customer questions. Fixed price. No platform lock-in. Deployed in 2 weeks.",
  openGraph: {
    title: "BuildMyChatbot - Custom AI support agents for SaaS",
    description:
      "Custom AI chatbot trained on your docs. Handles 40-60% of tier-1 questions. Fixed price, deployed in 2 weeks.",
    url: "https://buildmychatbot.app",
    siteName: "BuildMyChatbot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMyChatbot - Custom AI support agents for SaaS",
    description:
      "Custom AI chatbot trained on your docs. Handles 40-60% of tier-1 questions. Fixed price, deployed in 2 weeks.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
