import { useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle, ArrowRight, Sparkles, FileCheck, Zap, Shield, Clock, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PermitShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Progress from 0 to 1 as section scrolls through viewport
      const start = windowHeight;
      const end = -sectionHeight * 0.5;
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

  // Animation phases based on scroll progress
  const phase1 = Math.min(scrollProgress * 3, 1); // 0-33%: Show rejected state
  const phase2 = Math.max(0, Math.min((scrollProgress - 0.33) * 3, 1)); // 33-66%: Scanning/analyzing
  const phase3 = Math.max(0, Math.min((scrollProgress - 0.66) * 3, 1)); // 66-100%: Approved state

  const features = [
    { icon: Zap, title: "Instant Analysis", description: "Results in minutes" },
    { icon: Shield, title: "Catch Issues Early", description: "Before the city does" },
    { icon: Clock, title: "Save Time & Money", description: "Avoid costly redesigns" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left - Animated Permit Journey */}
            <div className="relative flex justify-center lg:justify-end">
              <div 
                className="relative w-full max-w-md"
                style={{
                  transform: `scale(${0.9 + phase1 * 0.1})`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* The Permit Document */}
                <div 
                  className={cn(
                    "relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500",
                    phase3 > 0.5 ? "border-success/50 shadow-[0_0_40px_hsl(var(--success)/0.2)]" : "border-amber-200/50 shadow-2xl"
                  )}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-amber-200/30 rotate-45" />
                  </div>

                  {/* Header with animated icon */}
                  <div className="flex items-start gap-4 mb-6 border-b-2 border-dashed border-amber-300/50 pb-4">
                    <div 
                      className={cn(
                        "relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500",
                        phase3 > 0.5 ? "bg-success/10" : "bg-amber-100"
                      )}
                    >
                      {/* Scanning animation */}
                      {phase2 > 0 && phase2 < 1 && (
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/50 to-transparent"
                            style={{
                              transform: `translateY(${(phase2 * 100) - 100}%)`,
                              transition: 'transform 0.1s linear',
                            }}
                          />
                        </div>
                      )}
                      <FileCheck 
                        className={cn(
                          "h-7 w-7 transition-colors duration-500",
                          phase3 > 0.5 ? "text-success" : "text-amber-600"
                        )} 
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-600/70 uppercase tracking-wider font-semibold mb-1">
                        Building Permit
                      </p>
                      <h3 className="font-display font-bold text-xl text-amber-900">
                        Application #2024-1847
                      </h3>
                      <p className="text-sm text-amber-700/60 font-mono mt-1">
                        1847 Oak Street, San Francisco
                      </p>
                    </div>
                  </div>

                  {/* Compliance Items */}
                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Front Setback", value: "15 ft", required: "15 ft min", pass: true },
                      { label: "Rear Setback", value: "8 ft", required: "10 ft min", pass: false },
                      { label: "Building Height", value: "32 ft", required: "35 ft max", pass: true },
                      { label: "Lot Coverage", value: "42%", required: "45% max", pass: true },
                    ].map((item, index) => {
                      const itemProgress = Math.max(0, Math.min((phase2 - index * 0.1) * 2, 1));
                      const isFixed = phase3 > 0.5 && !item.pass;
                      const showPass = item.pass || isFixed;
                      
                      return (
                        <div 
                          key={item.label}
                          className={cn(
                            "relative p-3 rounded-xl transition-all duration-300 border",
                            showPass 
                              ? "bg-success/5 border-success/20" 
                              : itemProgress > 0.5 
                                ? "bg-error/5 border-error/30" 
                                : "bg-amber-100/50 border-amber-200/50"
                          )}
                          style={{
                            opacity: phase1 > index * 0.1 ? 1 : 0.3,
                            transform: `translateX(${phase1 > index * 0.1 ? 0 : 20}px)`,
                            transition: 'all 0.4s ease-out',
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        >
                          {/* Scanning line effect */}
                          {itemProgress > 0 && itemProgress < 1 && (
                            <div 
                              className="absolute inset-y-0 left-0 w-1 bg-accent rounded-l-xl"
                              style={{
                                height: `${itemProgress * 100}%`,
                                transition: 'height 0.1s linear',
                              }}
                            />
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                                showPass ? "bg-success/10" : itemProgress > 0.5 ? "bg-error/10" : "bg-amber-200/50"
                              )}>
                                {itemProgress > 0.5 ? (
                                  showPass ? (
                                    <Check className="h-4 w-4 text-success" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-error" />
                                  )
                                ) : (
                                  <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                                )}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-amber-900">{item.label}</p>
                                <p className="text-xs text-amber-700/60">{item.required}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={cn(
                                "font-mono font-semibold text-sm transition-colors",
                                showPass ? "text-success" : itemProgress > 0.5 ? "text-error" : "text-amber-800"
                              )}>
                                {isFixed ? "10 ft ✓" : item.value}
                              </p>
                            </div>
                          </div>
                          
                          {/* Fix suggestion */}
                          {!item.pass && itemProgress > 0.8 && phase3 < 0.5 && (
                            <div 
                              className="mt-2 pt-2 border-t border-error/20"
                              style={{
                                opacity: itemProgress > 0.8 ? 1 : 0,
                                transition: 'opacity 0.3s ease-out',
                              }}
                            >
                              <p className="text-xs text-error flex items-center gap-1">
                                <ArrowRight className="h-3 w-3" />
                                Reduce deck depth by 2 ft to comply
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Status Stamp - Animated transition */}
                  <div className="relative h-20 flex items-center justify-center">
                    {/* REJECTED stamp */}
                    <div 
                      className={cn(
                        "absolute flex items-center gap-3 px-6 py-3 rounded-xl border-3 transition-all duration-500",
                        "border-error text-error bg-error/5"
                      )}
                      style={{
                        opacity: phase3 > 0.3 ? 0 : phase2 > 0.5 ? 1 : 0.3,
                        transform: `scale(${phase3 > 0.3 ? 0.8 : 1}) rotate(-3deg)`,
                        transition: 'all 0.5s ease-out',
                      }}
                    >
                      <XCircle className="h-6 w-6" />
                      <span className="font-display font-bold text-xl uppercase tracking-wider">
                        Rejected
                      </span>
                    </div>

                    {/* Processing indicator */}
                    <div 
                      className="absolute flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-accent text-accent bg-accent/5"
                      style={{
                        opacity: phase3 > 0 && phase3 < 0.7 ? 1 : 0,
                        transform: `scale(${phase3 > 0 && phase3 < 0.7 ? 1 : 0.8})`,
                        transition: 'all 0.4s ease-out',
                      }}
                    >
                      <Sparkles className="h-5 w-5 animate-pulse" />
                      <span className="font-display font-semibold text-lg">
                        Fixing issue...
                      </span>
                    </div>

                    {/* APPROVED stamp */}
                    <div 
                      className={cn(
                        "absolute flex items-center gap-3 px-6 py-3 rounded-xl border-3 transition-all duration-500",
                        "border-success text-success bg-success/5"
                      )}
                      style={{
                        opacity: phase3 > 0.7 ? 1 : 0,
                        transform: `scale(${phase3 > 0.7 ? 1 : 0.5}) rotate(2deg)`,
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      <CheckCircle className="h-6 w-6" />
                      <span className="font-display font-bold text-xl uppercase tracking-wider">
                        Approved
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div 
                  className="absolute -top-4 -right-4 bg-background rounded-2xl border border-border shadow-xl p-4 max-w-[180px]"
                  style={{
                    opacity: phase1 > 0.5 ? 1 : 0,
                    transform: `translateY(${phase1 > 0.5 ? 0 : 20}px) rotate(3deg)`,
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Permit Shark</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {phase3 > 0.5 ? "Issue resolved! Ready to submit." : "Scanning for compliance issues..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-center lg:text-left">
              {/* Phase indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                {['Upload', 'Analyze', 'Submit'].map((step, index) => {
                  const isActive = (index === 0 && phase1 > 0.3) || 
                                   (index === 1 && phase2 > 0.3) || 
                                   (index === 2 && phase3 > 0.5);
                  const isPast = (index === 0 && phase2 > 0.3) || 
                                 (index === 1 && phase3 > 0.5);
                  return (
                    <div key={step} className="flex items-center gap-2">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                        isPast ? "bg-success text-white" :
                        isActive ? "bg-accent text-white" : 
                        "bg-secondary text-muted-foreground"
                      )}>
                        {isPast ? <Check className="h-4 w-4" /> : index + 1}
                      </div>
                      <span className={cn(
                        "text-sm font-medium transition-colors",
                        isActive || isPast ? "text-foreground" : "text-muted-foreground"
                      )}>{step}</span>
                      {index < 2 && (
                        <ArrowRight className={cn(
                          "h-4 w-4 mx-1 transition-colors",
                          isPast ? "text-success" : "text-border"
                        )} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {phase3 > 0.5 ? (
                  <>Ready for <span className="text-success">approval</span></>
                ) : phase2 > 0.3 ? (
                  <>Scanning for <span className="text-accent">issues</span></>
                ) : (
                  <>From rejected to <span className="text-accent">approved</span></>
                )}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                {phase3 > 0.5 
                  ? "All compliance issues resolved. Your permit is ready for submission."
                  : phase2 > 0.3 
                    ? "We're checking your plans against local zoning codes in real-time."
                    : "See exactly what's wrong before the city does—and fix it instantly."}
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl bg-secondary/50 transition-all duration-300",
                      phase1 > 0.3 + index * 0.15 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
          style={{ opacity: phase3 > 0.8 ? 0 : 1 - scrollProgress * 0.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermitShowcase;