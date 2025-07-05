import { Card } from "@/components/ui/card";
import { MessageSquare, Zap, Brain, Calendar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Scheduling",
      description: '"Schedule coffee with Kate next week" → Done. PRSM handles everything from finding the perfect time to sending beautifully crafted emails.',
      demo: {
        input: "Schedule coffee with Kate",
        output: "Confirmed! Coffee with Kate Tuesday 10 AM at Oh Crêpe!"
      }
    },
    {
      icon: Zap,
      title: "Perfect Conflict Resolution",
      description: "Smart alternatives when conflicts arise. PRSM knows preferences and suggests the best options instantly.",
      demo: {
        input: "Kate suggested 2 PM Tuesday",
        output: "Conflicts with Quarterly Review. Suggesting Tuesday 10 AM (Kate's prime time) instead."
      }
    },
    {
      icon: Brain,
      title: "Context-Aware Intelligence",
      description: "PRSM remembers everything - Kate prefers mornings, David likes lunch meetings, Sarah only does Fridays.",
      demo: {
        input: "Meeting preferences learned",
        output: "Kate: Coffee shops, mornings • David: Lunch spots • Sarah: Video calls, Fridays"
      }
    },
    {
      icon: Calendar,
      title: "Never Unprepared Again",
      description: "24-hour briefings with context, conversation starters, and reminders. Walk into every meeting confident.",
      demo: {
        input: "Meeting Tomorrow: Kate",
        output: "Purpose: Google transition • Bring: Healthcare AI article • Ask: Team hiring plans"
      }
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Scheduling That Feels Like{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Magic
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four core features that transform scheduling from a chore into a superpower.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white/80 backdrop-blur border-primary/10 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Demo */}
                  <div className="bg-accent/50 rounded-lg p-4 border border-primary/10">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Input:</p>
                          <p className="text-sm">{feature.demo.input}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">PRSM:</p>
                          <p className="text-sm font-medium">{feature.demo.output}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;