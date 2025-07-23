import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make Scheduling{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Magical?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Skip the back-and-forth of scheduling and focus on what truly matters—building meaningful 
          connections. With everything from finding the perfect time to meet, to prepping you with 
          key insights, and ensuring follow-ups are never missed, it's easier than ever to stay connected.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Save 5+ Hours Weekly</h3>
                <p className="text-muted-foreground text-sm">Eliminate scheduling overhead forever</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">95% Success Rate</h3>
                <p className="text-muted-foreground text-sm">Meetings that actually happen</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Perfect Every Time</h3>
                <p className="text-muted-foreground text-sm">Context, preparation, follow-up</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-4" onClick={() => {
              window.open('https://apps.apple.com/app/prsm', '_blank');
            }}>
              Download prsm now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Schedule a demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;