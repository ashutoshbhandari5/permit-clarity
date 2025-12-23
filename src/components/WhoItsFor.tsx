import { Pencil, Building2, HardHat, FileSearch } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const WhoItsFor = () => {
  const personas = [
    {
      icon: Pencil,
      title: "Architects",
      description: "Validate designs before client presentations and permit submission.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Developers",
      description: "Reduce risk and accelerate project timelines with pre-submission checks.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: HardHat,
      title: "Contractors",
      description: "Avoid costly surprises from permit rejections mid-project.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FileSearch,
      title: "Permit Consultants",
      description: "Streamline your review process and deliver faster results to clients.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative container-wide">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who It's For</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Built for Building Professionals
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <AnimatedSection key={persona.title} delay={index * 100} animation="scale">
              <div className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.gradient} mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <persona.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {persona.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
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
