import React, { useState } from "react";
import { MapPin, Phone, Users, Shield, Clock, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CustomButton } from "@/components/ui/custom-button";

const mockPoliceStations = [
  {
    id: "PS001",
    name: "Noida Sector 18",
    nameHi: "नोएडा सेक्टर 18",
    address: "Sector 18, Noida, UP 201301",
    phone: "+91 120 251 8000",
    incharge: "Inspector Raj Kumar",
    officers: 45,
    jurisdiction: "Sectors 15, 16, 17, 18, 19",
    status: "Active",
    emergencyContacts: [
      { name: "Control Room", number: "100" },
      { name: "Women Helpline", number: "1090" },
    ],
  },
  {
    id: "PS002", 
    name: "Greater Noida",
    nameHi: "ग्रेटर नोएडा",
    address: "Pari Chowk, Greater Noida, UP 201310",
    phone: "+91 120 232 4000",
    incharge: "Inspector Priya Sharma",
    officers: 52,
    jurisdiction: "Greater Noida Industrial Area",
    status: "Active",
    emergencyContacts: [
      { name: "Control Room", number: "100" },
      { name: "Traffic Police", number: "103" },
    ],
  },
  {
    id: "PS003",
    name: "Noida Sector 39",
    nameHi: "नोएडा सेक्टर 39", 
    address: "Sector 39, Noida, UP 201303",
    phone: "+91 120 251 9000",
    incharge: "Inspector Amit Singh",
    officers: 38,
    jurisdiction: "Sectors 37, 38, 39, 40, 41",
    status: "Active",
    emergencyContacts: [
      { name: "Control Room", number: "100" },
      { name: "Crime Branch", number: "1090" },
    ],
  },
  {
    id: "PS004",
    name: "Noida Sector 49",
    nameHi: "नोएडा सेक्टर 49",
    address: "Sector 49, Noida, UP 201304", 
    phone: "+91 120 251 7000",
    incharge: "Inspector Sunita Devi",
    officers: 41,
    jurisdiction: "Sectors 46, 47, 48, 49, 50",
    status: "Active",
    emergencyContacts: [
      { name: "Control Room", number: "100" },
      { name: "Cyber Crime", number: "1930" },
    ],
  },
];

const AreaInformation = () => {
  const [selectedStation, setSelectedStation] = useState(mockPoliceStations[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Area Information / क्षेत्र जानकारी
          </h1>
          <p className="text-muted-foreground mt-1">
            Police stations and jurisdiction information
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Police Stations List */}
        <div className="lg:col-span-1">
          <Card className="card-police">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Police Stations / पुलिस स्टेशन
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockPoliceStations.map((station) => (
                <div
                  key={station.id}
                  onClick={() => setSelectedStation(station)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedStation.id === station.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{station.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{station.nameHi}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span>{station.officers} officers</span>
                      </div>
                    </div>
                    <Badge className="badge-success text-xs">Active</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Station Details and Map */}
        <div className="lg:col-span-2 space-y-6">
          {/* Station Details */}
          {selectedStation && (
            <Card className="card-police">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl">{selectedStation.name}</h2>
                    <p className="text-sm text-muted-foreground font-normal">
                      {selectedStation.nameHi}
                    </p>
                  </div>
                  <Badge className="badge-success">Active</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Address / पता</p>
                        <p className="text-sm text-muted-foreground">{selectedStation.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Phone / फोन</p>
                        <p className="text-sm text-muted-foreground font-mono">{selectedStation.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Station Incharge / थाना प्रभारी</p>
                        <p className="text-sm text-muted-foreground">{selectedStation.incharge}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Total Officers / कुल अधिकारी</p>
                        <p className="text-sm text-muted-foreground">{selectedStation.officers} officers</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Jurisdiction / क्षेत्राधिकार</p>
                        <p className="text-sm text-muted-foreground">{selectedStation.jurisdiction}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Working Hours / कार्य समय</p>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contacts */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium text-sm mb-3">Emergency Contacts / आपातकालीन संपर्क</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStation.emergencyContacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{contact.name}:</span>
                        <span className="text-sm font-mono text-primary">{contact.number}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Map Placeholder */}
          <Card className="card-police">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Area Map / क्षेत्र मानचित्र
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-accent/20 to-muted/40 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-muted-foreground mb-2">
                    Interactive Map View
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Map integration showing police station locations,<br />
                    jurisdiction boundaries, and patrol routes
                  </p>
                  <CustomButton variant="police" className="mt-4">
                    Load Map / मानचित्र लोड करें
                  </CustomButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AreaInformation;