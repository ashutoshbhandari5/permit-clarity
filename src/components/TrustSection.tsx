import { Shield, Target, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const TrustSection = () => {
  const stats = [
    { value: "12+", label: "Cities covered" },
    { value: "10K+", label: "Checks completed" },
    { value: "85%", label: "First-pass approvals" },
  ];

  const trustPoints = [
    {
      icon: Target,
      title: "Real city codes",
      description: "Built on actual municipal zoning ordinances—not generic templates.",
    },
    {
      icon: Shield,
      title: "Common rejection reasons",
      description: "We focus on the issues that cause 80% of permit rejections.",
    },
    {
      icon: Zap,
      title: "Faster approvals",
      description: "Clean submissions move through review faster. Period.",
    },
  ];

  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="parallax-slow absolute top-1/4 -left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        <div className="parallax-fast absolute bottom-1/4 right-[5%] w-72 h-72 bg-success/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-wide relative z-10">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-secondary/50 border border-border">
                <div className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Trust Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built on reality, not hype
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't promise magic. We help you catch the mistakes that cities catch.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4">
                    <point.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
