import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TournamentCard, { TournamentStatus } from "@/components/TournamentCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Tournament {
  id: string;
  title: string;
  description: string;
  prize: string;
  players: number;
  maxPlayers: number;
  date: string;
  status: TournamentStatus;
  image?: string;
}

const allTournaments: Tournament[] = [
  {
    id: "t1",
    title: "ASC Premier League",
    description: "Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS.",
    prize: "350 000 FCFA",
    players: 24,
    maxPlayers: 32,
    date: "15 Mai 2025",
    status: "upcoming"
  },
  {
    id: "t2",
    title: "Coupe des Nations",
    description: "Représentez votre pays dans cette compétition internationale de Dream League Soccer.",
    prize: "200 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "En cours",
    status: "in-progress"
  },
  {
    id: "t3",
    title: "Championnat Junior",
    description: "Une compétition pour les joueurs débutants et intermédiaires.",
    prize: "100 000 FCFA",
    players: 10,
    maxPlayers: 16,
    date: "01 Juin 2025",
    status: "open"
  },
  {
    id: "t4",
    title: "Tournoi Elite",
    description: "Le plus haut niveau de compétition pour les joueurs confirmés.",
    prize: "250 000 FCFA",
    players: 32,
    maxPlayers: 32,
    date: "15 Avril 2025",
    status: "complete"
  },
  {
    id: "t5",
    title: "Tournoi Continental",
    description: "Affrontez les meilleurs joueurs du continent africain.",
    prize: "150 000 FCFA",
    players: 12,
    maxPlayers: 24,
    date: "20 Mai 2025",
    status: "open"
  },
  {
    id: "t6",
    title: "Coupe Régionale",
    description: "Compétition régionale pour les joueurs de l'Afrique de l'Ouest.",
    prize: "100 000 FCFA",
    players: 16,
    maxPlayers: 16,
    date: "01 Avril 2025",
    status: "complete"
  },
  {
    id: "t7",
    title: "ASC Legends Cup",
    description: "Un tournoi exclusif pour les meilleurs joueurs de l'histoire de l'ASC.",
    prize: "300 000 FCFA",
    players: 8,
    maxPlayers: 8,
    date: "10 Juin 2025",
    status: "upcoming"
  },
  {
    id: "t8",
    title: "Tournoi Communautaire",
    description: "Un tournoi organisé par la communauté pour la communauté.",
    prize: "50 000 FCFA",
    players: 8,
    maxPlayers: 16,
    date: "05 Mai 2025",
    status: "open"
  }
];

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [prizeFilter, setPrizeFilter] = useState(""); // Added state for prize filter

  const filterTournaments = (status: TournamentStatus | "all") => {
    return allTournaments.filter(tournament => {
      const matchesStatus = status === "all" || tournament.status === status;
      const matchesSearch = tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tournament.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrize = !prizeFilter ||
      parseInt(tournament.prize.replace(/\D/g, "")) >= parseInt(prizeFilter);
      return matchesStatus && matchesSearch && matchesPrize;
    });
  };

  const sortTournaments = (tournaments: Tournament[]) => {
    return [...tournaments].sort((a, b) => {
      if (sortBy === "prize") {
        const prizeA = parseInt(a.prize.replace(/\D/g, ""));
        const prizeB = parseInt(b.prize.replace(/\D/g, ""));
        return prizeB - prizeA;
      } else if (sortBy === "players") {
        return b.players - a.players;
      } else if (sortBy === "date") {
        const statusPriority: Record<TournamentStatus, number> = {
          "in-progress": 0,
          "open": 1,
          "upcoming": 2,
          "complete": 3
        };
        return statusPriority[a.status] - statusPriority[b.status];
      }
      return 0;
    });
  };

  const allFiltered = sortTournaments(filterTournaments("all"));
  const openFiltered = sortTournaments(filterTournaments("open"));
  const inProgressFiltered = sortTournaments(filterTournaments("in-progress"));
  const upcomingFiltered = sortTournaments(filterTournaments("upcoming"));
  const completeFiltered = sortTournaments(filterTournaments("complete"));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tournois ASC</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Découvrez et participez aux tournois Dream League Soccer
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Rechercher un tournoi"
                  className="pl-9 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2.5"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                )}
              </div>

              <div className="w-[150px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="prize">Prix</SelectItem>
                    <SelectItem value="players">Joueurs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input type="number" placeholder="Prix minimum" value={prizeFilter} onChange={(e) => setPrizeFilter(e.target.value)} className="w-24"/> {/* Added prize filter input */}
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="inline-flex h-9 space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <TabsTrigger value="all" className="rounded-md text-sm h-7 px-3">
                Tous ({allFiltered.length})
              </TabsTrigger>
              <TabsTrigger value="my-tournaments" className="rounded-md text-sm h-7 px-3">
                Mes tournois
              </TabsTrigger>
              <TabsTrigger value="open" className="rounded-md text-sm h-7 px-3">
                Ouverts ({openFiltered.length})
              </TabsTrigger>
              <TabsTrigger value="in-progress" className="rounded-md text-sm h-7 px-3">
                En cours ({inProgressFiltered.length})
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-md text-sm h-7 px-3">
                À venir ({upcomingFiltered.length})
              </TabsTrigger>
              <TabsTrigger value="complete" className="rounded-md text-sm h-7 px-3">
                Terminés ({completeFiltered.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {allFiltered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allFiltered.map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Aucun tournoi trouvé avec ces critères.
                  </p>
                  <Button onClick={() => {setSearchQuery(""); setPrizeFilter("")}}>Réinitialiser la recherche</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="open" className="mt-6">
              {openFiltered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {openFiltered.map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Aucun tournoi ouvert trouvé.
                  </p>
                  <Link to="/all">
                    <Button variant="outline">Voir tous les tournois</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="in-progress" className="mt-6">
              {inProgressFiltered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressFiltered.map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Aucun tournoi en cours pour le moment.
                  </p>
                  <Link to="/upcoming">
                    <Button variant="outline">Voir les tournois à venir</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              {upcomingFiltered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingFiltered.map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Aucun tournoi à venir pour le moment.
                  </p>
                  <Link to="/open">
                    <Button variant="outline">Voir les tournois ouverts</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="my-tournaments" className="mt-6">
              {allFiltered.filter(tournament => tournament.isRegistered).length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allFiltered.filter(tournament => tournament.isRegistered).map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} showDetails={true} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Vous n'êtes inscrit à aucun tournoi pour le moment.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="complete" className="mt-6">
              {completeFiltered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completeFiltered.map(tournament => (
                    <TournamentCard key={tournament.id} {...tournament} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Aucun tournoi terminé trouvé.
                  </p>
                  <Button variant="outline" onClick={() => {setActiveTab("all"); setPrizeFilter("")}}>
                    Voir tous les tournois
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tournaments;