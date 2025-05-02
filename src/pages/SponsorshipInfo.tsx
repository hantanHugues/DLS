
import { motion } from "framer-motion";
import { Trophy, Star, Users, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SponsorshipInfo = () => {
  const levels = [
    {
      title: "Paysan ASC",
      icon: <Users className="h-8 w-8 text-asc-purple" />,
      requirements: "3 filleuls actifs",
      benefits: ["1 mois d'accès gratuit", "1% commission sur gains", "1% sur recharges"]
    },
    {
      title: "Roturier ASC",
      icon: <Star className="h-8 w-8 text-asc-blue" />,
      requirements: "10 filleuls actifs",
      benefits: ["3 mois d'accès gratuit", "2% commission sur gains", "2% sur recharges"]
    },
    {
      title: "Noble ASC",
      icon: <Trophy className="h-8 w-8 text-asc-green" />,
      requirements: "50 filleuls actifs",
      benefits: ["6 mois d'accès gratuit", "5% commission sur gains", "5% sur recharges"]
    },
    {
      title: "Roi ASC",
      icon: <Crown className="h-8 w-8 text-asc-yellow" />,
      requirements: "100 filleuls actifs",
      benefits: ["12 mois d'accès gratuit", "10% commission sur gains", "10% sur recharges"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Programme de <span className="gradient-text">Parrainage ASC</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Rejoignez notre programme de parrainage exclusif et bénéficiez de récompenses exceptionnelles en développant votre réseau de joueurs.
          </p>
        </motion.div>

        {/* Comment ça marche */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="h-12 w-12 bg-asc-purple/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-asc-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Invitez des joueurs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Partagez votre lien unique de parrainage avec de nouveaux joueurs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="h-12 w-12 bg-asc-blue/10 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-asc-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Filleuls actifs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vos filleuls participent à des tournois et restent actifs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="h-12 w-12 bg-asc-green/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-asc-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Gagnez des récompenses</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Débloquez des avantages exclusifs et des commissions permanentes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Niveaux de Parrainage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Niveaux de Parrainage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  {level.icon}
                  <span className="text-sm font-medium text-gray-500">Niveau {index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{level.requirements}</p>
                <ul className="space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-asc-purple" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link to="/register">
            <Button size="lg" className="bg-asc-purple hover:bg-asc-dark-purple">
              Commencer à Parrainer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorshipInfo;
