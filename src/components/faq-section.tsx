"use client";

import { useState } from "react";
import { faqs } from "./faq-data";

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
