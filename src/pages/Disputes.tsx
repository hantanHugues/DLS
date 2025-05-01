
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

const DisputesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Gestion des Litiges</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Un système équitable et transparent pour résoudre les différends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Soumettre un Litige
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Vous avez 10 minutes après un match pour soumettre un litige.</p>
            <Button className="w-full">Nouveau Litige</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Mes Litiges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Consultez l'historique de vos litiges et leur résolution.</p>
            <Button variant="outline" className="w-full">Voir l'Historique</Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Processus de Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-asc-purple rounded-full flex items-center justify-center text-white mb-4">1</div>
            <h3 className="font-semibold mb-2">Soumission</h3>
            <p className="text-sm">Fournissez les preuves nécessaires</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-asc-purple rounded-full flex items-center justify-center text-white mb-4">2</div>
            <h3 className="font-semibold mb-2">Validation</h3>
            <p className="text-sm">5 validateurs examinent le cas</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-asc-purple rounded-full flex items-center justify-center text-white mb-4">3</div>
            <h3 className="font-semibold mb-2">Résolution</h3>
            <p className="text-sm">Décision appliquée automatiquement</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
        <p className="text-sm">Les litiges abusifs peuvent entraîner des sanctions, incluant la suspension du compte.</p>
      </div>
    </div>
  )
}

export default DisputesPage
