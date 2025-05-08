
import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, Trophy, Wallet, UserCheck, Scale, GitBranch, Megaphone, Cog, History } from "lucide-react";

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, href: "/admin/dashboard" },
    { title: "Utilisateurs", icon: <Users className="h-5 w-5" />, href: "/admin/users" },
    { title: "Tournois", icon: <Trophy className="h-5 w-5" />, href: "/admin/tournaments" },
    { title: "Paiements", icon: <Wallet className="h-5 w-5" />, href: "/admin/payments" },
    { title: "Validateurs", icon: <UserCheck className="h-5 w-5" />, href: "/admin/validators" },
    { title: "Litiges", icon: <Scale className="h-5 w-5" />, href: "/admin/disputes" },
    { title: "Parrainage", icon: <GitBranch className="h-5 w-5" />, href: "/admin/sponsorship" },
    { title: "Communications", icon: <Megaphone className="h-5 w-5" />, href: "/admin/communications" },
    { title: "Réglages", icon: <Cog className="h-5 w-5" />, href: "/admin/settings" },
    { title: "Historique", icon: <History className="h-5 w-5" />, href: "/admin/logs" }
  ];

  return (
    <div className="flex">
      <div className="fixed flex h-screen w-64 bg-slate-50">
        <div className="flex w-full flex-col overflow-y-auto">
          <div className="flex h-14 items-center border-b px-4">
            <h2 className="text-lg font-semibold">Admin Panel</h2>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-slate-200 text-slate-900"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="ml-64 flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
