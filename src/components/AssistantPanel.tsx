import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const SUGGESTED = [
  "What kind of roles is Clewis targeting?",
  "What did he build at Collision Champs?",
  "Tell me about his forecasting experience.",
  "How does he explain his career break?",
];

export function AssistantPanel() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const submit = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: text.trim(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, text: messageText }) => ({
            role,
            text: messageText,
          })),
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok || !data.message) {
        throw new Error(data.error || "Something went wrong. Try again in a moment.");
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: data.message,
        },
      ]);
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Inline section */}
      <div id="assistant" className="paper-card p-6 sm:p-8">
        <div className="chad:hidden mb-4 flex items-center gap-2">
          <span className="accent-bar" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Optional
          </span>
        </div>
        <div className="hidden chad:flex win-title">
          <span>assistant.exe</span>
          <span className="win-title-btns">
            <span className="win-title-btn">_</span>
            <span className="win-title-btn">□</span>
            <span className="win-title-btn">×</span>
          </span>
        </div>
        <div className="chad:p-4">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">
            Ask about my background, projects, and work style.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            This assistant answers questions based on my resume and project summaries.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {SUGGESTED.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setOpen(true);
                  void submit(q);
                }}
                className="rounded-md border border-border bg-background px-3 py-2 text-left text-xs sm:text-sm text-foreground hover:border-primary/40 hover:bg-muted transition-colors chad:btn-95"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 chad:btn-95"
            >
              <MessageCircle className="h-4 w-4" />
              Open assistant
            </button>
          </div>
        </div>
      </div>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open assistant"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm text-primary-foreground shadow-lg hover:opacity-90 chad:rounded-none chad:btn-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Ask the assistant</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-end">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative w-full sm:w-[420px] sm:m-4 sm:rounded-lg bg-card border border-border flex flex-col h-[80vh] sm:h-[600px] paper-card chad:rounded-none">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border chad:win-title">
              <div className="font-mono text-sm font-medium">Assistant</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-muted-foreground hover:text-foreground chad:win-title-btn"
              >
                <X className="h-4 w-4 chad:hidden" />
                <span className="hidden chad:inline">×</span>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Ask anything about Clewis's background, projects, or what he's looking for.
                  </p>
                  <div className="space-y-2">
                    {SUGGESTED.map((q) => (
                      <button
                        key={q}
                        onClick={() => void submit(q)}
                        className="block w-full text-left rounded-md border border-border bg-background px-3 py-2 text-sm hover:border-primary/40 hover:bg-muted chad:btn-95"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={isUser ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        "max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap " +
                        (isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground border border-border")
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="text-xs text-muted-foreground font-mono">thinking…</div>
              )}
              {error && <div className="text-xs text-destructive">{error}</div>}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                void submit(input);
              }}
              className="border-t border-border p-3 flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring chad:rounded-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-primary-foreground disabled:opacity-50 chad:btn-95"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
