
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Users, Trophy, AlertTriangle, DollarSign, Activity, 
  UserCheck, Ban, Clock, Mail, Settings, FileText,
  UserPlus, RefreshCw, ShieldAlert, Award
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

const monthlyData = [
  { name: 'Jan', users: 50, revenue: 5000 },
  { name: 'Fév', users: 65, revenue: 6500 },
  { name: 'Mar', users: 80, revenue: 8000 },
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
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Totaux</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% ce mois</p>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              Voir détails
            </Button>
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
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              Voir détails
            </Button>
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
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              Voir détails
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Retraits en Attente</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">5 nouveaux aujourd'hui</p>
            <Button variant="ghost" size="sm" className="mt-2 w-full">
              Traiter
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Quotidien</TabsTrigger>
          <TabsTrigger value="weekly">Hebdomadaire</TabsTrigger>
          <TabsTrigger value="monthly">Mensuel</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Inscriptions aujourd'hui</CardTitle>
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
                <CardTitle>Revenus aujourd'hui</CardTitle>
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
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Actions Rapides</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24">
              <UserPlus className="h-6 w-6 mb-2" />
              Ajouter Validateur
            </Button>
            <Button variant="outline" className="h-24">
              <Trophy className="h-6 w-6 mb-2" />
              Créer Tournoi
            </Button>
            <Button variant="outline" className="h-24">
              <Mail className="h-6 w-6 mb-2" />
              Envoyer Message
            </Button>
            <Button variant="outline" className="h-24">
              <FileText className="h-6 w-6 mb-2" />
              Rapports
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Alertes & Notifications</h2>
          <div className="space-y-2">
            <Alert className="hover:bg-muted/50 cursor-pointer">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                3 nouveaux litiges à traiter
              </AlertDescription>
            </Alert>
            <Alert className="hover:bg-muted/50 cursor-pointer">
              <DollarSign className="h-4 w-4" />
              <AlertDescription>
                5 demandes de retrait en attente
              </AlertDescription>
            </Alert>
            <Alert className="hover:bg-muted/50 cursor-pointer">
              <Award className="h-4 w-4" />
              <AlertDescription>
                2 nouveaux validateurs candidats
              </AlertDescription>
            </Alert>
            <Alert className="hover:bg-muted/50 cursor-pointer">
              <ShieldAlert className="h-4 w-4" />
              <AlertDescription>
                2 activités suspectes détectées
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}
