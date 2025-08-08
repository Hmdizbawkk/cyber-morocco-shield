import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Plus } from "lucide-react";

export function EnterpriseOrganizations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organisations</h1>
          <p className="text-muted-foreground">
            Gérez les organisations et leurs configurations
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Organisation
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              TechCorp
            </CardTitle>
            <CardDescription>125 utilisateurs actifs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Plan: Enterprise</p>
              <p className="text-sm">Créée: 15 Jan 2024</p>
              <Button variant="outline" size="sm" className="w-full">
                Gérer
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              StartupXYZ
            </CardTitle>
            <CardDescription>45 utilisateurs actifs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Plan: Pro</p>
              <p className="text-sm">Créée: 3 Fév 2024</p>
              <Button variant="outline" size="sm" className="w-full">
                Gérer
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              BigCorp
            </CardTitle>
            <CardDescription>589 utilisateurs actifs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Plan: Enterprise</p>
              <p className="text-sm">Créée: 28 Déc 2023</p>
              <Button variant="outline" size="sm" className="w-full">
                Gérer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}