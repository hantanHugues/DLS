import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Edit, Flag, Check, Shield, Award, Trophy, GameController, Star, Plus } from "lucide-react";
import { Link } from 'react-router-dom';

const pseudonyms = [
  { name: "FIFA_Master", platform: "FIFA" },
  { name: "DLS_King", platform: "Dream League Soccer" }
];

const countries = [
  "Sénégal", "Côte d'Ivoire", "Mali", "Cameroun", "Ghana", "Nigeria", 
  "Afrique du Sud", "Maroc", "Algérie", "Tunisie", "République démocratique du Congo",
  "Kenya", "Égypte", "Éthiopie", "Angola", "Tanzanie", "Rwanda", "Gabon"
];

const timezones = [
  "GMT+0", "GMT+1", "GMT+2", "GMT+3", "GMT-1"
];

const languages = [
  { id: "fr", name: "Français" },
  { id: "en", name: "Anglais" },
  { id: "ar", name: "Arabe" },
  { id: "pt", name: "Portugais" },
  { id: "sw", name: "Swahili" }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "JoueurASC",
    email: "joueur@example.com",
    bio: "Passionné de Dream League Soccer depuis 5 ans. J'aime les compétitions et les défis!",
    country: "Sénégal",
    timezone: "GMT+0",
    languageProficiency: [
      { id: "fr", level: "Native" },
      { id: "en", level: "Intermediaire" }
    ],
    avatar: "",
    secondaryUsernames: pseudonyms
  });

  const badges = [
    { name: "Champion DLS 2024", icon: <Trophy className="h-4 w-4" />, color: "bg-yellow-100 text-yellow-800" },
    { name: "Expert Validateur", icon: <Shield className="h-4 w-4" />, color: "bg-purple-100 text-purple-800" },
    { name: "50 Victoires", icon: <Star className="h-4 w-4" />, color: "bg-green-100 text-green-800" },
    { name: "Paysan ASC", icon: <Award className="h-4 w-4" />, color: "bg-blue-100 text-blue-800" }
  ];

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    // Here you would typically send the updated profile to your API
    console.log("Saving profile:", userInfo);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-grow py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-asc-purple to-purple-600 rounded-xl flex items-center justify-center text-white">
                  {userInfo.avatar ? (
                    <img src={userInfo.avatar} alt="Profile" className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <User className="h-12 w-12" />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                  <GameController className="h-4 w-4 text-white" />
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-asc-purple to-purple-600">
                  {userInfo.username}
                </h1>
                <div className="flex flex-wrap gap-3 mt-2">
                  {badges.map((badge, idx) => (
                    <span key={idx} className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                      {badge.icon}
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Link to="/profile" className="text-asc-purple hover:underline font-medium">Mon Profil</Link>
              <Link to="/statistics" className="text-gray-600 hover:text-asc-purple">Statistiques</Link>
              <Link to="/disputes" className="text-gray-600 hover:text-asc-purple">Litiges</Link>
              <Link to="/two-factor-setup" className="text-gray-600 hover:text-asc-purple">Sécurité 2FA</Link>
            </div>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="security">Sécurité</TabsTrigger>
              <TabsTrigger value="pseudonyms">Pseudonymes</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Informations Personnelles</CardTitle>
                    <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
                  </div>
                  {!isEditing && (
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" /> Modifier
                    </Button>
                  )}
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-center md:w-1/3">
                      <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        {userInfo.avatar ? (
                          <img 
                            src={userInfo.avatar} 
                            alt="Avatar" 
                            className="w-full h-full rounded-full object-cover" 
                          />
                        ) : (
                          <User className="h-16 w-16 text-gray-400" />
                        )}
                      </div>

                      {isEditing && (
                        <Button variant="outline" size="sm" className="mb-2">
                          Changer d'avatar
                        </Button>
                      )}

                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {badges.map((badge, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}
                          >
                            {badge.icon}
                            {badge.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="username">Nom d'utilisateur</Label>
                              <Input 
                                id="username"
                                name="username"
                                value={userInfo.username}
                                onChange={handleInfoChange}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email"
                                name="email"
                                type="email"
                                value={userInfo.email}
                                onChange={handleInfoChange}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="bio">Biographie</Label>
                            <Textarea 
                              id="bio"
                              name="bio"
                              value={userInfo.bio}
                              onChange={handleInfoChange}
                              rows={3}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="country">Pays</Label>
                              <Select 
                                value={userInfo.country}
                                onValueChange={(value) => handleSelectChange("country", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un pays" />
                                </SelectTrigger>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country} value={country}>{country}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="timezone">Fuseau horaire</Label>
                              <Select 
                                value={userInfo.timezone}
                                onValueChange={(value) => handleSelectChange("timezone", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un fuseau" />
                                </SelectTrigger>
                                <SelectContent>
                                  {timezones.map((timezone) => (
                                    <SelectItem key={timezone} value={timezone}>{timezone}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Nom d'utilisateur</p>
                              <p className="font-medium">{userInfo.username}</p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                              <p className="font-medium">{userInfo.email}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Biographie</p>
                            <p className="font-medium">{userInfo.bio}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Pays</p>
                              <div className="flex items-center gap-2">
                                <Flag className="h-4 w-4" />
                                <p className="font-medium">{userInfo.country}</p>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Fuseau horaire</p>
                              <p className="font-medium">{userInfo.timezone}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>

                {isEditing && (
                  <CardFooter className="justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Annuler</Button>
                    <Button onClick={handleSaveProfile}>Enregistrer</Button>
                  </CardFooter>
                )}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Préférences linguistiques</CardTitle>
                  <CardDescription>Langues que vous parlez</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languages.map((language) => {
                      const userLanguage = userInfo.languageProficiency.find(l => l.id === language.id);
                      const isSelected = !!userLanguage;

                      return (
                        <div key={language.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {isSelected && <Check className="h-4 w-4 text-green-500" />}
                            <span>{language.name}</span>
                          </div>

                          {isSelected && (
                            <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                              {userLanguage.level}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Modifier le mot de passe</CardTitle>
                  <CardDescription>Mettez à jour votre mot de passe pour sécuriser votre compte</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Mot de passe actuel</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Mettre à jour le mot de passe</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Authentification à deux facteurs</CardTitle>
                  <CardDescription>Ajoutez une couche de sécurité supplémentaire à votre compte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Recevez un code par SMS lors de la connexion</p>
                    </div>
                    <Button variant="outline">Configurer</Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Application d'authentification</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Utilisez une application comme Google Authenticator</p>
                    </div>
                    <Button variant="outline">Configurer</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pseudonyms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pseudonymes communautaires</CardTitle>
                  <CardDescription>Gérez vos noms d'utilisateur sur différentes plateformes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userInfo.secondaryUsernames.map((pseudo, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium">{pseudo.name}</p>
                          <p className="text-sm text-gray-500">{pseudo.platform}</p>
                        </div>
                        <Button variant="outline" size="sm">Modifier</Button>
                      </div>
                    ))}
                    <Button className="w-full mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un pseudonyme
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;