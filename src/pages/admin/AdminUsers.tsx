import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, User, UserX, Shield, RefreshCw, Key, FileText } from "lucide-react";

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Données mockées pour l'exemple
  const users = [
    { 
      id: "USR001", 
      pseudo: "JohnDoe", 
      email: "john@example.com", 
      phone: "+221 77 123 4567",
      status: "active",
      registrationDate: "2024-01-15",
      lastLogin: "2024-01-20"
    },
    // Ajoutez d'autres utilisateurs ici
    {
      id: "USR002",
      pseudo: "JaneDoe",
      email: "jane@example.com",
      phone: "+221 77 987 6543",
      status: "suspended",
      registrationDate: "2024-02-20",
      lastLogin: "2024-02-25"
    },
    {
      id: "USR003",
      pseudo: "PeterPan",
      email: "peter@example.com",
      phone: "+221 76 543 2109",
      status: "active",
      registrationDate: "2024-03-10",
      lastLogin: "2024-03-15"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Utilisateurs</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <Input
            placeholder="Rechercher par pseudo, email ou ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <select
          className="border rounded-md p-2"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">Tous les statuts</option>
          <option value="active">Actifs</option>
          <option value="suspended">Suspendus</option>
          <option value="banned">Bannis</option>
          <option value="vip">VIP</option>
          <option value="validator">Validateurs</option>
        </select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Pseudo</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Inscription</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-mono">{user.id}</TableCell>
                  <TableCell>{user.pseudo}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'active' ? 'success' : 'destructive'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <User className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Key className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-yellow-500">
                        <Shield className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
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
    </div>
  );
}