import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup1 from "@/assets/app-mockup-1.jpg";
import appMockup2 from "@/assets/app-mockup-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Make Scheduling Feel Like Magic
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turn{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                7 emails
              </span>{" "}
              into{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                30 seconds
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              PRSM is the world's most intelligent scheduling experience. 
              Just say "Schedule coffee with Kate" and watch the magic happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group" onClick={() => {
                window.open('https://apps.apple.com/app/prsm', '_blank');
              }}>
                Download PRSM App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="premium" size="lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Save 5+ hours/week</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>95% success rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>&lt;2 min setup</span>
              </div>
            </div>
          </div>
          
          {/* Mobile App Mockups */}
          <div className="animate-scale-in delay-300">
            <div className="flex justify-center gap-6">
              <div className="relative">
                <img 
                  src={appMockup1} 
                  alt="PRSM App - Natural Language Scheduling" 
                  className="w-48 h-auto rounded-3xl shadow-elegant hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="relative mt-8">
                <img 
                  src={appMockup2} 
                  alt="PRSM App - Smart Calendar Management" 
                  className="w-48 h-auto rounded-3xl shadow-elegant hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;