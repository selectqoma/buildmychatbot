export type SeoLandingPageContent = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  comparisonTitle: string;
  comparison: string[];
  bestForTitle: string;
  bestFor: string[];
  proofTitle: string;
  proof: string;
  faq: Array<{ q: string; a: string }>;
};

export const seoLandingPages = [
  {
    slug: "intercom-fin-alternative",
    title: "Intercom Fin alternative for owned AI support | BuildMyChatbot",
    description:
      "A practical Intercom Fin alternative for teams that want a source-grounded AI support agent without moving support into a locked platform.",
    eyebrow: "Intercom Fin alternative",
    h1: "Own your AI support agent instead of renting another platform add-on.",
    intro:
      "BuildMyChatbot is for teams that like their current support stack but want source-grounded AI answers, safe escalation, and source-code ownership.",
    comparisonTitle: "Where this differs from Intercom Fin",
    comparison: [
      "You keep your existing helpdesk, CRM, inbox, or Slack handoff flow.",
      "The agent is built around your approved docs, refusal rules, and deployment needs.",
      "You receive the code, prompts, retrieval settings, and deployment configs at handover.",
      "Pricing is scoped as a build, not charged per AI outcome.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "B2B SaaS teams with strong documentation and recurring tier-1 questions.",
      "Companies that want AI support without committing to a new suite.",
      "Teams that care about EU hosting, configurable logs, and auditability.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A website support agent that retrieves from approved sources, refuses low-confidence answers, logs coverage gaps, and escalates account-specific or risky questions to humans.",
    faq: [
      {
        q: "Do we need to leave Intercom?",
        a: "No. The agent can hand off to your existing tools through email, Slack, webhooks, or scoped API work.",
      },
      {
        q: "Is this better than outcome pricing?",
        a: "It depends on your team. If you want predictable project scope and ownership, a fixed build is easier to reason about than a per-resolution add-on.",
      },
    ],
  },
  {
    slug: "zendesk-ai-alternative",
    title: "Zendesk AI alternative for custom support workflows | BuildMyChatbot",
    description:
      "A Zendesk AI alternative for documentation-heavy teams that need a custom, owned support agent connected to their current workflow.",
    eyebrow: "Zendesk AI alternative",
    h1: "A Zendesk AI alternative when your workflow should stay yours.",
    intro:
      "BuildMyChatbot gives you a support automation layer built around your docs and handoff rules, without forcing your team deeper into one helpdesk ecosystem.",
    comparisonTitle: "Where this differs from Zendesk AI",
    comparison: [
      "The implementation is custom-scoped around your sources, support risks, and handoff path.",
      "You can deploy it beside your current stack instead of replacing it.",
      "Sensitive, account-specific, legal, or low-confidence questions can be routed away from automation.",
      "Your team receives the implementation assets instead of relying on a black-box add-on.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Support teams with documented product, billing, setup, or onboarding flows.",
      "Operations teams that want control over retention, logs, and deployment location.",
      "Founders who want automation without platform dependency.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A source-grounded agent with approved-source retrieval, escalation rules, analytics for unanswered topics, and handover documentation your team can inspect.",
    faq: [
      {
        q: "Can it connect to Zendesk?",
        a: "Yes. The standard build supports email or Slack handoff, and Zendesk can be connected through API or webhook work when included in scope.",
      },
      {
        q: "Can we approve answers before launch?",
        a: "Yes. The launch process includes review against realistic questions, risky edge cases, and escalation behavior.",
      },
    ],
  },
  {
    slug: "ai-support-agent-b2b-saas",
    title: "AI support agent for B2B SaaS teams | BuildMyChatbot",
    description:
      "A source-grounded AI support agent for B2B SaaS teams with docs, onboarding questions, billing questions, and repeated setup tickets.",
    eyebrow: "For B2B SaaS",
    h1: "An AI support agent for SaaS teams that already have the answers documented.",
    intro:
      "If your support queue repeats the same setup, billing, permissions, and integration questions, BuildMyChatbot turns your docs into a controlled support agent.",
    comparisonTitle: "What it handles well",
    comparison: [
      "Plan, seat, permission, onboarding, and setup questions covered by public docs.",
      "Integration and configuration questions with clear source material.",
      "Handoff when the question requires account access, approval, or judgment.",
      "Analytics that show unanswered topics and documentation gaps.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Seed to growth-stage SaaS teams with a help center or product docs.",
      "Teams where founders or engineers still answer repeated support questions.",
      "Companies that need controlled automation before hiring more support coverage.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A docs-trained support agent, a website widget, Slack/email handoff, source constraints, refusal behavior, and a basic analytics dashboard for coverage gaps.",
    faq: [
      {
        q: "What do you need to start?",
        a: "A docs URL, common support topics, handoff destination, no-answer rules, and any hosting or privacy constraints.",
      },
      {
        q: "Can it answer in multiple languages?",
        a: "Yes. The site and support agent can be configured for English, French, Dutch, and other target languages depending on your sources.",
      },
    ],
  },
  {
    slug: "source-grounded-ai-support",
    title: "Source-grounded AI support agent implementation | BuildMyChatbot",
    description:
      "Implement a source-grounded AI support agent that answers from approved docs, refuses unsupported questions, and escalates safely.",
    eyebrow: "Source-grounded AI support",
    h1: "AI support that answers from sources instead of guessing.",
    intro:
      "BuildMyChatbot is built around retrieval, approved source sets, confidence behavior, and human handoff so support automation can be reviewed before production.",
    comparisonTitle: "Guardrails included",
    comparison: [
      "Approved source sets for help docs, FAQs, policies, or internal material.",
      "Refusal behavior when no relevant source is found.",
      "Escalation for account-specific, sensitive, or low-confidence questions.",
      "Logs and analytics focused on unanswered questions and source coverage gaps.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Documentation-heavy companies that need safer automation.",
      "Teams worried about hallucinations, compliance expectations, or customer trust.",
      "Support leaders who want reviewable behavior before launch.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A support agent with retrieval, source constraints, fallback copy, handoff routing, retention options, and implementation docs for your team.",
    faq: [
      {
        q: "Does source-grounded mean zero wrong answers?",
        a: "No AI system can promise zero mistakes. The goal is to reduce guessing by limiting answers to approved sources and escalating when confidence is low.",
      },
      {
        q: "Can we delete logs?",
        a: "Yes. Retention can be minimized, configured to a fixed window, or handed to your own infrastructure depending on the deployment.",
      },
    ],
  },
] satisfies SeoLandingPageContent[];

export const seoLandingPagesBySlug = Object.fromEntries(
  seoLandingPages.map((page) => [page.slug, page]),
) as Record<string, SeoLandingPageContent>;
