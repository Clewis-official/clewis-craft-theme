import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AssistantPanel } from "@/components/AssistantPanel";
import {
  ArrowUpRight,
  Bot,
  Brain,
  CalendarDays,
  Code2,
  Compass,
  Database,
  FileBarChart,
  FileText,
  HardDrive,
  LaptopMinimal,
  Linkedin,
  Mail,
  ServerCog,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { LINKEDIN_ENDORSEMENTS } from "@/lib/linkedin-highlights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaron Clewis - Analytics & Automation Builder" },
      {
        name: "description",
        content:
          "Aaron Clewis builds practical analytics, automation, and decision-support systems with SQL, Python, and bash across forecasting, reporting, and operational workflows.",
      },
      { property: "og:title", content: "Aaron Clewis - Analytics & Automation Builder" },
      {
        property: "og:description",
        content:
          "Forecasting, reporting automation, workflow design, decision systems, and AI-supported operational tools.",
      },
    ],
  }),
  component: IndexPage,
});

type Capability = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

type WorkItem = {
  company: string;
  problem: string;
  role: string;
  body: string;
  outcome: string;
  tags: string[];
};

type SpotlightPoint = {
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Database,
    title: "Data wrangling",
    body: "Clean, reconcile, reshape, and summarize messy real-world data so teams can actually trust and use it.",
  },
  {
    icon: FileBarChart,
    title: "Reporting systems",
    body: "Build repeatable reporting workflows that cut manual effort and give operators and leaders timely visibility.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    body: "Replace repetitive manual steps with scripts, pipelines, and lightweight systems that reduce friction and mistakes.",
  },
  {
    icon: Code2,
    title: "SQL, Python, and bash",
    body: "Use practical programming to extract, transform, analyze, and operationalize data in real business environments.",
  },
  {
    icon: TrendingUp,
    title: "Forecasting",
    body: "Build forecasting processes and models that support planning, tracking, and better day-to-day decision-making.",
  },
  {
    icon: Brain,
    title: "Predictive modeling",
    body: "Apply analytical and statistical modeling when it improves targeting, risk evaluation, or operating outcomes.",
  },
  {
    icon: Compass,
    title: "Decision support",
    body: "Turn analysis into tools, outputs, and workflows that real operators, managers, and executives can act on.",
  },
  {
    icon: Bot,
    title: "AI workflow integration",
    body: "Use AI where it improves intake, triage, or operational throughput, not just because it sounds current.",
  },
];

const FEATURED_WORK: WorkItem[] = [
  {
    company: "JCPenney",
    problem: "Holiday demand planning",
    role: "Ecommerce analytics and forecasting",
    body: "Built forecasting workflows for ecommerce leadership during high-variance retail periods where planning quality and timing both mattered.",
    outcome:
      "Helped decision-makers move faster with a more structured view of demand instead of leaning on one-off manual analysis.",
    tags: ["Forecasting", "Retail Analytics", "Leadership Reporting"],
  },
  {
    company: "CoreLogic",
    problem: "Production credit modeling",
    role: "Regulated data and model implementation",
    body: "Worked on production credit models in a regulated environment where analytical rigor and practical implementation both had to hold up.",
    outcome:
      "Supported modeling work that needed to be reliable, defensible, and usable inside a real production context.",
    tags: ["Predictive Modeling", "Regulated Data", "Production Systems"],
  },
];

const MORE_WORK: WorkItem[] = [
  {
    company: "JCPenney",
    problem: "Recurring ecommerce reporting",
    role: "Reporting automation",
    body: "Built and improved recurring ecommerce reporting so leadership could get consistent visibility without rebuilding the same outputs every cycle.",
    outcome:
      "Reduced manual reporting effort and tightened the cadence between new data and usable business reporting.",
    tags: ["Reporting Automation", "SQL", "Operations"],
  },
  {
    company: "CoreLogic",
    problem: "Sensitive consumer data workflows",
    role: "Disciplined analytical process",
    body: "Worked with sensitive consumer data in a context where process discipline, repeatability, and sound judgment mattered as much as raw analytical ability.",
    outcome:
      "Kept analytical work grounded in workflows that could stand up to scrutiny instead of living as one-off analysis.",
    tags: ["Data Discipline", "Analytical Process", "Risk Awareness"],
  },
];

