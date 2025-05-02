
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ValidatorDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-6 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord Validateur</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Litiges en cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Match #12345</h3>
                    <p className="text-sm text-gray-500">Il y a 5 minutes</p>
                  </div>
                  <Badge>10:00</Badge>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">Victoire Joueur A</Button>
                    <Button variant="outline">Victoire Joueur B</Button>
                  </div>
                  <Button className="w-full">Rejouer le match</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
      <Footer />
    </div>
  )
}
