import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileBarChart, 
  Settings, 
  HelpCircle, 
  Plus,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Reports", href: "/dashboard/reports", icon: FileBarChart },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Help & Support", href: "/dashboard/help", icon: HelpCircle },
];

interface SidebarContentProps {
  onNewProject: () => void;
}

const SidebarContent = ({ onNewProject }: SidebarContentProps) => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-4.5 h-4.5 text-sidebar-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
            </svg>
          </div>
          <span className="font-display font-semibold text-foreground text-sm">Permit Shark</span>
        </Link>
      </div>

      {/* New Project Button */}
      <div className="p-3">
        <Button 
          onClick={onNewProject}
          className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground h-9 text-sm font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-1 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-sidebar-primary rounded-full" />
              )}
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-foreground">
            AA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Alex Arch</p>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sidebar-primary/10 text-sidebar-primary">
              PRO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DashboardSidebarProps {
  onNewProject: () => void;
}

const DashboardSidebar = ({ onNewProject }: DashboardSidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-60 border-r border-sidebar-border bg-sidebar/50 backdrop-blur-sm flex-col h-screen fixed left-0 top-0">
        <SidebarContent onNewProject={onNewProject} />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 border-b border-border bg-background/95 backdrop-blur-sm z-40 flex items-center px-4">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 p-0">
            <SidebarContent onNewProject={() => {
              onNewProject();
              setMobileOpen(false);
            }} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2 ml-3">
          <div className="w-7 h-7 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 text-sidebar-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2C10.5 2 9 3.5 9 5c0 1.5 1.5 3 3 4.5 1.5-1.5 3-3 3-4.5 0-1.5-1.5-3-3-3zm-7 9c-1.5 1.5-3 3-3 4.5C2 17 3.5 19 5.5 19c1.5 0 3-1 4.5-2.5-2-1.5-4-3.5-5-5.5zm14 0c-1 2-3 4-5 5.5 1.5 1.5 3 2.5 4.5 2.5 2 0 3.5-2 3.5-3.5 0-1.5-1.5-3-3-4.5zM12 11c-2 2-4 4-5 6 1.5 2.5 3.5 4 5 5 1.5-1 3.5-2.5 5-5-1-2-3-4-5-6z"/>
            </svg>
          </div>
          <span className="font-display font-semibold text-foreground text-sm">Permit Shark</span>
        </div>
      </header>
    </>
  );
};

export default DashboardSidebar;
