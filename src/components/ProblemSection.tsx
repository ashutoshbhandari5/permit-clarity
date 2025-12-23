import { Clock, FileX, DollarSign, AlertCircle, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const stats = [
    { value: "3-6", label: "months average wait", suffix: "" },
    { value: "$15K", label: "avg. redesign cost", suffix: "+" },
    { value: "40%", label: "rejection rate", suffix: "" },
  ];

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
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Red/orange accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-error/10 to-transparent blur-[100px]" />
      
      <div className="relative container-wide">
        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 opacity-0 animate-fade-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-accent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 opacity-0 animate-fade-up stagger-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/10 border border-error/20 text-error font-semibold text-sm uppercase tracking-wider mb-4">
            <TrendingDown className="h-4 w-4" />
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Permit Approval is Broken
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The traditional permit process is slow, opaque, and punishes small mistakes with massive delays.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.title} 
              className={`group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-error/30 hover:bg-error/5 transition-all duration-300 opacity-0 animate-fade-up stagger-${index + 2}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-error/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="h-6 w-6 text-error" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
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
