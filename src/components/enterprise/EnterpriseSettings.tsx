import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Shield, Bell, Globe, User, Lock, Key, Eye, Database, Cpu } from "lucide-react";

export function EnterpriseSettings() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Configuration Matricielle</h1>
        <p className="text-muted-foreground text-lg">
          Centre de contrôle des paramètres enterprise
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-sm font-bold text-blue-neon">Configuration</p>
                <p className="text-xs text-muted-foreground">Paramètres généraux</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-sm font-bold text-blue-neon">Sécurité</p>
                <p className="text-xs text-muted-foreground">Protocoles actifs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-sm font-bold text-blue-neon">Notifications</p>
                <p className="text-xs text-muted-foreground">Système d'alertes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cyber-card hover-glow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Database className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              <div>
                <p className="text-sm font-bold text-blue-neon">API</p>
                <p className="text-xs text-muted-foreground">Intégrations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Configuration */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Settings className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Configuration Générale
            </CardTitle>
            <CardDescription>Paramètres de base de la matrice</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="company-name" className="text-sm font-medium text-foreground">Nom de l'Organisation</Label>
              <Input 
                id="company-name" 
                defaultValue="BugHunter Enterprise Matrix" 
                className="cyber-border focus:border-blue-primary/50 focus:ring-blue-primary/20"
              />
              <p className="text-xs text-muted-foreground">Identifiant principal de votre organisation dans la matrice</p>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="admin-email" className="text-sm font-medium text-foreground">Email Administrateur</Label>
              <Input 
                id="admin-email" 
                type="email" 
                defaultValue="admin@bughunter.ma" 
                className="cyber-border focus:border-blue-primary/50 focus:ring-blue-primary/20"
              />
              <p className="text-xs text-muted-foreground">Contact principal pour les alertes critiques</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="timezone" className="text-sm font-medium text-foreground">Fuseau Horaire</Label>
              <Input 
                id="timezone" 
                defaultValue="Europe/Paris" 
                className="cyber-border focus:border-blue-primary/50 focus:ring-blue-primary/20"
              />
            </div>

            <div className="pt-4 border-t border-blue-primary/10">
              <Button className="w-full cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                Sauvegarder Configuration
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Shield className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Protocoles de Sécurité
            </CardTitle>
            <CardDescription>Configuration avancée de la sécurité</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center space-x-3">
                <Key className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                <div>
                  <p className="text-sm font-medium text-foreground">Authentification 2FA</p>
                  <p className="text-xs text-muted-foreground">Protection renforcée des comptes</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch defaultChecked />
                <Button variant="outline" size="sm" className="cyber-border hover-glow">
                  Configurer
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center space-x-3">
                <Lock className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                <div>
                  <p className="text-sm font-medium text-foreground">Politique de Mots de Passe</p>
                  <p className="text-xs text-muted-foreground">Règles de complexité avancées</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Modifier
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center space-x-3">
                <User className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                <div>
                  <p className="text-sm font-medium text-foreground">Sessions Utilisateur</p>
                  <p className="text-xs text-muted-foreground">Gestion des connexions actives</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Gérer
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg cyber-border hover-glow">
              <div className="flex items-center space-x-3">
                <Eye className="h-4 w-4 text-blue-primary animate-pulse-glow" />
                <div>
                  <p className="text-sm font-medium text-foreground">Audit des Accès</p>
                  <p className="text-xs text-muted-foreground">Surveillance des connexions</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Notifications */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Bell className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Alertes Email</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Notifications Push</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Rapports Hebdo</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Globe className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              API & Webhooks
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-sm text-foreground">Clé API</Label>
              <div className="flex space-x-2">
                <Input value="sk_test_••••••••••••2847" readOnly className="cyber-border" />
                <Button variant="outline" size="sm" className="cyber-border hover-glow">
                  Régénérer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card className="cyber-card hover-glow">
          <CardHeader className="border-b border-blue-primary/20">
            <CardTitle className="flex items-center gap-2 text-blue-neon">
              <Cpu className="h-5 w-5 text-blue-primary animate-pulse-glow" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Cache Optimisé</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Compression</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">CDN Global</span>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Configuration matricielle synchronisée</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Exporter Config
              </Button>
              <Button size="sm" className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                Appliquer Changements
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}