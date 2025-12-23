import { useState, useEffect } from "react";
import { MoreHorizontal, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProjectStatus = "compliant" | "issues" | "processing";

interface Project {
  id: string;
  name: string;
  city: string;
  status: ProjectStatus;
  date: string;
}

const mockProjects: Project[] = [
  { id: "1", name: "1204 Elm St", city: "Austin", status: "compliant", date: "Dec 20, 2024" },
  { id: "2", name: "789 Oak Ave", city: "Houston", status: "issues", date: "Dec 19, 2024" },
  { id: "3", name: "456 Pine Rd", city: "Dallas", status: "processing", date: "Dec 18, 2024" },
  { id: "4", name: "321 Maple Ln", city: "Austin", status: "compliant", date: "Dec 17, 2024" },
  { id: "5", name: "567 Cedar Blvd", city: "San Antonio", status: "issues", date: "Dec 16, 2024" },
];

const statusConfig = {
  compliant: { label: "Compliant", dotClass: "bg-success" },
  issues: { label: "Issues Found", dotClass: "bg-error" },
  processing: { label: "Processing", dotClass: "bg-warning animate-pulse" },
};

interface ProjectsTableProps {
  onNewProject?: () => void;
}

const ProjectsTable = ({ onNewProject }: ProjectsTableProps) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg">
        <div className="p-4 border-b border-border">
          <div className="flex gap-3">
            <Skeleton className="h-9 flex-1 max-w-xs" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
        <div className="p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (mockProjects.length === 0) {
    return (
      <div className="bg-card border border-dashed border-border rounded-lg p-12 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <Upload className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-sm font-semibold text-foreground mb-1">No projects yet</h3>
        <p className="text-sm text-muted-foreground mb-4">Upload a blueprint to get started.</p>
        <Button onClick={onNewProject}>Upload Blueprint</Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-3 border-b border-border">
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9 text-sm" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36 h-9 text-sm"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="compliant">Compliant</SelectItem>
              <SelectItem value="issues">Issues Found</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-xs font-medium text-muted-foreground">Project</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">City</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Status</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Uploaded</TableHead>
            <TableHead className="w-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProjects.map((project) => (
            <TableRow key={project.id} className="hover:bg-muted/50">
              <TableCell className="font-medium text-sm py-3">{project.name}</TableCell>
              <TableCell className="text-sm text-muted-foreground py-3">{project.city}</TableCell>
              <TableCell className="py-3">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", statusConfig[project.status].dotClass)} />
                  <span className="text-sm">{statusConfig[project.status].label}</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground py-3">{project.date}</TableCell>
              <TableCell className="py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download Report</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsTable;