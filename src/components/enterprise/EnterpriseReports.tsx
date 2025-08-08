import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export function EnterpriseReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rapports</h1>
        <p className="text-muted-foreground">
          Générez et consultez les rapports d'activité
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Rapport Mensuel
            </CardTitle>
            <CardDescription>Activité du mois en cours</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Rapport complet des activités et performances du mois
            </p>
            <Button size="sm" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Rapport Utilisateurs
            </CardTitle>
            <CardDescription>Statistiques utilisateurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Analyse détaillée de l'engagement utilisateur
            </p>
            <Button size="sm" variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Rapport Financier
            </CardTitle>
            <CardDescription>Analyse financière</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Revenus, coûts et projections financières
            </p>
            <Button size="sm" variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}