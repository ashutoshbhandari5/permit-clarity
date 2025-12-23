import { Pencil, Building2, HardHat, FileSearch } from "lucide-react";

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
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Who It's For</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Built for Building Professionals
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div 
              key={persona.title} 
              className={`text-center p-6 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-4">
                <persona.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
