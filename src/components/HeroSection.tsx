import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-24 sm:pt-28 lg:pt-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div 
              ref={contentRef}
              className={cn(
                "transition-all duration-700",
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Badge */}
              <div className="badge-accent mb-6">
                <AlertCircle className="h-4 w-4" />
                <span>Stop the rejection cycle</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Still filing permits like it's{" "}
                <span className="text-accent underline decoration-wavy decoration-accent/30 underline-offset-4">1999?</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Stop guessing if your blueprints will pass. Check zoning compliance before the city rejects you—saving months and thousands in redesigns.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="xl" className="group">
                  Check Your Compliance
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="xl">
                  See How It Works
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                No stamps required. Results in minutes.
              </p>
            </div>

            {/* Right - Creative Illustration */}
            <div 
              ref={mockupRef}
              className={cn(
                "relative transition-all duration-700 delay-200",
                mockupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="relative">
                {/* Main visual - Modern permit card with shark branding */}
                <div className="relative bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-500">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-success/20 rounded-full blur-2xl" />
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">Permit Shark</p>
                      <p className="text-lg font-display font-bold text-white">Compliance Report</p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      <p className="text-2xl font-display font-bold text-white">4/4</p>
                      <p className="text-xs text-white/60">Checks Passed</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      <p className="text-2xl font-display font-bold text-success">0</p>
                      <p className="text-xs text-white/60">Issues Found</p>
                    </div>
                  </div>

                  {/* Compliance items */}
                  <div className="space-y-2 mb-4">
                    {['Setback requirements', 'Height limits', 'Lot coverage', 'Zoning compliance'].map((item, i) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ready badge */}
                  <div className="flex items-center justify-center gap-2 bg-success/20 text-success rounded-full py-2 px-4 text-sm font-medium">
                    <CheckCircle className="h-4 w-4" />
                    Ready to Submit
                  </div>
                </div>

                {/* Floating rejected version behind - cleaner styling */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-6 w-2/3 bg-gradient-to-br from-amber-100/80 to-orange-100/80 rounded-xl p-3 shadow-md transform rotate-3 -z-10 border border-amber-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-amber-200 flex items-center justify-center">
                      <XCircle className="h-3 w-3 text-amber-700" />
                    </div>
                    <p className="text-[10px] font-medium text-amber-800">Old Permit</p>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error/10 border border-error/30">
                    <XCircle className="h-3 w-3 text-error" />
                    <span className="text-[10px] font-bold text-error uppercase tracking-wide">Rejected</span>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground">
                  <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
