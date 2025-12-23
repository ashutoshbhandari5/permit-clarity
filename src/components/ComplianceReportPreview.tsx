import { FileText, MapPin, CheckCircle, XCircle, AlertTriangle, ArrowRight, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ComplianceReportPreview = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <AnimatedSection>
            <div className="badge-accent mb-4">
              <Zap className="h-4 w-4" />
              <span>Instant Analysis</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See exactly what needs fixing
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              No more guessing games. Our reports show you pass/fail status for every requirement, with specific guidance on how to fix issues.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span>Check setbacks, height limits, lot coverage</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span>Get actionable fix recommendations</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span>Export reports to share with your team</span>
              </li>
            </ul>
          </AnimatedSection>

          {/* Right - Report Preview */}
          <AnimatedSection delay={200}>
            <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Report Header */}
              <div className="bg-foreground px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-background" />
                    <span className="text-background font-semibold">Compliance Report</span>
                  </div>
                  <span className="text-background/70 text-sm">2 min ago</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-6 py-4 border-b border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Project</span>
                    <span className="font-medium text-foreground">1847 Oak Street ADU</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Location</span>
                    <span className="font-medium text-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>

              {/* Checks */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-foreground">Front Setback</span>
                  </div>
                  <span className="text-xs text-success font-medium">Pass</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-foreground">Height Limit</span>
                  </div>
                  <span className="text-xs text-success font-medium">Pass</span>
                </div>
                <div className="p-3 bg-error/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-error" />
                      <span className="text-sm font-medium text-foreground">Rear Setback</span>
                    </div>
                    <span className="text-xs text-error font-medium">Fail</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">
                    10ft required, 8ft provided. <span className="text-accent">Reduce depth by 2ft →</span>
                  </p>
                </div>
                <div className="p-3 bg-warning/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      <span className="text-sm font-medium text-foreground">Window Egress</span>
                    </div>
                    <span className="text-xs text-warning font-medium">Warning</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">
                    Bedroom 2 window below min. <span className="text-accent">Increase to 5.7 sq ft →</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ComplianceReportPreview;
