import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First-M",
      description:
        "We believe technology should make life easier, not more complicated. Every feature we build starts with the question: 'How can we make this magical?'",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description:
        "AI is powerful, but relationships are human. We design technology that enhances human connections rather than replacing them.",
    },
    {
      icon: Target,
      title: "Obsessed with Excellence",
      description:
        "Good enough isn't good enough. We obsess over every detail to create experiences that feel effortless and delightful.",
    },
    {
      icon: Heart,
      title: "Empathy Driven",
      description:
        "We understand the frustration of broken scheduling because we've lived it. Every solution we build comes from genuine empathy for the problem.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Hours Saved" },
    { number: "10K+", label: "Happy Users" },
    { number: "95%", label: "Success Rate" },
    { number: "2019", label: "Founded" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Making Scheduling{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Magical
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              PRSM was born from a simple frustration: why does it take 7 emails
              to schedule a 30-minute coffee? We're building the world's most
              intelligent scheduling experience to give you back your time and
              mental energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Join Our Mission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="premium" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                How a broken scheduling experience sparked a revolution
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  The Problem That Started It All
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In 2019, our founder Sarah was trying to schedule a simple
                    coffee meeting with a potential investor. Seven emails and
                    three days later, they finally found a time that worked.
                  </p>
                  <p>
                    That's when she realized: we're living in the age of AI, yet
                    we're still scheduling meetings like it's 1995. Something
                    had to change.
                  </p>
                  <p>
                    What started as a weekend project to solve her own
                    frustration has become PRSM - the world's most intelligent
                    scheduling assistant.
                  </p>
                </div>
              </div>

              <Card className="p-8 bg-white/80 backdrop-blur border-primary/10">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "The best technology feels like magic, but the real magic is
                  giving people back their time to focus on what truly matters -
                  the relationships and conversations that drive us forward."
                </blockquote>
                <cite className="text-primary font-medium">
                  — Sarah Chen, Founder & CEO
                </cite>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we build and every decision
              we make
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border-primary/10 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who've already discovered what scheduling
            should feel like.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="group text-lg px-8 py-4"
            onClick={() => {
              window.open("https://apps.apple.com/app/prsm", "_blank");
            }}
          >
            Download PRSM App
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
