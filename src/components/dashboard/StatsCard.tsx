import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  className?: string;
}

const StatsCard = ({ title, value, subtitle, className }: StatsCardProps) => {
  return (
    <div className={cn("bg-card border border-border rounded-xl p-6", className)}>
      <p className="text-sm text-muted-foreground font-medium">{title}</p>
      <p className="text-3xl font-display font-semibold text-foreground mt-1">{value}</p>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default StatsCard;
