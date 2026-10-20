import { useParams, useNavigate } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useCaseScrollReset } from "@/hooks/useCaseScrollReset";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { CaseFigure, CaseNodes, Placeholder } from "@/components/case/CaseMedia";
import { SolutionMap } from "@/components/case/SolutionMap";
import { cases, getCase } from "@/content/cases";

// Page layout shared by every case. Case text and media live in src/content/cases/.

type NavStop = { id: string; label: string };

const CaseMetaChips = ({ client, timeline, industry }: { client: string; timeline: string; industry: string }) => (
  <div className="flex flex-wrap gap-2 mt-6">
    {[
      { label: "Client", value: client },
      { label: "Timeline", value: timeline },
      { label: "Industry", value: industry },
    ].map((meta) => (
      <span
        key={meta.label}
        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs backdrop-blur-sm"
      >
        <span className="text-muted-foreground">{meta.label}</span>
        <span className="font-medium text-foreground">{meta.value}</span>
      </span>
    ))}
  </div>
);

/** Renders role text: plain paragraphs, with "• " lines grouped into a real list. */
const RoleText = ({ text }: { text: string }) => {
  const blocks: { type: "p" | "ul"; lines: string[] }[] = [];
  text.split("\n").forEach((raw) => {
    const line = raw.trim();
    if (!line) return;
    const bullet = line.startsWith("•");
    const content = bullet ? line.replace(/^•\s*/, "") : line;
    const last = blocks[blocks.length - 1];
    if (bullet && last?.type === "ul") last.lines.push(content);
    else blocks.push({ type: bullet ? "ul" : "p", lines: [content] });
  });
  return (
    <div className="space-y-4 text-muted-foreground">
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i}>{b.lines[0]}</p>
        ) : (
          <ul key={i} className="space-y-2">
            {b.lines.map((li) => (
              <li key={li} className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold font-display mb-6">{children}</h2>
);

const CaseStudyPage = () => {
  const { id } = useParams();
  useCaseScrollReset(id);
  const navigate = useNavigate();
  const c = getCase(id) ?? cases[0];

  const navSections: NavStop[] = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Challenge" },
    { id: "deliverables", label: "Deliverables" },
    { id: "approach", label: "Approach" },
    { id: "role", label: "My role" },
    ...(c.extra ?? []).map((e) => ({ id: e.id, label: e.label })),
    { id: "impact", label: "Impact" },
  ];
  const [activeSection, setActiveSection] = useState(navSections[0].id);

  usePageMeta(`${c.title} | Marta Axpe`, c.subtitle);

  const topOf = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(navSections[navSections.length - 1].id);
        return;
      }
      const scrollPosition = window.scrollY + 140;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(navSections[i].id);
        if (el && topOf(el) <= scrollPosition) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };
    setActiveSection(navSections[0].id);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) window.scrollTo({ top: topOf(element) - 130, behavior: "smooth" });
  };

  const handleBackToCases = () => {
    navigate("/#work");
    setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const hero = c.heroMedia;

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Button variant="ghost" onClick={handleBackToCases} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Cases
          </Button>
        </div>
      </header>

      <div className="pt-16 flex max-w-7xl mx-auto">
        {/* Sidebar index */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-24 w-full px-6 mt-8">
            <ul className="space-y-1">
              {navSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 px-4 sm:px-6 py-12 min-w-0 overflow-hidden">
          {/* Title card: photo background when the case has a cover, plain card otherwise */}
          <div
            id="overview"
            className={`relative flex scroll-mt-28 items-end overflow-hidden rounded-2xl ${
              c.cover ? "min-h-[540px] md:min-h-[520px] xl:min-h-[600px]" : "border bg-gradient-to-br from-card via-card to-primary/10"
            } ${hero ? "mb-8" : "mb-16"}`}
          >
            {c.cover && (
              <>
                <img src={c.cover.src} alt={c.cover.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60 sm:via-background/85 sm:to-background/15" />
              </>
            )}
            <div className="relative w-full max-w-3xl px-6 py-10 sm:p-10 md:p-12 xl:max-w-4xl xl:p-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-display mb-4 break-words">{c.title}</h1>
              <CaseMetaChips client={c.client} timeline={c.timeline} industry={c.industry} />
              {[c.subtitle, ...(c.overview ? c.overview.split(/\n\s*\n/) : [])].map((p, i) => (
                <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed text-foreground/80 break-words`}>
                  {p}
                </p>
              ))}
              {!c.overview && (
                <div className="mt-6 max-w-2xl">
                  <Placeholder label="Overview: one or two paragraphs of context" />
                </div>
              )}
            </div>
          </div>

          {hero && (
            <div className="mb-16">
              {"placeholder" in hero ? <Placeholder label={hero.placeholder} media /> : <CaseFigure item={hero} />}
            </div>
          )}

          {/* Mobile navigation */}
          <nav className="lg:hidden sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-3 mb-8 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b">
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                    activeSection === section.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>

          <section id="problem" className="mb-20 scroll-mt-28">
            <SectionTitle>The Challenge</SectionTitle>
            <div className="space-y-4">
              {c.challenge.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">
                    {typeof item === "string" ? item : (<><strong className="text-foreground">{item.lead}</strong> {item.text}</>)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="deliverables" className="mb-20 scroll-mt-28">
            <SectionTitle>What I Delivered</SectionTitle>
            {c.id === "1" && (
              <div className="mb-16">
                <SolutionMap deviceSrc="/cases/culligan/hydrome-device.png" />
              </div>
            )}
            {c.deliveredIntro && <CaseNodes nodes={c.deliveredIntro} />}
            <div className="space-y-16">
              {c.delivered.map((block) => (
                <div key={block.id} id={block.id} className="space-y-6 scroll-mt-32 border-t pt-10">
                  <div>
                    {block.eyebrow && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{block.eyebrow}</p>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">{block.title}</h3>
                  </div>
                  <CaseNodes nodes={block.nodes} />
                </div>
              ))}
            </div>
          </section>

          <section id="approach" className="mb-20 scroll-mt-28">
            <SectionTitle>Approach</SectionTitle>
            <div className="bg-card border rounded-xl p-4 sm:p-8">
              <ol className="space-y-6">
                {c.approach.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground mt-1">{step.desc}</p>
                      {step.tradeoff && (
                        <p className="mt-2 text-sm text-muted-foreground border-l-2 border-primary/40 pl-3">
                          <span className="font-semibold text-foreground">Trade-off:</span> {step.tradeoff}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="role" className="mb-20 scroll-mt-28">
            <SectionTitle>My Role</SectionTitle>
            <div className="space-y-6">
              {c.role ? <RoleText text={c.role} /> : <Placeholder label="My role: a short paragraph and three to five bullets" />}
              <div className="flex flex-wrap gap-2">
                {c.tags.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {c.extra?.map((e) => (
            <section key={e.id} id={e.id} className="mb-20 scroll-mt-28">
              <SectionTitle>{e.title}</SectionTitle>
              <CaseNodes nodes={e.nodes} />
            </section>
          ))}

          <section id="impact" className="mb-20 scroll-mt-28">
            <SectionTitle>Impact & Results</SectionTitle>
            {c.impact.intro && <p className="mb-6 text-lg text-foreground/80">{c.impact.intro}</p>}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 border-t pt-8">
              {c.impact.items.map((item) => (
                <div key={item.metric} className="border-l-2 border-primary pl-4">
                  <p className="text-2xl md:text-3xl font-bold font-display text-foreground">{item.metric}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            {c.impact.note && <p className="mt-8 text-sm text-muted-foreground">{c.impact.note}</p>}
          </section>
        </main>
      </div>
    </div>
  );
};

export default CaseStudyPage;
