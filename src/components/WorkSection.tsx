import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "@/content/cases";

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Selected Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Case studies illustrating my approach to innovation, product strategy, and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((work) => (
            <Link
              key={work.id}
              to={`/case/${work.id}`}
              className="group block overflow-hidden rounded-lg bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                {work.card.image ? (
                  <img
                    src={work.card.image}
                    alt={`${work.brand} logo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white p-6">
                    <span className="rounded-lg border-2 border-dashed border-primary/40 px-4 py-3 text-center text-sm font-medium text-primary">
                      <span className="mr-1 text-[11px] uppercase tracking-[0.15em]">Placeholder</span> {work.brand} logo
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {work.brand}
                  </span>
                  <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors mt-1">
                    {work.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.card.tags.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{work.card.summary}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </CardContent>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
