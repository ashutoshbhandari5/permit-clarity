import { Shield, Target, Zap } from "lucide-react";

const TrustSection = () => {
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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Trust</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Built on Reality, Not Hype
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't promise magic. We help you catch the mistakes that cities catch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div 
                key={point.title} 
                className={`text-center opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
