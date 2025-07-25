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

  return (
    <Sidebar className={`dashboard-sidebar ${collapsed ? "w-16" : "w-64"}`} collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3 dashboard-fade-in">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow dashboard-pulse">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="dashboard-slide-up">
              <h2 className="text-lg font-bold text-white">
                BugHunters.ma
              </h2>
              <p className="text-xs text-muted-foreground">Ethical Hacking Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 mb-3 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="dashboard-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `dashboard-nav-item ${isActive ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-lg text-white`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 mb-3 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {!collapsed && "Community"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {communityItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="dashboard-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `dashboard-nav-item ${isActive ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-lg text-white`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 mb-3 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {!collapsed && "Account"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {accountItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="dashboard-fade-in" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `dashboard-nav-item ${isActive ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-lg text-white`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 mb-3 dashboard-fade-in">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20">
            <AvatarImage src="" alt="User Avatar" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-sm font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0 dashboard-slide-up">
              <p className="text-sm font-semibold text-white truncate">
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
            className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}