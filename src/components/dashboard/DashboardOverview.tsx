import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bug, Trophy, Clock, CheckCircle, AlertTriangle, XCircle, TrendingUp, Activity, Zap, Plus } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Bugs Submitted",
      value: "47",
      description: "+12 from last month",
      icon: Bug,
      color: "text-primary",
      trend: "+12%"
    },
    {
      title: "Bugs Resolved",
      value: "32",
      description: "68% success rate",
      icon: CheckCircle,
      color: "text-admin",
      trend: "+8%"
    },
    {
      title: "Pending Reviews",
      value: "8",
      description: "Awaiting validation",
      icon: Clock,
      color: "text-destructive",
      trend: "-2%"
    },
    {
      title: "Total Rewards",
      value: "$2,450",
      description: "+$320 this month",
      icon: Trophy,
      color: "text-accent",
      trend: "+15%"
    }
  ];

  const recentBugs = [
    {
      id: "BH-2024-001",
      title: "SQL Injection in Login Form",
      severity: "Critical",
      status: "Resolved",
      reward: "$500",
      date: "2 days ago"
    },
    {
      id: "BH-2024-002", 
      title: "XSS Vulnerability in Comments",
      severity: "High",
      status: "In Progress",
      reward: "Pending",
      date: "5 days ago"
    },
    {
      id: "BH-2024-003",
      title: "CSRF Token Bypass",
      severity: "Medium",
      status: "Under Review",
      reward: "Pending",
      date: "1 week ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'In Progress': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Under Review': return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up bg-cyber-grid">
      {/* Enhanced Welcome Section */}
      <div className="flex items-center justify-between animate-slide-in">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-cyber">
            Welcome back, <span className="text-accent animate-pulse-glow">john_hunter</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your bug hunting progress and <span className="text-primary">dominate the cyber realm</span>
          </p>
        </div>
        <Button variant="glow" size="lg" className="animate-float">
          <Plus className="h-5 w-5 mr-2" />
          Submit New Bug
        </Button>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="cyber-card hover-glow animate-fade-in-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-xl bg-gradient-to-br from-card to-muted hover-glow transition-transform group-hover:scale-110`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-glow mb-2">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <TrendingUp className={`h-4 w-4 ${stat.trend.startsWith('+') ? 'text-admin' : 'text-destructive'}`} />
                <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-admin' : 'text-destructive'}`}>
                  {stat.trend} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Feed */}
        <Card className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2 text-cyber">
              <Activity className="h-5 w-5 text-accent" />
              Recent Activity
            </CardTitle>
            <CardDescription>Real-time updates on your bug reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-admin/10 to-transparent border border-admin/20 animate-slide-in interactive">
                <div className="h-2 w-2 bg-admin rounded-full animate-pulse-glow"></div>
                <span className="text-sm">Bug <span className="text-accent font-mono">BH-2024-001</span> status changed to <span className="text-admin font-medium">Resolved</span></span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 animate-slide-in interactive">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse-glow"></div>
                <span className="text-sm">Reward of <span className="text-accent font-medium">$500</span> credited for critical vulnerability</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 animate-slide-in interactive">
                <div className="h-2 w-2 bg-accent rounded-full animate-pulse-glow"></div>
                <span className="text-sm">New comment on <span className="text-accent font-mono">BH-2024-002</span> from security team</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Dashboard */}
        <Card className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2 text-cyber">
              <Zap className="h-5 w-5 text-accent" />
              Performance Metrics
            </CardTitle>
            <CardDescription>Your hunting achievements this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/20 to-transparent">
                <span className="text-sm text-muted-foreground">Global Ranking</span>
                <Badge variant="outline" className="font-semibold animate-pulse-glow border-accent/30 text-accent">#7 Elite Hunter</Badge>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/20 to-transparent">
                <span className="text-sm text-muted-foreground">Success Rate</span>
                <span className="text-accent font-bold text-lg">87%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/20 to-transparent">
                <span className="text-sm text-muted-foreground">Avg Response Time</span>
                <span className="text-accent font-bold text-lg">2.3h</span>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 hover-glow">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-accent animate-float" />
                  <span className="text-sm font-semibold text-accent">Achievement Unlocked!</span>
                </div>
                <p className="text-xs text-muted-foreground">Speed Demon: Found 5 critical bugs in 24 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Recent Bug Reports */}
      <Card className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-cyber">Recent Bug Reports</CardTitle>
          <CardDescription>Your latest vulnerability discoveries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBugs.map((bug, index) => (
              <div
                key={bug.id}
                className="flex items-center justify-between p-4 border border-border/50 rounded-xl hover:bg-gradient-to-r hover:from-muted/20 hover:to-transparent transition-all duration-300 hover:border-primary/30 interactive group"
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{bug.title}</h4>
                    <Badge 
                      variant={
                        bug.severity === 'Critical' ? 'destructive' :
                        bug.severity === 'High' ? 'destructive' :
                        'secondary'
                      }
                      className="shadow-lg"
                    >
                      {bug.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="font-mono text-accent">{bug.id}</span>
                    <span>•</span>
                    <span>{bug.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(bug.status)}
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                        {bug.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-glow text-accent">{bug.reward}</div>
                  <div className="text-xs text-muted-foreground">Reward</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}