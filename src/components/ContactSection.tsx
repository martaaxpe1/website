import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary text-secondary-foreground">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Let's Work Together</h2>
        <p className="text-xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto">
          If you're investing in innovation and need experienced support to navigate early ambiguity and move ideas
          forward, I'm open to a conversation.
        </p>

        <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
          <a href="mailto:martaaxpe@gmail.com">
            <Button
              size="lg"
              className="text-base px-8 py-6 text-lg group bg-primary text-secondary hover:bg-primary/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/marta-axpe-43978524/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-base px-8 py-6 text-lg group bg-primary text-secondary hover:bg-primary/90"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Visit LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-secondary-foreground/40">
          <p className="text-secondary-foreground/80 text-sm">
            © {new Date().getFullYear()} Marta Axpe. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
