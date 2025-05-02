
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, User, BarChart2, AlertTriangle, Gift, Users, LineChart, Shield, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sidebar } from "./ui/sidebar";

export function AuthenticatedSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

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
      title: "Statistiques",
      icon: <LineChart className="h-4 w-4" />,
      href: "/statistics"
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
    },
    {
      title: "Espace Validateur",
      icon: <Shield className="h-4 w-4" />,
      href: "/validator-dashboard"
    }
  ];

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 lg:translate-x-0 w-64 h-screen bg-white dark:bg-gray-800 border-r fixed left-0 top-0`}>
        <div className="p-4 border-b">
          <Trophy className="h-8 w-8 text-asc-purple" />
        </div>
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
