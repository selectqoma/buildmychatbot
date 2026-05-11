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
    title: "Intercom alternative for AI enquiry workflows | BuildMyChatbot",
    description:
      "A done-for-you alternative when you need AI chat, lead qualification, handoff, and follow-up without adopting another platform.",
    eyebrow: "Intercom alternative",
    h1: "Install an enquiry workflow, not another tool to manage.",
    intro:
      "BuildMyChatbot designs and installs the AI website assistant, qualification flow, handoff, and follow-up around your business.",
    comparisonTitle: "Where this differs",
    comparison: [
      "We implement the workflow around your website, services, and sales process.",
      "Serious enquiries are routed to your team with clean context.",
      "Follow-up can be automated after questions, quote requests, or abandoned booking steps.",
      "You receive implementation assets and handover documentation.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Service businesses that get valuable website enquiries.",
      "Teams that want better intake before the first call.",
      "Companies that want AI assistance without a new self-serve platform.",
    ],
    proofTitle: "What we deploy",
    proof:
      "An AI website assistant connected to approved content, lead qualification, human handoff, follow-up, and conversation insights.",
    faq: [
      {
        q: "Do we need to replace our CRM?",
        a: "No. Handoff can go to email, Slack, CRM, Airtable, Notion, or webhook depending on scope.",
      },
      {
        q: "Can it qualify visitors before booking?",
        a: "Yes. It can capture budget, timeline, service need, decision stage, and preferred next step.",
      },
    ],
  },
  {
    slug: "zendesk-ai-alternative",
    title: "AI enquiry workflow implementation | BuildMyChatbot",
    description:
      "Done-for-you AI website assistant, smart intake, handoff, and automated follow-up for service businesses.",
    eyebrow: "AI enquiry workflow",
    h1: "Turn buyer questions into qualified enquiries.",
    intro:
      "We install a controlled AI enquiry system that answers from your approved website content and routes useful leads to your team.",
    comparisonTitle: "What the system handles",
    comparison: [
      "Pricing, process, timing, service-fit, booking, and trust questions.",
      "Qualification questions before sending a lead to your team.",
      "Handoff to email, Slack, CRM, Airtable, Notion, or webhook.",
      "Follow-up after an enquiry, quote request, or abandoned booking step.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Agencies and consultants.",
      "Training and education businesses.",
      "Clinics, private practices, and specialist local services.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A branded AI website assistant, custom conversation flow, lead handoff, follow-up emails, logs, insights, and 30-day tuning.",
    faq: [
      {
        q: "Can it avoid sensitive answers?",
        a: "Yes. Risky, unclear, account-specific, medical, or legal questions can be routed to humans instead of answered automatically.",
      },
      {
        q: "Does it need documentation?",
        a: "No. We can start with your website, FAQs, service pages, and existing sales answers.",
      },
    ],
  },
  {
    slug: "ai-support-agent-b2b-saas",
    title: "AI enquiry assistant for service websites | BuildMyChatbot",
    description:
      "Install an AI website assistant that answers buyer questions, qualifies visitors, and sends useful enquiries to your team.",
    eyebrow: "AI enquiry assistant",
    h1: "An AI website assistant that qualifies before it hands off.",
    intro:
      "If your website visitors ask the same pricing, process, timing, and fit questions, BuildMyChatbot turns those conversations into structured enquiries.",
    comparisonTitle: "What it does well",
    comparison: [
      "Answers from approved website content and FAQs.",
      "Asks qualification questions before routing a serious enquiry.",
      "Captures budget, timeline, service need, and decision stage.",
      "Shows what visitors ask before they enquire or book.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Service businesses where each enquiry is valuable.",
      "Teams replying manually to vague contact forms.",
      "Founders who want faster response without another SaaS tool.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A branded assistant, enquiry flow, lead summary, handoff destination, follow-up flow, analytics, and handover documentation.",
    faq: [
      {
        q: "Can it book calls?",
        a: "Yes. It can send visitors to your booking link or capture details and send your team a summary.",
      },
      {
        q: "Can it answer in multiple languages?",
        a: "Yes. The assistant can be configured for English, French, Dutch, and other target languages depending on your market.",
      },
    ],
  },
  {
    slug: "source-grounded-ai-support",
    title: "Source-grounded AI website assistant | BuildMyChatbot",
    description:
      "A source-grounded AI website assistant that answers from approved content, qualifies enquiries, and escalates when unsure.",
    eyebrow: "Source-grounded AI",
    h1: "AI answers from your approved content, not guesswork.",
    intro:
      "BuildMyChatbot uses retrieval, approved source sets, uncertainty behavior, and human handoff so the assistant stays useful and controlled.",
    comparisonTitle: "Guardrails included",
    comparison: [
      "Approved website pages, FAQs, service pages, and sales answers.",
      "Escalation when no relevant source is found.",
      "Handoff for risky, unclear, or sensitive questions.",
      "Logs and insights for questions that block conversion.",
    ],
    bestForTitle: "Best fit",
    bestFor: [
      "Businesses that need controlled AI behavior.",
      "Teams worried about hallucinations or privacy.",
      "Service businesses that want enquiries, not random chatbot answers.",
    ],
    proofTitle: "What we deploy",
    proof:
      "A source-grounded assistant with retrieval tuning, handoff routing, retention options, deployment configs, and review logs.",
    faq: [
      {
        q: "Does source-grounded mean zero wrong answers?",
        a: "No AI system can promise zero mistakes. The goal is to reduce guessing by limiting answers to approved sources and routing uncertainty to humans.",
      },
      {
        q: "Can we control logs?",
        a: "Yes. Retention can be minimized, configured to a fixed window, or handed to your own infrastructure depending on the deployment.",
      },
    ],
  },
] satisfies SeoLandingPageContent[];

export const seoLandingPagesBySlug = Object.fromEntries(
  seoLandingPages.map((page) => [page.slug, page]),
) as Record<string, SeoLandingPageContent>;
