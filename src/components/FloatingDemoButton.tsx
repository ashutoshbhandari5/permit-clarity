import { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingDemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (about 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors z-10"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Main button */}
        <button
          className={cn(
            "group flex items-center gap-3 px-5 py-3.5 rounded-full",
            "bg-gradient-to-r from-accent to-orange-500 text-white",
            "shadow-lg hover:shadow-xl hover:shadow-accent/25",
            "transform hover:scale-105 transition-all duration-300"
          )}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Calendar className="h-4 w-4" />
          </div>
          <div className="text-left pr-1">
            <p className="text-sm font-semibold">Book a Demo</p>
            <p className="text-[10px] text-white/70">Free 15-min call</p>
          </div>
        </button>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
};

export default FloatingDemoButton;
