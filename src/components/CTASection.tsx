import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText, Zap, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-success/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <AnimatedSection>
            <div className="badge-accent mb-6 w-fit border-accent/30 bg-accent/10">
              <Sparkles className="h-4 w-4" />
              <span className="text-white">Get Started Today</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Ready to shred the <span className="text-accent">paperwork?</span>
            </h2>

            <p className="text-background/70 text-lg mb-8 max-w-lg leading-relaxed">
              Join 10,000+ architects, contractors, and developers who have moved from the filing cabinet to the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 group shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-background/30 text-background hover:bg-background/10 hover:border-background/50"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-background/60 text-sm">
              {[
                "No credit card required",
                "Results in minutes",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Visual element */}
          <AnimatedSection delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              {/* Main card */}
              <div className="relative bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6 sm:p-8 max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-background/50 uppercase tracking-wider">Permit Shark</p>
                    <p className="font-display font-bold text-background">Quick Check</p>
                  </div>
                </div>

                {/* Progress animation */}
                <div className="space-y-4 mb-6">
                  {[
                    { label: "Upload plans", done: true },
                    { label: "Scan for issues", done: true },
                    { label: "Get compliance report", done: true },
                  ].map((step, index) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-sm text-background/80">{step.label}</span>
                      <span className="ml-auto text-xs text-success">Done</span>
                    </div>
                  ))}
                </div>

                {/* Result badge */}
                <div className="bg-success/20 border border-success/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="h-5 w-5 text-success" />
                    <span className="font-display font-bold text-lg text-background">Ready to Submit!</span>
                  </div>
                  <p className="text-xs text-background/60">All 4 compliance checks passed</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-4 top-8 sm:-left-8 bg-background rounded-xl p-4 shadow-xl transform -rotate-3 animate-float">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-foreground">2.5min</p>
                  <p className="text-xs text-muted-foreground">avg. check time</p>
                </div>
              </div>

              {/* Floating count card */}
              <div className="absolute -right-2 -bottom-4 sm:-right-6 sm:-bottom-6 bg-background rounded-xl p-4 shadow-xl transform rotate-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">47,203</p>
                    <p className="text-[10px] text-muted-foreground">permits checked</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
