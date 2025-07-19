import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Bug, Building2, Lock } from "lucide-react";

type UserRole = "bughunter" | "enterprise" | "admin";

const roleConfig = {
  bughunter: {
    title: "BugHunters",
    subtitle: "Ethical Hackers",
    icon: Bug,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    glowClass: "glow-red",
  },
  enterprise: {
    title: "Organizations",
    subtitle: "Enterprises & Companies",
    icon: Building2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glowClass: "glow-blue",
  },
  admin: {
    title: "Administrators",
    subtitle: "Government & System Managers",
    icon: Lock,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    glowClass: "glow-green",
  },
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [activeRole, setActiveRole] = useState<UserRole>("bughunter");

  const currentRole = roleConfig[activeRole];
  const Icon = currentRole.icon;

  return (
    <div className="min-h-screen bg-background bg-grid-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Hero Badge */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className={`p-4 rounded-full ${currentRole.bgColor} ${currentRole.borderColor} border-2 transition-all duration-300 ${currentRole.glowClass}`}>
              <Shield className={`h-12 w-12 ${currentRole.color}`} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">BugHunters.ma</h1>
            <p className="text-muted-foreground">National Cybersecurity Platform</p>
          </div>
        </div>

        {/* Role Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-medium text-center block">Select Your Role</Label>
          <Tabs value={activeRole} onValueChange={(value) => setActiveRole(value as UserRole)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur">
              <TabsTrigger value="bughunter" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500">
                <Bug className="h-4 w-4 mr-1" />
                Hunters
              </TabsTrigger>
              <TabsTrigger value="enterprise" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-500">
                <Building2 className="h-4 w-4 mr-1" />
                Orgs
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500">
                <Lock className="h-4 w-4 mr-1" />
                Admins
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Login/Register Card */}
        <Card className={`backdrop-blur-sm bg-card/80 ${currentRole.borderColor} border transition-all duration-300`}>
          <CardHeader className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Icon className={`h-5 w-5 ${currentRole.color}`} />
              <CardTitle className="text-xl">{currentRole.title}</CardTitle>
            </div>
            <CardDescription>{currentRole.subtitle}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex space-x-2 p-1 bg-muted/50 rounded-lg">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? `${currentRole.bgColor} ${currentRole.color} shadow-sm`
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? `${currentRole.bgColor} ${currentRole.color} shadow-sm`
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Register
              </button>
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    className="transition-all duration-200 focus:ring-2 focus:ring-current"
                    style={{ "--tw-ring-color": `hsl(var(--${activeRole}))` } as any}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="transition-all duration-200 focus:ring-2 focus:ring-current"
                  style={{ "--tw-ring-color": `hsl(var(--${activeRole}))` } as any}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="transition-all duration-200 focus:ring-2 focus:ring-current"
                  style={{ "--tw-ring-color": `hsl(var(--${activeRole}))` } as any}
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="transition-all duration-200 focus:ring-2 focus:ring-current"
                    style={{ "--tw-ring-color": `hsl(var(--${activeRole}))` } as any}
                  />
                </div>
              )}

              <Button
                type="submit"
                className={`w-full font-medium transition-all duration-300 transform hover:scale-[1.02] ${currentRole.glowClass} hover:shadow-lg`}
                style={{
                  backgroundColor: `hsl(var(--${activeRole}))`,
                  color: `hsl(var(--${activeRole}-foreground))`,
                }}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            {isLogin && (
              <div className="text-center">
                <button className={`text-sm ${currentRole.color} hover:underline`}>
                  Forgot your password?
                </button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
}