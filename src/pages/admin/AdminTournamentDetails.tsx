
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, AlertCircle, Calendar, ZoomIn, ZoomOut } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Match {
  id: string;
  round: number;
  position: number;
  player1?: string;
  player2?: string;
  winner?: string;
  status: "completed" | "scheduled" | "pending";
  date?: string;
}

export default function AdminTournamentDetails() {
  const { id } = useParams();
  const [zoom, setZoom] = useState(1);
  const [matches, setMatches] = useState<Match[]>([
    ...Array.from({ length: 7 }, (_, i) => ({
      id: `${i + 1}`,
      round: i < 4 ? 1 : i < 6 ? 2 : 3,
      position: i + 1,
      player1: i < 4 ? `User${i * 2 + 1}` : undefined,
      player2: i < 4 ? `User${i * 2 + 2}` : undefined,
      status: i < 2 ? "completed" : i < 4 ? "scheduled" : "pending",
      winner: i < 2 ? `User${i * 2 + 1}` : undefined,
      date: i < 4 ? `2024-03-${i + 1}` : undefined
    }))
  ]);

  const tournamentInfo = {
    title: "Coupe ASC 2024",
    prize: "500,000 FCFA",
    prizeBreakdown: {
      first: "250,000 FCFA",
      second: "150,000 FCFA",
      third: "100,000 FCFA"
    },
    registrationFee: "5,000 FCFA",
    status: "en cours",
    totalParticipants: 1024,
    startDate: "2024-03-01",
    endDate: "2024-03-15"
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Détails du Tournoi</h1>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Programmer les matches</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Programmer les prochains matches</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {matches
                  .filter(match => match.status === "pending" && 
                    (match.round === 1 || matches.some(m => 
                      m.round === match.round - 1 && 
                      m.status === "completed")))
                  .slice(0, 5)
                  .map(match => (
                    <div key={match.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Match {match.id}</h3>
                      <div className="flex justify-between items-center">
                        <span>{match.player1} vs {match.player2}</span>
                        <Button size="sm">Programmer</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="default">Faire une annonce</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informations du Tournoi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Prix Total</h3>
                <p className="text-2xl font-bold text-green-600">{tournamentInfo.prize}</p>
              </div>
              <div>
                <h3 className="font-semibold">Frais d'inscription</h3>
                <p>{tournamentInfo.registrationFee}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Répartition des Prix</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>1er Place:</span>
                  <span className="font-semibold">{tournamentInfo.prizeBreakdown.first}</span>
                </div>
                <div className="flex justify-between">
                  <span>2ème Place:</span>
                  <span className="font-semibold">{tournamentInfo.prizeBreakdown.second}</span>
                </div>
                <div className="flex justify-between">
                  <span>3ème Place:</span>
                  <span className="font-semibold">{tournamentInfo.prizeBreakdown.third}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Participants</h3>
                <p>{tournamentInfo.totalParticipants}</p>
              </div>
              <div>
                <h3 className="font-semibold">Statut</h3>
                <p className="capitalize">{tournamentInfo.status}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Dates</h3>
              <p>Du {tournamentInfo.startDate} au {tournamentInfo.endDate}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Arbre du tournoi
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoom(prev => Math.min(2, prev + 0.1))}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="tournament-bracket-container">
              <div className="tournament-bracket" style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
                {Array.from({ length: 10 }, (_, round) => (
                  <div key={10 - round} className={`round round-${10 - round}`}>
                    {matches
                      .filter(match => match.round === 10 - round)
                      .map(match => (
                        <div 
                          key={match.id} 
                          className={`match-box p-3 border rounded-lg
                            ${match.status === 'completed' ? 'bg-green-50 border-green-200' : 
                              match.status === 'scheduled' ? 'bg-blue-50 border-blue-200' : 
                              'bg-gray-50'}`}
                          data-winner={match.winner}
                        >
                          <div className="text-sm font-semibold mb-2 flex justify-between">
                            <span>Match {match.id}</span>
                            {match.date && <span className="text-xs">{match.date}</span>}
                          </div>
                          <div className="space-y-2">
                            <div className={`p-2 rounded text-sm ${match.winner === match.player1 ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {match.player1 || "À déterminer"}
                            </div>
                            <div className={`p-2 rounded text-sm ${match.winner === match.player2 ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {match.player2 || "À déterminer"}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alertes et Litiges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle className="h-4 w-4" />
              <span>2 litiges en attente de résolution</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
