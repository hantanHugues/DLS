
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, UserX, Shield, Key, UserPlus, Search, Mail, Phone, AlertTriangle, History } from "lucide-react";

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTab, setSelectedTab] = useState("list");

  const users = [
    { 
      id: "USR001", 
      pseudo: "JohnDoe", 
      email: "john@example.com", 
      phone: "+221 77 123 4567",
      status: "active",
      registrationDate: "2024-01-15",
      lastLogin: "2024-01-20",
      isVIP: true,
      isValidator: false,
      warningCount: 0,
      tournamentCount: 15,
      sponsorshipLevel: "Noble ASC",
      totalRevenue: "250,000 FCFA"
    },
    // ... autres utilisateurs
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestion des Utilisateurs</h1>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Nouvel Utilisateur
          </Button>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="list">Liste des Utilisateurs</TabsTrigger>
            <TabsTrigger value="vip">VIP</TabsTrigger>
            <TabsTrigger value="validators">Validateurs</TabsTrigger>
            <TabsTrigger value="banned">Bannis</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Liste des Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4 items-center w-1/2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Rechercher par pseudo, email ou ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="border rounded-md p-2"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="active">Actif</option>
                    <option value="suspended">Suspendu</option>
                    <option value="banned">Banni</option>
                  </select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Pseudo</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Niveau</TableHead>
                      <TableHead>Tournois</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="font-mono">{user.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.pseudo}
                            {user.isVIP && (
                              <Badge variant="secondary">VIP</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'success' : 'destructive'}>
                            {user.status === 'active' ? 'Actif' : 'Suspendu'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.sponsorshipLevel}</Badge>
                        </TableCell>
                        <TableCell>{user.tournamentCount}</TableCell>
                        <TableCell>{user.totalRevenue}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <User className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Détails Utilisateur</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h3 className="font-semibold">Contact</h3>
                                      <div className="space-y-2 mt-2">
                                        <div className="flex items-center gap-2">
                                          <Mail className="h-4 w-4" />
                                          <span>{user.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Phone className="h-4 w-4" />
                                          <span>{user.phone}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold">Statistiques</h3>
                                      <div className="space-y-2 mt-2">
                                        <div>Tournois: {user.tournamentCount}</div>
                                        <div>Revenue: {user.totalRevenue}</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <Key className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <History className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm">
                              <UserX className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
