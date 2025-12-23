import { Shield, Clock, DollarSign, Target, Building, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Catch issues early",
      description: "Find violations before the city does—when they're cheap to fix.",
    },
    {
      icon: Clock,
      title: "Save months",
      description: "Clean submissions get approved faster. Skip the rejection loop.",
    },
    {
      icon: DollarSign,
      title: "Cut redesign costs",
      description: "Fixing on paper costs nothing. Fixing after rejection costs thousands.",
    },
    {
      icon: Target,
      title: "Real city codes",
      description: "We use actual municipal zoning data, not generic templates.",
    },
    {
      icon: Building,
      title: "Residential focus",
      description: "Built for ADUs, single-family, and multi-unit projects.",
    },
    {
      icon: CheckCircle,
      title: "Clear guidance",
      description: "Every issue comes with a specific, actionable fix.",
    },
  ];

  return (
    <section className="relative section-padding bg-background overflow-hidden" id="features">
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="parallax-medium absolute top-40 -right-20 w-80 h-80 bg-success/5 rounded-full blur-3xl" />
        <div className="parallax-slow absolute -bottom-20 left-[20%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="parallax-fast absolute top-20 left-[10%] w-40 h-40 bg-secondary rounded-full blur-2xl" />
      </div>
      
      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why teams switch to Permit Shark
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 80}>
              <div className="group p-6 rounded-2xl border border-border hover:border-accent/30 bg-background transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <benefit.icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
