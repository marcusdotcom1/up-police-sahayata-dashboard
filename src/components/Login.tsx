import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomButton } from "@/components/ui/custom-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import upPoliceLogo from "@/assets/up-logo.webp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would be API call
    if (credentials.username && credentials.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <Card className="w-full max-w-md card-elevated relative z-10">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <img 
              src={upPoliceLogo} 
              alt="UP Police Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gradient">
            यूपी पुलिस सुरक्षा पोर्टल
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            UP Police Safety Portal
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                उपयोगकर्ता नाम / Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                पासवर्ड / Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="h-11 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <CustomButton
              type="submit"
              variant="police"
              size="lg"
              className="w-full"
            >
              <Shield className="w-5 h-5 mr-2" />
              लॉगिन / Login
            </CustomButton>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-primary hover:text-primary-hover transition-colors"
              >
                पासवर्ड भूल गए? / Forgot Password?
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
              <Shield size={14} />
              <span>Secure Government Portal</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;