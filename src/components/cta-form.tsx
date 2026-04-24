"use client";

import { useState } from "react";

export function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      email: (form.email as HTMLInputElement).value,
      url: (form.url as HTMLInputElement).value,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-10 max-w-md mx-auto text-center">
        <div className="rounded-xl border border-accent/20 bg-accent-light/20 p-6">
          <svg
            className="mx-auto mb-3 w-8 h-8 text-accent"
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
          <p className="font-semibold text-foreground">Request received</p>
          <p className="mt-1 text-sm text-muted">
            We&apos;ll build a demo on your docs and get back to you within 24
            hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
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
          disabled={loading}
          className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg transition-all disabled:opacity-70"
        >
          {loading ? "Sending..." : "Get a free demo"}
        </button>
      </div>
    </form>
  );
}
