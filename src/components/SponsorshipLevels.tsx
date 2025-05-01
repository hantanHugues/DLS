
import { Crown, User, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SponsorLevel {
  name: string;
  status: string;
  requiredReferrals: number;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

const sponsorLevels: SponsorLevel[] = [
  {
    name: "Paysan ASC",
    status: "Niveau 1",
    requiredReferrals: 3,
    benefits: [
      "1 mois gratuit",
      "1% des gains des filleuls à vie",
      "1% des recharges des filleuls à vie"
    ],
    icon: <User />,
    color: "bg-gray-100 text-gray-800 border-gray-200"
  },
  {
    name: "Roturier ASC",
    status: "Niveau 2",
    requiredReferrals: 10,
    benefits: [
      "3 mois gratuits",
      "2% des gains des filleuls à vie",
      "2% des recharges des filleuls à vie"
    ],
    icon: <Users />,
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    name: "Noble ASC",
    status: "Niveau 3",
    requiredReferrals: 50,
    benefits: [
      "3 mois gratuits",
      "5% des gains des filleuls à vie",
      "5% des recharges des filleuls à vie"
    ],
    icon: <Award />,
    color: "bg-purple-100 text-purple-800 border-purple-200"
  },
  {
    name: "Roi ASC",
    status: "Niveau 6",
    requiredReferrals: 1000,
    benefits: [
      "18 mois gratuits",
      "20% des gains des filleuls à vie",
      "15% des recharges des filleuls à vie"
    ],
    icon: <Crown />,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200"
  }
];

const SponsorshipLevels = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Système de <span className="gradient-text">Parrainage</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Parrainez des joueurs actifs et évoluez dans notre système de parrainage pour gagner des récompenses exclusives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorLevels.map((level) => (
            <Card key={level.name} className={`sponsor-card ${level.color}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="px-2 py-1">
                    {level.status}
                  </Badge>
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-asc-purple">
                    {level.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold mb-1">{level.name}</h3>
                <p className="text-sm mb-4">{level.requiredReferrals} filleuls actifs requis</p>

                <div className="space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-asc-purple"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorshipLevels;
