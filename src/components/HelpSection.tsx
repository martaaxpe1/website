import { Card, CardContent } from "@/components/ui/card";
import { Compass, Rocket, Target } from "lucide-react";
interface HelpItem {
  id: string;
  question: string;
  icon: React.ReactNode;
  services: string[];
  description: string;
}
const helpItems: HelpItem[] = [{
  id: "new-product",
  question: "We have an innovation process, but it doesn't really produce meaningful ideas.",
  icon: <Rocket className="h-6 w-6" />,
  services: ["Experimentation", "Conceptualization", "Problem Exploration", "Innovation Management"],
  description: "I help corporate innovation teams restart momentum by reframing problems, clarifying opportunity areas, and enabling lightweight experimentation that turns process into credible new bets."
}, {
  id: "improve-existing",
  question: "We need senior discovery capacity, but not another layer of complexity.",
  icon: <Compass className="h-6 w-6" />,
  services: ["User Research", "Experimentation", "Journey Mapping", "Workshop facilitation"],
  description: "I embed with agency teams as senior discovery and service design capacity, bringing clarity to ambiguous problems and turning exploration into clear, client-ready direction."
}, {
  id: "design-system",
  question: "We generate ideas, but we get stuck before product teams can take them forward.",
  icon: <Target className="h-6 w-6" />,
  services: ["MVP Definition", "Product Framing", "Delivery Handover", "Decision Frameworks"],
  description: "I help product teams turn exploration into product-ready direction, clarifying decisions, defining MVP scope, and enabling clean handovers into delivery."
}];
const HelpSection = () => {
  return <section id="services" className="py-24 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">How Can I Help You?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three challenges I'm often brought in for, and how I help teams move forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {helpItems.map(item => <Card key={item.id} className="border-2 border-transparent shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary-text">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold font-display">{item.question}</h3>

                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">How I help:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map(service => <span key={service} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                          {service}
                        </span>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
        </div>
      </div>
    </section>;
};
export default HelpSection;