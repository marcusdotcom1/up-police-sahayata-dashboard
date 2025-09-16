import React from "react";
import { Users, Shield, Search, Package, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const statsData = [
  {
    title: "Verified Criminals",
    titleHi: "अपराधी सत्यापन",
    value: "1,247",
    change: "+12%",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Women Safety Actions",
    titleHi: "महिला सुरक्षा कार्यवाही",
    value: "856",
    change: "+8%",
    icon: Shield,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Missing Persons Cases",
    titleHi: "गुमशुदा मामले",
    value: "124",
    change: "-5%",
    icon: Search,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Warehouse Items",
    titleHi: "मालखाना सामग्री",
    value: "3,429",
    change: "+15%",
    icon: Package,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
];

const weeklyData = [
  { name: "Mon", operations: 45 },
  { name: "Tue", operations: 52 },
  { name: "Wed", operations: 48 },
  { name: "Thu", operations: 61 },
  { name: "Fri", operations: 55 },
  { name: "Sat", operations: 38 },
  { name: "Sun", operations: 42 },
];

const caseData = [
  { name: "Criminal Cases", value: 35, color: "#dc2626" },
  { name: "Missing Persons", value: 25, color: "#ea580c" },
  { name: "Women Safety", value: 20, color: "#16a34a" },
  { name: "Anti-Romeo", value: 12, color: "#2563eb" },
  { name: "Others", value: 8, color: "#6b7280" },
];

const recentActivities = [
  {
    id: 1,
    title: "New criminal record added",
    titleHi: "नया अपराधी रिकॉर्ड जोड़ा गया",
    time: "2 hours ago",
    status: "success",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Missing person case updated",
    titleHi: "गुमशुदा व्यक्ति का मामला अपडेट",
    time: "4 hours ago",
    status: "warning",
    icon: Clock,
  },
  {
    id: 3,
    title: "Alert: Suspicious activity reported",
    titleHi: "अलर्ट: संदिग्ध गतिविधि की रिपोर्ट",
    time: "6 hours ago",
    status: "danger",
    icon: AlertTriangle,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Dashboard / डैशबोर्ड
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome to UP Police Safety Portal
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          System Status: Online
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="card-police">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {stat.titleHi}
                  </p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.change && stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="card-police">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Weekly Operations
              <span className="text-sm font-normal text-muted-foreground">
                / साप्ताहिक कार्यवाही
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-card)',
                  }}
                />
                <Bar 
                  dataKey="operations" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="card-police">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Case Categories
              <span className="text-sm font-normal text-muted-foreground">
                / केस श्रेणियाँ
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={caseData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={(entry: any) => `${entry.name}: ${((entry.percent || 0) * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {caseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="card-police">
        <CardHeader>
          <CardTitle>Recent Activities / हाल की गतिविधियाँ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className={`p-2 rounded-full ${
                  activity.status === 'success' ? 'bg-success/10 text-success' :
                  activity.status === 'warning' ? 'bg-warning/10 text-warning' :
                  'bg-destructive/10 text-destructive'
                }`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.titleHi}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;