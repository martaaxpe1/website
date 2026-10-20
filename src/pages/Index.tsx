import { usePageMeta } from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HelpSection from "@/components/HelpSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  usePageMeta(
    "Marta Axpe — Innovation and Experience Strategist",
    "Innovation and product strategy consultant helping teams turn early ideas into real products. Experience across discovery, UX research, and execution."
  );
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <WorkSection />
        <CapabilitiesSection />
        <HelpSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;