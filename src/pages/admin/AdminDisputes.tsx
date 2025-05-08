
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle, MessageSquare } from "lucide-react";

export default function AdminDisputes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const disputes = [
    {
      id: "DSP001",
      matchId: "MATCH123",
      reportedBy: "Player1",
      against: "Player2",
      reason: "Score contesté",
      status: "pending",
      date: "2024-03-15"
    },
    {
      id: "DSP002",
      matchId: "MATCH456",
      reportedBy: "Player3",
      against: "Player4",
      reason: "Tricherie présumée",
      status: "resolved",
      date: "2024-03-14"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Litiges</h1>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Rechercher un litige..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <select
          className="border rounded-md p-2"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">Tous les statuts</option>
          <option value="pending">En attente</option>
          <option value="resolved">Résolus</option>
          <option value="rejected">Rejetés</option>
        </select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Match</TableHead>
                <TableHead>Signalé par</TableHead>
                <TableHead>Contre</TableHead>
                <TableHead>Raison</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map(dispute => (
                <TableRow key={dispute.id}>
                  <TableCell className="font-mono">{dispute.id}</TableCell>
                  <TableCell>{dispute.matchId}</TableCell>
                  <TableCell>{dispute.reportedBy}</TableCell>
                  <TableCell>{dispute.against}</TableCell>
                  <TableCell>{dispute.reason}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        dispute.status === 'pending' ? 'warning' : 
                        dispute.status === 'resolved' ? 'success' : 
                        'destructive'
                      }
                    >
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{dispute.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-green-500">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        <XCircle className="h-4 w-4" />
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
