import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  className 
}: StatsCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-border rounded-lg p-4",
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        {Icon && (
          <div className="p-2 rounded-md bg-muted">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
        {trend && (
          <span className={cn(
            "text-xs font-medium",
            trend.positive ? "text-success" : "text-error"
          )}>
            {trend.positive ? "+" : ""}{trend.value}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{title}</p>
        {subtitle && (
          <p className="text-[10px] text-muted-foreground/70 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;