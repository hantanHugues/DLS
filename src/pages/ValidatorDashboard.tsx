
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Clock, Trophy, Ban, Info } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ValidatorDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-6 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Tableau de bord Validateur</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Réputation: 95%</Badge>
            <Badge>25 FCFA / validation</Badge>
          </div>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Vous avez 10 minutes pour traiter chaque litige. Vérifiez attentivement les preuves avant de voter.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Litiges en cours</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Match #12345</CardTitle>
                    <Badge className="bg-yellow-500">
                      <Clock className="w-4 h-4 mr-1" />
                      08:45
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <p className="font-semibold mb-2">Motif: Contestation du score</p>
                      <p className="text-sm text-gray-600 mb-4">
                        Le joueur A conteste le résultat final du match...
                      </p>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline">Preuve fournie</Badge>
                        <Button variant="link" size="sm">Voir la preuve</Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline">Victoire Joueur A</Button>
                        <Button variant="outline">Victoire Joueur B</Button>
                        <Button variant="outline">Match à rejouer</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance de validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Taux de réussite</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Validations totales</p>
                        <p className="text-2xl font-bold">156</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Erreurs</p>
                        <p className="text-2xl font-bold">2</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statut du compte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span>Validateur niveau 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span>Avertissements: 0/3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ban className="h-5 w-5 text-gray-500" />
                      <span>Suspensions: 0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historique des validations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Exemple d'historique */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-semibold">Match #12340</p>
                        <p className="text-sm text-gray-500">Il y a 2 heures</p>
                      </div>
                      <Badge variant="outline" className="text-green-500">Correct</Badge>
                    </div>
                    <p className="text-sm">Décision: Victoire Joueur A</p>
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
