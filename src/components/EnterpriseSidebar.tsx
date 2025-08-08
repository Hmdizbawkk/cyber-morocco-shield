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
    `flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
        : "text-muted-foreground hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-300"
    }`;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="flex items-center space-x-2">
          <Building className="h-6 w-6 text-white" />
          {!collapsed && (
            <span className="text-lg font-semibold text-white">Enterprise</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-600 font-semibold">Analyses</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-blue-600 font-semibold">Gestion</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-blue-600 font-semibold">Système</SidebarGroupLabel>
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

      <SidebarFooter className="p-4">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              <UserCheck className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin</p>
              <p className="text-xs text-muted-foreground truncate">Enterprise</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Button variant="ghost" size="sm" className="w-full mt-2">
            Déconnexion
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}