import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, Users, TrendingUp, Shield, Database, Cpu } from "lucide-react";

export function EnterpriseReports() {
  const reports = [
    {
      title: "Rapport Mensuel",
      description: "Surveillance complète de la matrice",
      details: "Synthèse cyberpunk des activités et performances du mois en cours",
      icon: Calendar,
      variant: "default" as const,
      status: "Disponible",
      size: "2.4 MB"
    },
    {
      title: "Analyse Utilisateurs",
      description: "Profiling des agents connectés",
      details: "Comportements, patterns et engagement des utilisateurs actifs",
      icon: Users,
      variant: "outline" as const,
      status: "Généré il y a 2h",
      size: "1.8 MB"
    },
    {
      title: "Rapport Financier",
      description: "Flux économiques de la matrice",
      details: "Revenus, investissements et projections stratégiques",
      icon: TrendingUp,
      variant: "outline" as const,
      status: "Mis à jour",
      size: "945 KB"
    },
    {
      title: "Audit Sécurité",
      description: "Évaluation des protocoles de défense",
      details: "Vulnérabilités, tentatives d'intrusion et contre-mesures",
      icon: Shield,
      variant: "outline" as const,
      status: "Critique",
      size: "3.2 MB"
    },
    {
      title: "Performance Système",
      description: "État de santé de l'infrastructure",
      details: "Métriques techniques, latence et optimisations possibles",
      icon: Cpu,
      variant: "outline" as const,
      status: "Temps réel",
      size: "1.2 MB"
    },
    {
      title: "Base de Données",
      description: "Intégrité et structure des données",
      details: "Requêtes, indexation et recommandations d'optimisation",
      icon: Database,
      variant: "outline" as const,
      status: "Généré",
      size: "2.8 MB"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Archives Numériques</h1>
        <p className="text-muted-foreground text-lg">
          Centre de génération et consultation des rapports matriciels
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">156</p>
                <p className="text-xs text-muted-foreground">Rapports générés</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Download className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">2.4K</p>
                <p className="text-xs text-muted-foreground">Téléchargements</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">24h</p>
                <p className="text-xs text-muted-foreground">Dernière synchro</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Database className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-lg font-bold text-blue-neon">47.2GB</p>
                <p className="text-xs text-muted-foreground">Stockage total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report, index) => (
          <Card key={report.title} className="cyber-card hover-glow group">
            <CardHeader className="border-b border-blue-primary/20">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-blue-neon">
                  <report.icon className="h-5 w-5 text-blue-primary animate-pulse-glow" />
                  {report.title}
                </CardTitle>
                <div className={`w-3 h-3 rounded-full animate-pulse-glow ${
                  report.status === 'Critique' ? 'bg-destructive' :
                  report.status === 'Disponible' ? 'bg-blue-primary' :
                  'bg-blue-accent'
                }`} />
              </div>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {report.details}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Statut:</span>
                  <span className={`font-medium ${
                    report.status === 'Critique' ? 'text-destructive' :
                    report.status === 'Disponible' ? 'text-blue-primary' :
                    'text-blue-accent'
                  }`}>{report.status}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Taille:</span>
                  <span className="text-blue-neon font-medium">{report.size}</span>
                </div>

                <div className="pt-2 border-t border-blue-primary/10">
                  <Button 
                    variant={report.variant} 
                    size="sm" 
                    className="w-full cyber-border hover-glow"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Generation Status */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Moteur de génération actif</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Planifier
              </Button>
              <Button size="sm" className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                Générer Rapport
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}