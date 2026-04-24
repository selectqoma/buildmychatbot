"use client";

import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatsIncluded />
      <LiveDemo />
      <Pricing />
      <FAQ />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-28 md:pt-36 md:pb-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/40 via-white to-white" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-1.5 text-xs font-medium text-accent mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Taking on 2 new clients
        </div>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl animate-fade-in-up">
          Your AI support agent,
          <br />
          <span className="text-accent">deployed in 2 weeks.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl max-w-2xl mx-auto animate-fade-in-up-delay">
          We build a custom chatbot trained on your docs that handles 40-60% of
          tier-1 customer questions. Fixed price. No platform lock-in.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            Book a 15-min demo
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            See it work on your docs
          </a>
        </div>
      </div>

      {/* Chat mockup */}
      <div className="relative mx-auto mt-16 max-w-lg animate-fade-in-up-delay-2">
        <ChatMockup />
      </div>
    </section>
  );
}

/* ─── Chat Mockup ─── */
function ChatMockup() {
  const [step, setStep] = useState(0);

  const messages = [
    { role: "user" as const, text: "How do I export my data?" },
    {
      role: "bot" as const,
      text: "Go to Settings > Data > Export. You can export as CSV or JSON. The export includes all your workspace data from the last 90 days.",
    },
    { role: "user" as const, text: "Can I export older data too?" },
    {
      role: "bot" as const,
      text: "Yes! Under the same Export page, toggle \"Include archived data\" to export your full history. For accounts with 10k+ records, the export runs in the background and you'll get an email when it's ready.",
    },
  ];

  // Auto-play the first two messages
  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => setStep((s) => s + 1), step === 0 ? 800 : 1500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const visibleMessages = messages.slice(0, step);

  return (
    <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface/80">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-muted font-mono">support-agent</span>
        <span className="ml-auto text-[10px] text-muted/60 font-mono">live</span>
      </div>
      <div className="p-5 space-y-3 min-h-[220px]">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex animate-slide-in ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent text-white rounded-br-md"
                  : "bg-surface text-foreground border border-border rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {step >= 2 && step < messages.length && (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="text-xs text-accent hover:text-accent-dark transition-colors cursor-pointer font-medium"
          >
            Next message...
          </button>
        )}
        {step >= messages.length && (
          <button
            onClick={() => setStep(0)}
            className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Problem ─── */
function Problem() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3">The problem</p>
        <h2 className="text-2xl font-bold md:text-3xl">Sound familiar?</h2>
        <div className="mt-10 space-y-6">
          {[
            {
              text: "Your support team answers the same 20 questions every day",
              detail: "Repetitive tickets drain your team and slow response times.",
            },
            {
              text: "Your help center exists but customers don't read it",
              detail: "The information is there. Customers just can't find it fast enough.",
            },
            {
              text: "Generic chatbots feel robotic and make things worse",
              detail: "Canned responses frustrate users and escalate tickets instead of resolving them.",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface/50 p-5"
            >
              <div className="mt-0.5 h-2 w-2 rounded-full bg-accent shrink-0" />
              <div>
                <p className="font-medium">{item.text}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "We ingest your docs",
      desc: "Help center, FAQ, product pages. Up to 500 pages.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "We build and tune the agent",
      desc: "Answers in your tone, escalates when unsure.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "We deploy to your site",
      desc: "Chat widget, Slack, or email integration.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-accent mb-3">Process</p>
        <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative rounded-xl border border-border bg-white p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent-light text-accent">
                  {s.icon}
                </div>
                <span className="text-3xl font-bold text-border">{s.num}</span>
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-border z-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What's Included ─── */
function WhatsIncluded() {
  const included = [
    "Custom agent trained on your content",
    "Chat widget OR Slack/email integration",
    "Human escalation logic",
    "Basic analytics dashboard",
    "2 weeks delivery + 2 weeks support",
  ];

  const optional = [
    "Monitoring & tuning",
    "Monthly content re-ingestion",
    "New question category handling",
  ];

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-accent mb-3">Deliverables</p>
        <h2 className="text-2xl font-bold md:text-3xl">What&apos;s included</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-accent/20 bg-accent-light/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-5">
              Setup &mdash; &euro;3,500
            </p>
            <ul className="space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">
              Optional &mdash; &euro;500/month
            </p>
            <ul className="space-y-3.5">
              {optional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <PlusIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="w-5 h-5 text-muted shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

/* ─── Live Demo ─── */
function LiveDemo() {
  return (
    <section id="demo" className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-medium text-accent mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Live demo
        </div>
        <h2 className="text-2xl font-bold md:text-3xl">
          This agent was built in 3 hours on Linear&apos;s public docs
        </h2>
        <p className="mt-4 text-muted">
          Type a real question below and see a real answer.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-white p-1 shadow-lg shadow-black/5">
          <div className="rounded-xl bg-surface p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-foreground">Demo coming soon</p>
              <p className="mt-1 text-xs text-muted">
                Embedded chatbot will appear here once deployed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-lg">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-accent mb-3">Pricing</p>
          <h2 className="text-2xl font-bold md:text-3xl">Simple, fixed pricing</h2>
          <p className="mt-2 text-muted text-sm">No surprises, no hidden fees.</p>
        </div>
        <div className="rounded-2xl border-2 border-accent/20 bg-white p-8 shadow-lg shadow-accent/5">
          <div className="space-y-5">
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Setup fee</span>
              <div className="text-right">
                <span className="text-3xl font-bold">&euro;3,500</span>
                <span className="text-muted text-sm ml-1">one-time</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Optional ongoing</span>
              <div className="text-right">
                <span className="text-xl font-semibold">&euro;500</span>
                <span className="text-muted text-sm ml-1">/month</span>
              </div>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Delivery</span>
              <span className="font-semibold">2 weeks</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">After delivery</span>
              <span className="text-sm text-muted">You own everything. No lock-in.</span>
            </div>
          </div>
          <a
            href="#book"
            className="mt-8 block w-full text-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg transition-all"
          >
            Book a 15-min demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
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

  return (
    <section className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3">FAQ</p>
        <h2 className="text-2xl font-bold md:text-3xl">Common questions</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-xl border bg-white transition-colors ${open ? "border-accent/20" : "border-border"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left p-5 cursor-pointer"
      >
        <span className="text-sm font-semibold pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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

/* ─── About ─── */
function About() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-light text-accent shrink-0 text-2xl font-bold">
            B
          </div>
          <div>
            <p className="text-sm font-medium text-accent mb-3">About</p>
            <h2 className="text-2xl font-bold md:text-3xl">Built by an engineer, not an agency</h2>
            <p className="mt-4 text-muted leading-relaxed">
              I&apos;m an AI engineer building production-grade chatbots for SaaS companies.
              I take on 2 clients at a time to keep quality high. Every agent is built
              custom: no templates, no white-label platforms, no shortcuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section id="book" className="px-6 py-24 bg-gradient-to-b from-accent-light/30 to-white border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Want a demo on your own docs?
        </h2>
        <p className="mt-2 text-muted">Free, no call required.</p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 max-w-md mx-auto"
        >
          <div className="space-y-3">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
            />
            <input
              type="url"
              name="url"
              placeholder="https://docs.yoursite.com"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg transition-all"
            >
              Get a free demo
            </button>
          </div>
        </form>

        <div className="mt-12 flex items-center gap-4 justify-center">
          <hr className="flex-1 border-border max-w-[60px]" />
          <span className="text-xs text-muted">or</span>
          <hr className="flex-1 border-border max-w-[60px]" />
        </div>

        <div className="mt-6">
          <a
            href="https://cal.com/YOUR_HANDLE/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            Book a 15-min call instead
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 bg-surface/50">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <span className="font-medium">buildmychatbot.app</span>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a
            href="mailto:hello@buildmychatbot.app"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
