import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for BuildMyChatbot.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-accent hover:text-accent-dark transition-colors"
        >
          &larr; Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              1. Service Description
            </h2>
            <p>
              BuildMyChatbot builds custom AI support agents trained on your
              documentation. The service includes ingestion of your content,
              building and tuning the agent, deployment, and optional ongoing
              maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              2. Delivery
            </h2>
            <p>
              The standard delivery timeline is 2 weeks from project kickoff,
              subject to timely provision of documentation and feedback. A 2-week
              support period follows delivery.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              3. Pricing and Payment
            </h2>
            <p>
              The setup fee is &euro;3,500, payable upon project agreement.
              Optional ongoing support is &euro;500/month. All prices exclude
              applicable taxes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              4. Intellectual Property
            </h2>
            <p>
              Upon delivery and full payment, you own all source code, deployment
              configurations, and documentation. There is no platform lock-in.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              BuildMyChatbot provides AI-powered tools that may occasionally
              produce inaccurate responses. We are not liable for decisions made
              based on chatbot outputs. Our total liability is limited to the
              amount paid for the service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              6. Data Processing
            </h2>
            <p>
              Your documentation is processed to build the agent. All data
              handling complies with GDPR. See our{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              7. Contact
            </h2>
            <p>
              For questions about these terms, email hello@buildmychatbot.app.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