const COLLISION_CHAMPS_SPOTLIGHT = {
  company: "Collision Champs",
  problem: "Replacing a broken estimate-intake stack with one usable sales workflow",
  role: "Systems integration, CRM ownership, workflow design, and applied AI",
  body: "Aaron helped replace a patchwork process spread across BodyShop Booster, handwritten notes, a failed call-center layer, and improvised CCC syncing with a more durable operating system for intake, estimating, customer communication, reporting, and sales follow-up.",
  outcome:
    "The result was a workflow the sales team could actually run on: cloud-based where it mattered, resilient when photos or AI failed, and far less dependent on manual rescue work.",
  tags: ["Systems Integration", "CRM", "Operational Systems", "Applied AI"],
};

const COLLISION_CHAMPS_POINTS: SpotlightPoint[] = [
  {
    title: "GoHighLevel, estimating, and CCC in one flow",
    body: "Built a CCC data-sync process from scratch using website scraping, later moved it to the cloud, and connected that data with GoHighLevel, a ChatGPT-based estimator, customer communication, and reporting so the business could work from one coherent process instead of several disconnected tools.",
  },
  {
    title: "Photo-quality controls and resilient AI handoffs",
    body: "Evaluated Tractable AI, added Python-based photo-quality checks and guided upload prompts, and built fallback behavior so poor photos or failed AI runs would still move the lead forward.",
  },
  {
    title: "Admin support for messy real-world leads",
    body: "Served as the GoHighLevel administrator and added staff-mode overrides so the sales team could work imperfect leads when VINs, photos, or other inputs were incomplete.",
  },
];

