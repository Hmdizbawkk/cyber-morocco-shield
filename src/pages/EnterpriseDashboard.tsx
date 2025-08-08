import { SidebarProvider } from "@/components/ui/sidebar";
import { EnterpriseSidebar } from "@/components/EnterpriseSidebar";
import { EnterpriseDashboardHeader } from "@/components/EnterpriseDashboardHeader";
import { EnterpriseDashboardContent } from "@/components/EnterpriseDashboardContent";

const EnterpriseDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <EnterpriseSidebar />
        <div className="flex-1 flex flex-col">
          <EnterpriseDashboardHeader />
          <EnterpriseDashboardContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default EnterpriseDashboard;