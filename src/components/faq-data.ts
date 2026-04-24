export const faqs = [
  {
    q: "How is this different from Intercom Fin / Zendesk AI?",
    a: "Those are platform add-ons tied to their ecosystem. This is a standalone agent you own, built specifically on your content, deployable anywhere.",
  },
  {
    q: "What LLM do you use?",
    a: "We use the best model for the job, typically Claude or GPT-4o. You can switch models anytime since you own the deployment.",
  },
  {
    q: "Where is my data hosted?",
    a: "Your docs are processed and stored in your own infrastructure or a dedicated cloud instance in the EU. Nothing shared.",
  },
  {
    q: "What if it gives a wrong answer?",
    a: "The agent is configured to escalate to a human when confidence is low. We tune the threshold during the 2-week support period.",
  },
  {
    q: "Can it integrate with my CRM?",
    a: "Yes. We support Slack, email, and common CRM webhooks. Custom integrations are scoped during discovery.",
  },
  {
    q: "Who owns the code and deployment?",
    a: "You do. Full source code, deployment configs, and documentation are handed over at delivery.",
  },
  {
    q: "What languages are supported?",
    a: "The agent supports 50+ languages out of the box. If your docs are in English, it can still answer in French, German, Dutch, etc.",
  },
  {
    q: "How do you handle hallucinations?",
    a: "The agent only answers from your indexed content. If no relevant source exists, it says so and escalates.",
  },
];
