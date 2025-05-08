
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Users, Trophy, AlertTriangle, DollarSign, Activity, 
  UserCheck, Ban, Clock, Mail, Settings, FileText,
  UserPlus, RefreshCw, ShieldAlert, Award, Wallet,
  UserCog, Goal, HandCoins, Gift, History, MessageSquare
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
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
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
              <div className="grid gap-4">
                {/* Settings content */}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="tournaments">Tournois</TabsTrigger>
          <TabsTrigger value="payments">Paiements</TabsTrigger>
          <TabsTrigger value="validators">Validateurs</TabsTrigger>
          <TabsTrigger value="disputes">Litiges</TabsTrigger>
          <TabsTrigger value="referrals">Parrainage</TabsTrigger>
          <TabsTrigger value="communications">Communications</TabsTrigger>
          <TabsTrigger value="logs">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Utilisateurs Totaux</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% ce mois</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">856</div>
                <p className="text-xs text-muted-foreground">Dernières 24h</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenus du Mois</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,550 FCFA</div>
                <p className="text-xs text-muted-foreground">+8% vs mois dernier</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Litiges en Cours</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">5 nouveaux aujourd'hui</p>
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
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          {/* User management content */}
        </TabsContent>

        <TabsContent value="tournaments" className="space-y-4">
          {/* Tournament management content */}
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          {/* Payment management content */}
        </TabsContent>

        <TabsContent value="validators" className="space-y-4">
          {/* Validator management content */}
        </TabsContent>

        <TabsContent value="disputes" className="space-y-4">
          {/* Dispute management content */}
        </TabsContent>

        <TabsContent value="referrals" className="space-y-4">
          {/* Referral system management content */}
        </TabsContent>

        <TabsContent value="communications" className="space-y-4">
          {/* Communication management content */}
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          {/* Logs and history content */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
