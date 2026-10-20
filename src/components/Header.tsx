import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(null);
      return;
    }

    // Default to "home" (Marta Axpe) when at the top of the page
    setActiveSection("home");

    const sections = ["work", "capabilities", "services", "contact"];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // At the very top, set to "home"
      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }
      
      // At the bottom of the page, set to "contact"
      const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }
      
      // Find the section that is currently most visible in the viewport
      const headerOffset = 120;
      let currentSection = "home";
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset + 100 && rect.bottom > headerOffset) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinkClass = (isActive: boolean) =>
    `text-base transition-colors pb-1 border-b-2 ${
      isActive
        ? "font-bold text-foreground border-foreground"
        : "font-medium text-muted-foreground border-transparent hover:text-foreground"
    }`;

  const mobileNavLinkClass = (isActive: boolean) =>
    `block py-3 text-lg transition-colors ${
      isActive
        ? "font-bold text-foreground"
        : "font-medium text-muted-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container max-w-5xl mx-auto px-6 py-4 md:py-8">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className={`text-lg font-display transition-colors pb-1 border-b-2 ${
              isHomePage && activeSection === "home"
                ? "font-bold text-foreground border-foreground"
                : "font-bold text-foreground border-transparent hover:border-foreground"
            }`}
          >
            Marta Axpe
          </button>
          
          {/* Desktop Navigation - Section links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("work")}
              className={navLinkClass(isHomePage && activeSection === "work")}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className={navLinkClass(isHomePage && activeSection === "capabilities")}
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={navLinkClass(isHomePage && activeSection === "services")}
            >
              Services
            </button>
            <Link 
              to="/about" 
              className={navLinkClass(isAboutPage)}
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Get in Touch - hidden on mobile */}
            <Button
              variant="default"
              size="sm"
              className={`hidden md:inline-flex px-5 transition-all ${
                isHomePage && activeSection === "contact"
                  ? "bg-primary text-primary-foreground ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              asChild
            >
              <a href="mailto:martaaxpe@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container max-w-5xl mx-auto px-6 py-4">
            <button
              onClick={() => scrollToSection("work")}
              className={`${mobileNavLinkClass(isHomePage && activeSection === "work")} w-full text-left`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className={`${mobileNavLinkClass(isHomePage && activeSection === "capabilities")} w-full text-left`}
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${mobileNavLinkClass(isHomePage && activeSection === "services")} w-full text-left`}
            >
              Services
            </button>
            <Link 
              to="/about" 
              className={mobileNavLinkClass(isAboutPage)}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="mailto:martaaxpe@gmail.com" 
              className="block py-3 text-lg font-medium text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
