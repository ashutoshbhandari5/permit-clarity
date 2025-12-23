import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out Permit Shark",
      features: [
        "1 compliance check per month",
        "Basic zoning report",
        "Email support",
        "Single property",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For architects and small firms",
      features: [
        "Unlimited compliance checks",
        "Detailed violation reports",
        "Fix recommendations",
        "Priority support",
        "Up to 10 properties",
        "Export to PDF",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large firms and agencies",
      features: [
        "Everything in Pro",
        "Unlimited properties",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Team collaboration",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="relative section-padding bg-background overflow-hidden" id="pricing">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="parallax-slow absolute top-20 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        />
        <div 
          className="parallax-medium absolute bottom-40 right-[5%] w-80 h-80 bg-success/5 rounded-full blur-3xl"
        />
        <div 
          className="parallax-fast absolute top-1/2 left-[60%] w-40 h-40 bg-secondary rounded-full blur-2xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 100}>
              <div
                className={cn(
                  "relative h-full flex flex-col p-6 lg:p-8 rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-foreground text-background border-foreground shadow-2xl scale-105"
                    : "bg-background border-border hover:border-accent/30 hover:shadow-lg"
                )}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className={cn(
                    "font-display text-xl font-bold mb-2",
                    plan.popular ? "text-background" : "text-foreground"
                  )}>
                    {plan.name}
                  </h3>
                  <p className={cn(
                    "text-sm mb-4",
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  )}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      "font-display text-4xl font-bold",
                      plan.popular ? "text-background" : "text-foreground"
                    )}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={cn(
                        "text-sm",
                        plan.popular ? "text-background/60" : "text-muted-foreground"
                      )}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        plan.popular ? "bg-success/20" : "bg-success/10"
                      )}>
                        <Check className={cn(
                          "h-3 w-3",
                          plan.popular ? "text-success" : "text-success"
                        )} />
                      </div>
                      <span className={cn(
                        "text-sm",
                        plan.popular ? "text-background/80" : "text-muted-foreground"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "secondary" : "default"}
                  size="lg"
                  className={cn(
                    "w-full group",
                    plan.popular && "bg-background text-foreground hover:bg-background/90"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={400} className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;