import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, TrendingUp, Users, Calendar, ArrowUpRight, Building } from "lucide-react";

export function EnterpriseBilling() {
  const transactions = [
    {
      organization: "TechCorp",
      plan: "Enterprise Matrix",
      amount: "€2,500",
      date: "15 Mars 2024",
      status: "completed",
      id: "TXN-2024-001"
    },
    {
      organization: "StartupXYZ",
      plan: "Pro Cyberpunk",
      amount: "€99",
      date: "14 Mars 2024",
      status: "completed",
      id: "TXN-2024-002"
    },
    {
      organization: "BigCorp",
      plan: "Enterprise Matrix",
      amount: "€4,750",
      date: "13 Mars 2024",
      status: "completed",
      id: "TXN-2024-003"
    },
    {
      organization: "DevStudio",
      plan: "Team Advanced",
      amount: "€299",
      date: "12 Mars 2024",
      status: "pending",
      id: "TXN-2024-004"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-blue-neon">Flux Économique</h1>
        <p className="text-muted-foreground text-lg">
          Centre de contrôle des transactions matricielles
        </p>
      </div>

      {/* Revenue Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenus Mensuels</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">€45,231</div>
            <p className="text-xs text-blue-accent flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +20.1% vs mois dernier
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Abonnements Actifs</CardTitle>
            <Users className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">1,234</div>
            <p className="text-xs text-blue-accent">+12 nouveaux cette semaine</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taux de Conversion</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">3.2%</div>
            <p className="text-xs text-blue-accent">+0.8% amélioration</p>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Révenu Moyen</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-primary animate-pulse-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-neon">€367</div>
            <p className="text-xs text-blue-accent">par organisation</p>
          </CardContent>
        </Card>
      </div>

      {/* Billing Details */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Transactions */}
        <div className="lg:col-span-2">
          <Card className="cyber-card hover-glow">
            <CardHeader className="border-b border-blue-primary/20">
              <CardTitle className="flex items-center gap-2 text-blue-neon">
                <CreditCard className="h-5 w-5 text-blue-primary animate-pulse-glow" />
                Transactions Récentes
              </CardTitle>
              <CardDescription>Flux de paiements en temps réel</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {transactions.map((transaction, index) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-4 border-b border-blue-primary/10 last:border-b-0 hover:bg-blue-primary/5 transition-colors cyber-border hover-glow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full animate-pulse-glow ${
                        transaction.status === 'completed' ? 'bg-blue-primary' : 'bg-blue-accent'
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{transaction.organization}</p>
                        <p className="text-xs text-muted-foreground">{transaction.plan}</p>
                        <p className="text-xs text-blue-accent">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-neon">{transaction.amount}</p>
                      <p className={`text-xs ${
                        transaction.status === 'completed' ? 'text-blue-primary' : 'text-blue-accent'
                      }`}>
                        {transaction.status === 'completed' ? 'Confirmé' : 'En cours'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing Summary */}
        <div className="space-y-6">
          <Card className="cyber-card hover-glow">
            <CardHeader className="border-b border-blue-primary/20">
              <CardTitle className="flex items-center gap-2 text-blue-neon">
                <Calendar className="h-5 w-5 text-blue-primary animate-pulse-glow" />
                Prochaines Facturations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                  <div>
                    <p className="text-sm font-medium text-foreground">Demain</p>
                    <p className="text-xs text-muted-foreground">23 organisations</p>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">€12.4K</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg cyber-border hover-glow">
                  <div>
                    <p className="text-sm font-medium text-foreground">Cette semaine</p>
                    <p className="text-xs text-muted-foreground">47 organisations</p>
                  </div>
                  <span className="text-sm font-bold text-blue-neon">€28.7K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card hover-glow">
            <CardHeader className="border-b border-blue-primary/20">
              <CardTitle className="flex items-center gap-2 text-blue-neon">
                <Building className="h-5 w-5 text-blue-primary animate-pulse-glow" />
                Top Plans
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Enterprise Matrix</span>
                  <span className="text-sm font-bold text-blue-neon">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Pro Cyberpunk</span>
                  <span className="text-sm font-bold text-blue-neon">32%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Team Advanced</span>
                  <span className="text-sm font-bold text-blue-neon">23%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Panel */}
      <Card className="cyber-card blue-neon-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-primary rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium text-blue-neon">Système de facturation opérationnel</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="cyber-border hover-glow">
                Exporter Données
              </Button>
              <Button size="sm" className="cyber-border bg-blue-primary hover:bg-blue-primary/80 text-white hover-glow">
                Configurer Facturation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}