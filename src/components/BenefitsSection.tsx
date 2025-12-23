import { Shield, Clock, DollarSign, Target, Building, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Catch issues before submission",
      description: "Identify zoning violations and code conflicts before the city sees them.",
    },
    {
      icon: Clock,
      title: "Reduce approval time",
      description: "Clean submissions get approved faster. Avoid the back-and-forth.",
    },
    {
      icon: DollarSign,
      title: "Save redesign costs",
      description: "Fixing problems on paper is cheaper than fixing them in review.",
    },
    {
      icon: Target,
      title: "Real zoning rules",
      description: "Built on actual city codes, not generic checklists.",
    },
    {
      icon: Building,
      title: "Residential focus",
      description: "Optimized for ADUs, single-family, and multi-unit residential projects.",
    },
    {
      icon: CheckCircle,
      title: "Clear, actionable reports",
      description: "Know exactly what's wrong and how to fix it.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Why Teams Choose Permit Shark
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className={`flex gap-4 opacity-0 animate-fade-up stagger-${(index % 4) + 1}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
