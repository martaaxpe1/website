import type { CaseStudy } from "./types";
import { placeholder } from "./helpers";

// Placeholders mark what is still to come (text and images). Search for "placeholder(" to find them.
export const vueling: CaseStudy = {
  id: "2",
  brand: "Vueling",
  title: "Platform Vision 2025",
  card: {
    image: "/images/vueling.png",
    tags: ["User Research", "Product Vision", "Service Design"],
    summary:
      "Defined a future digital platform vision grounded in passenger research and cross-departmental co-creation, creating a shared direction for Vueling’s innovation initiatives.",
  },
  subtitle:
    "Defining a future digital platform vision grounded in passenger research and cross-departmental co-creation.",
  heroMedia: { placeholder: "Hero image: a key visual of the platform vision or the passenger journey" },
  client: "Vueling Airlines",
  timeline: "4 months",
  industry: "Aviation / Travel",
  challenge: [
    "Fragmented digital touchpoints creating inconsistent passenger experiences",
    "Siloed departments with misaligned innovation priorities",
    "Need for a unified vision to guide multi-year technology investments",
  ],
  delivered: [
    {
      id: "deliverable-1",
      title: "Deliverable 1",
      nodes: [placeholder("Title and two or three sentences on the first deliverable"), placeholder("Image or video", true)],
    },
    {
      id: "deliverable-2",
      title: "Deliverable 2",
      nodes: [placeholder("Title and two or three sentences on the second deliverable"), placeholder("Image or video", true)],
    },
  ],
  approach: [
    { title: "Passenger Journey Mapping", desc: "End-to-end research across booking, travel, and post-flight experiences" },
    { title: "Stakeholder Alignment", desc: "Cross-departmental workshops to surface needs and build shared ownership" },
    { title: "Vision Articulation", desc: "Future-state platform blueprint with prioritized initiatives" },
  ],
  role: "",
  tags: ["User Research", "Product Vision", "Service Design"],
  impact: {
    items: [
      { metric: "1", label: "Unified platform vision adopted" },
      { metric: "12", label: "Departments aligned on roadmap" },
      { metric: "5-year", label: "Strategic investment plan defined" },
    ],
  },
};
