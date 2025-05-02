
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Clock, Users, Award, Gamepad, Target, Medal } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Données mockées pour la démo
const matchHistory = [
  { id: 1, opponent: "Player123", result: "Victoire", score: "3-1", date: "2024-01-15" },
  { id: 2, opponent: "GameMaster", result: "Défaite", score: "1-2", date: "2024-01-14" },
  { id: 3, opponent: "ProGamer", result: "Victoire", score: "2-0", date: "2024-01-13" },
];

const performanceData = [
  { month: "Jan", wins: 15, losses: 5 },
  { month: "Fév", wins: 12, losses: 8 },
  { month: "Mar", wins: 18, losses: 3 },
];

export default function Statistics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Statistiques de Performance
          </motion.h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="flex items-center gap-4 pt-6">
                  <Trophy className="h-8 w-8 text-asc-purple" />
                  <div>
                    <p className="text-sm text-gray-500">Victoires Totales</p>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-xs text-green-500">+5 ce mois</p>
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
                <CardContent className="flex items-center gap-4 pt-6">
                  <Target className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">Précision de Tir</p>
                    <p className="text-2xl font-bold">78%</p>
                    <p className="text-xs text-green-500">+2% ce mois</p>
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
                <CardContent className="flex items-center gap-4 pt-6">
                  <Medal className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Classement</p>
                    <p className="text-2xl font-bold">#42</p>
                    <p className="text-xs text-green-500">+15 positions</p>
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
                <CardContent className="flex items-center gap-4 pt-6">
                  <Clock className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Temps de Jeu</p>
                    <p className="text-2xl font-bold">156h</p>
                    <p className="text-xs text-blue-500">+12h ce mois</p>
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
                    <Gamepad className="h-5 w-5" />
                    Historique des Matchs Récents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {matchHistory.map((match) => (
                      <div 
                        key={match.id} 
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">{match.opponent}</p>
                            <p className="text-sm text-gray-500">{match.date}</p>
                          </div>
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
                    {performanceData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="flex flex-col-reverse space-y-reverse space-y-1">
                          <div
                            style={{ height: `${data.wins * 8}px` }}
                            className="w-12 bg-gradient-to-t from-asc-purple to-purple-400 rounded-t-sm"
                          ></div>
                          <div
                            style={{ height: `${data.losses * 8}px` }}
                            className="w-12 bg-gradient-to-t from-red-400 to-red-300 rounded-t-sm opacity-70"
                          ></div>
                        </div>
                        <span className="mt-2 text-sm text-gray-500">{data.month}</span>
                        <span className="text-xs text-gray-400">{data.wins + data.losses} matchs</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4 gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-asc-purple rounded"></div>
                      <span className="text-sm">Victoires</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded"></div>
                      <span className="text-sm">Défaites</span>
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
