import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SaudiArabiaSection from "@/components/SaudiArabiaSection";
import BrandingStrategiesSection from "@/components/BrandingStrategiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import DataInsightsSection from "@/components/DataInsightsSection";
import AdditionalProjectsSection from "@/components/AdditionalProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SaudiArabiaSection />
      <BrandingStrategiesSection />
      <ProjectsSection />
      <DataInsightsSection />
      <AdditionalProjectsSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
