import { HeroChatMockup } from "@/components/hero-chat-mockup";
import { FAQSection } from "@/components/faq-section";
import { CTAForm } from "@/components/cta-form";
import { LogoMark, LogoWordmark } from "@/components/logo";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Proof />
        <Pricing />
        <FAQSection />
        <About />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

/* ─── Top Nav ─── */
function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="/" className="inline-flex items-center" aria-label="buildmychatbot home">
          <LogoWordmark size={22} />
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#pricing"
            className="hidden sm:inline text-muted hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hidden sm:inline text-muted hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <a
            href="#book"
            className="rounded-md bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/40 via-white to-white" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-1.5 text-xs font-medium text-accent mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          For SaaS teams drowning in tier-1 tickets
        </div>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl animate-fade-in-up">
          Your AI support agent,
          <br />
          <span className="text-accent">deployed in 2 weeks.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl max-w-2xl mx-auto animate-fade-in-up-delay">
          We build a custom chatbot trained on your docs that handles 40&ndash;60% of
          tier-1 questions. Fixed price. No platform lock-in.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            Book a 15-min demo
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            Get a demo on your docs
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-lg animate-fade-in-up-delay-2">
        <HeroChatMockup />
      </div>
    </section>
  );
}

/* ─── Problem ─── */
function Problem() {
  const items = [
    {
      text: "Your team answers the same 20 questions every day",
      detail: "Repetitive tickets drain the team and slow response times.",
    },
    {
      text: "Your help center exists but customers don't read it",
      detail: "The answers are there — customers just can't find them fast enough.",
    },
    {
      text: "Generic chatbots feel robotic and escalate everything",
      detail: "Canned replies frustrate users and make the ticket volume worse, not better.",
    },
  ];

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3">The problem</p>
        <h2 className="text-2xl font-bold md:text-3xl">Sound familiar?</h2>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface/50 p-5"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
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
            <div key={s.num} className="relative rounded-xl border border-border bg-white p-6">
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

/* ─── Proof / Capabilities ─── */
function Proof() {
  const items = [
    {
      stat: "40–60%",
      label: "Tier-1 deflection",
      detail: "Typical range for agents trained on well-maintained docs.",
    },
    {
      stat: "50+",
      label: "Languages",
      detail: "Answers in the customer's language even when docs are English-only.",
    },
    {
      stat: "Confident-only",
      label: "Escalation",
      detail: "Agent hands off to a human when confidence is low — no made-up answers.",
    },
    {
      stat: "Yours",
      label: "Full ownership",
      detail: "Source code, prompts, and deployment configs handed over at delivery.",
    },
  ];

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-accent mb-3">What it actually does</p>
        <h2 className="text-2xl font-bold md:text-3xl">Grounded answers, safe escalation</h2>
        <p className="mt-3 text-muted max-w-2xl">
          The agent only answers from your indexed content. If the answer isn&apos;t
          there, it says so and hands the conversation to a human.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="rounded-xl border border-border bg-white p-5">
              <p className="text-2xl font-bold text-accent">{it.stat}</p>
              <p className="mt-2 text-sm font-semibold">{it.label}</p>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{it.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing (merged) ─── */
function Pricing() {
  const included = [
    "Custom agent trained on your content (up to 500 pages)",
    "Chat widget, Slack, or email integration",
    "Human escalation on low confidence",
    "Basic analytics dashboard",
    "2 weeks delivery + 2 weeks of tuning support",
    "Full source code and deployment handover",
  ];
  const optional = [
    "Ongoing monitoring and prompt tuning",
    "Monthly content re-ingestion",
    "New question-category handling",
  ];

  return (
    <section id="pricing" className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent mb-3">Pricing</p>
          <h2 className="text-2xl font-bold md:text-3xl">Simple, fixed pricing</h2>
          <p className="mt-3 text-muted text-sm">One setup fee. Optional monthly support. No lock-in.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl border-2 border-accent/20 bg-white p-7 shadow-lg shadow-accent/5">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Setup</p>
                <div className="mt-2">
                  <span className="text-4xl font-bold">&euro;3,500</span>
                  <span className="text-muted text-sm ml-2">one-time</span>
                </div>
              </div>
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                2-week delivery
              </span>
            </div>
            <ul className="mt-7 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-8 block w-full text-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg transition-all"
            >
              Book a 15-min demo
            </a>
          </div>

          <div className="md:col-span-2 rounded-2xl border border-border bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Optional ongoing</p>
            <div className="mt-2">
              <span className="text-3xl font-bold">&euro;500</span>
              <span className="text-muted text-sm ml-1">/month</span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Keep the agent sharp as your product changes. Month-to-month, cancel anytime.
            </p>
            <ul className="mt-6 space-y-3">
              {optional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckIcon />
                  <span>{item}</span>
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

/* ─── About ─── */
function About() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0 rounded-2xl bg-white p-3 shadow-md shadow-accent/10 ring-1 ring-border">
            <LogoMark size={44} />
          </div>
          <div>
            <p className="text-sm font-medium text-accent mb-3">About</p>
            <h2 className="text-2xl font-bold md:text-3xl">Custom-built, not templated</h2>
            <p className="mt-4 text-muted leading-relaxed">
              We&apos;re a small team of engineers who&apos;ve shipped support
              tooling at growth-stage SaaS companies. Every agent we build is
              custom: no white-label platform, no shared tenant, no template.
              We handle ingestion, tuning, and deployment — then hand you the
              keys.
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
        <h2 className="text-2xl font-bold md:text-3xl">Want a demo on your own docs?</h2>
        <p className="mt-2 text-muted">Free, no call required. We&apos;ll get back to you within 24 hours.</p>

        <CTAForm />

        <div className="mt-12 flex items-center gap-4 justify-center">
          <hr className="flex-1 border-border max-w-[60px]" />
          <span className="text-xs text-muted">or</span>
          <hr className="flex-1 border-border max-w-[60px]" />
        </div>

        <div className="mt-6">
          <a
            href="mailto:hello@buildmychatbot.app"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            Send us an email
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
        <LogoWordmark size={18} />
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          <a href="mailto:hello@buildmychatbot.app" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
