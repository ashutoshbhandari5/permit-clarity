import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
      
      <div className="relative section-padding pt-24 sm:pt-32 lg:pt-40">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Now checking permits in 12 cities</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
              Check building permit compliance{" "}
              <span className="text-gradient">before the city does</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2">
              Upload your blueprints, select your city, and get an instant compliance report. 
              Catch zoning issues and code violations before they become costly rejections.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" className="group">
                Check Your Permit Compliance
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="h-4 w-4" />
                See How It Works
              </Button>
            </div>

            {/* Social proof hint */}
            <p className="text-sm text-muted-foreground opacity-0 animate-fade-up stagger-4">
              Trusted by architects and developers in California, Texas, and Florida
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-20 max-w-5xl mx-auto opacity-0 animate-fade-up stagger-4">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Dashboard mockup */}
              <div className="relative card-elevated overflow-hidden rounded-2xl border-2 border-border">
                <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-background rounded-md max-w-md mx-auto flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">app.permitshark.com/compliance-check</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content preview */}
                <div className="p-6 lg:p-8 bg-card">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left panel - Upload area */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="p-6 border-2 border-dashed border-border rounded-xl bg-secondary/30 text-center">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-foreground">Drop blueprint PDF here</p>
                        <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
                      </div>
                      
                      <div className="p-4 bg-secondary/30 rounded-xl">
                        <label className="text-sm font-medium text-foreground block mb-2">Select City</label>
                        <div className="h-10 bg-background rounded-lg border border-border flex items-center px-3">
                          <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                        </div>
                      </div>
                    </div>

                    {/* Right panel - Results preview */}
                    <div className="lg:col-span-2">
                      <div className="bg-secondary/30 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-display font-semibold text-foreground">Compliance Summary</h3>
                          <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium">2 Issues</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                            <span className="text-sm text-foreground">Front Setback</span>
                            <span className="text-xs text-success font-medium">✓ Compliant</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                            <span className="text-sm text-foreground">Height Limit</span>
                            <span className="text-xs text-success font-medium">✓ Compliant</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-error/5 border border-error/20 rounded-lg">
                            <span className="text-sm text-foreground">Rear Setback</span>
                            <span className="text-xs text-error font-medium">✗ Violation</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg">
                            <span className="text-sm text-foreground">Window Egress</span>
                            <span className="text-xs text-warning font-medium">⚠ Warning</span>
                          </div>
                        </div>
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
