import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AttentionItem {
  id: string;
  name: string;
  city: string;
  status: "issues" | "warning";
}

const attentionItems: AttentionItem[] = [
  { id: "1", name: "1204 Elm St", city: "Austin", status: "issues" },
  { id: "2", name: "789 Oak Ave", city: "Houston", status: "warning" },
  { id: "3", name: "456 Pine Rd", city: "Dallas", status: "issues" },
];

const AttentionPanel = () => {
  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-error" />
          <h3 className="text-sm font-semibold text-foreground">Needs Attention</h3>
        </div>
      </div>
      <div className="divide-y divide-border">
        {attentionItems.map((item) => (
          <div key={item.id} className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.city}</p>
            </div>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Review
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionPanel;
