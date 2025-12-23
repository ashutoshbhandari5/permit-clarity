import { FileText, MapPin, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";

const ComplianceReportPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See What You'll Get
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clear, actionable compliance report that tells you exactly what to fix before submitting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-up stagger-2">
          <div className="card-elevated overflow-hidden">
            {/* Report Header */}
            <div className="bg-primary px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Compliance Report</span>
                </div>
                <span className="text-primary-foreground/80 text-sm">Generated Dec 23, 2024</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="px-6 py-4 border-b border-border bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground block">Project</span>
                  <span className="font-medium text-foreground">1847 Oak Street ADU</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Location</span>
                  <span className="font-medium text-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> San Francisco, CA
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Zone</span>
                  <span className="font-medium text-foreground">RH-1 Residential</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Status</span>
                  <span className="font-medium text-warning flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> 2 Issues Found
                  </span>
                </div>
              </div>
            </div>

            {/* Compliance Checks */}
            <div className="p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground mb-4">Compliance Checks</h3>
              
              {/* Passing Checks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <span className="font-medium text-foreground">Front Setback</span>
                      <span className="text-muted-foreground text-sm block">15ft required, 18ft provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium">Pass</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <span className="font-medium text-foreground">Lot Coverage</span>
                      <span className="text-muted-foreground text-sm block">45% maximum, 38% provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium">Pass</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <span className="font-medium text-foreground">Parking Spaces</span>
                      <span className="text-muted-foreground text-sm block">1 space required, 1 space provided</span>
                    </div>
                  </div>
                  <span className="text-success text-sm font-medium">Pass</span>
                </div>
              </div>

              {/* Failing Checks */}
              <div className="space-y-3 mt-6">
                <div className="flex items-start justify-between p-3 bg-error/5 border border-error/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-error mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Rear Setback</span>
                      <span className="text-muted-foreground text-sm block">10ft required, 8ft provided</span>
                      <span className="text-error/80 text-sm block mt-1">
                        → Reduce building depth by 2ft or apply for variance
                      </span>
                    </div>
                  </div>
                  <span className="text-error text-sm font-medium">Fail</span>
                </div>

                <div className="flex items-start justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Window Egress</span>
                      <span className="text-muted-foreground text-sm block">Bedroom 2 window below minimum size</span>
                      <span className="text-warning/80 text-sm block mt-1">
                        → Increase window to 5.7 sq ft minimum clear opening
                      </span>
                    </div>
                  </div>
                  <span className="text-warning text-sm font-medium">Warning</span>
                </div>
              </div>
            </div>

            {/* Report Footer */}
            <div className="px-6 py-4 bg-secondary/50 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  Fix these issues to avoid permit rejection
                </span>
                <button className="text-accent font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View Full Report <ArrowRight className="h-4 w-4" />
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
