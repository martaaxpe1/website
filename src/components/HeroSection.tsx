import { Briefcase, Download, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleNameClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowEasterEgg(true);
      setClickCount(0);
    }
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-[85svh] flex flex-col items-center justify-between px-6 pt-16 pb-4 md:pb-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-start w-full">
          {/* Avatar - Left side */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img src="/images/Marta_blue.jpg" alt="Illustrated portrait of Marta" width={800} height={800} fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content - Right side */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-4xl md:text-5xl font-bold font-display">
              Hi! <span className="inline-block animate-wave" aria-hidden="true">👋</span>
            </p>
            
            {/* Name */}
            <h1 
              onClick={handleNameClick}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display select-none"
            >
              I'm Marta
            </h1>
            
            {/* Title & Description */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Innovation and Experience Strategist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                I've worked in-house and in agencies, always chasing the same thing: understanding what people actually need, then designing the experience that delivers it, across physical and digital.
              </p>
            </div>

            {/* Journey Link */}
            <Link to="/about" className="inline-block text-primary-text hover:text-foreground underline underline-offset-4 text-lg transition-colors">
              More about my journey
            </Link>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-4">
              <button onClick={scrollToWork} className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground min-h-11 py-2.5 px-4 sm:px-6 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap min-w-0">
                <Briefcase className="h-4 w-4 flex-shrink-0" />
                <span>View Work</span>
              </button>
              <a href="/marta-axpe-cv.pdf" download="Marta Axpe CV.pdf" className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground min-h-11 py-2.5 px-4 sm:px-6 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap min-w-0">
                <Download className="h-4 w-4 flex-shrink-0" />
                <span>CV</span>
              </a>
              <a href="https://www.linkedin.com/in/marta-axpe-43978524/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground min-h-11 py-2.5 px-4 sm:px-6 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap min-w-0">
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <button 
        onClick={scrollToWork}
        className="hidden md:flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll to work section"
      >
        <ChevronDown aria-hidden="true" className="h-10 w-10 animate-nudge" />
      </button>

      {/* Easter Egg Dialog */}
      <Dialog open={showEasterEgg} onOpenChange={setShowEasterEgg}>
        <DialogContent className="sm:max-w-md text-center overflow-hidden">
          <div className="relative py-8">
            {/* Fireworks */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-firework"
                  style={{
                    left: `${50 + (Math.random() - 0.5) * 80}%`,
                    top: `${50 + (Math.random() - 0.5) * 80}%`,
                    backgroundColor: `hsl(var(--chart-${Math.floor(Math.random() * 5) + 1}))`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${0.8 + Math.random() * 0.4}s`,
                  }}
                />
              ))}
            </div>
            <h2 className="text-3xl font-bold font-display text-foreground">
              🎉 Gracias Glenn! 🎉
            </h2>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;