
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users, Trophy, AlertTriangle, Activity,
  LineChart, RefreshCw, Megaphone, Scale, 
  ChevronRight, MessageSquare
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const dailyData = [
  { name: 'Lun', users: 4, revenue: 400 },
  { name: 'Mar', users: 3, revenue: 300 },
  { name: 'Mer', users: 7, revenue: 700 },
  { name: 'Jeu', users: 5, revenue: 500 },
  { name: 'Ven', users: 8, revenue: 800 },
  { name: 'Sam', users: 12, revenue: 1200 },
  { name: 'Dim', users: 10, revenue: 1000 },
];

// Données de simulation pour l'arbre du tournoi
const tournamentTree = {
  name: "Finale",
  date: "15/03",
  player1: "À déterminer",
  player2: "À déterminer",
  children: [
    {
      name: "Demi-finale 1",
      date: "10/03",
      player1: "John Doe",
      player2: "Jane Smith",
      winner: "John Doe",
      status: "completed"
    },
    {
      name: "Demi-finale 2",
      date: "10/03",
      player1: "Alice Brown",
      player2: "Bob Wilson",
      status: "upcoming"
    }
  ]
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard Administrateur</h1>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualiser
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/admin/users">
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
              <Users className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% ce mois</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/tournaments">
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tournois</CardTitle>
              <Trophy className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
              <p className="text-xs text-muted-foreground">8 en cours</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/disputes">
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Litiges</CardTitle>
              <Scale className="h-5 w-5 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">5 en attente</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/communications">
          <Card className="hover:bg-slate-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Communications</CardTitle>
              <Megaphone className="h-5 w-5 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">12 non lues</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tournoi en cours - ASC Premier League</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="tournament-tree p-4">
              {/* Arbre du tournoi avec lignes de progression */}
              <div className="flex flex-col items-center space-y-8">
                <div className="final-match w-64 p-4 border rounded-lg bg-white shadow">
                  <div className="text-sm font-semibold mb-2">Finale - {tournamentTree.date}</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-50 rounded">{tournamentTree.player1}</div>
                    <div className="p-2 bg-gray-50 rounded">{tournamentTree.player2}</div>
                  </div>
                </div>
                
                <div className="semifinals flex justify-between w-full">
                  {tournamentTree.children.map((match, index) => (
                    <div key={index} className={`match w-64 p-4 border rounded-lg ${match.status === 'completed' ? 'bg-green-50' : 'bg-white'} shadow`}>
                      <div className="text-sm font-semibold mb-2">{match.name} - {match.date}</div>
                      <div className="space-y-2">
                        <div className={`p-2 rounded ${match.winner === match.player1 ? 'bg-green-100' : 'bg-gray-50'}`}>
                          {match.player1}
                        </div>
                        <div className={`p-2 rounded ${match.winner === match.player2 ? 'bg-green-100' : 'bg-gray-50'}`}>
                          {match.player2}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <Button size="sm" variant="outline">
                Programmer les matches
              </Button>
              <Button size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Faire une annonce
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Statistiques des inscriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" name="Utilisateurs" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-yellow-50 border-yellow-200">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertDescription className="text-yellow-600">
          5 litiges nécessitent votre attention. <Link to="/admin/disputes" className="font-medium underline">Voir les litiges</Link>
        </AlertDescription>
      </Alert>
    </div>
  );
}
