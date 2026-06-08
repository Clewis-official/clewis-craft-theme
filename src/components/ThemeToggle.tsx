import { useTheme } from "@/lib/theme";
import { Monitor, Sparkles } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isChad = theme === "chad";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Chad Mode"
      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-mono uppercase tracking-wider text-foreground transition-colors hover:bg-muted chad:btn-95"
    >
      {isChad ? <Monitor className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
      <span>{isChad ? "Default" : "Chad Mode"}</span>
    </button>
  );
}
