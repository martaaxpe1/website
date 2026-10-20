import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Palette, Wrench, Briefcase, GraduationCap, Languages } from "lucide-react";
interface CapabilityItem {
  name: string;
  level?: string;
  subtitle?: string;
  organization?: string;
  year?: string;
}
interface CapabilityGroup {
  label: string;
  items: CapabilityItem[];
}
interface CapabilityCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: CapabilityItem[];
  groups?: CapabilityGroup[];
}
const capabilities: CapabilityCategory[] = [
  {
    id: "skills",
    label: "Skills",
    icon: <Palette className="h-4 w-4" />,
    items: [
      { name: "Innovation Strategy & Management" },
      { name: "Product Discovery & MVP Delivery" },
      { name: "Product, Service & Experience Strategy" },
      { name: "Human-Centered Design & UX Research" },
      { name: "Lean Experimentation" },
      { name: "Prototyping, Pilots & Validation" },
      { name: "AI-Enabled Product Strategy" },
      { name: "IoT & Connected Digital Ecosystems" },
      { name: "Sustainable Product Development" },
      { name: "Strategic Stakeholder Facilitation" },
      { name: "Cross-Functional Collaboration" },
      { name: "Team Building & Coaching" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="h-4 w-4" />,
    items: [
      {
        name: "User Research",
        subtitle: "Dovetail, Condens, Maze, UserTesting",
      },
      {
        name: "Design",
        subtitle: "Figma, Adobe Creative Suite, Sketch",
      },
      {
        name: "Journey Mapping",
        subtitle: "Miro, TheyDo",
      },
      {
        name: "Workflow and Collaboration",
        subtitle: "Miro, Jira, Monday.com, Notion",
      },
      {
        name: "AI Prototyping",
        subtitle: "Lovable, Stitch, Zapier",
      },
      {
        name: "AI Assistants",
        subtitle: "Claude, NotebookLM",
      },
      {
        name: "Team Management",
        subtitle: "Leapsome",
      },
      {
        name: "Office Suite",
        subtitle: "Google Workspace, Microsoft 360",
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase className="h-4 w-4" />,
    items: [
      {
        name: "Innovation + Research Consultant",
        organization: "Independent",
        year: "07/2025–Today",
      },
      {
        name: "Global Head of Innovation",
        organization: "Culligan International",
        year: "10/2022–06/2025",
      },
      {
        name: "Product Owner, Adv Dev Team",
        organization: "Culligan International",
        year: "11/2020–09/2022",
      },
      {
        name: "Strategic Design Lead",
        organization: "WEAREREASONABLEPEOPLE",
        year: "11/2017–10/2020",
      },
      {
        name: "Consultant + Project Lead",
        organization: "INSITUM (now Accenture)",
        year: "10/2014–10/2017",
      },
      {
        name: "Research Assistant",
        organization: "Design for Sustainability (TU Delft)",
        year: "07/2012–10/2014",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    items: [],
    groups: [
      {
        label: "Degrees",
        items: [
          {
            name: "MSc Strategic Product Design",
            organization: "Delft University of Technology",
            year: "2011-2013",
          },
          {
            name: "BA Product Design",
            organization: "EINA - Universitat Autònoma de Barcelona",
            year: "2007-2011",
          },
        ],
      },
      {
        label: "Certifications",
        items: [
          {
            name: "Agents Course",
            organization: "Huggingface.co",
            year: "Ongoing",
          },
          {
            name: "Data Analytics Professional Certificate",
            organization: "DeepLearning.AI",
            year: "2025",
          },
          {
            name: "Prompting Essentials Specialization",
            organization: "Google",
            year: "2025",
          },
          {
            name: "Prototyping with AI",
            organization: "IDEO U",
            year: "2025",
          },
        ],
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    icon: <Languages className="h-4 w-4" />,
    items: [
      {
        name: "Spanish",
        level: "Native",
      },
      {
        name: "English",
        level: "Fluent",
      },
      {
        name: "French",
        level: "Fluent",
      },
      {
        name: "Dutch",
        level: "Basic",
      },
    ],
  },
];
const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  return (
    <section id="capabilities" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my capabilities, background, and professional experience.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12 h-auto p-1">
            {capabilities.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {capabilities.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0 animate-in fade-in-50 duration-300">
              <div className="bg-card rounded-2xl p-4 sm:p-8 shadow-lg">
                {category.groups ? (
                  <div className="space-y-8">
                    {category.groups.map((group) => (
                      <div key={group.label}>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                          {group.label}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {group.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col p-4 rounded-xl bg-background hover:bg-muted transition-colors"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="font-bold">{item.name}</span>
                                {item.year && (
                                  <span className="text-xs text-muted-foreground shrink-0">{item.year}</span>
                                )}
                              </div>
                              {item.organization && (
                                <span className="text-sm text-muted-foreground">{item.organization}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : category.id === "experience" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 sm:p-5 rounded-xl bg-background hover:bg-muted transition-colors"
                      >
                        <div className="text-sm font-medium text-muted-foreground sm:whitespace-nowrap sm:min-w-[120px]">
                          {item.year}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-foreground">{item.name}</span>
                          {item.organization && (
                            <span className="text-sm text-muted-foreground">{item.organization}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col p-4 rounded-xl bg-background hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold">{item.name}</span>
                          {item.year && <span className="text-xs text-muted-foreground shrink-0">{item.year}</span>}
                        </div>
                        {item.organization && (
                          <span className="text-sm text-muted-foreground">{item.organization}</span>
                        )}
                        {item.subtitle && <span className="text-sm text-muted-foreground">{item.subtitle}</span>}
                        {item.level && (
                          <Badge
                            variant="secondary"
                            className={`text-xs mt-1 w-fit ${
                              item.level === "Fluent"
                                ? "bg-accent text-accent-foreground hover:bg-accent"
                                : item.level === "Basic"
                                  ? "bg-muted-foreground/20 text-muted-foreground hover:bg-muted-foreground/20"
                                  : ""
                            }`}
                          >
                            {item.level}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
export default CapabilitiesSection;
