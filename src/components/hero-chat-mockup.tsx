"use client";

import { useState, useEffect } from "react";
import type { SiteContent } from "@/lib/site-content";

export function HeroChatMockup({
  content,
}: {
  content: SiteContent["heroChat"];
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(
        () => setStep((s) => s + 1),
        step === 0 ? 800 : 1500
      );
      return () => clearTimeout(timer);
    }
  }, [step]);

  const visibleMessages = content.messages.slice(0, step);

  return (
    <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface/80">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-muted font-mono">
          {content.label}
        </span>
        <span className="ml-auto text-[10px] text-muted/60 font-mono">
          {content.status}
        </span>
      </div>
      <div className="p-5 space-y-3 min-h-[220px]">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex animate-slide-in ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent text-white rounded-br-md"
                  : "bg-surface text-foreground border border-border rounded-bl-md"
              }`}
            >
              <p>{msg.text}</p>
              {"meta" in msg && (
                <p
                  className={`mt-2 text-[11px] font-medium ${
                    msg.role === "user" ? "text-white/80" : "text-muted"
                  }`}
                >
                  {msg.meta}
                </p>
              )}
            </div>
          </div>
        ))}
        {step >= 2 && step < content.messages.length && (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="text-xs text-accent hover:text-accent-dark transition-colors cursor-pointer font-medium"
          >
            {content.next}
          </button>
        )}
        {step >= content.messages.length && (
          <button
            onClick={() => setStep(0)}
            className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            {content.replay}
          </button>
        )}
      </div>
    </div>
  );
}
