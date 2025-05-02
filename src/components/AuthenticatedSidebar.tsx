import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Trophy, User, BarChart2, AlertTriangle, Gift, Users, LineChart, Shield, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function AuthenticatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { title: "Tableau de bord", icon: <BarChart2 className="h-5 w-5" />, href: "/dashboard" },
    { title: "Mon Profil", icon: <User className="h-5 w-5" />, href: "/profile" },
    { title: "Mes Tournois", icon: <Trophy className="h-5 w-5" />, href: "/tournaments" },
    { title: "Statistiques", icon: <LineChart className="h-5 w-5" />, href: "/statistics" },
    { title: "Récompenses", icon: <Gift className="h-5 w-5" />, href: "/rewards" },
    { title: "Litiges", icon: <AlertTriangle className="h-5 w-5" />, href: "/disputes" },
    { title: "Parrainage", icon: <Users className="h-5 w-5" />, href: "/sponsorship" },
    { title: "Espace Validateur", icon: <Shield className="h-5 w-5" />, href: "/validator-dashboard" }
  ];

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-20 left-4 z-50 lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      </Button>

      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out 
      w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r fixed left-0 top-16 shadow-lg z-40`}>
        <div className="p-4 border-b">
          <Trophy className="h-8 w-8 text-asc-purple" />
        </div>
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors duration-200 
                ${location.pathname === item.href 
                  ? 'bg-gray-100 dark:bg-gray-700 text-asc-purple dark:text-asc-purple font-medium' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
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