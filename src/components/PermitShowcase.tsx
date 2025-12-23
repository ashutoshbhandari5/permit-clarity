import { useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const PermitShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section top hits bottom of viewport, 1 when section is centered
      const start = windowHeight;
      const end = windowHeight * 0.3;
      const current = rect.top;
      
      if (current >= start) {
        setScrollProgress(0);
      } else if (current <= end) {
        setScrollProgress(1);
      } else {
        setScrollProgress((start - current) / (start - end));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get compliance results in minutes, not months",
    },
    {
      icon: Shield,
      title: "Catch Issues Early",
      description: "Identify setback, height, and zoning violations before submission",
    },
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Avoid costly redesigns and resubmission delays",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative section-padding bg-background overflow-hidden"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            scrollProgress > 0.3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From rejected to approved
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See exactly what's wrong before the city does
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Animated Permit Card */}
          <div 
            className="relative"
            style={{
              transform: `scale(${0.85 + scrollProgress * 0.15}) translateY(${(1 - scrollProgress) * 40}px)`,
              opacity: 0.6 + scrollProgress * 0.4,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            }}
          >
            {/* Main Permit Paper */}
            <div className="paper-mockup rounded-xl p-8 sm:p-10 shadow-2xl">
              {/* Header */}
              <div className="border-b-2 border-dashed border-amber-800/20 pb-5 mb-6">
                <p className="text-xs text-amber-800/60 uppercase tracking-wider mb-1">
                  Department of Bureaucratic Delays
                </p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-amber-900">
                  PERMIT APPLICATION
                </h3>
                <p className="text-sm text-amber-800/50 font-mono mt-1">
                  Form 1040-WAIT • Rev. 1998
                </p>
              </div>

              {/* Form Fields with Detailed Analysis */}
              <div className="space-y-5 mb-8">
                <div>
                  <label className="text-xs font-medium text-amber-800/60 uppercase tracking-wide">
                    1. Project Address
                  </label>
                  <div className="h-12 bg-amber-100/50 rounded-lg border border-amber-800/10 mt-2 flex items-center px-4">
                    <span className="text-base text-amber-900/80 font-mono">1847 Oak Street, SF</span>
                    <CheckCircle className="h-5 w-5 text-success ml-auto" />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-medium text-amber-800/60 uppercase tracking-wide">
                    2. Rear Setback (ft)
                  </label>
                  <div className="h-12 bg-error/5 rounded-lg border-2 border-error/30 mt-2 flex items-center px-4">
                    <span className="text-base text-amber-900/80 font-mono">8 ft</span>
                    <span className="ml-3 text-sm text-error font-semibold bg-error/10 px-2 py-0.5 rounded">
                      requires 10 ft
                    </span>
                    <XCircle className="h-5 w-5 text-error ml-auto" />
                  </div>
                  <p className="text-xs text-error mt-2 flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" />
                    Reduce deck depth by 2 ft to comply
                  </p>
                </div>
                
                <div>
                  <label className="text-xs font-medium text-amber-800/60 uppercase tracking-wide">
                    3. Building Height
                  </label>
                  <div className="h-12 bg-amber-100/50 rounded-lg border border-amber-800/10 mt-2 flex items-center px-4">
                    <span className="text-base text-amber-900/80 font-mono">32 ft</span>
                    <span className="ml-3 text-sm text-success font-medium">within 35 ft limit</span>
                    <CheckCircle className="h-5 w-5 text-success ml-auto" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-amber-800/60 uppercase tracking-wide">
                    4. Lot Coverage
                  </label>
                  <div className="h-12 bg-amber-100/50 rounded-lg border border-amber-800/10 mt-2 flex items-center px-4">
                    <span className="text-base text-amber-900/80 font-mono">42%</span>
                    <span className="ml-3 text-sm text-success font-medium">within 45% limit</span>
                    <CheckCircle className="h-5 w-5 text-success ml-auto" />
                  </div>
                </div>
              </div>

              {/* Stamp - transforms from REJECTED to show fix */}
              <div 
                className={cn(
                  "absolute top-10 right-10 transition-all duration-500",
                  scrollProgress > 0.7 ? "opacity-30 scale-90" : "opacity-100 scale-100"
                )}
              >
                <div className="stamp px-5 py-3 rounded text-xl">
                  REJECTED
                </div>
              </div>

              {/* Fix indicator appearing */}
              <div 
                className={cn(
                  "absolute top-10 right-10 bg-success text-white px-5 py-3 rounded-lg font-bold text-lg transition-all duration-500",
                  scrollProgress > 0.7 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
              >
                1 FIX NEEDED
              </div>

              {/* Footer */}
              <div className="border-t border-dashed border-amber-800/20 pt-4 mt-6">
                <p className="text-xs text-amber-800/40 italic">
                  Paperwork Reduction Act Notice: We estimate this will take 400 hours of your time.
                </p>
              </div>
            </div>

            {/* Floating Pre-Check Card - expands with scroll */}
            <div 
              className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-12 bg-background rounded-2xl border border-border shadow-2xl p-5 sm:p-6 max-w-[260px] transition-all duration-300"
              style={{
                transform: `scale(${0.9 + scrollProgress * 0.1}) translateX(${(1 - scrollProgress) * 20}px)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">With Permit Shark</p>
                  <p className="text-base font-bold text-foreground">Pre-Checked</p>
                </div>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Front setback</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <XCircle className="h-4 w-4 text-error flex-shrink-0" />
                  <span className="text-foreground font-semibold">Rear setback</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Height limit</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Lot coverage</span>
                </div>
              </div>
              
              <button className="mt-4 text-sm text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Fix before submission <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "flex gap-5 transition-all duration-500",
                  scrollProgress > 0.3 + index * 0.15 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                )}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Mini stats */}
            <div 
              className={cn(
                "grid grid-cols-3 gap-4 pt-6 border-t border-border transition-all duration-500",
                scrollProgress > 0.8 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div>
                <p className="font-display text-2xl font-bold text-foreground">5 min</p>
                <p className="text-sm text-muted-foreground">Analysis time</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Accuracy rate</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">$10K+</p>
                <p className="text-sm text-muted-foreground">Avg. saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermitShowcase;
