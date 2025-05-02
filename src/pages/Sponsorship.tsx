
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Gift, Users, Star, ArrowRight, Crown, Copy, Check, Info } from "lucide-react"
import { BackButton } from "@/components/BackButton"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const Sponsorship = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const referralLink = "https://asc.com/ref/123456"; // À remplacer par le vrai lien

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Lien copié !",
      description: "Le lien de parrainage a été copié dans votre presse-papiers.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <BackButton />
      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="referrals">Mes Filleuls</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Programme de <span className="gradient-text">Parrainage</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Gagnez des récompenses exceptionnelles en parrainant de nouveaux joueurs. Plus vous parrainez, plus vos avantages augmentent !
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <Gift className="h-12 w-12 text-asc-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bonus de Bienvenue</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recevez des crédits bonus pour chaque filleul qui s'inscrit
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <Trophy className="h-12 w-12 text-asc-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tournois Gratuits</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Accédez à des tournois premium sans frais selon votre niveau
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <Users className="h-12 w-12 text-asc-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commission sur Gains</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recevez un pourcentage sur les gains de vos filleuls
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <Star className="h-12 w-12 text-asc-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bonus de Recharge</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Gagnez un bonus sur chaque recharge de vos filleuls
                </p>
              </motion.div>
            </div>

            {/* Niveaux de Parrainage */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Niveaux de Parrainage</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Évoluez dans notre système de parrainage et débloquez des avantages exclusifs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Paysan ASC",
                    icon: <Users className="h-8 w-8" />,
                    requirements: "3 filleuls actifs",
                    benefits: [
                      "1 mois d'accès gratuit aux tournois premium",
                      "1% commission sur gains des filleuls",
                      "1% sur les recharges"
                    ],
                    color: "bg-gray-100 dark:bg-gray-800"
                  },
                  {
                    title: "Roturier ASC",
                    icon: <Trophy className="h-8 w-8" />,
                    requirements: "10 filleuls actifs",
                    benefits: [
                      "3 mois d'accès gratuit aux tournois premium",
                      "2% commission sur gains des filleuls",
                      "2% sur les recharges"
                    ],
                    color: "bg-blue-50 dark:bg-blue-900/20"
                  },
                  {
                    title: "Noble ASC",
                    icon: <Star className="h-8 w-8" />,
                    requirements: "50 filleuls actifs",
                    benefits: [
                      "6 mois d'accès gratuit aux tournois premium",
                      "5% commission sur gains des filleuls",
                      "5% sur les recharges"
                    ],
                    color: "bg-purple-50 dark:bg-purple-900/20"
                  },
                  {
                    title: "Roi ASC",
                    icon: <Crown className="h-8 w-8" />,
                    requirements: "100 filleuls actifs",
                    benefits: [
                      "12 mois d'accès gratuit aux tournois premium",
                      "10% commission sur gains des filleuls",
                      "10% sur les recharges",
                      "Badge exclusif Roi ASC"
                    ],
                    color: "bg-yellow-50 dark:bg-yellow-900/20"
                  }
                ].map((level, index) => (
                  <motion.div
                    key={level.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`${level.color} border-2 hover:border-asc-purple transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          {level.icon}
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Niveau {index + 1}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-1">{level.title}</CardTitle>
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
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>Mes Filleuls Actifs</CardTitle>
                <CardDescription>Liste de vos filleuls et leur activité</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Liste des filleuls (à connecter avec les données réelles) */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400">Aucun filleul pour le moment</p>
                  </div>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Commencer à Parrainer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <code className="text-sm">{referralLink}</code>
                        </div>
                        <Button onClick={copyReferralLink} variant="outline" size="icon">
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Parrainages</CardTitle>
                <CardDescription>Suivez l'évolution de vos parrainages et récompenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Historique (à connecter avec les données réelles) */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400">Aucun historique disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-asc-purple hover:bg-asc-dark-purple text-white"
            onClick={copyReferralLink}
          >
            {copied ? "Lien Copié !" : "Commencer à Parrainer"}
            {copied ? <Check className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Sponsorship
