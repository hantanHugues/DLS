
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Users, Calendar, Award } from "lucide-react";

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
                Des récompenses allant jusqu'à 350 000 FCFA pour les meilleurs joueurs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-asc-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communauté Active</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rejoignez des milliers de joueurs passionnés à travers l'Afrique.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Calendar className="h-12 w-12 text-asc-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tournois Réguliers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Des compétitions organisées chaque mois pour tous les niveaux.
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TournamentsInfo;
