import React, { useState } from "react";
import { Plus, Search, Filter, Eye, Edit, MoreHorizontal } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const mockCriminals = [
  {
    id: "CR001",
    name: "राम कुमार / Ram Kumar",
    crime: "Theft / चोरी",
    location: "Noida Sector 15",
    status: "Active",
    lastUpdated: "2024-01-15",
    severity: "Medium",
  },
  {
    id: "CR002",
    name: "मोहन सिंह / Mohan Singh", 
    crime: "Assault / मारपीट",
    location: "Greater Noida",
    status: "Investigation",
    lastUpdated: "2024-01-14",
    severity: "High",
  },
  {
    id: "CR003",
    name: "सुरेश गुप्ता / Suresh Gupta",
    crime: "Fraud / धोखाधड़ी",
    location: "Noida Sector 62",
    status: "Closed",
    lastUpdated: "2024-01-13",
    severity: "Low",
  },
  {
    id: "CR004",
    name: "राज वर्मा / Raj Varma",
    crime: "Drug Possession / नशीली दवाएं",
    location: "Noida Sector 18",
    status: "Active",
    lastUpdated: "2024-01-12",
    severity: "High",
  },
  {
    id: "CR005",
    name: "अमित शर्मा / Amit Sharma",
    crime: "Robbery / डकैती",
    location: "Noida Sector 37",
    status: "Investigation",
    lastUpdated: "2024-01-11",
    severity: "High",
  },
];

const CriminalRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="badge-error">Active</Badge>;
      case "Investigation":
        return <Badge className="badge-warning">Investigation</Badge>;
      case "Closed":
        return <Badge className="badge-success">Closed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge className="badge-error">High</Badge>;
      case "Medium":
        return <Badge className="badge-warning">Medium</Badge>;
      case "Low":
        return <Badge className="badge-success">Low</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const filteredCriminals = mockCriminals.filter(criminal =>
    criminal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    criminal.crime.toLowerCase().includes(searchTerm.toLowerCase()) ||
    criminal.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Criminal Records / अपराधी रिकॉर्ड
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and track criminal records in your jurisdiction
          </p>
        </div>
        <CustomButton variant="police" className="w-fit">
          <Plus className="w-4 h-4 mr-2" />
          Add New Record / नया रिकॉर्ड जोड़ें
        </CustomButton>
      </div>

      {/* Search and Filter */}
      <Card className="card-police">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, crime, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <CustomButton variant="policeOutline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </CustomButton>
          </div>
        </CardContent>
      </Card>

      {/* Records Table */}
      <Card className="card-police">
        <CardHeader>
          <CardTitle>Criminal Records Database</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name / नाम</TableHead>
                <TableHead>Crime / अपराध</TableHead>
                <TableHead>Location / स्थान</TableHead>
                <TableHead>Status / स्थिति</TableHead>
                <TableHead>Severity / गंभीरता</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCriminals.map((criminal) => (
                <TableRow key={criminal.id}>
                  <TableCell className="font-mono text-sm">
                    {criminal.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {criminal.name}
                  </TableCell>
                  <TableCell>{criminal.crime}</TableCell>
                  <TableCell>{criminal.location}</TableCell>
                  <TableCell>{getStatusBadge(criminal.status)}</TableCell>
                  <TableCell>{getSeverityBadge(criminal.severity)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {criminal.lastUpdated}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <CustomButton variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </CustomButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Record
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CriminalRecords;