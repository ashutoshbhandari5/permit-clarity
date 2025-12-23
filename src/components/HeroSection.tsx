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

            {/* Right - Creative Mockup */}
            <div 
              ref={mockupRef}
              className={cn(
                "relative transition-all duration-700 delay-200",
                mockupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Rejected permit form mockup */}
              <div className="relative">
                {/* Main paper */}
                <div className="paper-mockup rounded-lg p-6 sm:p-8 transform rotate-[-2deg] animate-float">
                  {/* Header */}
                  <div className="border-b-2 border-dashed border-amber-800/20 pb-4 mb-4">
                    <p className="text-xs text-amber-800/60 uppercase tracking-wider mb-1">Department of Bureaucratic Delays</p>
                    <h3 className="font-display font-bold text-xl text-amber-900">PERMIT APPLICATION</h3>
                    <p className="text-xs text-amber-800/50 font-mono">Form 1040-WAIT • Rev. 1998</p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <label className="text-xs font-medium text-amber-800/60 uppercase">1. Project Address</label>
                      <div className="h-8 bg-amber-100/50 rounded border border-amber-800/10 mt-1 flex items-center px-2">
                        <span className="text-sm text-amber-900/70 font-mono">1847 Oak Street, SF</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-amber-800/60 uppercase">2. Rear Setback (ft)</label>
                      <div className="h-8 bg-amber-100/50 rounded border border-amber-800/10 mt-1 flex items-center px-2">
                        <span className="text-sm text-amber-900/70 font-mono">8 ft</span>
                        <span className="ml-2 text-xs text-error font-medium">(requires 10 ft)</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-amber-800/60 uppercase">3. Estimated Review Time</label>
                      <div className="h-8 bg-amber-100/50 rounded border border-amber-800/10 mt-1 flex items-center px-2">
                        <span className="text-sm text-amber-900/70 font-mono">3-6 months (maybe longer)</span>
                      </div>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="absolute top-8 right-8 stamp px-4 py-2 rounded text-lg">
                    REJECTED
                  </div>

                  {/* Footer notice */}
                  <div className="border-t border-dashed border-amber-800/20 pt-3 mt-4">
                    <p className="text-[10px] text-amber-800/40 italic">
                      Paperwork Reduction Act Notice: We estimate this will take 400 hours of your time.
                    </p>
                  </div>
                </div>

                {/* Floating approval card - modern alternative */}
                <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-8 bg-background rounded-xl border border-border shadow-xl p-4 max-w-[200px] transform rotate-[3deg]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">With Permit Shark</p>
                      <p className="text-sm font-semibold text-foreground">Pre-Checked</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-success" />
                      <span className="text-muted-foreground">Front setback</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <XCircle className="h-3 w-3 text-error" />
                      <span className="text-foreground font-medium">Rear setback</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-success" />
                      <span className="text-muted-foreground">Height limit</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-accent font-medium mt-3">Fix before submission →</p>
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
