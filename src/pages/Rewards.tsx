
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, History, Award } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RewardHistory {
  date: string
  tournament: string
  position: number
  amount: number
}

// Exemple de données (à remplacer par les vraies données de l'API)
const mockHistory: RewardHistory[] = [
  { date: "2024-02-15", tournament: "Tournoi Février", position: 1, amount: 200000 },
  { date: "2024-01-20", tournament: "Tournoi Janvier", position: 2, amount: 100000 },
]

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Récompenses & Prix</h1>
      
      <Tabs defaultValue="current" className="mb-6">
        <TabsList>
          <TabsTrigger value="current">Prix Actuels</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
          <TabsTrigger value="legendary">Prix Légendaire</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  1er Prix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">200 000 FCFA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Prix pour le vainqueur du tournoi</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-gray-400" />
                  2ème Prix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">100 000 FCFA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Prix pour le finaliste</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-amber-700" />
                  3ème Prix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">50 000 FCFA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Prix pour la troisième place</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-6 w-6" />
                Historique des Gains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockHistory.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">{reward.tournament}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{reward.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{reward.amount.toLocaleString()} FCFA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Position: {reward.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legendary">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-600" />
                Prix Légendaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">5 000 000 FCFA</p>
              <p className="text-gray-600 dark:text-gray-400">
                Récompense exceptionnelle réservée aux exploits extraordinaires.
                Les critères spécifiques sont annoncés avant chaque tournoi.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
