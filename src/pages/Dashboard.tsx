import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, User, Star, Shield, Users, TrendingUp, Award, Medal } from "lucide-react";
import TournamentCard from "@/components/TournamentCard";
import { motion } from "framer-motion";

// Sample data (from original code)
const upcomingTournaments = [
  {
    id: "t1",
    title: "ASC Premier League",
    description: "Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS.",
    prize: "350 000 FCFA",
    players: 24,
    maxPlayers: 32,
    date: "15 Mai 2025",
    status: "upcoming" as const,
    image: "/tournament-1.jpg"
  },
  {
    id: "t5",
    title: "Tournoi Continental",
    description: "Affrontez les meilleurs joueurs du continent africain.",
    prize: "150 000 FCFA",
    players: 12,
    maxPlayers: 24,
    date: "20 Mai 2025",
    status: "open" as const,
    image: "/tournament-2.jpg"
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
    status: "in-progress" as const,
    image: "/tournament-3.jpg"
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
    status: "complete" as const,
    image: "/tournament-4.jpg"
  },
  {
    id: "t6",
    title: "Coupe Régionale",
    description: "Compétition régionale pour les joueurs de l'Afrique de l'Ouest.",
    prize: "100 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "01 Avril 2025",
    status: "complete" as const,
    image: "/tournament-5.jpg"
  }
];


const performanceData = [
  { month: "Jan", wins: 4, losses: 2, rating: 1250 },
  { month: "Fév", wins: 3, losses: 3, rating: 1225 },
  { month: "Mar", wins: 5, losses: 1, rating: 1300 },
  { month: "Avr", wins: 6, losses: 2, rating: 1350 },
  { month: "Mai", wins: 4, losses: 1, rating: 1375 },
  { month: "Juin", wins: 7, losses: 2, rating: 1400 },
];

const recentMatches = [
  { opponent: "PlayerX", result: "Victoire", score: "3-1", date: "Il y a 2h" },
  { opponent: "PlayerY", result: "Défaite", score: "1-2", date: "Il y a 5h" },
  { opponent: "PlayerZ", result: "Victoire", score: "2-0", date: "Hier" },
];

const notifications = [
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
  ];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-grow py-8 px-4">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-asc-purple to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <User className="h-10 w-10" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <Link to="/profile">
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-asc-purple to-purple-600 hover:opacity-80 transition-opacity">
                    JoueurASC
                  </h1>
                </Link>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Award className="h-4 w-4" />
                  <span>Paysan ASC</span>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <span>Niveau 15</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Card className="bg-gradient-to-br from-yellow-400 to-yellow-500">
                <CardContent className="p-4 flex items-center gap-3">
                  <Star className="h-6 w-6 text-white" />
                  <div className="text-white">
                    <p className="text-sm opacity-90">Points de fidélité</p>
                    <p className="text-xl font-bold">250</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600">
                <CardContent className="p-4 flex items-center gap-3">
                  <Medal className="h-6 w-6 text-white" />
                  <div className="text-white">
                    <p className="text-sm opacity-90">Classement</p>
                    <p className="text-xl font-bold">#157</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <Tabs value={"overview"} className="space-y-6">
            <TabsList className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
              <TabsTrigger value="overview" className="rounded-md px-4 py-2">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="tournaments" className="rounded-md px-4 py-2">Mes tournois</TabsTrigger>
              <TabsTrigger value="stats" className="rounded-md px-4 py-2">Statistiques</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Tournois</p>
                        <p className="text-2xl font-bold">7</p>
                        <p className="text-xs text-gray-400">4 terminés • 1 en cours • 2 à venir</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                        <p className="text-2xl font-bold">65%</p>
                        <p className="text-xs text-gray-400">14 victoires • 6 défaites</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Gains</p>
                        <p className="text-2xl font-bold">75 000 FCFA</p>
                        <p className="text-xs text-gray-400">+15 000 FCFA ce mois</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="bg-white dark:bg-gray-800 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-asc-purple" />
                        Prochains matchs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {notifications.map(notification => (
                          <div key={notification.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <div>
                                <p className="font-medium">{notification.title}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                              </div>
                            </div>
                            <button className="text-sm text-asc-purple hover:text-purple-700 dark:hover:text-purple-400">
                              Voir
                            </button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="bg-white dark:bg-gray-800 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5 text-asc-purple" />
                        Programme de parrainage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">Progression vers Roturier ASC</span>
                            <span className="text-sm text-gray-500">1/3 filleuls</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-asc-purple to-purple-600 w-1/3 rounded-full"></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>1 mois gratuit</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>1% des gains</span>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <p className="text-sm font-medium">Code de parrainage</p>
                          <div className="flex items-center justify-between mt-2">
                            <code className="text-asc-purple">JoueurASC2025</code>
                            <button className="text-sm text-asc-purple hover:text-purple-700">
                              Copier
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="tournaments" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-asc-purple" />
                    Tournois à venir
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingTournaments.map((tournament, index) => (
                      <motion.div
                        key={tournament.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <TournamentCard {...tournament} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-asc-purple" />
                    Tournois en cours
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTournaments.map((tournament, index) => (
                      <motion.div
                        key={tournament.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <TournamentCard {...tournament} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-asc-purple" />
                    Tournois passés
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastTournaments.map((tournament, index) => (
                      <motion.div
                        key={tournament.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <TournamentCard {...tournament} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Taux de victoire</p>
                        <p className="text-2xl font-bold">65%</p>
                        <p className="text-xs text-green-500">+5% ce mois</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Matchs joués</p>
                        <p className="text-2xl font-bold">20</p>
                        <p className="text-xs text-blue-500">4 ce mois</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Medal className="h-6 w-6 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Classement</p>
                        <p className="text-2xl font-bold">#157</p>
                        <p className="text-xs text-green-500">Top 15%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Performance mensuelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-end justify-between">
                      {performanceData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="flex flex-col-reverse space-y-reverse space-y-1">
                            <div
                              style={{ height: `${data.wins * 30}px` }}
                              className="w-8 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                            ></div>
                            <div
                              style={{ height: `${data.losses * 30}px` }}
                              className="w-8 bg-gradient-to-t from-red-400 to-red-300 rounded-t-sm opacity-70"
                            ></div>
                          </div>
                          <span className="mt-2 text-sm text-gray-500">{data.month}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-4 gap-6">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Victoires</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                        <span className="text-sm">Défaites</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Derniers matchs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentMatches.map((match, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                match.result === "Victoire" ? "bg-green-500" : "bg-red-500"
                              }`}
                            ></div>
                            <div>
                              <p className="font-medium">vs {match.opponent}</p>
                              <p className="text-sm text-gray-500">{match.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-medium ${
                                match.result === "Victoire" ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {match.result}
                            </p>
                            <p className="text-sm text-gray-500">{match.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;