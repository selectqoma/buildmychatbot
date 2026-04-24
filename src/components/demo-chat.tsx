"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";

const suggestions = [
  "How do cycles work?",
  "What integrations does Linear support?",
  "How is Linear different from Jira?",
];

const welcomeMessage = {
  id: "welcome",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi! I'm a demo AI agent built on Linear's public docs. Ask me anything about Linear — issues, cycles, integrations, pricing, etc.",
    },
  ],
};

export function DemoChat() {
  const { messages, sendMessage, status, error } = useChat({ id: "demo" });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "submitted" || status === "streaming";

  const allMessages = messages.length === 0 ? [welcomeMessage] : messages;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [allMessages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <div className="rounded-2xl border border-border bg-white shadow-lg shadow-black/5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface/80">
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="text-xs font-mono text-foreground font-medium">
          Linear Support Agent
        </span>
        <span className="ml-auto text-[10px] text-muted/60 font-mono">
          live demo
        </span>
      </div>

      <div
        ref={scrollRef}
        className="p-5 space-y-3 h-[350px] overflow-y-auto"
      >
        {allMessages.map((m) => {
          const text = m.parts
            .filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => p.text)
            .join("");
          return (
            <div
              key={m.id}
              className={`flex animate-slide-in ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-accent text-white rounded-br-md"
                    : "bg-surface text-foreground border border-border rounded-bl-md"
                }`}
              >
                {text}
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface border border-border rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span
                  className="h-2 w-2 rounded-full bg-muted/40 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="h-2 w-2 rounded-full bg-muted/40 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="h-2 w-2 rounded-full bg-muted/40 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-start">
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm">
              Demo is being configured.{" "}
              <a
                href="mailto:hello@buildmychatbot.app"
                className="underline"
              >
                Contact us
              </a>{" "}
              for a live demo on your docs.
            </div>
          </div>
        )}
      </div>

      {messages.length === 0 && !error && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage({ text: s })}
              disabled={isLoading}
              className="text-xs rounded-full border border-border bg-white px-3 py-1.5 text-muted hover:text-accent hover:border-accent/30 transition-colors cursor-pointer disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-border p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Linear..."
          className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
