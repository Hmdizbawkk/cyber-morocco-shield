import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EnterpriseBilling() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Facturation</h1>
        <p className="text-muted-foreground">
          Gestion des abonnements et facturation
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenus Mensuels</CardTitle>
            <CardDescription>Revenus du mois en cours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€45,231</div>
            <p className="text-sm text-muted-foreground">+20.1% par rapport au mois dernier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Abonnements Actifs</CardTitle>
            <CardDescription>Nombre d'abonnements payants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-sm text-muted-foreground">+12 nouveaux cette semaine</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dernières Transactions</CardTitle>
          <CardDescription>Paiements récents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">TechCorp - Plan Enterprise</p>
                <p className="text-sm text-muted-foreground">15 Mars 2024</p>
              </div>
              <span className="font-medium text-green-600">+€2,500</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">StartupXYZ - Plan Pro</p>
                <p className="text-sm text-muted-foreground">14 Mars 2024</p>
              </div>
              <span className="font-medium text-green-600">+€99</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}