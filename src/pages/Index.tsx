import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
