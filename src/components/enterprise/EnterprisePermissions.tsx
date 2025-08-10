import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EnterprisePermissions() {
  const roles = [
    {
      name: "Super Admin",
      description: "Contrôle total de la matrice",
      permissions: ["read", "write", "delete", "config", "security", "audit"],
      users: 3,
      color: "destructive"
    },
    {
      name: "Administrateur",
      description: "Accès complet au système",
      permissions: ["read", "write", "delete", "config"],
      users: 12,
      color: "primary"
    },
    {
      name: "Manager",
      description: "Gestion des équipes et projets",
      permissions: ["read", "write", "manage"],
      users: 28,
      color: "accent"
    },
    {
      name: "Développeur",
      description: "Accès développement et debug",
      permissions: ["read", "write", "debug"],
      users: 156,
      color: "primary"
    },
    {
      name: "Testeur",
      description: "Accès lecture et tests",
      permissions: ["read", "test"],
      users: 89,
      color: "accent"
    },
    {
      name: "Invité",
      description: "Accès limité en lecture seule",
      permissions: ["read"],
      users: 234,
      color: "muted"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-neon">Permissions & Rôles</h1>
        <p className="text-muted-foreground text-lg">
          Configuration de la matrice de sécurité système
        </p>
      </div>

      {/* Role Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role, index) => (
          <Card key={role.name} className="cyber-card hover-glow group">
            <CardHeader className="border-b border-primary/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-neon">{role.name}</CardTitle>
                <div className={`w-3 h-3 rounded-full animate-pulse-glow ${
                  role.color === 'destructive' ? 'bg-destructive' :
                  role.color === 'primary' ? 'bg-primary' :
                  role.color === 'accent' ? 'bg-accent' : 'bg-muted-foreground'
                }`} />
              </div>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Utilisateurs</span>
                  <span className="text-lg font-bold text-neon">{role.users}</span>
                </div>
                
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">Permissions</span>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map(permission => (
                      <span 
                        key={permission} 
                        className={`px-2 py-1 rounded text-xs font-medium cyber-border ${
                          role.color === 'destructive' ? 'bg-destructive/20 text-destructive border-destructive/20' :
                          role.color === 'primary' ? 'bg-primary/20 text-primary border-primary/20' :
                          role.color === 'accent' ? 'bg-accent/20 text-accent border-accent/20' : 
                          'bg-muted/20 text-muted-foreground border-muted/20'
                        }`}
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-primary/10">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full cyber-border hover-glow"
                  >
                    Configurer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Matrix View */}
      <Card className="cyber-card hover-glow">
        <CardHeader className="border-b border-primary/20">
          <CardTitle className="text-neon">Matrice des Permissions</CardTitle>
          <CardDescription>Vue détaillée des droits d'accès</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Rôle</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Lecture</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Écriture</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Suppression</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Config</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Sécurité</th>
                </tr>
              </thead>
              <tbody>
                {roles.slice(0, 4).map((role, index) => (
                  <tr key={role.name} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-medium text-neon">{role.name}</span>
                    </td>
                    {['read', 'write', 'delete', 'config', 'security'].map(permission => (
                      <td key={permission} className="text-center py-3 px-4">
                        {role.permissions.includes(permission) ? (
                          <div className="w-3 h-3 bg-primary rounded-full mx-auto animate-pulse-glow" />
                        ) : (
                          <div className="w-3 h-3 bg-muted/30 rounded-full mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="cyber-card neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-neon">Système sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Audit Trail
              </Button>
              <Button size="sm" className="cyber-border bg-primary hover:bg-primary/80 text-white hover-glow">
                Nouveau Rôle
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}