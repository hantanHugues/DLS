import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Users, Trophy, AlertTriangle, DollarSign, Activity,
  UserCheck, Ban, Clock, Mail, Settings, FileText,
  UserPlus, RefreshCw, ShieldAlert, Award, Wallet,
  UserCog, Goal, HandCoins, Gift, History, MessageSquare,
  LayoutDashboard, GitBranch, ClipboardList, Scale,
  Bell, Megaphone, Cog
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const dailyData = [
  { name: 'Lun', users: 4, revenue: 400 },
  { name: 'Mar', users: 3, revenue: 300 },
  { name: 'Mer', users: 7, revenue: 700 },
  { name: 'Jeu', users: 5, revenue: 500 },
  { name: 'Ven', users: 8, revenue: 800 },
  { name: 'Sam', users: 12, revenue: 1200 },
  { name: 'Dim', users: 10, revenue: 1000 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "users", label: "Utilisateurs", icon: <Users className="w-5 h-5" /> },
    { id: "tournaments", label: "Tournois", icon: <Trophy className="w-5 h-5" /> },
    { id: "payments", label: "Paiements", icon: <Wallet className="w-5 h-5" /> },
    { id: "validators", label: "Validateurs", icon: <UserCheck className="w-5 h-5" /> },
    { id: "disputes", label: "Litiges", icon: <Scale className="w-5 h-5" /> },
    { id: "sponsorship", label: "Parrainage", icon: <GitBranch className="w-5 h-5" /> },
    { id: "communications", label: "Communications", icon: <Megaphone className="w-5 h-5" /> },
    { id: "settings", label: "Réglages", icon: <Cog className="w-5 h-5" /> },
    { id: "logs", label: "Historique", icon: <History className="w-5 h-5" /> },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Administrateur</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualiser
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Paramètres
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Réglages Généraux</DialogTitle>
                  <DialogDescription>
                    Gérez les paramètres financiers, de jeu et autres configurations.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Utilisateurs Totaux</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users className="h-5 w-5 text-primary"/>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">1,234</div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center text-emerald-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">+12%</span>
                    </div>
                    <span className="text-sm text-muted-foreground">ce mois</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Activity className="h-5 w-5 text-blue-500"/>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">856</div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-sm font-medium text-blue-500">●</span>
                    <span className="text-sm text-muted-foreground">Dernières 24h</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                  <div className="p-2 bg-emerald-500/10 rounded-full">
                    <DollarSign className="h-5 w-5 text-emerald-500"/>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">4,550 FCFA</div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center text-emerald-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">+8%</span>
                    </div>
                    <span className="text-sm text-muted-foreground">vs mois dernier</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Litiges en Cours</CardTitle>
                  <div className="p-2 bg-yellow-500/10 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-yellow-500"/>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">12</div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-sm font-medium text-yellow-500">⚠</span>
                    <span className="text-sm text-muted-foreground">5 nouveaux aujourd'hui</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Inscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Alertes & Notifications</h2>
              <div className="space-y-2">
                <Alert className="hover:bg-muted/50 cursor-pointer">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>3 nouveaux litiges à traiter</AlertDescription>
                </Alert>
                <Alert className="hover:bg-muted/50 cursor-pointer">
                  <Wallet className="h-4 w-4" />
                  <AlertDescription>5 demandes de retrait en attente</AlertDescription>
                </Alert>
                <Alert className="hover:bg-muted/50 cursor-pointer">
                  <UserCheck className="h-4 w-4" />
                  <AlertDescription>2 nouveaux validateurs candidats</AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder content for other tabs */}
        {activeTab === "users" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Gestion des Utilisateurs</h2>
            {/* Add user management content */}
          </div>
        )}

        {activeTab === "tournaments" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Gestion des Tournois</h2>
            {/* Add tournament management content */}
          </div>
        )}

        {/* Add more tab content sections */}
      </div>
    </AdminLayout>
  );
}