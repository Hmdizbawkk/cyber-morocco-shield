import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, Trophy, Clock, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Bugs Submitted",
      value: "47",
      description: "+12 from last month",
      icon: Bug,
      color: "text-bughunter"
    },
    {
      title: "Bugs Resolved",
      value: "32",
      description: "68% success rate",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "Pending Reviews",
      value: "8",
      description: "Awaiting validation",
      icon: Clock,
      color: "text-yellow-500"
    },
    {
      title: "Total Rewards",
      value: "$2,450",
      description: "+$320 this month",
      icon: Trophy,
      color: "text-bughunter"
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
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, <span className="text-bughunter">john_hunter</span>
        </h1>
        <p className="text-muted-foreground">
          Track your bug hunting progress and manage your reports
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bug Reports */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Bug Reports</CardTitle>
            <CardDescription>Your latest submissions and their status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBugs.map((bug) => (
              <div key={bug.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-foreground">{bug.title}</span>
                    <Badge className={`${getSeverityColor(bug.severity)} text-white text-xs`}>
                      {bug.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{bug.id}</span>
                    <span>•</span>
                    <span>{bug.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(bug.status)}
                  <span className="text-sm font-medium text-bughunter">{bug.reward}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-4 text-left rounded-lg bg-bughunter/10 border border-bughunter/20 hover:bg-bughunter/20 transition-colors">
              <div className="flex items-center gap-3">
                <Bug className="h-5 w-5 text-bughunter" />
                <div>
                  <h3 className="font-medium text-foreground">Submit New Bug</h3>
                  <p className="text-sm text-muted-foreground">Report a security vulnerability</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-4 text-left rounded-lg bg-muted/20 border border-border/30 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <div>
                  <h3 className="font-medium text-foreground">View Leaderboard</h3>
                  <p className="text-sm text-muted-foreground">See top BugHunters rankings</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-4 text-left rounded-lg bg-muted/20 border border-border/30 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <h3 className="font-medium text-foreground">Review Progress</h3>
                  <p className="text-sm text-muted-foreground">Track your hunting statistics</p>
                </div>
              </div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}