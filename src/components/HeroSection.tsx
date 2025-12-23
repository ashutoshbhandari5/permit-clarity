import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden section-dark">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px]" />
      
      <div className="relative section-padding pt-28 sm:pt-36 lg:pt-44">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 opacity-0 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm text-white/80">Now checking permits in 12+ cities</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-up stagger-1">
              <span className="text-white">Check building permit compliance</span>
              <br />
              <span className="text-gradient">before the city does</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2">
              Upload your blueprints, select your city, and get an instant compliance report. 
              Catch zoning issues and code violations before they become costly rejections.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up stagger-3">
              <Button variant="glow" size="xl" className="group">
                Check Your Permit Compliance
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl">
                <Play className="h-4 w-4" />
                See How It Works
              </Button>
            </div>

            {/* Social proof hint */}
            <p className="text-sm text-white/40 opacity-0 animate-fade-up stagger-4">
              Trusted by architects and developers in California, Texas, and Florida
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto opacity-0 animate-fade-up stagger-4">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/20 to-primary/30 rounded-3xl blur-3xl opacity-60" />
              
              {/* Browser chrome */}
              <div className="relative glass-dark rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float" style={{ animationDuration: '8s' }}>
                {/* Browser header */}
                <div className="bg-dark-card/80 px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/80" />
                    <div className="w-3 h-3 rounded-full bg-warning/80" />
                    <div className="w-3 h-3 rounded-full bg-success/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-7 bg-white/5 rounded-lg max-w-md mx-auto flex items-center justify-center px-4">
                      <span className="text-xs text-white/40">app.permitshark.com/compliance-check</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6 lg:p-8 bg-gradient-to-b from-dark-card to-dark-bg">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left panel - Upload area */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="p-6 border border-dashed border-white/20 rounded-xl bg-white/5 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white">Drop blueprint PDF here</p>
                        <p className="text-xs text-white/40 mt-1">or click to browse</p>
                      </div>
                      
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <label className="text-sm font-medium text-white/80 block mb-2">Select City</label>
                        <div className="h-10 bg-white/5 rounded-lg border border-white/10 flex items-center px-3">
                          <span className="text-sm text-white/60">San Francisco, CA</span>
                        </div>
                      </div>
                    </div>

                    {/* Right panel - Results preview */}
                    <div className="lg:col-span-2">
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-5">
                          <h3 className="font-display font-semibold text-white">Compliance Summary</h3>
                          <span className="px-3 py-1 rounded-full bg-warning/20 text-warning text-xs font-medium border border-warning/30">2 Issues</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-success" />
                              <span className="text-sm text-white">Front Setback</span>
                            </div>
                            <span className="text-xs text-success font-medium">Compliant</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-success" />
                              <span className="text-sm text-white">Height Limit</span>
                            </div>
                            <span className="text-xs text-success font-medium">Compliant</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-error/10 border border-error/20 rounded-lg">
                            <div className="flex items-center gap-3">
                              <XCircle className="h-5 w-5 text-error" />
                              <span className="text-sm text-white">Rear Setback</span>
                            </div>
                            <span className="text-xs text-error font-medium">Violation</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-5 w-5 text-warning" />
                              <span className="text-sm text-white">Window Egress</span>
                            </div>
                            <span className="text-xs text-warning font-medium">Warning</span>
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
