
import { Link } from "react-router-dom";
import { Trophy, User, BarChart2, AlertTriangle, Gift, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function AuthenticatedSidebar() {
  const menuItems = [
    {
      title: "Tableau de bord",
      icon: <BarChart2 className="h-4 w-4" />,
      href: "/dashboard"
    },
    {
      title: "Mon Profil",
      icon: <User className="h-4 w-4" />,
      href: "/profile"
    },
    {
      title: "Mes Tournois",
      icon: <Trophy className="h-4 w-4" />,
      href: "/tournaments"
    },
    {
      title: "Récompenses",
      icon: <Gift className="h-4 w-4" />,
      href: "/rewards"
    },
    {
      title: "Litiges",
      icon: <AlertTriangle className="h-4 w-4" />,
      href: "/disputes"
    },
    {
      title: "Parrainage",
      icon: <Users className="h-4 w-4" />,
      href: "/sponsorship"
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Trophy className="h-8 w-8 text-asc-purple" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link to={item.href} className="w-full">
                <SidebarMenuButton className="w-full justify-start gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
