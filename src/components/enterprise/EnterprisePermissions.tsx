import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EnterprisePermissions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Permissions</h1>
        <p className="text-muted-foreground">
          Configurez les rôles et permissions système
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rôles et Permissions</CardTitle>
          <CardDescription>Configuration des accès utilisateur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Administrateur</h3>
              <p className="text-sm text-muted-foreground">Accès complet au système</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Lecture</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Écriture</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Suppression</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Configuration</span>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Utilisateur</h3>
              <p className="text-sm text-muted-foreground">Accès standard aux fonctionnalités</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">Lecture</span>
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">Écriture</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}