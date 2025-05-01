
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function Rewards() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Récompenses & Prix</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              1er Prix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">200 000 FCFA</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-gray-400" />
              2ème Prix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">100 000 FCFA</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-amber-700" />
              3ème Prix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50 000 FCFA</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
