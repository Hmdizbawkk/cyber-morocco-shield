import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="dashboard-header sticky top-0 z-10">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Sidebar Toggle */}
        <SidebarTrigger className="md:hidden text-white" />
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="dashboard-search relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search bugs, hunters, reports..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-white hover:text-primary">
            <Bell className="h-5 w-5" />
            <Badge 
              className="dashboard-badge critical absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs dashboard-pulse"
            >
              3
            </Badge>
          </Button>

          {/* Quick Actions */}
          <Button 
            size="sm" 
            className="dashboard-btn-primary hidden md:flex px-4 py-2 rounded-lg"
          >
            Submit Bug
          </Button>
        </div>
      </div>
    </header>
  );
}