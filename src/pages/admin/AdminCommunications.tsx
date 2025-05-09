
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Twitter, Instagram, Clock, Send } from "lucide-react";

interface Communication {
  id: string;
  title: string;
  content: string;
  platforms: string[];
  frequency: string;
  scheduled: boolean;
  scheduledTime?: string;
}

export default function AdminCommunications() {
  const [communications, setCommunications] = useState<Communication[]>([]);
  const [platforms, setPlatforms] = useState({
    facebook: true,
    twitter: true,
    instagram: true
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Communications</h1>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Nouvelle Communication
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nouvelle Communication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Titre de la communication" />
            <Textarea placeholder="Contenu de la communication" rows={5} />
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Plateformes de diffusion</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={platforms.facebook}
                    onCheckedChange={(checked) => 
                      setPlatforms(prev => ({...prev, facebook: checked}))
                    }
                  />
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={platforms.twitter}
                    onCheckedChange={(checked) => 
                      setPlatforms(prev => ({...prev, twitter: checked}))
                    }
                  />
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={platforms.instagram}
                    onCheckedChange={(checked) => 
                      setPlatforms(prev => ({...prev, instagram: checked}))
                    }
                  />
                  <Instagram className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Fréquence de publication</h3>
              <Select defaultValue="once">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner la fréquence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="once">Une fois</SelectItem>
                  <SelectItem value="daily">Quotidienne</SelectItem>
                  <SelectItem value="weekly">Hebdomadaire</SelectItem>
                  <SelectItem value="monthly">Mensuelle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Publier
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communications Programmées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {communications.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Aucune communication programmée
              </p>
            ) : (
              communications.map((comm) => (
                <div key={comm.id} className="border p-4 rounded-lg">
                  <h3 className="font-medium">{comm.title}</h3>
                  <p className="text-sm text-muted-foreground">{comm.content}</p>
                  <div className="flex gap-2 mt-2">
                    {comm.platforms.map((platform) => (
                      <div key={platform} className="text-xs bg-secondary px-2 py-1 rounded">
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
