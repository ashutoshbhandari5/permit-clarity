import { Clock, FileX, DollarSign, AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Months of waiting",
      description: "Cities take 3-6 months to review permits. A rejection means starting over.",
    },
    {
      icon: FileX,
      title: "Manual compliance checks",
      description: "Architects spend hours cross-referencing zoning codes. Human error is inevitable.",
    },
    {
      icon: AlertCircle,
      title: "Small mistakes, big delays",
      description: "One missed setback, wrong window size, or parking miscalculation can sink your timeline.",
    },
    {
      icon: DollarSign,
      title: "Costly redesigns",
      description: "Permit rejections mean expensive revisions, contractor delays, and lost opportunity.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Permit Approval is Broken
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The traditional permit process is slow, opaque, and punishes small mistakes with massive delays.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.title} 
              className={`card-elevated card-hover p-6 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-error" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
