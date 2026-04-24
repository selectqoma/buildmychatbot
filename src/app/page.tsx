"use client";

import { useState } from "react";

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
    <section className="px-6 pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium tracking-wide uppercase text-accent animate-fade-in-up">
          buildmychatbot.app
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl animate-fade-in-up">
          Your AI support agent,
          <br />
          deployed in 2 weeks.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl max-w-2xl mx-auto animate-fade-in-up-delay">
          We build a custom chatbot trained on your docs that handles 40-60% of
          tier-1 customer questions. Fixed price. No platform lock-in.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-dark transition-colors"
          >
            Book a 15-min demo
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
          >
            See it work on your docs
          </a>
        </div>
      </div>

      {/* Animated chat mockup */}
      <div className="mx-auto mt-16 max-w-lg animate-fade-in-up-delay-2">
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

  const visibleMessages = messages.slice(0, step);

  return (
    <div className="rounded-xl border border-border bg-white shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-muted font-mono">support-agent</span>
      </div>
      <div className="p-4 space-y-3 min-h-[200px]">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent text-white"
                  : "bg-surface text-foreground border border-border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {step < messages.length && (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="text-xs text-accent hover:text-accent-dark transition-colors cursor-pointer"
          >
            {step === 0 ? "Start conversation..." : "Next message..."}
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
    <section className="px-6 py-20 bg-surface">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">Sound familiar?</h2>
        <ul className="mt-8 space-y-4">
          {[
            "Your support team answers the same 20 questions every day",
            "Your help center exists but customers don't read it",
            "Generic chatbots feel robotic and make things worse",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted">
              <span className="mt-1 text-accent text-xl leading-none">&mdash;</span>
              {item}
            </li>
          ))}
        </ul>
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
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "We build and tune the agent",
      desc: "Answers in your tone, escalates when unsure.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col">
              <div className="mb-4">{s.icon}</div>
              <p className="text-xs font-mono text-muted mb-1">{s.num}</p>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted text-sm">{s.desc}</p>
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
    <section className="px-6 py-20 bg-surface">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold md:text-3xl">What&apos;s included</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
              Setup &mdash; &euro;3,500
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted mb-4">
              Optional &mdash; &euro;500/month
            </p>
            <ul className="space-y-3">
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
    <section id="demo" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-accent mb-2">Try it yourself</p>
        <h2 className="text-2xl font-bold md:text-3xl">
          This agent was built in 3 hours on Linear&apos;s public docs
        </h2>
        <p className="mt-4 text-muted">
          Type a real question below and see a real answer.
        </p>
        <div className="mt-10 rounded-xl border border-border bg-surface p-8 min-h-[300px] flex items-center justify-center">
          <p className="text-muted text-sm">
            {/* Replace this with your embedded chatbot iframe */}
            Demo chatbot will be embedded here.
            <br />
            <span className="text-xs">
              Replace with an iframe pointing to your deployed agent.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section className="px-6 py-20 bg-surface">
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Setup</span>
              <span className="text-2xl font-bold">&euro;3,500</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Optional ongoing</span>
              <span className="text-lg font-semibold">&euro;500/month</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">Delivery</span>
              <span className="font-semibold">2 weeks</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted">
            After delivery, you own the deployment. No lock-in, no recurring fees unless you want ongoing support.
          </p>
          <a
            href="#book"
            className="mt-6 block w-full text-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
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
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
        <div className="mt-10 divide-y divide-border">
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
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <span className="text-sm font-semibold pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-muted shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      {open && (
        <p className="mt-3 text-sm text-muted leading-relaxed">{a}</p>
      )}
    </div>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section className="px-6 py-20 bg-surface">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold md:text-3xl">About</h2>
        <p className="mt-6 text-muted leading-relaxed">
          I&apos;m an AI engineer building production-grade chatbots for SaaS companies.
          I take on 2 clients at a time to keep quality high. Every agent is built
          custom: no templates, no white-label platforms, no shortcuts.
        </p>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section id="book" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Want a demo on your own docs?
        </h2>
        <p className="mt-2 text-muted">Free, no call required.</p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          />
          <input
            type="url"
            name="url"
            placeholder="https://docs.yoursite.com"
            className="flex-1 rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors shrink-0"
          >
            Get a free demo
          </button>
        </form>

        <div className="mt-12">
          <p className="text-sm text-muted mb-4">Or book a call directly:</p>
          {/* Replace with your Cal.com or Calendly embed */}
          <a
            href="https://cal.com/YOUR_HANDLE/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <span>buildmychatbot.app</span>
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
