import { 
  Home, 
  Bug, 
  Plus, 
  Bell, 
  Trophy, 
  Users, 
  Settings, 
  Shield,
  User,
  LogOut
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Bug Reports", url: "/dashboard/bugs", icon: Bug },
  { title: "Submit Bug", url: "/dashboard/submit", icon: Plus },
  { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
];

const communityItems = [
  { title: "Leaderboard", url: "/dashboard/leaderboard", icon: Trophy },
  { title: "Community", url: "/dashboard/community", icon: Users },
];

const accountItems = [
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary shadow-lg hover-glow" 
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-300 hover:translate-x-1";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} cyber-card border-r-2 border-border/50`} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4 bg-gradient-to-r from-card to-muted/20">
        <div className="flex items-center gap-3 animate-fade-in-up">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow animate-pulse-glow">
            <Shield className="h-6 w-6 text-primary-foreground animate-float" />
          </div>
          {!collapsed && (
            <div className="animate-slide-in">
              <h2 className="text-lg font-bold text-cyber bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BugHunters.ma
              </h2>
              <p className="text-xs text-muted-foreground">Ethical Hacking Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4 bg-cyber-grid">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-3 mb-3 text-xs font-semibold tracking-wider uppercase">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {!collapsed && <span className="transition-colors duration-300">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-3 mb-3 text-xs font-semibold tracking-wider uppercase">
            {!collapsed && "Community"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {communityItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {!collapsed && <span className="transition-colors duration-300">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-3 mb-3 text-xs font-semibold tracking-wider uppercase">
            {!collapsed && "Account"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {accountItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {!collapsed && <span className="transition-colors duration-300">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4 bg-gradient-to-t from-muted/20 to-transparent">
        <div className="flex items-center gap-3 mb-3 animate-fade-in-up">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20 hover:ring-primary/50 transition-all duration-300">
            <AvatarImage src="" alt="User Avatar" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-sm font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0 animate-slide-in">
              <p className="text-sm font-semibold text-sidebar-foreground truncate">
                john_hunter
              </p>
              <p className="text-xs text-accent truncate font-medium">
                Elite BugHunter
              </p>
            </div>
          )}
        </div>
        
        {!collapsed && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10 hover-glow transition-all duration-300 group"
          >
            <LogOut className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            Logout
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}