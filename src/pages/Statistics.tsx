
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Users, Medal, Calendar, Target, Award } from "lucide-react"
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
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Trophy className="h-8 w-8 text-white" />
                    <div className="text-white">
                      <p className="text-sm opacity-90">Total Victoires</p>
                      <p className="text-2xl font-bold">47</p>
                      <p className="text-xs opacity-75">+5 ce mois</p>
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
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Medal className="h-8 w-8 text-white" />
                    <div className="text-white">
                      <p className="text-sm opacity-90">Classement</p>
                      <p className="text-2xl font-bold">#42</p>
                      <p className="text-xs opacity-75">+15 positions</p>
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
              <Card className="bg-gradient-to-br from-green-500 to-green-600">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-white" />
                    <div className="text-white">
                      <p className="text-sm opacity-90">Tournois Gagnés</p>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs opacity-75">+1 ce mois</p>
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
              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-white" />
                    <div className="text-white">
                      <p className="text-sm opacity-90">Matchs Joués</p>
                      <p className="text-2xl font-bold">63</p>
                      <p className="text-xs opacity-75">+8 ce mois</p>
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
                        className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{match.opponent}</p>
                            <p className="text-sm text-gray-500">{match.tournament}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              match.result === "Victoire" ? "text-green-500" : "text-red-500"
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
                  <div className="h-[300px] flex items-end justify-between">
                    {monthlyStats.map((data, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div className="flex flex-col-reverse space-y-reverse space-y-1">
                          <div
                            style={{ height: `${(data.wins / data.matchs) * 300}px` }}
                            className="w-16 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{data.month}</p>
                          <p className="text-sm text-gray-500">{data.wins}/{data.matchs}</p>
                        </div>
                      </div>
                    ))}
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
