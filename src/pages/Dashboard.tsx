import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import OnboardingModal from "@/components/dashboard/OnboardingModal";

const Dashboard = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-8">
          <h1 className="text-xl font-display font-semibold text-foreground">Dashboard</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard 
              title="Active Projects" 
              value={12} 
            />
            <StatsCard 
              title="Compliance Rate" 
              value="85%" 
            />
            <StatsCard 
              title="Credits Remaining" 
              value="3 / 5" 
              subtitle="Resets in 7 days"
            />
          </div>

          {/* Projects Table */}
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Recent Projects</h2>
            <ProjectsTable />
          </div>
        </div>
      </main>

      {/* Onboarding Modal */}
      <OnboardingModal open={showOnboarding} onOpenChange={setShowOnboarding} />
    </div>
  );
};

export default Dashboard;
