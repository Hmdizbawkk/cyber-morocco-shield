import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Plus, Users, Calendar, Crown, Star, Zap, Shield } from "lucide-react";

export function EnterpriseOrganizations() {
  const organizations = [
    {
      name: "TechCorp Matrix",
      description: "Corporation technologique de pointe",
      users: 125,
      plan: "Enterprise Elite",
      status: "Active",
      created: "15 Jan 2024",
      icon: Crown,
      color: "primary",
      revenue: "€2,500/mois"
    },
    {
      name: "StartupXYZ Labs",
      description: "Laboratoire d'innovation cyberpunk",
      users: 45,
      plan: "Pro Cyberpunk",
      status: "Active",
      created: "3 Fév 2024",
      icon: Star,
      color: "accent",
      revenue: "€99/mois"
    },
    {
      name: "BigCorp Industries",
      description: "Conglomérat industriel matriciel",
      users: 589,
      plan: "Enterprise Elite",
      status: "Premium",
      created: "28 Déc 2023",
      icon: Building,
      color: "primary",
      revenue: "€4,750/mois"
    },
    {
      name: "DevStudio Nexus",
      description: "Studio de développement avancé",
      users: 78,
      plan: "Team Advanced",
      status: "Active",
      created: "12 Mars 2024",
      icon: Zap,
      color: "secondary",
      revenue: "€299/mois"
    },
    {
      name: "SecureTech Shield",
      description: "Spécialiste sécurité cyberpunk",
      users: 156,
      plan: "Security Matrix",
      status: "Active",
      created: "8 Fév 2024",
      icon: Shield,
      color: "accent",
      revenue: "€899/mois"
    },
    {
      name: "InnovateLab Future",
      description: "Laboratoire d'innovation futuriste",
      users: 234,
      plan: "Enterprise Elite",
      status: "Premium",
      created: "20 Jan 2024",
      icon: Star,
      color: "primary",
      revenue: "€3,200/mois"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Réseaux Organisationnels</h1>
          <p className="text-muted-foreground text-lg">
            Gestion matricielle des entités connectées
          </p>
        </div>
        <Button className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Organisation
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Building className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">6</p>
                <p className="text-xs text-muted-foreground">Organisations actives</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">1,227</p>
                <p className="text-xs text-muted-foreground">Utilisateurs totaux</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Crown className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">4</p>
                <p className="text-xs text-muted-foreground">Plans Enterprise</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Star className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">€11.7K</p>
                <p className="text-xs text-muted-foreground">Revenus mensuels</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Organizations Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {organizations.map((org, index) => (
          <Card key={org.name} className="cyber-card hover-glow group">
            <CardHeader className="border-b border-blue-primary/20">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-blue-neon">
                  <org.icon className="h-5 w-5 text-blue-primary animate-pulse-glow" />
                  {org.name}
                </CardTitle>
                <div className={`w-3 h-3 rounded-full animate-pulse-glow ${
                  org.status === 'Premium' ? 'bg-yellow-500' :
                  org.status === 'Active' ? 'bg-blue-primary' : 'bg-blue-accent'
                }`} />
              </div>
              <CardDescription>{org.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg cyber-border hover-glow">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                      <span className="text-sm text-muted-foreground">Utilisateurs</span>
                    </div>
                    <p className="text-lg font-bold text-blue-neon mt-1">{org.users}</p>
                  </div>
                  <div className="p-3 rounded-lg cyber-border hover-glow">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                      <span className="text-sm text-muted-foreground">Créée</span>
                    </div>
                    <p className="text-xs font-medium text-blue-neon mt-1">{org.created}</p>
                  </div>
                </div>

                {/* Plan & Revenue */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Plan:</span>
                    <Badge 
                      variant="outline" 
                      className={`cyber-border ${
                        org.plan.includes('Enterprise') ? 'border-blue-primary/50 text-blue-primary' :
                        org.plan.includes('Pro') ? 'border-blue-accent/50 text-blue-accent' :
                        'border-blue-secondary/50 text-blue-secondary'
                      }`}
                    >
                      {org.plan}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Revenus:</span>
                    <span className="text-sm font-bold text-blue-neon">{org.revenue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Statut:</span>
                    <span className={`text-xs font-medium ${
                      org.status === 'Premium' ? 'text-yellow-500' :
                      org.status === 'Active' ? 'text-blue-primary' : 'text-blue-accent'
                    }`}>
                      {org.status}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-blue-primary/10">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full cyber-border hover-glow"
                  >
                    Accéder à l'Organisation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Control Panel */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Réseau organisationnel synchronisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Exporter Liste
              </Button>
              <Button size="sm" className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                Analyse Globale
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}