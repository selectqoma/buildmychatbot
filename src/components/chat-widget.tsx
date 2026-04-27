"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm a live demo of what we build — an agent trained on this site's content. Ask me about pricing, the process, or how this is different from Intercom Fin.",
};

const MAX_INPUT = 1000;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    if (text.length > MAX_INPUT) {
      setError(`Message too long (max ${MAX_INPUT} chars).`);
      return;
    }
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);

    const payload = next
      .filter((m) => m !== GREETING)
      .map(({ role, content }) => ({ role, content }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      if (!res.ok || !res.body) {
        const errBody = await res.json().catch(() => null);
        setError(errBody?.error ?? "Something went wrong. Please try again.");
        setBusy(false);
        return;
      }

      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = m.slice();
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant") {
            copy[copy.length - 1] = {
              role: "assistant",
              content: last.content + chunk,
            };
          }
          return copy;
        });
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-all hover:scale-105"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Chat with BuildMyChatbot"
          className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-accent/10 animate-fade-in-up"
        >
          <div className="flex items-center justify-between border-b border-border bg-surface/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-sm font-semibold">Ask BuildMyChatbot</p>
            </div>
            <p className="text-[10px] uppercase tracking-wide text-muted">Live demo</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-accent text-white rounded-br-sm"
                      : "bg-surface text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content || (busy && i === messages.length - 1 ? <Dots /> : null)}
                </div>
              </div>
            ))}
          </div>

          {error && (
            <div className="border-t border-border bg-red-50 px-4 py-2 text-xs text-red-700">
              {error}
            </div>
          )}

          <div className="border-t border-border bg-white p-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT))}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask about pricing, process, integrations…"
                className="flex-1 resize-none rounded-lg border border-border bg-white px-3 py-2 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 max-h-32"
                disabled={busy}
              />
              <button
                type="button"
                onClick={send}
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow shadow-accent/25 hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-muted">
              Trained only on this site's content. May escalate to{" "}
              <a className="underline hover:text-accent" href="mailto:hello@buildmychatbot.app">
                hello@buildmychatbot.app
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Dots() {
  return (
    <span className="inline-flex gap-1">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
    </span>
  );
}
