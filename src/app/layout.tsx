import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildmychatbot.app"),
  title: "BuildMyChatbot - Customer service chatbots, live in two weeks",
  description:
    "We build customer service chatbots that answer from your docs, escalate safely, and cut repetitive support tickets. Scoped project fee, EU-first hosting, no lock-in.",
  openGraph: {
    title: "BuildMyChatbot - Customer service chatbots, live in two weeks",
    description:
      "Custom support chatbot trained on your docs. Safe escalation, EU-first hosting, scoped project fee, full source handover.",
    url: "https://buildmychatbot.app",
    siteName: "BuildMyChatbot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMyChatbot - Customer service chatbots, live in two weeks",
    description:
      "Custom support chatbot trained on your docs. Built in two weeks, scoped before kickoff, no platform lock-in.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
