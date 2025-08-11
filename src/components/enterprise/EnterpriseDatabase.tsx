import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Server, HardDrive, Cpu, MemoryStick, Shield, Clock, Activity, AlertTriangle } from "lucide-react";

export function EnterpriseDatabase() {
  const metrics = [
    { label: "Connexions actives", value: "247", change: "+12", icon: Activity },
    { label: "Utilisation CPU", value: "34%", change: "Stable", icon: Cpu },
    { label: "Utilisation RAM", value: "62%", change: "+5%", icon: MemoryStick },
    { label: "Stockage libre", value: "2.3TB", change: "89%", icon: HardDrive }
  ];

  const backups = [
    {
      type: "Complète",
      status: "Terminée",
      size: "2.4 GB",
      time: "Il y a 2h",
      next: "Dans 22h"
    },
    {
      type: "Incrémentale",
      status: "En cours",
      size: "156 MB",
      time: "En cours",
      next: "Dans 6h"
    },
    {
      type: "Différentielle",
      status: "Planifiée",
      size: "Est. 800MB",
      time: "Planifiée",
      next: "Dans 2h"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Infrastructure Matricielle</h1>
        <p className="text-muted-foreground text-lg">
          Surveillance cyberpunk de la base de données principale
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={metric.label} className="cyber-card hover-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.label}</CardTitle>
              <metric.icon className="h-4 w-4 text-blue-primary animate-pulse-glow" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-neon">{metric.value}</div>
              <p className="text-xs text-blue-accent">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Status */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Server className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              État du Système
            </CardTitle>
            <CardDescription>Monitoring en temps réel de l'infrastructure</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-primary/10 border border-blue-primary/20 hover-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Statut Principal</p>
                    <p className="text-xs text-muted-foreground">Toutes les matrices opérationnelles</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-primary">ONLINE</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg cyber-border hover-glow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Connexions</span>
                    <span className="text-sm font-bold text-blue-neon">247</span>
                  </div>
                  <div className="w-full h-1 bg-blue-primary/20 rounded-full mt-2">
                    <div className="w-[65%] h-full bg-blue-primary rounded-full animate-pulse-glow"></div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg cyber-border hover-glow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Latence</span>
                    <span className="text-sm font-bold text-blue-neon">12ms</span>
                  </div>
                  <div className="w-full h-1 bg-blue-primary/20 rounded-full mt-2">
                    <div className="w-[25%] h-full bg-blue-accent rounded-full animate-pulse-glow"></div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg cyber-border hover-glow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Performances Globales</span>
                  <span className="text-sm font-bold text-blue-neon">Optimales</span>
                </div>
                <div className="w-full h-2 bg-blue-primary/20 rounded-full">
                  <div className="w-[89%] h-full bg-gradient-to-r from-blue-primary to-blue-accent rounded-full animate-pulse-glow"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Management */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Shield className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Protocoles de Sauvegarde
            </CardTitle>
            <CardDescription>Gestion des sauvegardes matricielles</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {backups.map((backup, index) => (
                <div key={backup.type} className="flex items-center justify-between p-4 rounded-lg cyber-border hover-glow">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full animate-pulse-glow ${
                      backup.status === 'Terminée' ? 'bg-blue-primary' :
                      backup.status === 'En cours' ? 'bg-blue-accent' :
                      'bg-muted-foreground'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Sauvegarde {backup.type}</p>
                      <p className="text-xs text-muted-foreground">{backup.size} • {backup.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${
                      backup.status === 'Terminée' ? 'text-blue-primary' :
                      backup.status === 'En cours' ? 'text-blue-accent' :
                      'text-muted-foreground'
                    }`}>
                      {backup.status}
                    </p>
                    <p className="text-xs text-muted-foreground">Prochaine: {backup.next}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Storage Analysis */}
      <Card className="cyber-card hover-glow">
        <CardHeader className="border-b border-blue-primary/20">
          <CardTitle className="flex items-center gap-2 text-blue-neon">
            <HardDrive className="h-5 w-5 text-blue-primary animate-pulse-glow" />
            Analyse du Stockage
          </CardTitle>
          <CardDescription>Répartition et utilisation des espaces de stockage</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Données Utilisateurs</span>
                <span className="text-sm font-bold text-blue-neon">1.2TB</span>
              </div>
              <div className="w-full h-2 bg-blue-primary/20 rounded-full">
                <div className="w-[72%] h-full bg-blue-primary rounded-full animate-pulse-glow"></div>
              </div>
              <p className="text-xs text-blue-accent mt-1">72% utilisé</p>
            </div>
            
            <div className="p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Sauvegardes</span>
                <span className="text-sm font-bold text-blue-neon">450GB</span>
              </div>
              <div className="w-full h-2 bg-blue-primary/20 rounded-full">
                <div className="w-[45%] h-full bg-blue-accent rounded-full animate-pulse-glow"></div>
              </div>
              <p className="text-xs text-blue-accent mt-1">45% utilisé</p>
            </div>
            
            <div className="p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Système</span>
                <span className="text-sm font-bold text-blue-neon">89GB</span>
              </div>
              <div className="w-full h-2 bg-blue-primary/20 rounded-full">
                <div className="w-[23%] h-full bg-blue-secondary rounded-full animate-pulse-glow"></div>
              </div>
              <p className="text-xs text-blue-accent mt-1">23% utilisé</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Control Panel */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Base de données matricielle stable</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                <Clock className="h-4 w-4 mr-2" />
                Planifier Maintenance
              </Button>
              <Button size="sm" className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                <Shield className="h-4 w-4 mr-2" />
                Lancer Sauvegarde
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}