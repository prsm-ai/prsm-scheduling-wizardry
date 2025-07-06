import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Star, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with smart scheduling",
      icon: Zap,
      features: [
        "5 AI-scheduled meetings per month",
        "Basic natural language processing",
        "Email integration",
        "Calendar sync",
        "Mobile app access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For power users who schedule regularly",
      icon: Star,
      features: [
        "Unlimited AI scheduling",
        "Advanced conflict resolution",
        "Context-aware intelligence",
        "Meeting preparation briefings",
        "Voice scheduling",
        "Priority support",
        "Custom preferences learning"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Executive",
      price: "$49",
      period: "per month",
      description: "For executives and busy professionals",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Executive assistant integration",
        "Multi-calendar management",
        "Team scheduling coordination",
        "Custom email templates",
        "Advanced analytics",
        "White-glove onboarding",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Simple{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your scheduling needs. Start free, upgrade when you're ready.
          </p>
          
          {/* Money-back guarantee */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Check className="w-4 h-4" />
            30-day money-back guarantee on all paid plans
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular
                    ? "border-primary shadow-elegant scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about PRSM pricing</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I cancel anytime?",
                answer: "Yes! You can cancel your subscription at any time. Your plan will remain active until the end of your billing period."
              },
              {
                question: "What happens to my data if I downgrade?",
                answer: "Your data is always safe. If you downgrade, you'll simply have access to fewer features, but all your scheduling history remains intact."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes! Save 20% when you choose annual billing on Pro and Executive plans. Contact us for details."
              },
              {
                question: "Is there a limit to how many meetings I can schedule?",
                answer: "The Free plan allows 5 AI-scheduled meetings per month. Pro and Executive plans have unlimited scheduling."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;