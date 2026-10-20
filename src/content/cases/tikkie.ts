import type { CaseStudy } from "./types";
import { placeholder } from "./helpers";

// Placeholders mark what is still to come (text and images). Search for "placeholder(" to find them.
export const tikkie: CaseStudy = {
  id: "3",
  brand: "ABN AMRO - Tikkie",
  title: "Monetization Strategy",
  card: {
    image: "/images/abnamro.png",
    tags: ["Experimentation", "Validation", "Prototyping"],
    summary:
      "Explored and validated new monetization opportunities for Tikkie through lean experimentation, informing a clear product decision at board level.",
  },
  subtitle:
    "Exploring and validating new revenue streams for Tikkie—the Netherlands' go-to app for splitting costs—through rapid experimentation and user-centered prototyping within ABN AMRO's innovation ecosystem.",
  overview: `Tikkie is a widely adopted Dutch peer-to-peer payment app that enables users to request and receive money instantly via a simple payment link. Instead of sharing bank details or manually transferring funds, users generate a link for a specific amount and send it through channels like WhatsApp or email, allowing recipients to pay in just a few taps using their own bank app.

Tikkie has become the default way to split everyday costs in the Netherlands—from restaurant bills to shared expenses—reflecting a strong cultural norm around transparency and fair cost-sharing, and making "sending a Tikkie" a common part of daily language and behavior.`,
  heroMedia: { placeholder: "Hero image: a key visual from the experiments or prototypes" },
  client: "ABN AMRO / Tikkie",
  timeline: "3 months",
  industry: "FinTech / Banking",
  challenge: [
    "Tikkie's freemium model facing pressure to generate sustainable revenue",
    "Uncertainty about which monetization models would resonate with users",
    "Need for validated evidence to support board-level investment decisions",
  ],
  delivered: [
    {
      id: "deliverable-1",
      title: "Deliverable 1",
      nodes: [placeholder("Title and two or three sentences, e.g. the revenue models explored"), placeholder("Image or video", true)],
    },
    {
      id: "deliverable-2",
      title: "Deliverable 2",
      nodes: [placeholder("Title and two or three sentences, e.g. the cashback experiment that shipped"), placeholder("Image or video", true)],
    },
  ],
  approach: [
    { title: "Opportunity Mapping", desc: "Identified potential revenue streams based on user behavior and market analysis, building on themes the Tikkie team had already identified to collaboratively narrow down the most promising options" },
    { title: "Lean Experimentation", desc: "Rapid prototyping with mixed-method testing—A/B experiments, qualitative interviews, and usability studies—conducted with end-users and B2B customers, specifically in the hospitality sector" },
    { title: "Business Case Development", desc: "Data-backed recommendations synthesized into board presentation for investment decision-making" },
  ],
  role: `I led the UX research and design teams, orchestrating the end-to-end experimentation process from hypothesis development through testing and validation. Key responsibilities included:

• Leading and coordinating cross-functional UX research and design teams
• Orchestrating experiments and managing their testing cycles
• Managing stakeholder relationships across ABN AMRO and Tikkie teams
• Presenting results and data-backed recommendations to leadership`,
  tags: ["Experimentation", "Validation", "Prototyping"],
  impact: {
    items: [
      { metric: "4", label: "Revenue models validated" },
      { metric: "10", label: "Experiments run with customers and hospitality employees" },
      { metric: "Cashback", label: "Experiment shipped to production" },
    ],
  },
};
