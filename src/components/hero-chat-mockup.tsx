"use client";

import { useEffect, useRef, useState } from "react";

type Turn =
  | { role: "user"; text: string }
  | { role: "bot"; text: string };

const script: Turn[] = [
  { role: "user", text: "How do I export my data?" },
  {
    role: "bot",
    text: "Go to Settings → Data → Export. You can export as CSV or JSON. Exports include your workspace data from the last 90 days.",
  },
  { role: "user", text: "Can I get older data too?" },
  {
    role: "bot",
    text: 'Yes — toggle "Include archived" on the same page. Workspaces with 10k+ records export in the background; you\'ll get an email when it\'s ready.',
  },
];

export function HeroChatMockup() {
  const [visible, setVisible] = useState<Turn[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((r) => timers.push(setTimeout(r, ms)));

    async function run() {
      await wait(600);
      for (const turn of script) {
        if (cancelled) return;
        if (turn.role === "bot") {
          setTyping(true);
          await wait(900);
          if (cancelled) return;
          setTyping(false);
        }
        setVisible((v) => [...v, turn]);
        await wait(turn.role === "user" ? 700 : 1800);
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visible, typing]);

  return (
    <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface/80">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-muted font-mono">support-agent</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-muted/70 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          online
        </span>
      </div>
      <div
        ref={scrollRef}
        className="p-5 space-y-3 h-[260px] overflow-hidden"
      >
        {visible.map((msg, i) => (
          <div
            key={i}
            className={`flex animate-slide-in ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent text-white rounded-br-md"
                  : "bg-surface text-foreground border border-border rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start animate-slide-in">
            <div className="bg-surface border border-border rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted/50 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
