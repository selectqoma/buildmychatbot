"use client";

import { useState } from "react";

const faqs = [
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

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-xl border bg-white transition-colors ${
        open ? "border-accent/20" : "border-border"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left p-5 cursor-pointer"
      >
        <span className="text-sm font-semibold pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-sm text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="px-6 py-20 bg-surface border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3">FAQ</p>
        <h2 className="text-2xl font-bold md:text-3xl">Common questions</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
