import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { usePageMeta } from "@/hooks/usePageMeta";

const About = () => {
  usePageMeta(
    "About | Marta Axpe",
    "About Marta Axpe: background, approach and experience leading multidisciplinary teams across in-house and agency roles, spanning physical and digital products."
  );
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">About Me</h1>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I help organizations to run multi-disciplinary innovation teams to discover what to build next, before
              they commit years and millions to the wrong bets. I do this by empowering small, accountable teams to
              prove fast and fail early.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is to create radical transparency in the innovation process and work closely with the business
              and stakeholders to turn pilots into outcomes with clear ownership, decision criteria, and measurable
              impact.
            </p>

            <h2 className="text-2xl font-semibold font-display pt-4">My (lengthier) background story:</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a background in industrial product design, and I love the tactility of well-designed products and
              the joy they can bring. Early on, I worked in sustainable design research, where I first explored
              water-drinking behaviour at music festivals.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Then I moved into multi-industry agencies where I deepened my expertise in all-things human-centric design
              (user-research, facilitation, prototyping, MVPs…), executing projects from early discovery to
              conceptualization. I've set up and run service design and UX research teams, managing and coaching team
              members, as well as leading projects in collaboration with UX design and Tech teams. During my time in
              consulting and agencies I've worked for corporations and scale-ups, always focusing on behavior change and
              customer experience, typically for new or emerging products and services.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The next important step of my career led me in-house to Culligan, the leading manufacturer for consumer
              drinking water solutions: from simple filtering pitchers for the home to smart flavoured-water coolers at
              the office. At Culligan, I led the innovation team and its external partners, exploring new drinking water
              propositions, building and testing prototypes, and piloting the most promising concepts with the business.
              I learned a lot about IoT technology, integrating state of the art water technology with rounded consumer
              digital experiences. The proudest outcome of my 4 years at Culligan is that one of these explorations
              became a new category in Culligan's portfolio: flavoured drinking water.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, I'm working independently, applying my experience across different contexts, testing collaboration
              models, and supporting organizations navigating early-stage innovation and design challenges.
            </p>
          </div>
        </div>
      </main>

      {/* Sweet Spot Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-6">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">My sweet spot:</h2>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-primary text-xl">•</span>
              <p className="text-lg leading-relaxed opacity-90">
                I'm particularly drawn to the intersection of physical and digital products and want to continue working
                on solutions that meaningfully combine both.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-primary text-xl">•</span>
              <p className="text-lg leading-relaxed opacity-90">
                I enjoy the full end-to-end product development spectrum, but it's the early-building phases that excite
                me the most. Once insights and opportunity areas are defined, I translate them into propositions, MVPs,
                and experiments to test and learn quickly.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-primary text-xl">•</span>
              <p className="text-lg leading-relaxed opacity-90">
                I'm strong at building and leading high-performing teams, shaping the right talent mix and establishing
                working rhythms that align with both team goals and company strategy. Over time, this has extended into
                leading broader innovation programs, where my role is often to align people, priorities, and pace so
                teams can move with clarity and confidence in complex organizational settings.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-primary text-xl">•</span>
              <p className="text-lg leading-relaxed opacity-90">
                I'm at my best when involved early in strategic conversations. Having a seat at the table allows me to
                translate ambition into clear priorities, while taking responsibility for budgets, team structures, and
                success metrics that ensure ideas are delivered, measured, and scaled with intent.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-primary text-xl">•</span>
              <p className="text-lg leading-relaxed opacity-90">
                I care deeply about water and the challenges it faces. I strongly question the existence of plastic
                bottled water in markets where access to clean drinking water is already a given. I admire organizations
                like The Ocean Cleanup for translating ambition into tangible action on a challenge that affects
                everyone.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
