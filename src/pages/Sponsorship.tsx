
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy, Gift, Users, Star, ArrowRight, Crown, Link as LinkIcon, Copy } from "lucide-react"
import { BackButton } from "@/components/BackButton"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

const Sponsorship = () => {
  const { toast } = useToast();
  // Mock data - to be replaced with real data from API
  const currentLevel = {
    name: "Paysan ASC",
    referrals: 2,
    nextLevel: "Roturier ASC",
    remainingReferrals: 1
  };

  const referralLink = "https://asc.com/ref/USER123"; // Will be dynamic

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      description: "Lien de parrainage copié !",
    });
  };

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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-asc-purple hover:bg-asc-dark-purple text-white">
                Commencer à Parrainer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Votre Lien de Parrainage</DialogTitle>
                <DialogDescription>
                  Partagez ce lien avec vos amis pour qu'ils rejoignent ASC
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <LinkIcon className="h-4 w-4 text-gray-500" />
                <input 
                  type="text" 
                  value={referralLink} 
                  readOnly 
                  className="flex-1 bg-transparent border-none focus:outline-none"
                />
                <Button variant="ghost" size="sm" onClick={copyReferralLink}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="benefits">Avantages</TabsTrigger>
            <TabsTrigger value="referrals">Mes Filleuls</TabsTrigger>
            <TabsTrigger value="statistics">Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Votre Progression</CardTitle>
                <CardDescription>
                  Niveau actuel: {currentLevel.name} ({currentLevel.referrals}/3 filleuls)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-asc-purple h-2.5 rounded-full" style={{ width: `${(currentLevel.referrals / 3) * 100}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plus que {currentLevel.remainingReferrals} filleul(s) pour atteindre {currentLevel.nextLevel}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits">
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
                  icon: <Crown className="h-8 w-8" />,
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
          </TabsContent>

          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>Mes Filleuls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Mock data - to be replaced with real data */}
                  {[
                    { name: "John Doe", date: "2024-02-15", status: "Actif" },
                    { name: "Jane Smith", date: "2024-02-10", status: "En attente" }
                  ].map((referral, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{referral.name}</p>
                        <p className="text-sm text-gray-600">Inscrit le {referral.date}</p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          referral.status === "Actif" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {referral.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques de Parrainage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Total des Gains</h3>
                    <p className="text-2xl font-bold text-asc-purple">150,000 FCFA</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Filleuls Actifs</h3>
                    <p className="text-2xl font-bold text-asc-purple">2</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Commission ce Mois</h3>
                    <p className="text-2xl font-bold text-asc-purple">25,000 FCFA</p>
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

export default Sponsorship
