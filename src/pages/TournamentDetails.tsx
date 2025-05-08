
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Shield, Clock, AlertCircle, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TournamentDetails() {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'flutterwave' | 'paydunya'>('momo');

  // Simulation d'un tournoi
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
    rules: "Règles standard DLS 2024...",
    matches: [
      {
        id: "m1",
        code: "ABCDEF1234",
        date: "16 Mai 2025",
        time: "15:00",
        opponent: "Team Alpha",
        status: "upcoming"
      },
      {
        id: "m2",
        code: "GHIJKL5678",
        date: "17 Mai 2025",
        time: "16:00",
        opponent: "Team Beta",
        status: "completed",
        score: "2-1"
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

                <Separator />

                {!isRegistered ? (
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Règles du tournoi</h3>
                        <p className="text-gray-600 dark:text-gray-300">{tournament.rules}</p>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" className="w-full">S'inscrire au tournoi</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Inscription au tournoi</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                Pseudo en jeu
                              </label>
                              <Input placeholder="Votre pseudo DLS" />
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium block">
                                Méthode de Paiement ({tournament.registrationFee})
                              </label>
                              <div className="grid grid-cols-3 gap-4">
                                <Button 
                                  variant={paymentMethod === 'momo' ? 'default' : 'outline'}
                                  onClick={() => setPaymentMethod('momo')}
                                >
                                  MTN MoMo
                                </Button>
                                <Button 
                                  variant={paymentMethod === 'flutterwave' ? 'default' : 'outline'}
                                  onClick={() => setPaymentMethod('flutterwave')}
                                >
                                  Flutterwave
                                </Button>
                                <Button 
                                  variant={paymentMethod === 'paydunya' ? 'default' : 'outline'}
                                  onClick={() => setPaymentMethod('paydunya')}
                                >
                                  PayDunya
                                </Button>
                              </div>
                            </div>

                            {paymentMethod === 'momo' && (
                              <Input placeholder="Numéro de téléphone" />
                            )}

                            <Button onClick={() => setIsRegistered(true)} className="w-full">
                              <CreditCard className="mr-2 h-4 w-4" />
                              Confirmer le paiement
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Shield className="h-5 w-5" />
                        <span className="font-medium">Vous êtes inscrit à ce tournoi</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Vos matches</h3>
                      {tournament.matches.map(match => (
                        <Card key={match.id}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium mb-1">vs {match.opponent}</div>
                                <div className="flex items-center gap-2">
                                  <div className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                    Code: {match.code}
                                  </div>
                                  {match.score && (
                                    <div className="text-sm font-bold">{match.score}</div>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{match.time}</span>
                                </div>
                                <div className="text-sm text-gray-500">{match.date}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div>
                      <Button variant="outline" className="w-full">
                        Voir les règles détaillées
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
