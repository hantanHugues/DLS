
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TournamentRegistration() {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'flutterwave' | 'paydunya'>('momo');
  const [registrationStatus, setRegistrationStatus] = useState<'pending' | 'confirmed' | 'cancelled'>('pending');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Inscription au Tournoi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <span>Frais d'inscription: 5000 FCFA</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">Méthode de Paiement</h3>
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

                <div className="space-y-2">
                  <h3 className="font-semibold">Détails du Paiement</h3>
                  <Input placeholder="Numéro de téléphone" />
                </div>

                <Button className="w-full" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Procéder au Paiement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
