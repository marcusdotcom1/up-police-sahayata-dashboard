import React, { useState } from "react";
import { Plus, Search, Filter, MapPin, Users, Shield, AlertCircle } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

const mockPollingBooths = [
  {
    id: "PB001",
    boothNumber: "101",
    location: "Government Senior Secondary School, Sector 15",
    locationHi: "राजकीय उच्च माध्यमिक विद्यालय, सेक्टर 15",
    ward: "Ward 12",
    totalVoters: 1247,
    officerAssigned: "SI Ram Kumar",
    securityLevel: "High",
    status: "Ready",
    facilities: ["Wheelchair Access", "Parking", "Generator"],
    lastInspection: "2024-01-14",
  },
  {
    id: "PB002",
    boothNumber: "102", 
    location: "Community Center, Sector 18",
    locationHi: "सामुदायिक केंद्र, सेक्टर 18",
    ward: "Ward 13",
    totalVoters: 986,
    officerAssigned: "SI Priya Sharma",
    securityLevel: "Medium",
    status: "Under Review",
    facilities: ["Parking", "Generator"],
    lastInspection: "2024-01-13",
  },
  {
    id: "PB003",
    boothNumber: "103",
    location: "Primary School, Sector 22",
    locationHi: "प्राथमिक विद्यालय, सेक्टर 22",
    ward: "Ward 14",
    totalVoters: 1456,
    officerAssigned: "SI Amit Singh",
    securityLevel: "High",
    status: "Ready",
    facilities: ["Wheelchair Access", "Parking", "CCTV", "Generator"],
    lastInspection: "2024-01-15",
  },
  {
    id: "PB004",
    boothNumber: "104",
    location: "Girls College, Sector 26",
    locationHi: "बालिका महाविद्यालय, सेक्टर 26",
    ward: "Ward 15",
    totalVoters: 1123,
    officerAssigned: "SI Sunita Devi",
    securityLevel: "Medium",
    status: "Needs Attention",
    facilities: ["Wheelchair Access", "Generator"],
    lastInspection: "2024-01-12",
  },
  {
    id: "PB005",
    boothNumber: "105",
    location: "Municipal Office, Sector 30",
    locationHi: "नगर निगम कार्यालय, सेक्टर 30",
    ward: "Ward 16",
    totalVoters: 892,
    officerAssigned: "SI Rajesh Kumar",
    securityLevel: "Low",
    status: "Ready",
    facilities: ["Parking", "CCTV"],
    lastInspection: "2024-01-11",
  },
];

const ElectionManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ready":
        return <Badge className="badge-success">Ready</Badge>;
      case "Under Review":
        return <Badge className="badge-warning">Under Review</Badge>;
      case "Needs Attention":
        return <Badge className="badge-error">Needs Attention</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getSecurityBadge = (level: string) => {
    switch (level) {
      case "High":
        return <Badge className="badge-error">High Security</Badge>;
      case "Medium":
        return <Badge className="badge-warning">Medium Security</Badge>;
      case "Low":
        return <Badge className="badge-success">Low Security</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  const filteredBooths = mockPollingBooths.filter(booth =>
    booth.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booth.boothNumber.includes(searchTerm) ||
    booth.officerAssigned.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalBooths: mockPollingBooths.length,
    readyBooths: mockPollingBooths.filter(b => b.status === "Ready").length,
    needsAttention: mockPollingBooths.filter(b => b.status === "Needs Attention").length,
    totalVoters: mockPollingBooths.reduce((sum, b) => sum + b.totalVoters, 0),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Election Management / चुनाव प्रबंधन
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage polling booths and election security arrangements
          </p>
        </div>
        <CustomButton variant="police" className="w-fit">
          <Plus className="w-4 h-4 mr-2" />
          Add Booth / नया बूथ जोड़ें
        </CustomButton>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.totalBooths}</p>
                <p className="text-sm text-muted-foreground">Total Booths</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.readyBooths}</p>
                <p className="text-sm text-muted-foreground">Ready Booths</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.needsAttention}</p>
                <p className="text-sm text-muted-foreground">Needs Attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/30 rounded-lg">
                <Users className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.totalVoters.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Voters</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="card-police">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by booth number, location, or assigned officer..."
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

      {/* Polling Booths Table */}
      <Card className="card-police">
        <CardHeader>
          <CardTitle>Polling Booths / मतदान बूथ</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booth ID</TableHead>
                <TableHead>Location / स्थान</TableHead>
                <TableHead>Ward / वार्ड</TableHead>
                <TableHead>Voters / मतदाता</TableHead>
                <TableHead>Officer Assigned / नियुक्त अधिकारी</TableHead>
                <TableHead>Security Level</TableHead>
                <TableHead>Status / स्थिति</TableHead>
                <TableHead>Facilities</TableHead>
                <TableHead>Last Inspection</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBooths.map((booth) => (
                <TableRow key={booth.id}>
                  <TableCell className="font-mono text-sm">
                    {booth.boothNumber}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div>
                      <p className="font-medium text-sm">{booth.location}</p>
                      <p className="text-xs text-muted-foreground">{booth.locationHi}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{booth.ward}</TableCell>
                  <TableCell className="text-center font-medium">
                    {booth.totalVoters.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm">{booth.officerAssigned}</TableCell>
                  <TableCell>{getSecurityBadge(booth.securityLevel)}</TableCell>
                  <TableCell>{getStatusBadge(booth.status)}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {booth.facilities.slice(0, 2).map((facility, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                      {booth.facilities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{booth.facilities.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {booth.lastInspection}
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

export default ElectionManagement;