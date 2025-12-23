import { Pencil, Building2, HardHat, FileSearch } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const WhoItsFor = () => {
  const personas = [
    {
      icon: Pencil,
      title: "Architects",
      description: "Validate designs before client presentations and permit submission.",
    },
    {
      icon: Building2,
      title: "Developers",
      description: "Reduce risk and accelerate project timelines with pre-submission checks.",
    },
    {
      icon: HardHat,
      title: "Contractors",
      description: "Avoid costly surprises from permit rejections mid-project.",
    },
    {
      icon: FileSearch,
      title: "Permit Consultants",
      description: "Streamline your review process and deliver faster results to clients.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Who It's For</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for building professionals
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <AnimatedSection key={persona.title} delay={index * 100}>
              <div className="group text-center p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4 group-hover:bg-accent/10 transition-colors">
                  <persona.icon className="h-7 w-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {persona.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
