
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Calendar, Award, Shield, AlertTriangle, Clock, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TournamentsInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tournois ASC</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez l'univers compétitif de Dream League Soccer avec nos tournois officiels ASC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Trophy className="h-12 w-12 text-asc-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prix Attractifs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Des récompenses allant jusqu'à 350 000 FCFA pour les vainqueurs.
                <br />
                1er : 200 000 FCFA
                <br />
                2ème : 100 000 FCFA
                <br />
                3ème : 50 000 FCFA
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-asc-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Planning Précis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rappels automatiques avant chaque match :
                <br />
                - 24h avant
                <br />
                - 1h avant
                <br />
                - 5 minutes avant
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-asc-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Système de Litiges</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Résolution rapide et équitable des litiges avec validation par 5 arbitres indépendants sous 10 minutes.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Types de Tournois</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-asc-purple mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">ASC Premier League</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Notre tournoi phare avec les meilleurs joueurs africains et les plus grosses récompenses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-asc-blue mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Championnats Régionaux</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Des compétitions locales pour représenter votre région.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-asc-orange mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Tournois Débutants</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Des événements parfaits pour commencer votre carrière compétitive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                Règles Importantes
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Code unique de 10 lettres pour chaque match</li>
                <li>• Relance obligatoire en cas de match nul</li>
                <li>• Respect strict des horaires de match</li>
                <li>• Preuves obligatoires pour les litiges</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BadgeDollarSign className="h-6 w-6 text-green-500" />
                Prix Légendaire
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Une récompense exceptionnelle de 5 millions FCFA pour des exploits extraordinaires selon des critères spécifiques annoncés avant le tournoi.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Tournois Disponibles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TournamentCard
                  id="t1"
                  title="ASC Premier League"
                  description="Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS."
                  prize="350 000 FCFA"
                  players={24}
                  maxPlayers={32}
                  date="15 Mai 2025"
                  status="open"
                  image="/tournament-1.jpg"
                />
                <TournamentCard
                  id="t2"
                  title="Tournoi Continental"
                  description="Affrontez les meilleurs joueurs du continent africain."
                  prize="150 000 FCFA"
                  players={12}
                  maxPlayers={24}
                  date="20 Mai 2025"
                  status="upcoming"
                  image="/tournament-2.jpg"
                />
                <TournamentCard
                  id="t3"
                  title="Championnat Régional"
                  description="Représentez votre région dans ce tournoi passionnant."
                  prize="100 000 FCFA"
                  players={8}
                  maxPlayers={16}
                  date="1 Juin 2025"
                  status="upcoming"
                  image="/tournament-3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TournamentsInfo;
