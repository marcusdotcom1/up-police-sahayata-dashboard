import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import CriminalRecords from "./components/CriminalRecords";
import MissingPersons from "./components/MissingPersons";
import Warehouse from "./components/Warehouse";
import AreaInformation from "./components/AreaInformation";
import ElectionManagement from "./components/ElectionManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/criminals" element={<CriminalRecords />} />
            <Route path="/women-safety" element={<Dashboard />} />
            <Route path="/anti-romeo" element={<Dashboard />} />
            <Route path="/missing-persons" element={<MissingPersons />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/area-info" element={<AreaInformation />} />
            <Route path="/beat-book" element={<Dashboard />} />
            <Route path="/election" element={<ElectionManagement />} />
            <Route path="/settings" element={<Dashboard />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
