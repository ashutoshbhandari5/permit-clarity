import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-primary" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative container-narrow text-center">
        <div className="opacity-0 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm text-white/90">Start checking in minutes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Guessing.
            <br />
            Start Knowing.
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
            Check your building permit compliance in minutes—before the city does.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Check Your Compliance
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
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
