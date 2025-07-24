import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Sidebar Toggle */}
        <SidebarTrigger className="md:hidden" />
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search bugs, hunters, reports..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-bughunter"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-bughunter"
            >
              3
            </Badge>
          </Button>

          {/* Quick Actions */}
          <Button 
            size="sm" 
            className="bg-bughunter hover:bg-bughunter/90 text-bughunter-foreground hidden md:flex"
          >
            Submit Bug
          </Button>
        </div>
      </div>
    </header>
  );
}