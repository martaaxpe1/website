import type { CaseNode, LeadItem, MediaItem } from "@/components/case/CaseMedia";

/** One sub-section of "What I delivered" (a phase, a feature...). */
export type CaseBlock = {
  id: string;
  /** small coloured label above the title, e.g. "Phase 1" */
  eyebrow?: string;
  title: string;
  nodes: CaseNode[];
};

/** Everything one case page and its home page card need. Edit the case files, not the page. */
export type CaseStudy = {
  /** URL number: /case/<id> */
  id: string;
  brand: string;
  title: string;
  /** home page card */
  card: { image: string; summary: string; tags: string[] };
  subtitle: string;
  /** photo behind the title card; without it the card is plain */
  cover?: { src: string; alt: string };
  /** paragraphs shown in the title card under the subtitle (blank line = new paragraph) */
  overview?: string;
  /** wide image or video right under the title card */
  heroMedia?: MediaItem | { placeholder: string };
  client: string;
  timeline: string;
  industry: string;
  challenge: (string | LeadItem)[];
  /** "What I delivered": optional opening nodes (e.g. a diagram), then blocks */
  deliveredIntro?: CaseNode[];
  delivered: CaseBlock[];
  approach: { title: string; desc: string; tradeoff?: string }[];
  /** paragraphs; lines starting with "• " become a bullet list */
  role: string;
  tags: string[];
  /** extra sections between My role and Impact, each gets a menu stop */
  extra?: { id: string; label: string; title: string; nodes: CaseNode[] }[];
  impact: { intro?: string; items: { metric: string; label: string }[]; note?: string };
};
