import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, FolderKanban, Search, MoreHorizontal, ExternalLink, Trash2, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  address: string;
  zoningCode: string;
  status: "compliant" | "issues" | "processing" | "draft";
  lastUpdated: string;
  complianceRate?: number;
}

// Mock data - replace with real data later
const MOCK_PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "123 Main Street Residence",
    address: "123 Main St, Austin, TX 78701",
    zoningCode: "SF-3",
    status: "issues",
    lastUpdated: "2 hours ago",
    complianceRate: 75,
  },
  {
    id: "proj-2",
    name: "Oak Valley Commercial",
    address: "456 Oak Valley Dr, Austin, TX 78702",
    zoningCode: "CS-1",
    status: "compliant",
    lastUpdated: "1 day ago",
    complianceRate: 100,
  },
  {
    id: "proj-3",
    name: "Downtown Mixed Use",
    address: "789 Congress Ave, Austin, TX 78701",
    zoningCode: "DMU",
    status: "processing",
    lastUpdated: "Just now",
  },
];

const statusConfig = {
  compliant: {
    label: "Compliant",
    icon: CheckCircle2,
    className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  issues: {
    label: "Issues Found",
    icon: AlertTriangle,
    className: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  },
  processing: {
    label: "Processing",
    icon: Clock,
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20 animate-pulse",
  },
  draft: {
    label: "Draft",
    icon: FolderKanban,
    className: "bg-muted text-muted-foreground border-border",
  },
};

const ProjectList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [projects] = useState<Project[]>(MOCK_PROJECTS);

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateNew = () => {
    // Generate a new project ID and navigate
    const newId = `proj-${Date.now()}`;
    navigate(`/dashboard/project/${newId}`);
  };

  const handleOpenProject = (projectId: string) => {
    navigate(`/dashboard/project/${projectId}`);
  };

  // Empty state - no projects yet
  if (projects.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardSidebar />
        <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-6">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
              <FolderKanban className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display font-semibold text-foreground mb-2">
              No Projects Yet
            </h1>
            <p className="text-muted-foreground text-center max-w-md mb-8">
              Create your first compliance check by uploading a floor plan. We'll analyze it against local zoning codes.
            </p>
            <Button onClick={handleCreateNew} size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Create New Project
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0">
        {/* Header */}
        <header className="h-14 border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-display font-semibold text-foreground">Projects</h1>
            <p className="text-xs text-muted-foreground">
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button onClick={handleCreateNew} size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Project</span>
          </Button>
        </header>

        {/* Search & Filters */}
        <div className="px-6 py-4 border-b border-border">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProjects.map((project) => {
              const statusInfo = statusConfig[project.status];
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project.id)}
                  className={cn(
                    "group relative bg-card border border-border rounded-xl p-5 cursor-pointer",
                    "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
                    "transition-all duration-200"
                  )}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate mt-0.5">
                        {project.address}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleOpenProject(project.id)}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Project
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Status & Meta */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className={cn("gap-1.5", statusInfo.className)}>
                      <StatusIcon className="w-3 h-3" />
                      {statusInfo.label}
                    </Badge>
                    <Badge variant="outline" className="bg-muted/50">
                      {project.zoningCode}
                    </Badge>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Updated {project.lastUpdated}</span>
                    {project.complianceRate !== undefined && (
                      <span className={cn(
                        "font-mono font-medium",
                        project.complianceRate === 100 ? "text-emerald-600" : "text-foreground"
                      )}>
                        {project.complianceRate}% compliant
                      </span>
                    )}
                  </div>

                  {/* Progress bar for processing */}
                  {project.status === "processing" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted overflow-hidden rounded-b-xl">
                      <div className="h-full w-1/3 bg-blue-500 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
