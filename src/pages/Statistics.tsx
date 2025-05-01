
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Clock, Users, Award } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Statistics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Statistiques</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <Trophy className="h-8 w-8 text-asc-purple" />
                <div>
                  <p className="text-sm text-gray-500">Tournois gagnés</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Ratio V/D</p>
                  <p className="text-2xl font-bold">1.5</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <Clock className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Temps de jeu</p>
                  <p className="text-2xl font-bold">156h</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <Award className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">Classement</p>
                  <p className="text-2xl font-bold">#42</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Historique des matchs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((match) => (
                    <div key={match} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="font-medium">Match #{match}</p>
                          <p className="text-sm text-gray-500">Il y a 2 jours</p>
                        </div>
                      </div>
                      <div className="font-medium text-green-500">Victoire</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance par mode de jeu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="font-medium">1v1</p>
                      <p className="text-sm text-gray-500">75% de victoires</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-3/4 bg-asc-purple rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="font-medium">2v2</p>
                      <p className="text-sm text-gray-500">60% de victoires</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-3/5 bg-asc-purple rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="font-medium">3v3</p>
                      <p className="text-sm text-gray-500">80% de victoires</p>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-4/5 bg-asc-purple rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
