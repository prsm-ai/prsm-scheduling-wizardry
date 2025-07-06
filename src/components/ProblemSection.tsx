import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

const ProblemSection = () => {
const problems = [
    "7+ back-and-forth emails to find a time",
    "Double-bookings and timezone disasters",
    "Lost context about why you're meeting",
    "No-shows because people forget",
    "Zero preparation equals wasted meetings"
  ];

  const solutions = [
    "One sentence. Done. 30 seconds total.",
    "Smart conflict detection and alternatives",
    "Context-aware meeting preparation",
    "Intelligent reminders and follow-ups",
    "Perfect briefings before every meeting"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Scheduling is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Broken
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've all been there. The endless email chains, the missed meetings, 
            the embarrassing double-bookings. There has to be a better way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="animate-fade-in delay-200">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground">The Old Way</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-muted/40 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground font-medium">
                  Result: Frustration, missed opportunities, wasted time
                </p>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in delay-400">
            <div className="bg-gradient-secondary p-8 rounded-2xl border border-primary/20 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">The PRSM Way</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{solution}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  Result: Perfect meetings, 5+ hours saved weekly, stress-free scheduling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in delay-600">
          <Button variant="hero" size="lg" className="group">
            Experience the Magic
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;