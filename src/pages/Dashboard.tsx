import { useState } from "react";
import { FolderKanban, TrendingUp, Coins } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import AttentionPanel from "@/components/dashboard/AttentionPanel";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import NewProjectSheet from "@/components/dashboard/NewProjectSheet";

const Dashboard = () => {
  const [showNewProject, setShowNewProject] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar onNewProject={() => setShowNewProject(true)} />
      
      {/* Main Content */}
      <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0">
        {/* Header */}
        <header className="h-14 border-b border-border flex items-center px-6">
          <div>
            <h1 className="text-lg font-display font-semibold text-foreground">Dashboard</h1>
            <p className="text-xs text-muted-foreground">Track compliance results and start new checks.</p>
          </div>
        </header>

        {/* Content - Bento Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Stats Row */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatsCard 
                title="Active Projects" 
                value={12}
                icon={FolderKanban}
                trend={{ value: "2 this week", positive: true }}
              />
              <StatsCard 
                title="Compliance Rate" 
                value="85%"
                icon={TrendingUp}
                trend={{ value: "5%", positive: true }}
              />
              <StatsCard 
                title="Credits Remaining" 
                value="3 / 5"
                icon={Coins}
                subtitle="Resets in 7 days"
              />
            </div>

            {/* Attention Panel */}
            <div className="lg:col-span-4 lg:row-span-2">
              <AttentionPanel />
            </div>

            {/* Projects Table */}
            <div className="lg:col-span-8">
              <div className="mb-3">
                <h2 className="text-sm font-semibold text-foreground">Recent Projects</h2>
              </div>
              <ProjectsTable onNewProject={() => setShowNewProject(true)} />
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <NewProjectSheet open={showNewProject} onOpenChange={setShowNewProject} />
    </div>
  );
};

export default Dashboard;
