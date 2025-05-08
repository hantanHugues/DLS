
import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, Trophy, Wallet, UserCheck, Scale, GitBranch, Megaphone, Cog, History } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/admin/dashboard" },
    { id: "users", label: "Utilisateurs", icon: <Users className="w-5 h-5" />, path: "/admin/users" },
    { id: "tournaments", label: "Tournois", icon: <Trophy className="w-5 h-5" />, path: "/admin/tournaments" },
    { id: "payments", label: "Paiements", icon: <Wallet className="w-5 h-5" />, path: "/admin/payments" },
    { id: "validators", label: "Validateurs", icon: <UserCheck className="w-5 h-5" />, path: "/admin/validators" },
    { id: "disputes", label: "Litiges", icon: <Scale className="w-5 h-5" />, path: "/admin/disputes" },
    { id: "sponsorship", label: "Parrainage", icon: <GitBranch className="w-5 h-5" />, path: "/admin/sponsorship" },
    { id: "communications", label: "Communications", icon: <Megaphone className="w-5 h-5" />, path: "/admin/communications" },
    { id: "settings", label: "Réglages", icon: <Cog className="w-5 h-5" />, path: "/admin/settings" },
    { id: "logs", label: "Historique", icon: <History className="w-5 h-5" />, path: "/admin/logs" },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 space-y-2 fixed h-full">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-left ${
              location.pathname === tab.path
                ? "bg-primary text-primary-foreground"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </Link>
        ))}
      </div>
      <main className="flex-1 ml-64 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
