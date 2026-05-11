import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildMyChatbot",
  description:
    "How BuildMyChatbot handles demo requests, AI enquiry system logs, AI model processing, retention, subprocessors, and data rights.",
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
        <p className="mt-2 text-sm text-muted">Last updated: April 28, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit a demo request, we collect your email address and
              optionally your website URL. If you contact us
              by email, we also process the information you choose to include in
              that message.
            </p>
            <p className="mt-3">
              For production projects, the exact data processed depends on the
              scope you approve. This may include approved website content,
              FAQs, service pages, configuration details, lead handoff
              destinations, and limited conversation logs needed to operate and
              improve the enquiry system.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Prepare a custom demo of an AI enquiry flow on your website</li>
              <li>Respond to your inquiries</li>
              <li>Scope, build, deploy, and tune an approved project</li>
              <li>Monitor answer quality, handoff behavior, follow-up, and source coverage</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information or share it with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              3. Hosting and Storage
            </h2>
            <p>
              Demo request data is stored in systems selected for EU-compatible
              handling. Production deployments can be configured to run in your
              own infrastructure or in a dedicated EU cloud environment,
              depending on the project scope.
            </p>
            <p className="mt-3">
              Conversation logging is configurable. For production projects, we
              can minimize logs, redact sensitive fields, set retention windows,
              or hand log storage and deletion controls to your infrastructure
              team.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              4. AI Model Processing
            </h2>
            <p>
              When you interact with a demo or production AI enquiry assistant, your
              messages may be processed by an AI model provider to generate a
              response. We usually work with current OpenAI or Anthropic models,
              then choose the provider and configuration based on the approved
              privacy, latency, and hosting requirements for the project.
            </p>
            <p className="mt-3">
              We do not use your documentation, prompts, or conversation data to
              train our own models. Where supported by the selected provider and
              contract, we configure model processing so customer data is not
              used to train the provider&apos;s models.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              5. Retention
            </h2>
            <p>
              Demo request emails and project communications are retained as
              long as needed to respond, prepare the demo, and maintain business
              records. Demo assistant interactions are kept only as long as needed
              to troubleshoot and evaluate the demo, unless we agree otherwise
              with you.
            </p>
            <p className="mt-3">
              Production retention is defined in the project scope or data
              processing agreement. If you need a fixed window such as 24 hours,
              7 days, 30 days, or customer-controlled deletion, we can configure
              that as part of the deployment.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              6. Subprocessors and Data Processing Agreements
            </h2>
            <p>
              Depending on the project, subprocessors may include hosting
              providers, email/contact form infrastructure, analytics/logging
              tools, and AI model providers. For production deployments that
              process customer data, we can provide a project-specific
              subprocessor list and sign a data processing agreement.
            </p>
            <p className="mt-3">
              The DPA can document processing purpose, hosting region,
              subprocessors, retention, deletion, security responsibilities, and
              whether the system runs in your cloud or a dedicated EU
              environment.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              7. Security and Access
            </h2>
            <p>
              Access to project data is limited to people who need it to prepare
              demos, build, deploy, support, or troubleshoot the system. For
              production deployments, access controls, secret management,
              logging, PII redaction, and infrastructure ownership are scoped
              before launch.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              8. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data, subject to legal and contractual retention requirements. You
              can also ask us to stop processing demo request data or delete
              demo materials associated with your documentation URL.
            </p>
            <p className="mt-3">
              Contact us at hello@buildmychatbot.app to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">
              9. Contact
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
