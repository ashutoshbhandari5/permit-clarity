import { Clock, FileX, DollarSign, RotateCcw } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      stat: "3-6 mo",
      title: "Average wait time",
      description: "Cities take months to review permits. One rejection means starting the clock over.",
    },
    {
      icon: FileX,
      stat: "40%",
      title: "Rejection rate",
      description: "Nearly half of residential permits get rejected on first submission.",
    },
    {
      icon: DollarSign,
      stat: "$15K+",
      title: "Redesign costs",
      description: "Each rejection means architect fees, contractor delays, and lost opportunities.",
    },
    {
      icon: RotateCcw,
      stat: "∞",
      title: "Frustration loops",
      description: "Submit. Wait. Reject. Revise. Repeat. It doesn't have to be this way.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">The Problem</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The permit process is stuck in the past
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Manual reviews, vague requirements, and endless back-and-forth. You deserve better.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <AnimatedSection key={problem.title} delay={index * 100}>
              <div className="group bg-background rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <problem.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">{problem.stat}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
