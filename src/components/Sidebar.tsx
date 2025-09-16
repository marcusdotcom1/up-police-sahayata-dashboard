import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Shield,
  Heart,
  Search,
  Package,
  MapPin,
  BookOpen,
  Vote,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    title: "Dashboard",
    titleHi: "डैशबोर्ड",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Criminal Records",
    titleHi: "अपराधी रिकॉर्ड",
    url: "/criminals",
    icon: Users,
  },
  {
    title: "Women Safety",
    titleHi: "महिला सुरक्षा",
    url: "/women-safety",
    icon: Shield,
  },
  {
    title: "Anti-Romeo",
    titleHi: "एंटी रोमियो",
    url: "/anti-romeo",
    icon: Heart,
  },
  {
    title: "Missing Persons",
    titleHi: "गुमशुदा व्यक्ति",
    url: "/missing-persons",
    icon: Search,
  },
  {
    title: "Warehouse",
    titleHi: "मालखाना",
    url: "/warehouse",
    icon: Package,
  },
  {
    title: "Area Information",
    titleHi: "क्षेत्र जानकारी",
    url: "/area-info",
    icon: MapPin,
  },
  {
    title: "Beat Book",
    titleHi: "बीट पुस्तिका",
    url: "/beat-book",
    icon: BookOpen,
  },
  {
    title: "Election Management",
    titleHi: "ई-चुनाव",
    url: "/election",
    icon: Vote,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <div
      className={cn(
        "h-full bg-sidebar-background border-r border-sidebar-border transition-all duration-300 relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <Button
        onClick={onToggle}
        size="icon"
        variant="ghost"
        className="absolute -right-3 top-6 h-6 w-6 rounded-full bg-background border border-border shadow-md hover:bg-accent z-10"
      >
        {collapsed ? (
          <ChevronRight size={14} />
        ) : (
          <ChevronLeft size={14} />
        )}
      </Button>

      <div className="p-4">
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg p-1">
            <img 
              src="/up-logo.webp" 
              alt="UP Police Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          {!collapsed && (
            <div className="ml-3">
              <h2 className="text-sm font-semibold text-sidebar-foreground">
                UP Police
              </h2>
              <p className="text-xs text-sidebar-foreground/70">
                Safety Portal
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                cn(
                  "nav-item",
                  isActive && "nav-active",
                  collapsed && "justify-center px-2"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="text-xs opacity-75">{item.titleHi}</span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              cn(
                "nav-item",
                isActive && "nav-active",
                collapsed && "justify-center px-2"
              )
            }
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm">Settings</span>}
          </NavLink>

          <button
            onClick={() => window.location.href = "/"}
            className={cn(
              "nav-item w-full text-left",
              collapsed && "justify-center px-2"
            )}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;