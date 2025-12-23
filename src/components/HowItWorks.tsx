import { Upload, MapPin, FileCheck, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Upload blueprint",
      description: "Drop your PDF floor plans. We read them instantly.",
    },
    {
      number: "2",
      icon: MapPin,
      title: "Select city",
      description: "We load your jurisdiction's specific zoning codes.",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Get report",
      description: "Know exactly what to fix—before the city tells you.",
    },
  ];

  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps. Zero stamps.
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 150}>
                <div className="relative text-center">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full">
                      <ArrowRight className="h-5 w-5 text-border" />
                    </div>
                  )}
                  
                  {/* Step */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4 relative group hover:bg-accent/10 transition-colors">
                    <step.icon className="h-7 w-7 text-foreground group-hover:text-accent transition-colors" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-foreground text-background rounded-lg flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
