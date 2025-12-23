import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to shred the paperwork?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of teams that have stopped guessing and started knowing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-background/20 text-background hover:bg-background/10"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-background/60 text-sm">
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
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
