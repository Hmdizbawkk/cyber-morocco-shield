import { Search, Bell, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function EnterpriseDashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-blue-200 dark:border-blue-700">
      <div className="flex h-14 items-center px-4 gap-4">
        <SidebarTrigger className="lg:hidden" />
        
        <div className="flex-1 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-10 bg-white/50 border-blue-200 focus:border-blue-400 focus:ring-blue-400/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative hover:bg-blue-100 dark:hover:bg-blue-900/20">
            <Bell className="h-4 w-4" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 bg-blue-600 hover:bg-blue-700"
            >
              3
            </Badge>
          </Button>
          
          <Button size="sm" className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau
          </Button>
        </div>
      </div>
    </header>
  );
}