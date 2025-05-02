
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, History, Award, Clock, Check, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RewardHistory {
  date: string
  tournament: string
  position: number
  amount: number
  status: "pending" | "claimed" | "processing"
}

const mockHistory: RewardHistory[] = [
  { date: "2024-02-15", tournament: "Tournoi Février", position: 1, amount: 200000, status: "pending" },
  { date: "2024-01-20", tournament: "Tournoi Janvier", position: 2, amount: 100000, status: "claimed" },
]

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("current")

  const getStatusBadge = (status: RewardHistory["status"]) => {
    switch (status) {
      case "pending":
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">En attente</span>
      case "claimed":
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Réclamé</span>
      case "processing":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">En traitement</span>
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-6 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Récompenses & Prix</h1>
      
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Les prix sont versés dans un délai de 48h après réclamation. Assurez-vous que vos informations de paiement sont à jour dans votre profil.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="current" className="mb-6">
        <TabsList>
          <TabsTrigger value="current">Prix Actuels</TabsTrigger>
          <TabsTrigger value="history">Historique & Réclamations</TabsTrigger>
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
                <div className="mt-4">
                  <p className="text-sm mb-2">Conditions de réclamation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Victoire confirmée
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Pas de litiges en cours
                    </li>
                  </ul>
                </div>
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
                <div className="mt-4">
                  <p className="text-sm mb-2">Conditions de réclamation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Position validée
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Pas de litiges en cours
                    </li>
                  </ul>
                </div>
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
                <div className="mt-4">
                  <p className="text-sm mb-2">Conditions de réclamation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Position validée
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> Pas de litiges en cours
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-6 w-6" />
                Historique des Gains & Réclamations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockHistory.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">{reward.tournament}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{reward.date}</p>
                      <div className="mt-1">
                        {getStatusBadge(reward.status)}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{reward.amount.toLocaleString()} FCFA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Position: {reward.position}</p>
                      {reward.status === "pending" && (
                        <Button size="sm" className="mt-2">
                          Réclamer
                        </Button>
                      )}
                      {reward.status === "processing" && (
                        <div className="mt-2">
                          <Progress value={60} className="h-2 mb-1" />
                          <p className="text-xs text-gray-500">En traitement...</p>
                        </div>
                      )}
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
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Récompense exceptionnelle réservée aux exploits extraordinaires.
                  Les critères spécifiques sont annoncés avant chaque tournoi.
                </p>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Conditions d'éligibilité:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Victoire dans un tournoi majeur
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Performance exceptionnelle
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Validation par le comité
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
      <Footer />
    </div>
  )
}
