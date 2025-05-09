import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Shield, Clock, AlertCircle, CreditCard, Megaphone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TournamentDetails() {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'flutterwave' | 'paydunya'>('momo');

  // Simulation des données du tournoi
  const tournament = {
    id: id,
    title: "ASC Premier League",
    description: "Le tournoi phare de l'ASC avec les meilleurs joueurs africains de DLS.",
    prize: "350 000 FCFA",
    registrationFee: "5000 FCFA",
    players: 24,
    maxPlayers: 32,
    date: "15 Mai 2025",
    status: "open",
    rules: "1. Chaque match doit être joué dans le délai imparti\n2. Les matchs sont en format Best-of-3\n3. Les joueurs doivent être ponctuels\n4. Le fair-play est obligatoire",
    rounds: [
      {
        name: "Finale",
        matches: [
          {
            id: "final-1",
            player1: "À déterminer",
            player2: "À déterminer",
            status: "upcoming",
            date: "20 Mai 2025"
          }
        ]
      },
      {
        name: "Demi-finales",
        matches: [
          {
            id: "semi-1",
            player1: "Team Alpha",
            player2: "Team Beta",
            status: "completed",
            score: "2-1",
            date: "18 Mai 2025"
          },
          {
            id: "semi-2",
            player1: "Team Gamma",
            player2: "Team Delta",
            status: "upcoming",
            date: "18 Mai 2025"
          }
        ]
      },
      {
        name: "Quarts de finale",
        matches: [
          {
            id: "quarter-1",
            player1: "Team Alpha",
            player2: "Team Echo",
            status: "completed",
            score: "2-0",
            date: "16 Mai 2025"
          },
          {
            id: "quarter-2",
            player1: "Team Beta",
            player2: "Team Foxtrot",
            status: "completed",
            score: "2-1",
            date: "16 Mai 2025"
          },
          {
            id: "quarter-3",
            player1: "Team Gamma",
            player2: "Team Golf",
            status: "completed",
            score: "2-0",
            date: "16 Mai 2025"
          },
          {
            id: "quarter-4",
            player1: "Team Delta",
            player2: "Team Hotel",
            status: "completed",
            score: "2-1",
            date: "16 Mai 2025"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container max-w-6xl">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{tournament.title}</CardTitle>
                  <Badge variant={tournament.status === "open" ? "default" : "secondary"}>
                    {tournament.status === "open" ? "Inscriptions Ouvertes" : "En cours"}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-asc-purple mb-1">
                    {tournament.prize}
                  </div>
                  <div className="text-sm text-gray-500">
                    Frais d'inscription: {tournament.registrationFee}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{tournament.description}</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-asc-blue" />
                      <span>{tournament.players}/{tournament.maxPlayers} joueurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-asc-purple" />
                      <span>{tournament.date}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between mb-6">
                    <h3 className="text-lg font-semibold">Progression du Tournoi</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Megaphone className="h-4 w-4" />
                        Faire une annonce
                      </Button>
                      <Button className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Programmer les matches
                      </Button>
                    </div>
                  </div>

                  <div className="tournament-bracket space-y-12">
                    {tournament.rounds.map((round, roundIndex) => (
                      <div key={round.name} className="relative">
                        <h4 className="text-sm font-medium mb-4">{round.name}</h4>
                        <div className={`grid gap-4 ${
                          roundIndex === 0 ? 'justify-center' : 
                          roundIndex === 1 ? 'grid-cols-2' : 'grid-cols-4'
                        }`}>
                          {round.matches.map((match) => (
                            <div 
                              key={match.id} 
                              className={`p-4 rounded-lg border ${
                                match.status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' : 
                                match.status === 'upcoming' ? 'bg-gray-50 dark:bg-gray-800' : ''
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="text-sm text-gray-500">{match.date}</div>
                                <div className={`p-2 rounded ${
                                  match.status === 'completed' && match.score?.split('-')[0] > match.score?.split('-')[1] 
                                  ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                  {match.player1}
                                </div>
                                <div className={`p-2 rounded ${
                                  match.status === 'completed' && match.score?.split('-')[1] > match.score?.split('-')[0]
                                  ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                  {match.player2}
                                </div>
                                {match.status === 'completed' && (
                                  <div className="text-center font-semibold mt-2">
                                    {match.score}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}