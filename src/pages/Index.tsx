
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SponsorshipLevels from "@/components/SponsorshipLevels";
import TournamentCard from "@/components/TournamentCard";
import { Trophy, Calendar, Users, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample tournaments for demonstration
const featuredTournaments = [
  {
    id: "t1",
    title: "ASC Premier League",
    description: "Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS.",
    prize: "350 000 FCFA",
    players: 24,
    maxPlayers: 32,
    date: "15 Mai 2025",
    status: "upcoming" as const
  },
  {
    id: "t2",
    title: "Coupe des Nations",
    description: "Représentez votre pays dans cette compétition internationale de Dream League Soccer.",
    prize: "200 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "En cours",
    status: "in-progress" as const
  },
  {
    id: "t3",
    title: "Championnat Junior",
    description: "Une compétition pour les joueurs débutants et intermédiaires.",
    prize: "100 000 FCFA",
    players: 10,
    maxPlayers: 16,
    date: "01 Juin 2025",
    status: "open" as const
  },
  {
    id: "t4",
    title: "Tournoi Elite",
    description: "Le plus haut niveau de compétition pour les joueurs confirmés.",
    prize: "250 000 FCFA",
    players: 32,
    maxPlayers: 32,
    date: "15 Avril 2025",
    status: "complete" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Tournaments Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Tournois à la une</h2>
                <p className="text-gray-500 dark:text-gray-400">Découvrez les tournois populaires sur ASC</p>
              </div>
              <Link to="/tournaments-info" className="mt-4 md:mt-0">
                <Button variant="outline" className="border-asc-purple text-asc-purple hover:bg-asc-purple/10">
                  Explorer les tournois
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} {...tournament} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/tournaments-info">
                <Button variant="outline" className="border-asc-purple text-asc-purple hover:bg-asc-purple/10">
                  Voir tous les tournois
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comment ça marche</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Rejoignez l'Afrique Sociale Cup en quelques étapes simples et commencez à participer aux tournois DLS.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-asc-purple/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-asc-purple" />
                </div>
                <h3 className="font-bold text-xl mb-2">1. Inscrivez-vous</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Créez votre compte en quelques clics et personnalisez votre profil
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-asc-orange/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-asc-orange" />
                </div>
                <h3 className="font-bold text-xl mb-2">2. Rejoignez un tournoi</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Inscrivez-vous aux tournois qui vous intéressent et payez les frais
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-asc-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-asc-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">3. Jouez vos matchs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Utilisez le code de match unique et affrontez vos adversaires
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-asc-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-asc-green" />
                </div>
                <h3 className="font-bold text-xl mb-2">4. Gagnez des prix</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Remportez des tournois pour gagner des récompenses en argent réel
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/register">
                <Button className="bg-asc-purple hover:bg-asc-dark-purple">
                  Commencer maintenant
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Sponsorship System Preview */}
        <SponsorshipLevels />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
