import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, CheckCircle, Zap, FileText, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-24 sm:pt-28 lg:pt-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content with staggered animations */}
            <div className="space-y-6">
              {/* Badge */}
              <div 
                className="badge-accent opacity-0 animate-[fade-in_0.6s_ease-out_0.1s_forwards]"
              >
                <AlertCircle className="h-4 w-4" />
                <span>Stop the rejection cycle</span>
              </div>

              {/* Headline */}
              <h1 
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] opacity-0 animate-[fade-in_0.6s_ease-out_0.25s_forwards]"
              >
                Still filing permits like it's{" "}
                <span className="text-accent underline decoration-wavy decoration-accent/30 underline-offset-4">1999?</span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-lg text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards]"
              >
                Stop guessing if your blueprints will pass. Check zoning compliance before the city rejects you—saving months and thousands in redesigns.
              </p>

              {/* CTAs */}
              <div 
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-in_0.6s_ease-out_0.55s_forwards]"
              >
                <Button size="xl" className="group">
                  Check Your Compliance
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="xl">
                  See How It Works
                </Button>
              </div>

              <p 
                className="text-sm text-muted-foreground opacity-0 animate-[fade-in_0.6s_ease-out_0.7s_forwards]"
              >
                No stamps required. Results in minutes.
              </p>
            </div>

            {/* Right - Creative Paper Form Mockup */}
            <div 
              className="relative opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]"
            >
              <div className="relative flex justify-center lg:justify-end">
                {/* Main Paper Permit Form */}
                <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Shadow/depth layer */}
                  <div className="absolute inset-0 bg-amber-900/10 rounded-lg transform translate-x-3 translate-y-3 -z-10" />
                  
                  {/* Paper form */}
                  <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-lg border-2 border-amber-200/70 shadow-2xl p-6 sm:p-8 max-w-md">
                    {/* Paper texture overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50 pointer-events-none rounded-lg" />
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[10px] text-amber-700/60 uppercase tracking-widest font-semibold">
                          City Planning Department
                        </p>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-amber-900 uppercase tracking-wide">
                          Building Permit
                        </h3>
                        <p className="text-xs text-amber-700/50 font-mono mt-0.5">
                          Form BP-2024 • Rev. 03/2024
                        </p>
                      </div>
                      {/* Official stamp box */}
                      <div className="border-2 border-dashed border-amber-400/50 rounded p-2 text-center">
                        <p className="text-[8px] text-amber-600/60 uppercase font-semibold">Official</p>
                        <p className="text-[8px] text-amber-600/60 uppercase">Use Only</p>
                        <div className="h-px bg-amber-400/30 my-1" />
                        <p className="text-[7px] text-amber-600/40 uppercase">Stamp Here</p>
                      </div>
                    </div>

                    {/* Form fields */}
                    <div className="space-y-3 mb-4">
                      {/* Field 1 */}
                      <div>
                        <p className="text-[10px] text-amber-800 font-semibold uppercase mb-1">
                          1. Property Address
                        </p>
                        <div className="bg-white/60 border border-amber-300/50 rounded px-3 py-2">
                          <p className="text-sm text-amber-900 font-mono">1847 Oak Street, San Francisco</p>
                        </div>
                      </div>

                      {/* Field 2 - Checkboxes */}
                      <div>
                        <p className="text-[10px] text-amber-800 font-semibold uppercase mb-1.5">
                          2. Compliance Checks Required
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: "Setback Requirements", checked: true },
                            { label: "Height Limits", checked: true },
                            { label: "Lot Coverage", checked: true },
                            { label: "Zoning Code", checked: false },
                          ].map((item) => (
                            <div key={item.label} className="flex items-center gap-1.5">
                              <div className={cn(
                                "w-3.5 h-3.5 rounded border flex items-center justify-center",
                                item.checked 
                                  ? "bg-amber-200/50 border-amber-400" 
                                  : "bg-white/50 border-amber-300/50"
                              )}>
                                {item.checked && <CheckCircle className="h-2.5 w-2.5 text-amber-700" />}
                              </div>
                              <span className="text-[10px] text-amber-800">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Field 3 - Issues */}
                      <div>
                        <p className="text-[10px] text-amber-800 font-semibold uppercase mb-1">
                          3. Issues Found
                        </p>
                        <div className="bg-error/5 border border-error/20 rounded px-3 py-2">
                          <p className="text-xs text-error font-medium">Rear setback: 8ft (requires 10ft min)</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider line */}
                    <div className="relative my-4">
                      <div className="border-t-2 border-dashed border-error/30" />
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-50 px-2">
                        <span className="text-[8px] text-error/60 uppercase tracking-wider font-semibold flex items-center gap-1">
                          <AlertCircle className="h-2.5 w-2.5" />
                          Do Not Write Below This Line
                        </span>
                      </div>
                    </div>

                    {/* REJECTED Stamp */}
                    <div className="flex justify-center">
                      <div className="relative transform -rotate-6">
                        <div className="px-6 py-2 border-4 border-error rounded-sm bg-error/5">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-error" />
                            <span className="font-display font-black text-2xl text-error uppercase tracking-wider">
                              Rejected
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer note */}
                    <p className="text-[8px] text-amber-600/50 text-center mt-4 italic">
                      Paperwork Reduction Act: We estimate this process takes 4-6 weeks manually.
                    </p>
                  </div>

                  {/* Floating "Analyzing" badge */}
                  <div className="absolute -right-4 top-1/3 sm:-right-8 bg-background border border-border shadow-xl rounded-xl p-3 transform rotate-3 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-accent animate-pulse" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Analyzing...</p>
                        <p className="text-[10px] text-muted-foreground">2,847 permits checked</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating success card */}
                  <div className="absolute -left-4 -bottom-4 sm:-left-8 sm:-bottom-6 bg-background border border-success/30 shadow-xl rounded-xl p-3 transform -rotate-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Issue Found</p>
                        <p className="text-[10px] text-success">Fix available →</p>
                      </div>
                    </div>
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
