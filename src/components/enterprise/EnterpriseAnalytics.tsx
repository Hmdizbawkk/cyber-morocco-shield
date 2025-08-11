import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, BarChart3, Activity, Zap, Users } from "lucide-react";

export function EnterpriseAnalytics() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Analyses Avancées</h1>
        <p className="text-muted-foreground text-lg">
          Surveillance cyberpunk de la matrice analytique
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sessions Actives</CardTitle>
            <Activity className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">15,732</div>
            <p className="text-xs text-blue-accent">+24% ce mois</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Performance</CardTitle>
            <Zap className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">97.8%</div>
            <p className="text-xs text-blue-accent">+3.2% uptime</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Requêtes/sec</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">2.4K</div>
            <p className="text-xs text-blue-accent">+18% trafic</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Régions</CardTitle>
            <Globe className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">47</div>
            <p className="text-xs text-blue-accent">+5 nouvelles</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Globe className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Distribution Géographique
            </CardTitle>
            <CardDescription>Répartition mondiale des connexions</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-foreground">Europe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-2 bg-blue-primary/20 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-blue-primary rounded-full animate-pulse-glow"></div>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-accent rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-foreground">Amérique du Nord</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-2 bg-blue-primary/20 rounded-full overflow-hidden">
                    <div className="w-[30%] h-full bg-blue-accent rounded-full animate-pulse-glow"></div>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">30%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-secondary rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-foreground">Asie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-2 bg-blue-primary/20 rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-blue-secondary rounded-full animate-pulse-glow"></div>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-foreground">Autres</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-2 bg-blue-primary/20 rounded-full overflow-hidden">
                    <div className="w-[5%] h-full bg-muted-foreground rounded-full animate-pulse-glow"></div>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <TrendingUp className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Évolution Temporelle
            </CardTitle>
            <CardDescription>Tendances et croissance de la matrice</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-primary/10 border border-blue-primary/20 hover-glow">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Janvier 2024</p>
                    <p className="text-xs text-muted-foreground">Croissance optimale</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-accent">+15%</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-accent/10 border border-blue-accent/20 hover-glow">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-4 w-4 text-blue-accent animate-pulse-glow" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Février 2024</p>
                    <p className="text-xs text-muted-foreground">Accélération détectée</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-accent">+22%</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-secondary/10 border border-blue-secondary/20 hover-glow">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-4 w-4 text-blue-secondary animate-pulse-glow" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Mars 2024</p>
                    <p className="text-xs text-muted-foreground">Stabilisation en cours</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-accent">+18%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Status */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Matrice analytique synchronisée</span>
            </div>
            <span className="text-xs text-blue-accent">Temps réel - 30ms latence</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}