import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EnterpriseDatabase() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Base de Données</h1>
        <p className="text-muted-foreground">
          Gestion et monitoring de la base de données
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>État de la Base</CardTitle>
            <CardDescription>Status et performances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Statut</span>
                <span className="text-green-600 font-medium">En ligne</span>
              </div>
              <div className="flex justify-between">
                <span>Connexions actives</span>
                <span className="font-medium">247</span>
              </div>
              <div className="flex justify-between">
                <span>Utilisation CPU</span>
                <span className="font-medium">34%</span>
              </div>
              <div className="flex justify-between">
                <span>Utilisation mémoire</span>
                <span className="font-medium">62%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sauvegardes</CardTitle>
            <CardDescription>Gestion des sauvegardes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Dernière sauvegarde</span>
                <span className="font-medium">Il y a 2h</span>
              </div>
              <div className="flex justify-between">
                <span>Taille</span>
                <span className="font-medium">2.4 GB</span>
              </div>
              <div className="flex justify-between">
                <span>Prochaine sauvegarde</span>
                <span className="font-medium">Dans 6h</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}