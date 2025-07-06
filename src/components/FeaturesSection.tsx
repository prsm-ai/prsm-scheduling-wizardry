import { Card } from "@/components/ui/card";
import { MessageSquare, Zap, Brain, Calendar } from "lucide-react";

const FeaturesSection = () => {
const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Scheduling",
      description: '"Schedule coffee with Kate next week" → Done. PRSM handles everything from finding the perfect time to sending beautifully crafted emails.',
      highlight: "30 seconds total"
    },
    {
      icon: Zap,
      title: "Perfect Conflict Resolution",
      description: "Smart alternatives when conflicts arise. PRSM knows your preferences and suggests the best options instantly.",
      highlight: "No more back-and-forth"
    },
    {
      icon: Brain,
      title: "Context-Aware Intelligence",
      description: "PRSM remembers everything - Kate prefers mornings, David likes lunch meetings, your favorite coffee spots.",
      highlight: "Learns your patterns"
    },
    {
      icon: Calendar,
      title: "Never Unprepared Again",
      description: "24-hour briefings with context, conversation starters, and reminders. Walk into every meeting confident.",
      highlight: "Always prepared"
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
                  
                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature.highlight}
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