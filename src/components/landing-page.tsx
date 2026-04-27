import { HeroChatMockup } from "@/components/hero-chat-mockup";
import { FAQSection } from "@/components/faq-section";
import { CTAForm } from "@/components/cta-form";
import { SiteChatWidget } from "@/components/site-chat-widget";
import Image from "next/image";
import Link from "next/link";
import { createJsonLd } from "@/lib/seo";
import {
  localeLabels,
  localeNames,
  localePaths,
  locales,
  type Locale,
  siteContent,
  type SiteContent,
} from "@/lib/site-content";

export function LandingPage({ content }: { content: SiteContent }) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createJsonLd(content)).replace(/</g, "\\u003c"),
        }}
      />
      <Hero content={content} />
      <ProofTranscript content={content.transcript} />
      <Problem content={content.problem} />
      <HowItWorks content={content.process} />
      <WhatsIncluded content={content.deliverables} />
      <SecurityAndOwnership content={content.confidence} />
      <AnalyticsPreview content={content.analytics} />
      <Pricing content={content.commercials} />
      <FAQSection content={content.faq} />
      <About content={content} />
      <FinalCTA content={content} />
      <Footer content={content} />
      <SiteChatWidget locale={content.locale} />
    </main>
  );
}

/* ─── Hero ─── */
function Hero({ content }: { content: SiteContent }) {
  return (
    <section className="relative px-6 pt-10 pb-24 md:pt-14 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_62%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-20 flex items-center justify-between">
          <Logo locale={content.locale} label={content.common.homeLabel} />
          <div className="flex items-center gap-3">
            <LanguageSwitcher current={content.locale} />
            <a
              href="#book"
              className="hidden rounded-lg border border-border bg-white/80 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-all hover:border-accent/30 hover:bg-white sm:inline-flex"
            >
              {content.hero.navCta}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-1.5 text-xs font-medium text-accent mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {content.hero.badge}
        </div>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl animate-fade-in-up">
          {content.hero.titleTop}
          <br />
          <span className="text-accent">{content.hero.titleAccent}</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl max-w-2xl mx-auto">
          {content.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            {content.hero.primaryCta}
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
            href="mailto:hello@buildmychatbot.app"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            {content.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-lg animate-fade-in-up-delay-2">
        <HeroChatMockup content={content.heroChat} />
      </div>

      <div className="relative mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 text-center text-xs font-medium text-muted sm:grid-cols-3">
        {content.hero.trustSignals.map((signal) => (
          <span key={signal}>{signal}</span>
        ))}
      </div>
    </section>
  );
}

function Logo({
  compact = false,
  locale,
  label,
}: {
  compact?: boolean;
  locale: Locale;
  label: string;
}) {
  return (
    <Link
      href={localePaths[locale]}
      className="inline-flex items-center"
      aria-label={label}
    >
      <Image
        src="/buildmychatbot-logo-transparent.png"
        alt="buildmychatbot.app"
        width={1350}
        height={316}
        priority={!compact}
        className={`h-auto w-auto object-contain ${
          compact
            ? "max-h-10 max-w-[260px]"
            : "max-h-14 max-w-[min(72vw,390px)]"
        }`}
      />
    </Link>
  );
}

function LogoMark({ locale, label }: { locale: Locale; label: string }) {
  return (
    <Link
      href={localePaths[locale]}
      className="inline-flex items-center"
      aria-label={label}
    >
      <Image
        src="/buildmychatbot-logo-transparent.png"
        alt="buildmychatbot.app"
        width={1350}
        height={316}
        className="h-auto max-h-14 w-auto max-w-[min(72vw,360px)] object-contain"
      />
    </Link>
  );
}

function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <nav
      aria-label={siteContent[current].common.languageLabel}
      className="flex rounded-lg border border-border bg-white/80 p-1 text-xs font-semibold shadow-sm backdrop-blur"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localePaths[locale]}
          hrefLang={locale}
          aria-label={localeNames[locale]}
          className={`rounded-md px-2.5 py-1.5 transition-colors ${
            locale === current
              ? "bg-accent text-white"
              : "text-muted hover:bg-accent-light/40 hover:text-foreground"
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}

/* ─── Proof Transcript ─── */
function ProofTranscript({
  content,
}: {
  content: SiteContent["transcript"];
}) {
  return (
    <section className="border-t border-border bg-white px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium text-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {content.body}
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="rounded-lg border border-border bg-surface/60 p-4">
              <strong className="text-foreground">{content.beforeLabel}</strong>{" "}
              {content.before}
            </div>
            <div className="rounded-lg border border-[#99f6e4] bg-[#f0fdfa] p-4">
              <strong className="text-foreground">{content.afterLabel}</strong>{" "}
              {content.after}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-black/5">
          <div className="rounded-xl border border-border bg-white">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#14b8a6]" />
              <span className="text-xs font-semibold">{content.header}</span>
              <span className="ml-auto rounded-full bg-[#ecfeff] px-2 py-1 text-[10px] font-semibold text-[#0f766e]">
                {content.pill}
              </span>
            </div>
            <div className="space-y-3 p-4">
              {content.messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === "Customer" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "Customer"
                        ? "rounded-br-md bg-accent text-white"
                        : "rounded-bl-md border border-border bg-surface text-foreground"
                    }`}
                  >
                    <p>{message.text}</p>
                    {"source" in message && (
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
                        <span className="rounded-full bg-white px-2 py-1 text-muted">
                          {message.source}
                        </span>
                        <span className="rounded-full bg-white px-2 py-1 text-[#0f766e]">
                          {message.confidence}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem ─── */
function Problem({ content }: { content: SiteContent["problem"] }) {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-accent mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">{content.title}</h2>
        <div className="mt-10 space-y-6">
          {content.items.map((item) => (
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
function HowItWorks({ content }: { content: SiteContent["process"] }) {
  const icons = [
    (
        <svg
          key="docs"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
    ),
    (
        <svg
          key="tune"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
    ),
    (
        <svg
          key="deploy"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
    ),
  ];

  return (
    <section className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-accent mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">{content.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.steps.map((s, i) => (
            <div
              key={s.num}
              className="relative rounded-xl border border-border bg-white p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent-light text-accent">
                  {icons[i]}
                </div>
                <span className="text-3xl font-bold text-border">{s.num}</span>
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {s.desc}
              </p>
              {i < content.steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-border z-10">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
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
function WhatsIncluded({
  content,
}: {
  content: SiteContent["deliverables"];
}) {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium text-accent mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">
          {content.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-accent/20 bg-accent-light/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-5">
              {content.scopedBuild}
            </p>
            <ul className="space-y-3.5">
              {content.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">
              {content.carePlan}
            </p>
            <ul className="space-y-3.5">
              {content.optional.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <PlusIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {content.integrations.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-white px-4 py-3 text-center text-sm font-medium"
              >
                {item}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted shrink-0 mt-0.5"
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
  );
}

/* ─── Security & Ownership ─── */
function SecurityAndOwnership({
  content,
}: {
  content: SiteContent["confidence"];
}) {
  return (
    <section className="border-t border-border bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {content.body}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.points.map((point) => (
            <div key={point.title} className="rounded-xl border border-border p-5">
              <h3 className="font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Analytics Preview ─── */
function AnalyticsPreview({
  content,
}: {
  content: SiteContent["analytics"];
}) {
  const traffic = [142, 168, 181, 196, 174, 92, 78, 188, 214, 232, 248, 226, 118, 96];
  const rawMax = Math.max(...traffic);
  const tickStep = 50;
  const max = Math.ceil(rawMax / tickStep) * tickStep;
  const yTicks = [max, Math.round(max / 2), 0];
  const topMax = Math.max(...content.topics.map((t) => t.count));

  const w = 520;
  const h = 140;
  const pad = 8;
  const stepX = (w - pad * 2) / (traffic.length - 1);
  const points = traffic.map((v, i) => {
    const x = pad + i * stepX;
    const y = h - pad - ((v / max) * (h - pad * 2));
    return { x, y, v };
  });
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${h - pad} L ${points[0].x.toFixed(1)} ${h - pad} Z`;

  return (
    <section className="border-t border-border bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-accent">{content.eyebrow}</p>
          <h2 className="text-2xl font-bold md:text-3xl">{content.title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{content.body}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5">
          {/* Mock browser chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-surface/80 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-muted">app.buildmychatbot.app/dashboard</span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {content.hostedBadge}
            </span>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-4">
            {content.kpis.map((k) => {
              const positive = k.delta.startsWith("+");
              const negative = k.delta.startsWith("-");
              return (
                <div key={k.label} className="rounded-xl border border-border bg-white p-4">
                  <p className="text-xs text-muted">{k.label}</p>
                  <p className="mt-1.5 text-2xl font-bold tracking-tight">{k.value}</p>
                  <p
                    className={`mt-1 text-xs font-medium ${
                      positive
                        ? "text-emerald-600"
                        : negative
                          ? "text-rose-600"
                          : "text-muted"
                    }`}
                  >
                    {k.delta}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-5 px-5 pb-5 md:grid-cols-5">
            {/* Traffic chart */}
            <div className="flex flex-col rounded-xl border border-border bg-white p-5 md:col-span-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold">{content.trafficTitle}</h3>
                <span className="text-xs text-muted">{content.trafficCaption}</span>
              </div>
              <div className="mt-4 flex flex-1 gap-2">
                <div className="flex flex-col justify-between py-1 text-[10px] font-mono text-muted/70 tabular-nums">
                  {yTicks.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="flex flex-1 flex-col">
                <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full flex-1" preserveAspectRatio="none" role="img" aria-label={content.trafficTitle}>
                  <defs>
                    <linearGradient id="aArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((g) => (
                    <line
                      key={g}
                      x1={pad}
                      x2={w - pad}
                      y1={pad + (h - pad * 2) * g}
                      y2={pad + (h - pad * 2) * g}
                      stroke="var(--border)"
                      strokeDasharray="2 4"
                    />
                  ))}
                  <path d={areaPath} fill="url(#aArea)" />
                  <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 3.5 : 1.8} fill="var(--accent)" />
                  ))}
                </svg>
                <div className="mt-2 flex justify-between text-[10px] font-mono text-muted/70">
                  {content.weekdays.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="rounded-xl border border-border bg-white p-5 md:col-span-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold">{content.topicsTitle}</h3>
                <span className="text-[10px] text-muted">{content.topicsCaption}</span>
              </div>
              <div className="mt-4 space-y-3">
                {content.topics.map((t) => {
                  const pct = Math.round((t.count / topMax) * 100);
                  return (
                    <div key={t.name}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="font-medium">{t.name}</span>
                        <span className="font-mono text-muted">{t.count.toLocaleString()}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Escalations */}
          <div className="border-t border-border bg-surface/30 px-5 py-5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">{content.escalationsTitle}</h3>
              <span className="text-[10px] text-muted">{content.escalationsCaption}</span>
            </div>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-white">
              {content.escalations.map((e, i) => (
                <li key={i} className="flex items-start gap-3 px-4 py-3">
                  <span className="mt-1 inline-flex h-5 shrink-0 items-center rounded-full bg-amber-50 px-2 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                    Low
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm">{e.question}</p>
                    <p className="mt-0.5 text-xs text-muted">{e.reason}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing({ content }: { content: SiteContent["commercials"] }) {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-accent mb-3">
            {content.eyebrow}
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            {content.title}
          </h2>
          <p className="mt-2 text-muted text-sm">
            {content.body}
          </p>
        </div>
        <div className="rounded-2xl border-2 border-accent/20 bg-white p-8 shadow-lg shadow-accent/5">
          <div className="space-y-5">
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">{content.buildLabel}</span>
              <div className="text-right">
                <span className="text-xl font-semibold">
                  {content.buildValue}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">{content.supportLabel}</span>
              <div className="text-right">
                <span className="text-xl font-semibold">
                  {content.supportValue}
                </span>
              </div>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">{content.deliveryLabel}</span>
              <span className="font-semibold">{content.deliveryValue}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted text-sm">{content.afterLabel}</span>
              <span className="text-sm text-muted">
                {content.afterValue}
              </span>
            </div>
          </div>
          <a
            href="#book"
            className="mt-8 block w-full text-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg transition-all"
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About({ content }: { content: SiteContent }) {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <LogoMark
              locale={content.locale}
              label={content.common.homeLabel}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-accent mb-3">
              {content.about.eyebrow}
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              {content.about.title}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {content.about.body}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted sm:grid-cols-3">
              {content.about.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-lg border border-border bg-white p-3"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA({ content }: { content: SiteContent }) {
  return (
    <section
      id="book"
      className="px-6 py-24 bg-gradient-to-b from-accent-light/30 to-white border-t border-border"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          {content.finalCta.title}
        </h2>
        <p className="mt-2 text-muted">{content.finalCta.subtitle}</p>

        <CTAForm content={content.form} />

        <div className="mt-12 flex items-center gap-4 justify-center">
          <hr className="flex-1 border-border max-w-[60px]" />
          <span className="text-xs text-muted">{content.finalCta.divider}</span>
          <hr className="flex-1 border-border max-w-[60px]" />
        </div>

        <div className="mt-6">
          <a
            href="mailto:hello@buildmychatbot.app"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground hover:border-accent/30 hover:bg-accent-light/30 transition-all"
          >
            {content.finalCta.emailCta}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-border px-6 py-8 bg-surface/50">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <Logo
          compact
          locale={content.locale}
          label={content.common.homeLabel}
        />
        <div className="flex flex-wrap items-center justify-center gap-5">
          <LanguageSwitcher current={content.locale} />
          <a
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            {content.common.privacyLabel}
          </a>
          <a href="/terms" className="hover:text-foreground transition-colors">
            {content.common.termsLabel}
          </a>
          <a
            href="mailto:hello@buildmychatbot.app"
            className="hover:text-foreground transition-colors"
          >
            {content.common.emailLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
