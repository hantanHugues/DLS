import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, User, Star, Shield, Users } from "lucide-react";
import TournamentCard from "@/components/TournamentCard";

// Sample data
const upcomingTournaments = [
  {
    id: "t1",
    title: "ASC Premier League",
    description: "Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS.",
    prize: "350 000 FCFA",
    players: 24,
    maxPlayers: 32,
    date: "15 Mai 2025",
    status: "upcoming" as const
  },
  {
    id: "t5",
    title: "Tournoi Continental",
    description: "Affrontez les meilleurs joueurs du continent africain.",
    prize: "150 000 FCFA",
    players: 12,
    maxPlayers: 24,
    date: "20 Mai 2025",
    status: "open" as const
  }
];

const activeTournaments = [
  {
    id: "t2",
    title: "Coupe des Nations",
    description: "Représentez votre pays dans cette compétition internationale de Dream League Soccer.",
    prize: "200 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "En cours",
    status: "in-progress" as const
  }
];

const pastTournaments = [
  {
    id: "t4",
    title: "Tournoi Elite",
    description: "Le plus haut niveau de compétition pour les joueurs confirmés.",
    prize: "250 000 FCFA",
    players: 32,
    maxPlayers: 32,
    date: "15 Avril 2025",
    status: "complete" as const
  },
  {
    id: "t6",
    title: "Coupe Régionale",
    description: "Compétition régionale pour les joueurs de l'Afrique de l'Ouest.",
    prize: "100 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "01 Avril 2025",
    status: "complete" as const
  }
];

// Performance stats
const performanceData = [
  { month: "Jan", wins: 4, losses: 2 },
  { month: "Fév", wins: 3, losses: 3 },
  { month: "Mar", wins: 5, losses: 1 },
  { month: "Avr", wins: 2, losses: 4 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [favoriteTournaments, setFavoriteTournaments] = useState(upcomingTournaments.slice(0, 2));
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Match ASC Premier League",
      time: "Dans 24h",
      type: "reminder"
    },
    {
      id: 2,
      title: "Nouveau tournoi disponible",
      time: "Il y a 1h",
      type: "tournament"
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-asc-purple rounded-full flex items-center justify-center text-white">
                <User className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Bienvenue, JoueurASC</h1>
                <p className="text-gray-500 dark:text-gray-400">Paysan ASC • Membre depuis Mai 2025</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Points de fidélité</p>
                <p className="font-bold">250 pts</p>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="tournaments">Mes tournois</TabsTrigger>
              <TabsTrigger value="stats">Statistiques</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tournois</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">4 terminés • 1 en cours • 2 à venir</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">65%</div>
                    <p className="text-xs text-muted-foreground">14 victoires • 6 défaites</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Gains</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75 000 FCFA</div>
                    <p className="text-xs text-muted-foreground">Gains cumulés</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Prochains matchs</h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-asc-purple" />
                          <div>
                            <p className="font-medium">ASC Premier League - 1/8 de finale</p>
                            <p className="text-sm text-gray-500">15 Mai 2025 • 18:00 GMT</p>
                          </div>
                        </div>
                        <div className="text-sm bg-asc-purple/10 text-asc-purple px-2 py-1 rounded-full">
                          Dans 3 jours
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-asc-purple" />
                          <div>
                            <p className="font-medium">Tournoi Continental - Phase de groupes</p>
                            <p className="text-sm text-gray-500">20 Mai 2025 • 20:00 GMT</p>
                          </div>
                        </div>
                        <div className="text-sm bg-asc-purple/10 text-asc-purple px-2 py-1 rounded-full">
                          Dans 8 jours
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Programme de parrainage</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Paysan ASC</CardTitle>
                    <CardDescription>Niveau 1 • 3 filleuls actifs requis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Progression</span>
                          <span className="text-sm font-medium">1/3 filleuls actifs</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="bg-asc-purple h-full rounded-full" style={{width: '33%'}}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-asc-purple"></div>
                          <span className="text-sm">1 mois gratuit</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-asc-purple"></div>
                          <span className="text-sm">1% des gains des filleuls</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>Code de parrainage: JoueurASC2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tournaments" className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Tournois à venir</h2>
                  {upcomingTournaments.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {upcomingTournaments.map(tournament => (
                        <TournamentCard key={tournament.id} {...tournament} />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-6 text-center text-gray-500">
                        Aucun tournoi à venir pour le moment.
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Tournois en cours</h2>
                  {activeTournaments.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activeTournaments.map(tournament => (
                        <TournamentCard key={tournament.id} {...tournament} />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-6 text-center text-gray-500">
                        Aucun tournoi en cours pour le moment.
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Tournois passés</h2>
                  {pastTournaments.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pastTournaments.map(tournament => (
                        <TournamentCard key={tournament.id} {...tournament} />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="py-6 text-center text-gray-500">
                        Aucun tournoi passé.
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Taux de victoire</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">65%</div>
                    <p className="text-xs text-muted-foreground">+5% depuis le mois dernier</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Matchs joués</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">20</div>
                    <p className="text-xs text-muted-foreground">4 ce mois-ci</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Rang ASC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">#157</div>
                    <p className="text-xs text-muted-foreground">Sur 1240 joueurs</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance mensuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-end justify-between">
                    {performanceData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center w-16">
                        <div className="w-full flex flex-col-reverse space-y-reverse space-y-1">
                          <div style={{height: `${data.wins * 20}px`}} className="w-full bg-asc-purple rounded-t-sm"></div>
                          <div style={{height: `${data.losses * 20}px`}} className="w-full bg-red-400 rounded-t-sm"></div>
                        </div>
                        <div className="mt-2 text-xs">{data.month}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-4 gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-asc-purple rounded-full"></div>
                      <span className="text-sm">Victoires</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Défaites</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Résumé des tournois</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Tournoi Elite</p>
                        <p className="text-sm text-gray-500">Avril 2025</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-asc-purple" />
                        <span>Quart de finale</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Coupe Régionale</p>
                        <p className="text-sm text-gray-500">Avril 2025</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <span>Vainqueur</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Championnat Junior</p>
                        <p className="text-sm text-gray-500">Mars 2025</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-gray-400" />
                        <span>Deuxième place</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;