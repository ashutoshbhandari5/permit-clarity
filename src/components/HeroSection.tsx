import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative section-padding pt-28 sm:pt-36 lg:pt-40">
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

            {/* Right - Teaser Mockup (simplified) */}
            <div 
              ref={mockupRef}
              className={cn(
                "relative transition-all duration-700 delay-200",
                mockupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="relative">
                {/* Main paper - smaller teaser */}
                <div className="paper-mockup rounded-lg p-5 sm:p-6 transform rotate-[-2deg] animate-float">
                  {/* Header */}
                  <div className="border-b-2 border-dashed border-amber-800/20 pb-3 mb-3">
                    <p className="text-[10px] text-amber-800/60 uppercase tracking-wider mb-0.5">Department of Bureaucratic Delays</p>
                    <h3 className="font-display font-bold text-lg text-amber-900">PERMIT APPLICATION</h3>
                    <p className="text-[10px] text-amber-800/50 font-mono">Form 1040-WAIT • Rev. 1998</p>
                  </div>

                  {/* Simplified form fields */}
                  <div className="space-y-2 mb-4">
                    <div>
                      <label className="text-[10px] font-medium text-amber-800/60 uppercase">1. Project Address</label>
                      <div className="h-6 bg-amber-100/50 rounded border border-amber-800/10 mt-0.5 flex items-center px-2">
                        <span className="text-xs text-amber-900/70 font-mono">1847 Oak Street, SF</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-medium text-amber-800/60 uppercase">2. Rear Setback</label>
                      <div className="h-6 bg-amber-100/50 rounded border border-amber-800/10 mt-0.5 flex items-center px-2">
                        <span className="text-xs text-amber-900/70 font-mono">8 ft</span>
                        <span className="ml-1.5 text-[10px] text-error font-medium">(requires 10 ft)</span>
                      </div>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="absolute top-6 right-6 stamp px-3 py-1.5 rounded text-sm">
                    REJECTED
                  </div>

                  {/* Footer notice */}
                  <div className="border-t border-dashed border-amber-800/20 pt-2 mt-3">
                    <p className="text-[8px] text-amber-800/40 italic">
                      Paperwork Reduction Act Notice: This will take 400 hours.
                    </p>
                  </div>
                </div>

                {/* Small floating card */}
                <div className="absolute -bottom-3 -right-3 sm:bottom-2 sm:-right-6 bg-background rounded-xl border border-border shadow-lg p-3 max-w-[160px] transform rotate-[3deg]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">With Permit Shark</p>
                      <p className="text-xs font-semibold text-foreground">Pre-Checked</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <CheckCircle className="h-2.5 w-2.5 text-success" />
                      <span className="text-muted-foreground">Front setback</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <XCircle className="h-2.5 w-2.5 text-error" />
                      <span className="text-foreground font-medium">Rear setback</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <CheckCircle className="h-2.5 w-2.5 text-success" />
                      <span className="text-muted-foreground">Height limit</span>
                    </div>
                  </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-bounce">
                  <span className="text-xs mb-1">Scroll to explore</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
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
