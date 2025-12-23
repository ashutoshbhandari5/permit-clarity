import { FileText, MapPin, CheckCircle, XCircle, AlertTriangle, ArrowRight, BarChart3 } from "lucide-react";

const ComplianceReportPreview = () => {
  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-card" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      
      <div className="relative container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <BarChart3 className="h-4 w-4" />
            Sample Report
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            See What You'll Get
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A clear, actionable compliance report that tells you exactly what to fix before submitting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-up stagger-2">
          {/* Browser chrome */}
          <div className="glass-dark rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser header */}
            <div className="bg-dark-card/80 px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/80" />
                <div className="w-3 h-3 rounded-full bg-warning/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-7 bg-white/5 rounded-lg max-w-md mx-auto flex items-center justify-center px-4">
                  <span className="text-xs text-white/40">app.permitshark.com/report/1847-oak</span>
                </div>
              </div>
            </div>

            {/* Report Header */}
            <div className="bg-gradient-to-r from-primary to-purple-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">Compliance Report</span>
                </div>
                <span className="text-white/80 text-sm">Generated Dec 23, 2024</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="px-6 py-4 border-b border-white/10 bg-dark-card/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Project</span>
                  <span className="font-medium text-white">1847 Oak Street ADU</span>
                </div>
                <div>
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Location</span>
                  <span className="font-medium text-white flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary" /> San Francisco, CA
                  </span>
                </div>
                <div>
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Zone</span>
                  <span className="font-medium text-white">RH-1 Residential</span>
                </div>
                <div>
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Status</span>
                  <span className="font-medium text-warning flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> 2 Issues Found
                  </span>
                </div>
              </div>
            </div>

            {/* Compliance Checks */}
            <div className="p-6 space-y-4 bg-dark-bg/50">
              <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                Compliance Checks
              </h3>
              
              {/* Passing Checks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-xl hover:bg-success/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Front Setback</span>
                      <span className="text-white/40 text-sm block">15ft required, 18ft provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium px-3 py-1 bg-success/10 rounded-full">Pass</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-xl hover:bg-success/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Lot Coverage</span>
                      <span className="text-white/40 text-sm block">45% maximum, 38% provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium px-3 py-1 bg-success/10 rounded-full">Pass</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-xl hover:bg-success/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Parking Spaces</span>
                      <span className="text-white/40 text-sm block">1 space required, 1 space provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium px-3 py-1 bg-success/10 rounded-full">Pass</span>
                </div>
              </div>

              {/* Failing Checks */}
              <div className="space-y-3 mt-6">
                <div className="p-4 bg-error/5 border border-error/20 rounded-xl hover:bg-error/10 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-error/20 flex items-center justify-center mt-0.5">
                        <XCircle className="h-5 w-5 text-error" />
                      </div>
                      <div>
                        <span className="font-medium text-white">Rear Setback</span>
                        <span className="text-white/40 text-sm block">10ft required, 8ft provided</span>
                        <span className="text-error/80 text-sm block mt-2 flex items-center gap-1">
                          <ArrowRight className="h-3 w-3" /> Reduce building depth by 2ft or apply for variance
                        </span>
                      </div>
                    </div>
                    <span className="text-error text-sm font-medium px-3 py-1 bg-error/10 rounded-full">Fail</span>
                  </div>
                </div>

                <div className="p-4 bg-warning/5 border border-warning/20 rounded-xl hover:bg-warning/10 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center mt-0.5">
                        <AlertTriangle className="h-5 w-5 text-warning" />
                      </div>
                      <div>
                        <span className="font-medium text-white">Window Egress</span>
                        <span className="text-white/40 text-sm block">Bedroom 2 window below minimum size</span>
                        <span className="text-warning/80 text-sm block mt-2 flex items-center gap-1">
                          <ArrowRight className="h-3 w-3" /> Increase window to 5.7 sq ft minimum clear opening
                        </span>
                      </div>
                    </div>
                    <span className="text-warning text-sm font-medium px-3 py-1 bg-warning/10 rounded-full">Warning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Footer */}
            <div className="px-6 py-4 bg-dark-card/50 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-sm">
                  Fix these issues to avoid permit rejection
                </span>
                <button className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all group">
                  View Full Report <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceReportPreview;
