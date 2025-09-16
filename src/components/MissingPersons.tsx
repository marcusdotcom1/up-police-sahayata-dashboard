import React, { useState } from "react";
import { Plus, Search, Filter, MapPin, Clock, Phone } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockMissingPersons = [
  {
    id: "MP001",
    name: "अनिता शर्मा / Anita Sharma",
    age: 25,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastSeen: "Noida Sector 18 Metro",
    lastSeenDate: "2024-01-14",
    contact: "+91 98765 43210",
    status: "Active",
    description: "Wearing blue kurta, black jeans",
  },
  {
    id: "MP002", 
    name: "राहुल कुमार / Rahul Kumar",
    age: 16,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastSeen: "Greater Noida Mall",
    lastSeenDate: "2024-01-13",
    contact: "+91 87654 32109",
    status: "Investigation",
    description: "School uniform, carrying backpack",
  },
  {
    id: "MP003",
    name: "सुनीता देवी / Sunita Devi", 
    age: 45,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    lastSeen: "Noida City Centre",
    lastSeenDate: "2024-01-12",
    contact: "+91 76543 21098",
    status: "Found",
    description: "Red sari, gold jewelry",
  },
  {
    id: "MP004",
    name: "आर्यन सिंह / Aryan Singh",
    age: 12,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    lastSeen: "Noida Sector 62",
    lastSeenDate: "2024-01-11",
    contact: "+91 65432 10987",
    status: "Active",
    description: "Red t-shirt, blue shorts",
  },
  {
    id: "MP005",
    name: "प्रिया गुप्ता / Priya Gupta",
    age: 28,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face", 
    lastSeen: "Noida Botanical Garden",
    lastSeenDate: "2024-01-10",
    contact: "+91 54321 09876",
    status: "Investigation",
    description: "Pink top, black jeans, carrying handbag",
  },
  {
    id: "MP006",
    name: "रमेश यादव / Ramesh Yadav",
    age: 65,
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    lastSeen: "Noida Sector 15 Market",
    lastSeenDate: "2024-01-09",
    contact: "+91 43210 98765",
    status: "Found",
    description: "White kurta, gray trousers, walking stick",
  },
];

const MissingPersons = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="badge-error">Active</Badge>;
      case "Investigation":
        return <Badge className="badge-warning">Investigation</Badge>;
      case "Found":
        return <Badge className="badge-success">Found</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getUrgencyBadge = (age: number) => {
    if (age < 18 || age > 60) {
      return <Badge className="badge-error">High Priority</Badge>;
    }
    return <Badge className="badge-warning">Standard</Badge>;
  };

  const filteredPersons = mockMissingPersons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.lastSeen.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Missing Persons / गुमशुदा व्यक्ति
          </h1>
          <p className="text-muted-foreground mt-1">
            Track and manage missing person cases
          </p>
        </div>
        <CustomButton variant="police" className="w-fit">
          <Plus className="w-4 h-4 mr-2" />
          Report Missing / नया मामला दर्ज करें
        </CustomButton>
      </div>

      {/* Search and Filter */}
      <Card className="card-police">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or last seen location..."
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

      {/* Missing Persons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersons.map((person) => (
          <Card key={person.id} className="card-police hover:shadow-elevated transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="absolute -top-2 -right-2">
                    {getUrgencyBadge(person.age)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">
                    {person.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Age: {person.age} years
                  </p>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">{person.lastSeen}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span>अंतिम बार देखा गया: {person.lastSeenDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="font-mono">{person.contact}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-muted rounded text-xs">
                    <strong>Description:</strong> {person.description}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    {getStatusBadge(person.status)}
                    <div className="text-xs text-muted-foreground">
                      ID: {person.id}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <CustomButton variant="police" size="sm" className="flex-1">
                  View Details
                </CustomButton>
                <CustomButton variant="policeOutline" size="sm" className="flex-1">
                  Update Status
                </CustomButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissingPersons;