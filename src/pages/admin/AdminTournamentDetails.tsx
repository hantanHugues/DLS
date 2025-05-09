
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, AlertCircle, Calendar } from "lucide-react";

interface Match {
  id: string;
  round: number;
  position: number;
  player1: string;
  player2: string;
  winner?: string;
  status: "completed" | "scheduled" | "pending";
  date?: string;
}

export default function AdminTournamentDetails() {
  const { id } = useParams();
  const [matches, setMatches] = useState<Match[]>([
    // Round 1 (Quarter-finals)
    { id: "1", round: 1, position: 1, player1: "Équipe 1", player2: "Équipe 2", winner: "Équipe 1", status: "completed" },
    { id: "2", round: 1, position: 2, player1: "Équipe 3", player2: "Équipe 4", status: "scheduled", date: "15/03" },
    { id: "3", round: 1, position: 3, player1: "Équipe 5", player2: "Équipe 6", status: "pending" },
    { id: "4", round: 1, position: 4, player1: "Équipe 7", player2: "Équipe 8", status: "pending" },
    
    // Round 2 (Semi-finals)
    { id: "5", round: 2, position: 1, player1: "Équipe 1", player2: "À déterminer", status: "pending" },
    { id: "6", round: 2, position: 2, player1: "À déterminer", player2: "À déterminer", status: "pending" },
    
    // Round 3 (Final)
    { id: "7", round: 3, position: 1, player1: "À déterminer", player2: "À déterminer", status: "pending" },
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
    totalParticipants: 32,
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
              <Button variant="outline" className="whitespace-nowrap">
                Programmer les matches
              </Button>
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
          <Button variant="default">
            Faire une annonce
          </Button>
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
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Arbre du tournoi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="tournament-bracket">
              {[3, 2, 1].map(round => (
                <div key={round} className={`round round-${round} flex justify-center gap-8 mb-8`}>
                  {matches
                    .filter(match => match.round === round)
                    .map(match => (
                      <div 
                        key={match.id} 
                        className={`match-box p-4 border rounded-lg w-64 
                          ${match.status === 'completed' ? 'bg-green-50 border-green-200' : 
                            match.status === 'scheduled' ? 'bg-blue-50 border-blue-200' : 
                            'bg-gray-50'}`}
                      >
                        <div className="text-sm font-semibold mb-2 flex justify-between">
                          <span>Round {match.round}</span>
                          {match.date && <span>{match.date}</span>}
                        </div>
                        <div className="space-y-2">
                          <div className={`p-2 rounded ${match.winner === match.player1 ? 'bg-green-100' : 'bg-gray-100'}`}>
                            {match.player1}
                          </div>
                          <div className={`p-2 rounded ${match.winner === match.player2 ? 'bg-green-100' : 'bg-gray-100'}`}>
                            {match.player2}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
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
