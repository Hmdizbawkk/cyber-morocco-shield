import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EnterpriseAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analyses</h1>
        <p className="text-muted-foreground">
          Analyses détaillées et métriques de performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Utilisation par Région</CardTitle>
            <CardDescription>Répartition géographique des utilisateurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Europe</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Amérique du Nord</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Asie</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Autres</span>
                <span className="font-medium">5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Mensuelle</CardTitle>
            <CardDescription>Tendances et évolution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Janvier</span>
                <span className="font-medium text-green-600">+15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Février</span>
                <span className="font-medium text-green-600">+22%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mars</span>
                <span className="font-medium text-green-600">+18%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}