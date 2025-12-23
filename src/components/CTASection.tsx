import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <div className="opacity-0 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Check your building permit compliance in minutes—before the city does.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button variant="accent" size="xl" className="group">
              Check Your Compliance
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> Results in minutes
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
