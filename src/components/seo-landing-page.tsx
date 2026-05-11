import Link from "next/link";
import type { SeoLandingPageContent } from "@/lib/seo-pages";

export function SeoLandingPage({ page }: { page: SeoLandingPageContent }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.title,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: "BuildMyChatbot",
          url: "https://buildmychatbot.app",
        },
        serviceType: "Done-for-you AI enquiry system implementation",
        url: `https://buildmychatbot.app/${page.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="border-b border-border bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_70%)] px-6 py-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center justify-between gap-4 text-sm">
            <Link href="/" className="font-semibold text-foreground">
              BuildMyChatbot
            </Link>
            <Link
              href="/#book"
              className="rounded-lg bg-accent px-4 py-2 font-semibold text-white hover:bg-accent-dark"
            >
              Get a demo
            </Link>
          </nav>

          <div className="mt-16 max-w-3xl">
            <p className="text-sm font-medium text-accent">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold">{page.comparisonTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The offer is intentionally narrow: a done-for-you AI enquiry
              workflow connected to the channels your team already uses.
            </p>
          </div>
          <ul className="grid gap-3 text-sm leading-relaxed text-muted">
            {page.comparison.map((item) => (
              <li key={item} className="rounded-lg border border-border p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{page.bestForTitle}</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {page.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <h2 className="text-xl font-bold">{page.proofTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {page.proof}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.faq.map((item) => (
              <article key={item.q} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">
            Want to see it on your own site?
          </h2>
          <p className="mt-3 text-muted">
            Send a website URL and we will prepare a focused demo around your
            visitor questions and enquiry flow.
          </p>
          <Link
            href="/#book"
            className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Get a free demo on your site
          </Link>
        </div>
      </section>
    </main>
  );
}