const COMPUTING_POINTS = [
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

const PRINCIPLES = [
  "Keep analysis close to implementation so ideas do not die in handoff.",
  "Prefer durable systems over heroics and repeated manual rescue work.",
  "Translate rough, messy operations into tools people can actually use.",
];

const INTRO_EMAIL =
  "mailto:toaarondc@gmail.com?subject=15%20minute%20intro%20with%20Aaron&body=Hi%20Aaron%2C%0A%0AI%27d%20like%20to%20set%20up%20a%2015-minute%20intro.%20A%20few%20times%20that%20work%20for%20me%20are%3A%0A-%20%0A-%20%0A-%20%0A%0AThanks.";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL?.trim() || "";
const HAS_LIVE_BOOKING = BOOKING_URL.length > 0;
const BOOKING_CTA_URL = HAS_LIVE_BOOKING ? BOOKING_URL : INTRO_EMAIL;
const SOCIAL_PROOF_ROTATION_MS = 6500;

function IndexPage() {
  return (
    <ThemeProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=VT323&display=swap"
        rel="stylesheet"
      />
      <Site />
    </ThemeProvider>
  );
}

function Site() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Divider />
        <Capabilities />
        <Divider />
        <SelectedWork />
        <Divider />
        <SocialProof />
        <Divider />
        <PersonalComputing />
        <Divider />
        <HowIWork />
        <Divider />
        <CareerBreak />
        <Divider />
        <Looking />
        <Divider />
        <section className="py-14 sm:py-20">
          <SectionHeader eyebrow="Assistant" title="Optional" />
          <div className="mt-6">
            <AssistantPanel />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

function BookingLink({ className, children }: { className: string; children: ReactNode }) {
  return (
    <a
      href={BOOKING_CTA_URL}
      target={HAS_LIVE_BOOKING ? "_blank" : undefined}
      rel={HAS_LIVE_BOOKING ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm chad:bg-background chad:backdrop-blur-none">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Aaron Clewis<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="hover:text-foreground" href="#capabilities">
            Capabilities
          </a>
          <a className="hover:text-foreground" href="#work">
            Work
          </a>
          <a className="hover:text-foreground" href="#proof">
            Proof
          </a>
          <a className="hover:text-foreground" href="#computing">
            Computing
          </a>
          <a className="hover:text-foreground" href="#approach">
            Approach
          </a>
          <a className="hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
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

function Hero() {
  return (
    <section id="top" className="pb-12 pt-14 sm:pb-20 sm:pt-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="accent-bar" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Aaron Clewis / Analytics / Automation
        </span>
      </div>
      <h1 className="max-w-4xl font-display text-4xl leading-[1.05] text-foreground sm:text-6xl">
        Aaron builds
        <span className="text-primary">
          {" "}
          decision systems, reporting workflows, and practical automation
        </span>{" "}
        for real-world business operations.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        He works best where analysis and implementation stay close together: forecasting, reporting,
        modeling, internal tools, workflow automation, and AI-supported operational systems that
        need to hold up in the real world.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 chad:btn-95"
        >
          <FileText className="h-4 w-4" />
          View resume
        </a>
        <BookingLink className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted chad:btn-95">
          <CalendarDays className="h-4 w-4" />
          Book a 15 min intro
        </BookingLink>
        <a
          href="https://www.linkedin.com/in/aaron-clewis-4504244/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted chad:btn-95"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:toaarondc@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted chad:btn-95"
        >
          <Mail className="h-4 w-4" />
          Email Aaron
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="paper-card p-5">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Programming depth
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            10,000+ hours of programming experience across analytics, automation, reporting, and
            hands-on systems work.
          </p>
        </div>
        <div className="paper-card p-5">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Problem types
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Forecasting, predictive modeling, workflow automation, internal tools, reporting
            systems, and operational decision support.
          </p>
        </div>
        <div className="paper-card p-5">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Domains
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Retail, financial services, and collision-repair operations, with a bias toward messy
            environments that need practical structure.
          </p>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-14 sm:py-20">
      <SectionHeader eyebrow="What he does" title="Capabilities" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="paper-card flex flex-col gap-3 p-5">
            <Icon className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkCard({ item, compact = false }: { item: WorkItem; compact?: boolean }) {
  return (
    <article className="paper-card flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {item.company}
          </p>
          <h3 className="mt-2 font-display text-xl text-foreground">{item.problem}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {item.role}
          </p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/90">{item.body}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.outcome}</p>
      <div className={compact ? "mt-4 flex flex-wrap gap-1.5" : "mt-5 flex flex-wrap gap-1.5"}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground chad:rounded-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Selected work" title="Problems Aaron has solved" />
      <p className="mt-4 max-w-3xl text-muted-foreground">
        The point is not just analysis in the abstract. It is building systems, workflows, and
        outputs that help people make decisions, move work forward, and reduce manual drag.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {FEATURED_WORK.map((item) => (
          <WorkCard key={`${item.company}-${item.problem}`} item={item} />
        ))}
      </div>

      <article className="paper-card mt-8 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {COLLISION_CHAMPS_SPOTLIGHT.company}
            </p>
            <h3 className="mt-3 max-w-3xl font-display text-2xl text-foreground sm:text-3xl">
              {COLLISION_CHAMPS_SPOTLIGHT.problem}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {COLLISION_CHAMPS_SPOTLIGHT.role}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground" />
        </div>

        <p className="mt-5 max-w-4xl text-base leading-relaxed text-foreground/90">
          {COLLISION_CHAMPS_SPOTLIGHT.body}
        </p>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
          {COLLISION_CHAMPS_SPOTLIGHT.outcome}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {COLLISION_CHAMPS_SPOTLIGHT.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground chad:rounded-none"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {COLLISION_CHAMPS_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded border border-border bg-muted/20 p-5 chad:bg-card"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {point.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{point.body}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          More examples
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {MORE_WORK.map((item) => (
            <WorkCard key={`${item.company}-${item.problem}`} item={item} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LINKEDIN_ENDORSEMENTS[activeIndex] ?? LINKEDIN_ENDORSEMENTS[0];

  useEffect(() => {
    if (LINKEDIN_ENDORSEMENTS.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % LINKEDIN_ENDORSEMENTS.length);
    }, SOCIAL_PROOF_ROTATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  if (!active) {
    return null;
  }

  return (
    <section id="proof" className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Social proof"
        title="What other people said about working with Aaron"
      />
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Recommendations from former managers and collaborators. The section rotates on its own, but
        you can jump straight to any quote.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="paper-card relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                LinkedIn recommendations
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(LINKEDIN_ENDORSEMENTS.length).padStart(2, "0")}
              </p>
            </div>

            <p className="mt-8 max-w-4xl font-display text-4xl leading-[1.02] text-foreground sm:text-6xl">
              &ldquo;{active.featuredLine}&rdquo;
            </p>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {active.quote}
            </p>

            <div className="mt-8 border-t border-border pt-5">
              <p className="font-display text-2xl text-foreground">{active.recommenderName}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {active.recommenderTitle}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {active.relationship}
              </p>
            </div>
          </div>
        </article>

        <div className="space-y-3">
          {LINKEDIN_ENDORSEMENTS.map((endorsement, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={endorsement.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`paper-card w-full p-4 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    : "hover:border-primary/50 hover:bg-muted/30"
                }`}
              >
                <p className="font-display text-xl leading-tight text-foreground">
                  &ldquo;{endorsement.featuredLine}&rdquo;
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{endorsement.recommenderName}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {endorsement.recommenderTitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PersonalComputing() {
  return (
    <section id="computing" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Personal computing" title="Computers as a craft" />
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="paper-card p-6 sm:p-8">
          <p className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
            "Many people learn to use tools, but not everyone genuinely loves using computers to get
            work done."
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Aaron is in that second group. He likes programming for its own sake, likes the command
            line, likes building systems, and likes the feeling of taking something messy and making
            it coherent. That matters because the work does not stop when the ticket is done. The
            curiosity stays on.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The result is a working style shaped by long-running personal computing habits:
            scripting, Linux, self-hosted tools, infrastructure experiments, data workflows, and a
            strong preference for understanding how the machinery actually works.
          </p>
        </div>

        <div className="paper-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Why it matters
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground">
            Teams benefit when someone does not just tolerate technical tools, but actively likes
            using them well.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            That tends to produce better debugging, better automation, better judgment around
            tooling, and more patience for the rough edges that real systems always have.
          </p>
        </div>
      </div>

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
  );
}

function HowIWork() {
  return (
    <section id="approach" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Approach" title="How Aaron works" />
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
        He does his best work on messy, real business problems where analysis and implementation
        stay close together. The goal is not theory for its own sake. The goal is useful systems,
        cleaner decisions, and less waste in the workflow.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <div key={principle} className="paper-card p-5">
            <p className="text-sm leading-relaxed text-foreground">{principle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CareerBreak() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeader eyebrow="2021 - 2025" title="Career break" />
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
        From June 2021 through December 2025, Aaron took a planned career break focused on primary
        family caregiving, independent research, and continued technical development. During that
        period he stayed hands-on through self-hosted systems, automation work, and ongoing study
        across analytics, infrastructure, and digital-asset market structure.
      </p>
    </section>
  );
}

function Looking() {
  return (
    <section id="contact" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Now" title="What Aaron is looking for" />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="paper-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Location
          </h3>
          <p className="mt-3 leading-relaxed text-foreground">
            Primarily remote. Open to the right in-person or hybrid opportunity in
            <strong> Parkland / South Florida</strong>, <strong>Coppell / DFW</strong>, and possibly{" "}
            <strong> Reno.</strong>
          </p>
        </div>
        <div className="paper-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Best fit
          </h3>
          <p className="mt-3 leading-relaxed text-foreground">
            Work involving SQL, Python, bash, forecasting, analytics, data quality, workflow
            automation, internal tools, reporting systems, or decision-support workflows.
          </p>
        </div>
        <div className="paper-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Calendar
          </h3>
          <p className="mt-3 leading-relaxed text-foreground">
            {HAS_LIVE_BOOKING
              ? "Use the live scheduling link to book a short intro with Aaron at a time that works for you."
              : "A live booking link is ready to plug in here. For now, email Aaron a few times that work and he will confirm a short intro conversation manually."}
          </p>
          <BookingLink className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 chad:btn-95">
            <CalendarDays className="h-4 w-4" />
            {HAS_LIVE_BOOKING ? "Book a 15 min intro" : "Request a 15 min intro"}
          </BookingLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-border py-12">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg">
            Aaron Clewis<span className="text-primary">.</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Analytics, automation, and durable systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:toaarondc@gmail.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-clewis-4504244/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
