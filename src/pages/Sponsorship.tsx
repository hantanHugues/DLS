
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const sponsorshipLevels = [
  {
    title: "Paysan ASC",
    requirements: "3 filleuls actifs",
    benefits: ["1 mois d'accès gratuit aux tournois premium", "1% commission sur gains des filleuls", "1% sur les recharges"]
  },
  {
    title: "Roturier ASC",
    requirements: "10 filleuls actifs",
    benefits: ["3 mois d'accès gratuit aux tournois premium", "2% commission sur gains des filleuls", "2% sur les recharges"]
  },
  {
    title: "Noble ASC",
    requirements: "50 filleuls actifs",
    benefits: ["3 mois gratuits supplémentaires", "5% commission sur gains des filleuls", "5% sur les recharges"]
  },
  // ... autres niveaux
]

const SponsorshipPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Programme de Parrainage</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Parrainez de nouveaux joueurs et gagnez des récompenses exclusives. Progressez dans les rangs pour débloquer encore plus d'avantages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsorshipLevels.map((level, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Trophy className="h-6 w-6 text-asc-purple" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">{level.title}</CardTitle>
              <p className="text-sm text-gray-500">{level.requirements}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {level.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-asc-purple rounded-full" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="gradient-bg">
          Commencer à Parrainer
        </Button>
      </div>
    </div>
  )
}

export default SponsorshipPage
