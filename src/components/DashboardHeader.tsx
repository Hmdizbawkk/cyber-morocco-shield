import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 animate-slide-in">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Sidebar Toggle */}
        <SidebarTrigger className="md:hidden hover-glow" />
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-accent" />
            <Input
              placeholder="Search bugs, hunters, reports..."
              className="pl-10 bg-muted/50 border-border hover:border-primary/50 focus-visible:border-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:shadow-glow"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover-glow group">
            <Bell className="h-5 w-5 transition-transform group-hover:scale-110" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground animate-pulse-glow"
            >
              3
            </Badge>
          </Button>

          {/* Quick Actions */}
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground hidden md:flex hover-glow interactive shadow-lg"
          >
            Submit Bug
          </Button>
        </div>
      </div>
    </header>
  );
}