import { Upload, MapPin, FileCheck, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Blueprint",
      description: "Drop in your PDF floor plans. We support all standard architectural drawing formats.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Select Your City",
      description: "Choose the jurisdiction. We load the specific zoning and building codes that apply.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Get Your Report",
      description: "Receive a detailed compliance check in minutes, not months. Know exactly what to fix.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="how-it-works">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="relative container-wide">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Three Steps to Clarity
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From blueprint to compliance report in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 left-[55%] items-center w-full z-0">
                  <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                  <ArrowRight className="h-4 w-4 text-primary/50 -ml-2" />
                </div>
              )}
              
              <div className="relative text-center z-10">
                {/* Step number badge */}
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-secondary to-background border border-border mb-6 relative group hover:border-primary/30 transition-all duration-300">
                  <step.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-purple-500 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-glow">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
