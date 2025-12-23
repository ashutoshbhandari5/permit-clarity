import { Shield, Clock, DollarSign, Target, Building, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Catch issues early",
      description: "Find violations before the city does—when they're cheap to fix.",
      stat: "95%",
      statLabel: "issues caught pre-submit",
      color: "accent",
    },
    {
      icon: Clock,
      title: "Save months of delays",
      description: "Clean submissions get approved faster. Skip the rejection loop entirely.",
      stat: "6 weeks",
      statLabel: "average time saved",
      color: "success",
    },
    {
      icon: DollarSign,
      title: "Cut redesign costs",
      description: "Fixing on paper costs nothing. Fixing after rejection costs thousands.",
      stat: "$12K",
      statLabel: "avg savings per project",
      color: "accent",
    },
  ];

  const features = [
    { icon: Target, text: "Real municipal zoning data" },
    { icon: Building, text: "Built for residential projects" },
    { icon: CheckCircle, text: "Actionable fix guidance" },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-background overflow-hidden" id="features">
      <div className="container-wide px-4 sm:px-6 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="badge-accent mb-4 mx-auto w-fit">
            <Shield className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Evolution, not just <span className="text-accent">digitization</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just put your PDF on a screen. We completely reimagine the permit workflow for the modern era.
          </p>
        </AnimatedSection>

        {/* Main benefit cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 100}>
              <div className={cn(
                "group relative h-full rounded-2xl p-6 sm:p-8 border transition-all duration-500",
                "bg-gradient-to-br from-secondary/50 to-secondary/20 border-border/50",
                "hover:border-accent/40 hover:shadow-lg hover:-translate-y-1"
              )}>
                {/* Background glow on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  benefit.color === "success" ? "bg-success/5" : "bg-accent/5"
                )} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300",
                    benefit.color === "success" 
                      ? "bg-success/10 group-hover:bg-success/20" 
                      : "bg-accent/10 group-hover:bg-accent/20"
                  )}>
                    <benefit.icon className={cn(
                      "h-7 w-7 transition-colors",
                      benefit.color === "success" ? "text-success" : "text-accent"
                    )} />
                  </div>

                  {/* Title & description */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Stat highlight */}
                  <div className="pt-5 border-t border-border/50">
                    <div className="flex items-end gap-2">
                      <span className={cn(
                        "font-display text-3xl font-bold",
                        benefit.color === "success" ? "text-success" : "text-accent"
                      )}>
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-muted-foreground pb-1">
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Feature strip */}
        <AnimatedSection delay={300}>
          <div className="relative rounded-2xl bg-gradient-to-r from-foreground to-foreground/95 p-6 sm:p-8 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-success/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <feature.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BenefitsSection;
