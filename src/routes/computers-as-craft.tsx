import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, HardDrive, LaptopMinimal, ServerCog } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

export const Route = createFileRoute("/computers-as-craft")({
  head: () => ({
    meta: [
      { title: "Computers as a Craft - Aaron Clewis" },
      {
        name: "description",
        content:
          "Why Aaron's long-running programming and personal computing habits matter to the way he approaches technical work.",
      },
    ],
  }),
  component: ComputersAsCraftPage,
});

type ComputingPoint = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const COMPUTING_POINTS: ComputingPoint[] = [
  {
    icon: LaptopMinimal,
    title: "Programming as habit",
    body: "Programming is not just something Aaron learned for work. It is a durable habit, a preferred way of thinking, and a toolset he keeps returning to because he genuinely enjoys it.",
  },
  {
    icon: HardDrive,
    title: "Personal computing depth",
    body: "Self-hosted systems, Linux workflows, scripting, automation, data tooling, and long-running technical curiosity are part of the same continuum rather than separate hobbies.",
  },
  {
    icon: ServerCog,
    title: "10,000+ hours of programming",
    body: "That experience shows up in the way Aaron approaches systems: practical, hands-on, and comfortable moving from messy inputs to durable outputs.",
  },
];

function ComputersAsCraftPage() {
  return (
    <ThemeProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=VT323&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen">
        <PageNav />
        <main className="mx-auto max-w-5xl px-5 sm:px-8">
          <Hero />
          <section className="pb-12 sm:pb-16">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[0_18px_50px_rgba(0,0,0,0.08)] chad:rounded-none chad:shadow-none">
              <img
                src="/terminal-ac.gif"
                alt="Terminal-style animation showing Aaron's skills and experience in a playful hire command."
                className="w-full rounded-2xl border border-border object-cover chad:rounded-none"
              />
            </div>
          </section>
          <Divider />
          <section className="py-14 sm:py-20">
            <SectionHeader
              eyebrow="Why this matters"
              title="Technical habits change how someone works"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="paper-card p-6 sm:p-8">
                <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  "Many people learn to use tools, but not everyone genuinely loves using computers
                  to get work done."
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Aaron is in that second group. He likes programming for its own sake, likes the
                  command line, likes building systems, and likes the feeling of taking something
                  messy and making it coherent. That matters because the work does not stop when the
                  ticket is done. The curiosity stays on.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  The result is a working style shaped by long-running personal computing habits:
                  scripting, Linux, self-hosted tools, infrastructure experiments, data workflows,
                  and a strong preference for understanding how the machinery actually works.
                </p>
              </div>

              <div className="paper-card p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Hiring relevance
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  Teams benefit when someone does not just tolerate technical tools, but actively
                  likes using them well.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  That tends to produce better debugging, better automation, better judgment around
                  tooling, and more patience for the rough edges that real systems always have.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  It also means Aaron is more likely to move comfortably between analytics, scripts,
                  reporting systems, and operational glue work instead of treating those as separate
                  worlds.
                </p>
              </div>
            </div>
          </section>
          <Divider />
          <section className="py-14 sm:py-20">
            <SectionHeader eyebrow="Patterns" title="What this tends to produce" />
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {COMPUTING_POINTS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="paper-card flex flex-col gap-3 p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </section>
          <Divider />
          <section className="py-14 sm:py-20">
            <SectionHeader eyebrow="In practice" title="Where it shows up in Aaron's work" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <ProofCard
                title="Better debugging"
                body="He is more likely to chase root causes, inspect rough edges directly, and stay calm when tools or workflows behave badly."
              />
              <ProofCard
                title="Better automation"
                body="He looks for repeatable patterns and naturally reaches for scripts, small systems, and durable workflows instead of repeated manual rescue work."
              />
              <ProofCard
                title="Better technical judgment"
                body="He tends to care about how the machinery actually works, which usually leads to cleaner tradeoffs around tooling, data flow, and operational reliability."
              />
            </div>
          </section>
          <Divider />
          <section className="py-14 sm:py-20">
            <div className="paper-card p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Back to the main story
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground">
                This page is supporting evidence, not the main pitch. The hiring case is still about
                useful systems, better decisions, and practical automation. This section just
                explains one reason Aaron tends to work that way.
              </p>
              <PageLink
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 chad:btn-95"
                href="/"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to homepage
              </PageLink>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

function PageNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm chad:bg-background chad:backdrop-blur-none">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <PageLink href="/" className="font-display text-lg font-semibold tracking-tight">
          Aaron Clewis<span className="text-primary">.</span>
        </PageLink>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <PageLink href="/" className="hover:text-foreground">
            Home
          </PageLink>
          <PageLink href="/resume.pdf" className="hover:text-foreground">
            Resume
          </PageLink>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pb-12 pt-14 sm:pb-20 sm:pt-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="accent-bar" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Personal computing / Technical habits
        </span>
      </div>
      <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-foreground sm:text-6xl">
        Computers are not just tools Aaron uses for work.
        <span className="text-primary"> They are part of how he thinks.</span>
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        This page explains why long-running programming habits, Linux workflows, self-hosted
        systems, and genuine technical curiosity matter to the kind of builder Aaron is in real
        business environments.
      </p>
    </section>
  );
}

function Divider() {
  return <div className="section-rule my-2" />;
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="accent-bar" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl text-foreground sm:text-4xl">{title}</h2>
    </div>
  );
}

function ProofCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="paper-card p-5">
      <p className="font-display text-lg text-foreground">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function PageLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
