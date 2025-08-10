import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, TrendingUp, DollarSign, Activity, Shield, Zap } from "lucide-react";

export function EnterpriseOverview() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-neon">Vue d'ensemble Enterprise</h1>
        <p className="text-muted-foreground text-lg">
          Tableau de bord cyberpunk BugHunter.ma Enterprise
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Utilisateurs Actifs</CardTitle>
            <Users className="h-4 w-4 text-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-neon">2,847</div>
            <p className="text-xs text-accent">+12% ce mois</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Organisations</CardTitle>
            <Building className="h-4 w-4 text-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-neon">156</div>
            <p className="text-xs text-accent">+5% ce mois</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenus</CardTitle>
            <DollarSign className="h-4 w-4 text-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-neon">€284.7K</div>
            <p className="text-xs text-accent">+18% ce mois</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Performance</CardTitle>
            <Zap className="h-4 w-4 text-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-neon">98.7%</div>
            <p className="text-xs text-accent">+2.1% uptime</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-primary/20">
            <CardTitle className="flex items-center gap-2 text-neon">
              <Activity className="h-5 w-5 text-primary animate-pulse-glow" />
              Activité Récente
            </CardTitle>
            <CardDescription>Surveillance temps réel de la matrice</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg cyber-border hover-glow">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Bug critique détecté</p>
                  <p className="text-xs text-muted-foreground">Module sécurité BugHunter.ma</p>
                </div>
                <span className="text-xs text-accent">Il y a 2min</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg cyber-border hover-glow">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Nouvelle organisation</p>
                  <p className="text-xs text-muted-foreground">TechCorp rejoint la matrice</p>
                </div>
                <span className="text-xs text-accent">Il y a 15min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-primary/20">
            <CardTitle className="flex items-center gap-2 text-neon">
              <Shield className="h-5 w-5 text-primary animate-pulse-glow" />
              Alertes Système
            </CardTitle>
            <CardDescription>Surveillance sécurité avancée</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/10 border border-primary/20 hover-glow">
                <Shield className="h-5 w-5 text-primary animate-pulse-glow" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">Système sécurisé</p>
                  <p className="text-xs text-muted-foreground">Tous les protocoles actifs</p>
                </div>
                <span className="text-xs text-accent">OK</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="cyber-card neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-neon">BugHunter.ma Enterprise - Matrice active</span>
            </div>
            <span className="text-xs text-accent">Synchronisation: 30s</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}