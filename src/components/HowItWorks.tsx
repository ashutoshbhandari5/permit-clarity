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
    <section className="section-padding bg-background" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps from blueprint to compliance clarity.
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
                <div className="hidden md:block absolute top-12 left-[60%] w-full">
                  <ArrowRight className="h-5 w-5 text-border" />
                </div>
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-secondary mb-6 relative">
                  <step.icon className="h-10 w-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
