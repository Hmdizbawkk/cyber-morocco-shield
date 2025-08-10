import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  Shield,
  TrendingUp,
  Database,
  CreditCard,
  Building,
  UserCheck,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const analyticsItems = [
  {
    title: "Vue d'ensemble",
    url: "/enterprise",
    icon: BarChart3,
  },
  {
    title: "Analyses",
    url: "/enterprise/analytics",
    icon: TrendingUp,
  },
  {
    title: "Rapports",
    url: "/enterprise/reports", 
    icon: FileText,
  },
];

const managementItems = [
  {
    title: "Utilisateurs",
    url: "/enterprise/users",
    icon: Users,
  },
  {
    title: "Organisations", 
    url: "/enterprise/organizations",
    icon: Building,
  },
  {
    title: "Permissions",
    url: "/enterprise/permissions",
    icon: Shield,
  },
];

const systemItems = [
  {
    title: "Base de données",
    url: "/enterprise/database",
    icon: Database,
  },
  {
    title: "Facturation",
    url: "/enterprise/billing",
    icon: CreditCard,
  },
  {
    title: "Paramètres",
    url: "/enterprise/settings",
    icon: Settings,
  },
];

export function EnterpriseSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative overflow-hidden ${
      isActive
        ? "bg-primary text-white shadow-neon cyber-border animate-pulse-glow"
        : "text-muted-foreground hover:bg-primary/20 hover:text-primary hover:shadow-glow hover:border-primary/30 border border-transparent"
    }`;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="relative flex items-center space-x-2">
          <Building className="h-6 w-6 text-white glow-primary animate-pulse-glow" />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold logo-bughunter">BugHunter</span>
              <span className="text-xs text-blue-200 font-medium">Enterprise</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-neon font-bold tracking-wider uppercase text-xs">Analyses</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/enterprise"}
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-neon font-bold tracking-wider uppercase text-xs">Gestion</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4 mr-2" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-neon font-bold tracking-wider uppercase text-xs">Système</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4 mr-2" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-primary/20">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 cyber-border glow-primary">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary/20 text-primary">
              <UserCheck className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-neon">Admin</p>
              <p className="text-xs text-accent truncate">Enterprise</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Button variant="outline" size="sm" className="w-full mt-2 cyber-border hover-glow">
            Déconnexion
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}