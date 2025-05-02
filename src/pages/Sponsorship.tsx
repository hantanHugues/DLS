import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy, Gift, Users, Star, ArrowRight } from "lucide-react"
import { BackButton } from "@/components/BackButton"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Sponsorship = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <BackButton />
      <div className="container mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Programme de <span className="gradient-text">Parrainage</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            Gagnez des récompenses exceptionnelles en parrainant de nouveaux joueurs
          </p>
          <Button size="lg" className="bg-asc-purple hover:bg-asc-dark-purple text-white">
            Commencer à Parrainer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Paysan ASC",
              icon: <Users className="h-8 w-8" />,
              requirements: "3 filleuls actifs",
              benefits: [
                "1 mois gratuit",
                "1% des gains des filleuls",
                "1% des recharges"
              ],
              color: "bg-gray-100 dark:bg-gray-800"
            },
            {
              title: "Roturier ASC",
              icon: <Trophy className="h-8 w-8" />,
              requirements: "10 filleuls actifs",
              benefits: [
                "3 mois gratuits",
                "2% des gains des filleuls",
                "2% des recharges"
              ],
              color: "bg-blue-50 dark:bg-blue-900/20"
            },
            {
              title: "Noble ASC",
              icon: <Star className="h-8 w-8" />,
              requirements: "50 filleuls actifs",
              benefits: [
                "6 mois gratuits",
                "5% des gains des filleuls",
                "5% des recharges"
              ],
              color: "bg-purple-50 dark:bg-purple-900/20"
            },
            {
              title: "Roi ASC",
              icon: <Gift className="h-8 w-8" />,
              requirements: "100 filleuls actifs",
              benefits: [
                "12 mois gratuits",
                "10% des gains des filleuls",
                "10% des recharges",
                "Badge exclusif Roi ASC"
              ],
              color: "bg-yellow-50 dark:bg-yellow-900/20"
            }
          ].map((level) => (
            <Card key={level.title} className={`${level.color} border-2`}>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  {level.icon}
                </div>
                <CardTitle>{level.title}</CardTitle>
                <CardDescription>{level.requirements}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-asc-purple" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sponsorship