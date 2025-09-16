import React, { useState } from "react";
import { Plus, Search, Filter, QrCode, Package, AlertTriangle, CheckCircle } from "lucide-react";
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

const mockWarehouseItems = [
  {
    id: "WH001",
    qrCode: "QR12345",
    itemName: "Evidence Bag #101",
    itemNameHi: "सबूत बैग #101",
    category: "Evidence",
    location: "Shelf A-12",
    quantity: 1,
    condition: "Good",
    dateAdded: "2024-01-15",
    caseReference: "CR001",
    officer: "SI Ram Kumar",
  },
  {
    id: "WH002",
    qrCode: "QR12346", 
    itemName: "Confiscated Phone",
    itemNameHi: "जब्त किया गया फोन",
    category: "Electronics",
    location: "Locker B-05",
    quantity: 1,
    condition: "Working",
    dateAdded: "2024-01-14",
    caseReference: "CR002",
    officer: "SI Priya Sharma",
  },
  {
    id: "WH003",
    qrCode: "QR12347",
    itemName: "Weapon - Knife",
    itemNameHi: "हथियार - चाकू",
    category: "Weapons",
    location: "Security Vault",
    quantity: 1,
    condition: "Seized",
    dateAdded: "2024-01-13",
    caseReference: "CR003",
    officer: "SI Amit Singh",
  },
  {
    id: "WH004",
    qrCode: "QR12348",
    itemName: "Documents Bundle",
    itemNameHi: "दस्तावेज़ बंडल",
    category: "Documents",
    location: "Filing Cabinet C-08",
    quantity: 1,
    condition: "Good",
    dateAdded: "2024-01-12",
    caseReference: "CR004",
    officer: "SI Rekha Gupta",
  },
  {
    id: "WH005",
    qrCode: "QR12349",
    itemName: "Narcotics Sample",
    itemNameHi: "नशीली दवा का नमूना",
    category: "Narcotics",
    location: "Secure Storage D-01",
    quantity: 100,
    condition: "Sealed",
    dateAdded: "2024-01-11",
    caseReference: "CR005",
    officer: "SI Rajesh Kumar",
  },
];

const Warehouse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Evidence":
        return <Badge className="badge-warning">Evidence</Badge>;
      case "Electronics":
        return <Badge variant="secondary">Electronics</Badge>;
      case "Weapons":
        return <Badge className="badge-error">Weapons</Badge>;
      case "Documents":
        return <Badge variant="outline">Documents</Badge>;
      case "Narcotics":
        return <Badge className="badge-error">Narcotics</Badge>;
      default:
        return <Badge variant="secondary">{category}</Badge>;
    }
  };

  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case "Good":
        return <Badge className="badge-success">Good</Badge>;
      case "Working":
        return <Badge className="badge-success">Working</Badge>;
      case "Damaged":
        return <Badge className="badge-error">Damaged</Badge>;
      case "Seized":
        return <Badge className="badge-warning">Seized</Badge>;
      case "Sealed":
        return <Badge className="badge-warning">Sealed</Badge>;
      default:
        return <Badge variant="secondary">{condition}</Badge>;
    }
  };

  const filteredItems = mockWarehouseItems.filter(item =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.caseReference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Warehouse Management / मालखाना प्रबंधन
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage evidence and seized items inventory
          </p>
        </div>
        <div className="flex gap-2">
          <CustomButton variant="policeOutline" className="w-fit">
            <QrCode className="w-4 h-4 mr-2" />
            Scan QR / QR स्कैन करें
          </CustomButton>
          <CustomButton variant="police" className="w-fit">
            <Plus className="w-4 h-4 mr-2" />
            Add Item / नई वस्तु जोड़ें
          </CustomButton>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Items</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,198</p>
                <p className="text-sm text-muted-foreground">Good Condition</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">49</p>
                <p className="text-sm text-muted-foreground">Need Attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-police">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Package className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">High Security</p>
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
                placeholder="Search by item name, category, or case reference..."
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

      {/* Inventory Table */}
      <Card className="card-police">
        <CardHeader>
          <CardTitle>Warehouse Inventory / मालखाना सूची</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>QR Code</TableHead>
                <TableHead>Item Name / वस्तु नाम</TableHead>
                <TableHead>Category / श्रेणी</TableHead>
                <TableHead>Location / स्थान</TableHead>
                <TableHead>Quantity / मात्रा</TableHead>
                <TableHead>Condition / स्थिति</TableHead>
                <TableHead>Case Ref</TableHead>
                <TableHead>Officer / अधिकारी</TableHead>
                <TableHead>Date Added</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-primary" />
                      <span className="font-mono text-sm">{item.qrCode}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <div>
                      <p>{item.itemName}</p>
                      <p className="text-xs text-muted-foreground">{item.itemNameHi}</p>
                    </div>
                  </TableCell>
                  <TableCell>{getCategoryBadge(item.category)}</TableCell>
                  <TableCell className="text-sm">{item.location}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell>{getConditionBadge(item.condition)}</TableCell>
                  <TableCell>
                    <span className="font-mono text-sm text-primary">{item.caseReference}</span>
                  </TableCell>
                  <TableCell className="text-sm">{item.officer}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {item.dateAdded}
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

export default Warehouse;