import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, DollarSign } from "lucide-react";
import { Link } from 'react-router-dom';

export default function AdminTournaments() {
  const [searchTerm, setSearchTerm] = useState("");

  const tournaments = [
    {
      id: "TRN001",
      name: "Coupe ASC 2024",
      startDate: "2024-04-01",
      endDate: "2024-04-15",
      status: "upcoming",
      participants: 32,
      prize: "500,000 FCFA"
    },
    {
      id: "TRN002",
      name: "Championnat Elite",
      startDate: "2024-05-01",
      endDate: "2024-05-30",
      status: "registration",
      participants: 16,
      prize: "250,000 FCFA"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Tournois</h1>
        <Button variant="default">
          <Trophy className="h-4 w-4 mr-2" />
          Nouveau Tournoi
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Rechercher un tournoi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Tous les tournois</TabsTrigger>
          <TabsTrigger value="upcoming">À venir</TabsTrigger>
          <TabsTrigger value="active">En cours</TabsTrigger>
          <TabsTrigger value="completed">Terminés</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tournaments.map(tournament => (
                    <TableRow key={tournament.id}>
                      <TableCell className="font-mono">{tournament.id}</TableCell>
                      <TableCell>{tournament.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.startDate} - {tournament.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={tournament.status === 'upcoming' ? 'default' : 'secondary'}>
                          {tournament.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {tournament.participants}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {tournament.prize}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Éditer</Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/admin/tournaments/${tournament.id}`}>Détails</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tournaments.filter(t => t.status === 'upcoming').map(tournament => (
                    <TableRow key={tournament.id}>
                      <TableCell className="font-mono">{tournament.id}</TableCell>
                      <TableCell>{tournament.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.startDate} - {tournament.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={tournament.status === 'upcoming' ? 'default' : 'secondary'}>
                          {tournament.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {tournament.participants}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {tournament.prize}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Éditer</Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/admin/tournaments/${tournament.id}`}>Détails</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tournaments.filter(t => t.status === 'active').map(tournament => (
                    <TableRow key={tournament.id}>
                      <TableCell className="font-mono">{tournament.id}</TableCell>
                      <TableCell>{tournament.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.startDate} - {tournament.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={tournament.status === 'upcoming' ? 'default' : 'secondary'}>
                          {tournament.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {tournament.participants}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {tournament.prize}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Éditer</Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/admin/tournaments/${tournament.id}`}>Détails</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tournaments.filter(t => t.status === 'completed').map(tournament => (
                    <TableRow key={tournament.id}>
                      <TableCell className="font-mono">{tournament.id}</TableCell>
                      <TableCell>{tournament.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.startDate} - {tournament.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={tournament.status === 'upcoming' ? 'default' : 'secondary'}>
                          {tournament.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {tournament.participants}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {tournament.prize}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Éditer</Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/admin/tournaments/${tournament.id}`}>Détails</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}