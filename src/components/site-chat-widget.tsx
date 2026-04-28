"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site-content";

type Message = {
  role: "bot" | "user";
  text: string;
  source?: string;
  confidence?: string;
  cta?: string;
};

type WidgetCopy = {
  button: string;
  title: string;
  status: string;
  intro: string;
  placeholder: string;
  send: string;
  close: string;
  open: string;
  loading: string;
  error: string;
  email: string;
  quick: string[];
};

const copy: Record<Locale, WidgetCopy> = {
  en: {
    button: "Chat",
    title: "BuildMyChatbot assistant",
    status: "Answers from this site",
    intro:
      "Ask about pricing, delivery, hosting, integrations, ownership, or getting a demo on your site.",
    placeholder: "Ask a question...",
    send: "Send",
    close: "Close chat",
    open: "Open chat",
    loading: "Checking the site...",
    error: "I could not answer right now. Email hello@buildmychatbot.app.",
    email: "Email us",
    quick: ["What does it cost?", "How fast can you deploy?", "Where is data hosted?"],
  },
  fr: {
    button: "Chat",
    title: "Assistant BuildMyChatbot",
    status: "Réponses depuis ce site",
    intro:
      "Posez une question sur le budget, le délai, l'hébergement, les intégrations, la propriété du code ou une démo sur votre site.",
    placeholder: "Posez une question...",
    send: "Envoyer",
    close: "Fermer le chat",
    open: "Ouvrir le chat",
    loading: "Je vérifie le site...",
    error: "Je ne peux pas répondre maintenant. Email : hello@buildmychatbot.app.",
    email: "Nous écrire",
    quick: ["Quel est le budget ?", "Quel délai ?", "Où sont hébergées les données ?"],
  },
  nl: {
    button: "Chat",
    title: "BuildMyChatbot assistent",
    status: "Antwoorden van deze site",
    intro:
      "Vraag naar budget, timing, hosting, integraties, eigendom of een demo op je eigen site.",
    placeholder: "Stel een vraag...",
    send: "Verstuur",
    close: "Chat sluiten",
    open: "Chat openen",
    loading: "Ik check de site...",
    error: "Ik kan nu niet antwoorden. Mail hello@buildmychatbot.app.",
    email: "Mail ons",
    quick: ["Wat kost het?", "Hoe snel kan dit live?", "Waar wordt data gehost?"],
  },
};

export function SiteChatWidget({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: t.intro,
      source: t.status,
      confidence: "High",
    },
  ]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", text: trimmed }]);

    try {
      const res = await fetch("/api/site-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, locale }),
      });

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await res.json()) as {
        answer: string;
        source?: string;
        confidence?: string;
        cta?: string;
      };

      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text: data.answer,
          source: data.source,
          confidence: data.confidence,
          cta: data.cta,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text: t.error,
          source: "Fallback",
          confidence: "Low",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label={t.title}
          className="flex h-[min(620px,calc(100vh-112px))] w-[calc(100vw-40px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-slate-900/20"
        >
          <header className="flex items-center gap-3 border-b border-border bg-[linear-gradient(180deg,#eff6ff,#ffffff)] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/20">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.142-4.03 7.5-9 7.5a10.66 10.66 0 0 1-3.922-.728L3 20.25l1.566-3.652C3.579 15.35 3 13.775 3 12c0-4.142 4.03-7.5 9-7.5s9 3.358 9 7.5Z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-foreground">
                {t.title}
              </h2>
              <p className="text-xs text-muted">{t.status}</p>
            </div>
            <button
              type="button"
              aria-label={t.close}
              onClick={() => setOpen(false)}
              className="ml-auto rounded-lg p-2 text-muted transition-colors hover:bg-accent-light/60 hover:text-foreground"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-surface/40 p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.text}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-accent text-white"
                      : "rounded-bl-md border border-border bg-white text-foreground"
                  }`}
                >
                  <p>{message.text}</p>
                  {message.role === "bot" && (message.source || message.confidence) && (
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
                      {message.source && (
                        <span className="rounded-full bg-accent-light/60 px-2 py-1 text-accent">
                          {message.source}
                        </span>
                      )}
                      {message.confidence && (
                        <span className="rounded-full bg-[#ecfeff] px-2 py-1 text-[#0f766e]">
                          Confidence: {message.confidence}
                        </span>
                      )}
                    </div>
                  )}
                  {message.cta && (
                    <a
                      href="#book"
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-white"
                    >
                      {message.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3 text-sm text-muted">
                  {t.loading}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {t.quick.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => ask(question)}
                  className="shrink-0 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:bg-accent-light/40 hover:text-foreground"
                >
                  {question}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t.placeholder}
                className="min-w-0 flex-1 rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {t.send}
              </button>
            </form>
            <a
              href="mailto:hello@buildmychatbot.app"
              className="mt-3 block text-center text-xs font-medium text-muted hover:text-accent"
            >
              {t.email}: hello@buildmychatbot.app
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-label={open ? t.close : t.open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-all hover:bg-accent-dark"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12c0 4.142-4.03 7.5-9 7.5a10.66 10.66 0 0 1-3.922-.728L3 20.25l1.566-3.652C3.579 15.35 3 13.775 3 12c0-4.142 4.03-7.5 9-7.5s9 3.358 9 7.5Z"
          />
        </svg>
        {t.button}
      </button>
    </div>
  );
}
