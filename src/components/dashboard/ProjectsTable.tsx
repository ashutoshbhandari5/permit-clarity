import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  city: string;
  status: "compliant" | "issues" | "processing";
  date: string;
}

const mockProjects: Project[] = [
  { id: "1", name: "Downtown Office Tower", city: "Austin, TX", status: "compliant", date: "Dec 20, 2024" },
  { id: "2", name: "Residential Complex A", city: "Houston, TX", status: "issues", date: "Dec 18, 2024" },
  { id: "3", name: "Retail Center Phase 2", city: "Austin, TX", status: "processing", date: "Dec 17, 2024" },
  { id: "4", name: "Industrial Warehouse", city: "Dallas, TX", status: "compliant", date: "Dec 15, 2024" },
  { id: "5", name: "Mixed-Use Development", city: "Austin, TX", status: "compliant", date: "Dec 12, 2024" },
];

const statusConfig = {
  compliant: {
    label: "Compliant",
    className: "bg-success/10 text-success border-success/20 hover:bg-success/10",
  },
  issues: {
    label: "Issues Found",
    className: "bg-error/10 text-error border-error/20 hover:bg-error/10",
  },
  processing: {
    label: "Processing",
    className: "bg-warning/10 text-warning border-warning/20 hover:bg-warning/10",
  },
};

interface ProjectsTableProps {
  projects?: Project[];
  isLoading?: boolean;
}

const ProjectsTable = ({ projects = mockProjects, isLoading = false }: ProjectsTableProps) => {
  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-medium">Project Name</TableHead>
              <TableHead className="font-medium">City</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((i) => (
              <TableRow key={i}>
                <TableCell><div className="h-4 w-48 bg-secondary rounded animate-pulse" /></TableCell>
                <TableCell><div className="h-4 w-24 bg-secondary rounded animate-pulse" /></TableCell>
                <TableCell><div className="h-6 w-20 bg-secondary rounded-full animate-pulse" /></TableCell>
                <TableCell><div className="h-4 w-28 bg-secondary rounded animate-pulse" /></TableCell>
                <TableCell><div className="h-8 w-8 bg-secondary rounded animate-pulse" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
        <p className="text-muted-foreground mb-4">
          No projects yet. Upload a blueprint to get started.
        </p>
        <Button>Upload Blueprint</Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-medium">Project Name</TableHead>
            <TableHead className="font-medium">City</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Date</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium text-foreground">{project.name}</TableCell>
              <TableCell className="text-muted-foreground">{project.city}</TableCell>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={cn("font-medium", statusConfig[project.status].className)}
                >
                  {statusConfig[project.status].label}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{project.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download Report</DropdownMenuItem>
                    <DropdownMenuItem>Re-analyze</DropdownMenuItem>
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
