import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AssistantPanel } from "@/components/AssistantPanel";
import {
  Database,
  FileBarChart,
  Workflow,
  Code2,
  TrendingUp,
  Brain,
  Compass,
  Bot,
  Mail,
  Linkedin,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import type { ComponentType } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clewis — Analytics & Automation Builder" },
      {
        name: "description",
        content:
          "Clewis builds practical analytics and automation systems with SQL, Python, SAS, and bash — forecasting, reporting, workflow automation, and decision support.",
      },
      { property: "og:title", content: "Clewis — Analytics & Automation Builder" },
      {
        property: "og:description",
        content:
          "Forecasting, reporting automation, workflow design, and AI-supported operational tools.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <ThemeProvider>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
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

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm bg-background/80 border-b border-border chad:bg-background chad:backdrop-blur-none">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Clewis<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a className="hover:text-foreground" href="#capabilities">Capabilities</a>
          <a className="hover:text-foreground" href="#work">Work</a>
          <a className="hover:text-foreground" href="#approach">Approach</a>
          <a className="hover:text-foreground" href="#contact">Contact</a>
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
      <h2 className="font-display text-3xl sm:text-4xl text-foreground">{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-24 pb-12 sm:pb-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="accent-bar" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Analytics · Automation
        </span>
      </div>
      <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-foreground max-w-4xl">
        Analytics and automation builder using{" "}
        <span className="text-primary">SQL, Python, SAS, and bash</span> to improve forecasting,
        workflows, and operational decision-making.
      </h1>
      <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
        I build practical systems that help teams make better decisions and move faster. My
        background spans forecasting, predictive modeling, reporting automation, workflow
        design, and AI-supported operational tools across retail, financial services, and
        collision-repair operations.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 chad:btn-95"
        >
          <FileText className="h-4 w-4" />
          View Resume
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted chad:btn-95"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted chad:btn-95"
        >
          <Mail className="h-4 w-4" />
          Email Me
        </a>
      </div>
    </section>
  );
}

const CAPABILITIES: { icon: ComponentType<{ className?: string }>; title: string; body: string }[] = [
  { icon: Database, title: "Data Wrangling", body: "Clean, reshape, reconcile, and summarize messy real-world data so it becomes usable for decisions and operations." },
  { icon: FileBarChart, title: "Reporting Systems", body: "Build recurring reporting workflows that reduce manual effort, improve reliability, and give teams timely visibility." },
  { icon: Workflow, title: "Workflow Automation", body: "Replace repetitive manual steps with scripts, pipelines, and lightweight systems that save time and reduce errors." },
  { icon: Code2, title: "SQL, Python, and Bash", body: "Use practical programming to extract data, transform it, analyze it, and connect it to real business processes." },
  { icon: TrendingUp, title: "Forecasting", body: "Develop forecasting processes and models that support planning, performance tracking, and operational decision-making." },
  { icon: Brain, title: "Predictive Modeling", body: "Apply statistical and analytical modeling where it improves targeting, risk evaluation, or business outcomes." },
  { icon: Compass, title: "Decision Support", body: "Turn analysis into tools, outputs, and workflows that executives, operators, or managers can actually use." },
  { icon: Bot, title: "AI Workflow Integration", body: "Evaluate and implement AI-supported workflows where they add real operational value rather than just novelty." },
];

function Capabilities() {
  return (
    <section id="capabilities" className="py-14 sm:py-20">
      <SectionHeader eyebrow="What I do" title="Capabilities" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CAPABILITIES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="paper-card p-5 flex flex-col gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const WORK = [
  {
    company: "JCPenney",
    role: "Ecommerce analytics & forecasting",
    body: "Built forecasting and reporting systems for ecommerce leadership, including automated reporting workflows and holiday demand forecasting that improved decision speed and reduced manual effort.",
    tags: ["Forecasting", "Reporting Automation", "SQL"],
  },
  {
    company: "CoreLogic",
    role: "Credit modeling, regulated data",
    body: "Developed production credit models and worked with sensitive consumer data in a regulated environment, combining statistical rigor with practical implementation.",
    tags: ["Predictive Modeling", "SAS", "Python"],
  },
  {
    company: "Collision Champs",
    role: "AI-supported operations",
    body: "Designed and implemented AI-supported estimation and intake workflows, connecting website intake, operational logic, and CRM delivery into a usable day-to-day system.",
    tags: ["AI Workflows", "Automation", "Bash"],
  },
];

function SelectedWork() {
  return (
    <section id="work" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Selected work" title="A few problems I've solved" />
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A few examples of the kinds of problems Clewis has solved and the systems he has built.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {WORK.map((w) => (
          <article key={w.company} className="paper-card p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-foreground">{w.company}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {w.role}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-4 text-sm text-foreground/90 leading-relaxed">{w.body}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {w.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border text-muted-foreground chad:rounded-none"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="approach" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Approach" title="How I work" />
      <p className="mt-6 max-w-3xl text-lg text-foreground/90 leading-relaxed">
        I do my best work on messy, real business problems where analysis and implementation
        stay close together. I like building durable systems, reducing manual work, clarifying
        decisions, and turning rough workflows into something a team can actually use.
      </p>
    </section>
  );
}

function CareerBreak() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeader eyebrow="2021 – 2025" title="Career break" />
      <p className="mt-6 max-w-3xl text-base text-muted-foreground leading-relaxed">
        From June 2021 through December 2025, I took a planned career break focused on primary
        family caregiving, independent research, and continued technical development. During
        that period I stayed hands-on through self-hosted systems, automation work, and
        ongoing study across analytics, infrastructure, and digital-asset market structure.
      </p>
    </section>
  );
}

function Looking() {
  return (
    <section id="contact" className="py-14 sm:py-20">
      <SectionHeader eyebrow="Now" title="What I'm looking for" />
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="paper-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Location
          </h3>
          <p className="mt-3 text-foreground leading-relaxed">
            Primarily remote. Open to the right in-person or hybrid opportunity in{" "}
            <strong>Parkland / South Florida</strong>, <strong>Coppell / DFW</strong>, and
            possibly <strong>Reno / nearby</strong>.
          </p>
        </div>
        <div className="paper-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Best fit
          </h3>
          <p className="mt-3 text-foreground leading-relaxed">
            Work involving SQL, Python, bash, forecasting, analytics, workflow automation,
            internal tools, or decision-support systems.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-display text-lg">Clewis<span className="text-primary">.</span></div>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Analytics & automation · Built with intent.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
