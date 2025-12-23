import { Shield, Target, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const TrustSection = () => {
  const stats = [
    { value: "12+", label: "Cities Covered" },
    { value: "10K+", label: "Checks Completed" },
    { value: "85%", label: "First-Pass Approvals" },
  ];

  const trustPoints = [
    {
      icon: Target,
      title: "Real City Codes",
      description: "Built around actual municipal zoning ordinances and building codes—not generic templates.",
    },
    {
      icon: Shield,
      title: "Common Rejection Reasons",
      description: "Focused on the specific issues that cause 80% of residential permit rejections.",
    },
    {
      icon: Zap,
      title: "Faster Approvals",
      description: "Designed to help you submit cleaner applications that move through review faster.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="relative container-wide">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Built on Reality, Not Hype
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't promise magic. We help you catch the mistakes that cities catch.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 100} animation="scale">
                <div className="group text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border mb-4 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-300">
                    <point.icon className="h-8 w-8 text-primary" />
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
