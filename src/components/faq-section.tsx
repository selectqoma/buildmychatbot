import type { SiteContent } from "@/lib/site-content";

export function FAQSection({ content }: { content: SiteContent["faq"] }) {
  return (
    <section className="px-6 py-20 bg-surface border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium text-accent mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">
          {content.title}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.items.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border bg-white p-5">
              <h3 className="text-sm font-semibold">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
