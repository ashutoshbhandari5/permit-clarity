import { Shield, Clock, DollarSign, Target, Building, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Catch issues before submission",
      description: "Identify zoning violations and code conflicts before the city sees them.",
      featured: true,
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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Why Teams Choose Permit Shark
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className={`group p-6 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-up stagger-${(index % 4) + 1} ${
                benefit.featured 
                  ? "bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20 hover:border-primary/40 hover:shadow-glow" 
                  : "bg-card border-border hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                benefit.featured 
                  ? "bg-gradient-to-br from-primary to-purple-500 text-white shadow-glow" 
                  : "bg-gradient-to-br from-primary/10 to-purple-500/10"
              }`}>
                <benefit.icon className={`h-6 w-6 ${benefit.featured ? "text-white" : "text-primary"}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
