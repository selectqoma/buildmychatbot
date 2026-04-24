import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BuildMyChatbot.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-accent hover:text-accent-dark transition-colors"
        >
          &larr; Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit a demo request, we collect your email address and
              optionally the URL of your documentation site. We use this
              information solely to prepare and deliver your demo.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Prepare a custom demo of our chatbot on your documentation</li>
              <li>Respond to your inquiries</li>
              <li>Improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              3. Data Storage
            </h2>
            <p>
              All data is stored within the European Union. We do not share your
              personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              4. Chatbot Interactions
            </h2>
            <p>
              When you interact with our demo chatbot, your messages are
              processed by an AI model to generate responses. These interactions
              are not stored long-term and are not used to train AI models.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. Contact us at hello@buildmychatbot.app to exercise these
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              6. Contact
            </h2>
            <p>
              For any privacy-related questions, email us at
              hello@buildmychatbot.app.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
