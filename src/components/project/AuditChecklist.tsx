import { Loader2, CheckCircle2, XCircle, ChevronDown, Lightbulb, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type CheckStatus = "pending" | "processing" | "pass" | "fail";

export interface CheckItem {
  id: string;
  title: string;
  status: CheckStatus;
  rule?: string;
  measured?: string;
  citation?: string;
  citationUrl?: string;
  tip?: string;
}

interface AuditChecklistProps {
  items: CheckItem[];
  progress: number;
  expandedItems: string[];
}

const statusConfig = {
  pending: {
    icon: null,
    containerClass: "text-muted-foreground",
    badgeClass: "bg-muted text-muted-foreground",
    badgeText: "Pending",
  },
  processing: {
    icon: Loader2,
    containerClass: "text-blue-600 dark:text-blue-400",
    badgeClass: "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    badgeText: "Checking...",
  },
  pass: {
    icon: CheckCircle2,
    containerClass: "text-emerald-600 dark:text-emerald-400",
    badgeClass: "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    badgeText: "Pass",
  },
  fail: {
    icon: XCircle,
    containerClass: "text-rose-600 dark:text-rose-400",
    badgeClass: "bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
    badgeText: "Fail",
  },
};

const AuditChecklist = ({ items, progress, expandedItems }: AuditChecklistProps) => {
  return (
    <div className="space-y-4">
      {/* Progress Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">Audit in Progress</span>
          <span className="font-mono text-muted-foreground">{progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Checklist */}
      <Accordion type="multiple" value={expandedItems} className="space-y-2">
        {items.map((item) => {
          const config = statusConfig[item.status];
          const Icon = config.icon;

          return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "border rounded-lg overflow-hidden transition-colors",
                item.status === "fail" && "border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30",
                item.status === "pass" && "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30",
                item.status === "processing" && "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30",
                item.status === "pending" && "border-border bg-card"
              )}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-3 w-full">
                  {/* Status Icon */}
                  <div className={cn("flex-shrink-0", config.containerClass)}>
                    {Icon ? (
                      <Icon className={cn(
                        "w-5 h-5",
                        item.status === "processing" && "animate-spin"
                      )} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>

                  {/* Title */}
                  <span className={cn(
                    "flex-1 text-left font-medium",
                    config.containerClass
                  )}>
                    {item.title}
                  </span>

                  {/* Status Badge */}
                  <span className={cn(
                    "px-2 py-0.5 text-xs font-medium rounded-full border",
                    config.badgeClass
                  )}>
                    {config.badgeText}
                  </span>
                </div>
              </AccordionTrigger>

              {item.status === "fail" && (
                <AccordionContent className="px-4 pb-4">
                  <div className="pl-8 space-y-3">
                    {/* Rule & Measured */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Rule
                        </p>
                        <p className="font-mono text-foreground">{item.rule}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Measured
                        </p>
                        <p className="font-mono text-rose-600 dark:text-rose-400">{item.measured}</p>
                      </div>
                    </div>

                    {/* Citation */}
                    {item.citation && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Citation:</span>
                        <a 
                          href={item.citationUrl || "#"} 
                          className="text-primary hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.citation}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {/* Tip Box */}
                    {item.tip && (
                      <div className="flex gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                        <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          <span className="font-semibold">Tip:</span> {item.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AuditChecklist;
