
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Users, Medal, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const matchHistory = [
  { id: 1, opponent: "Player123", result: "Victoire", score: "3-1", date: "2024-01-15", tournament: "Coupe ASC #12" },
  { id: 2, opponent: "GameMaster", result: "Défaite", score: "1-2", date: "2024-01-14", tournament: "Ligue Pro" },
  { id: 3, opponent: "ProGamer", result: "Victoire", score: "2-0", date: "2024-01-13", tournament: "Coupe ASC #11" },
];

const monthlyStats = [
  { month: "Jan", matchs: 20, wins: 15 },
  { month: "Fév", matchs: 18, wins: 12 },
  { month: "Mar", matchs: 25, wins: 20 },
];

export default function Statistics() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold">Statistiques</h1>
            <p className="text-gray-500 mt-2">Suivez vos performances et votre progression</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Victoires</p>
                      <p className="text-2xl font-bold">47</p>
                      <p className="text-xs text-primary">+5 ce mois</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Medal className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Classement</p>
                      <p className="text-2xl font-bold">#42</p>
                      <p className="text-xs text-primary">+15 positions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tournois Gagnés</p>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-primary">+1 ce mois</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Matchs Joués</p>
                      <p className="text-2xl font-bold">63</p>
                      <p className="text-xs text-primary">+8 ce mois</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Derniers Matchs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {matchHistory.map((match) => (
                      <div 
                        key={match.id} 
                        className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{match.opponent}</p>
                            <p className="text-sm text-gray-500">{match.tournament}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              match.result === "Victoire" ? "text-primary" : "text-red-500"
                            }`}>
                              {match.result}
                            </p>
                            <p className="text-sm text-gray-500">{match.score}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{match.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Performance Mensuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] relative flex items-end justify-between px-4">
                    {monthlyStats.map((data, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div className="flex flex-col-reverse space-y-reverse space-y-1">
                          <div
                            style={{ height: `${data.wins * 15}px` }}
                            className="w-12 bg-green-500/80 rounded-t-lg"
                            title={`${data.wins} victoires`}
                          />
                          <div
                            style={{ height: `${(data.matchs - data.wins) * 15}px` }}
                            className="w-12 bg-red-500/80 rounded-t-lg"
                            title={`${data.matchs - data.wins} défaites`}
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{data.month}</p>
                          <p className="text-sm text-gray-500">
                            <span className="text-green-500">{data.wins}</span>
                            {" / "}
                            <span className="text-red-500">{data.matchs - data.wins}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-0 right-0 flex gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500/80 rounded"></div>
                        <span className="text-xs">Victoires</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500/80 rounded"></div>
                        <span className="text-xs">Défaites</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
