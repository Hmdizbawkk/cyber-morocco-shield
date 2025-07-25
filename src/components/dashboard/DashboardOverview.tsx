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

  const getSeverityBadge = (severity: string) => {
    switch(severity) {
      case 'Critical': return 'critical';
      case 'High': return 'high';
      case 'Medium': return 'medium';
      case 'Low': return 'low';
      default: return 'medium';
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
    <div className="space-y-8 dashboard-fade-in">
      {/* Welcome Section */}
      <div className="flex items-center justify-between dashboard-slide-up">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white">
            Welcome back, <span className="text-red-400 dashboard-pulse">john_hunter</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Track your bug hunting progress and <span className="text-blue-400">dominate the cyber realm</span>
          </p>
        </div>
        <Button 
          size="lg" 
          className="dashboard-btn-primary px-6 py-3 rounded-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Submit New Bug
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="dashboard-card p-6 dashboard-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {stat.title}
              </div>
              <div className="p-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700">
                <stat.icon className="h-5 w-5 text-blue-400" />
              </div>
            </div>
            <div className="dashboard-stat-value text-white mb-2">{stat.value}</div>
            <div className="flex items-center space-x-2">
              <TrendingUp className={`h-4 w-4 ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`} />
              <span className={`text-sm font-medium dashboard-stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.trend} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Feed */}
        <div className="dashboard-card p-6 dashboard-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Activity className="h-5 w-5 text-blue-400" />
              Recent Activity
            </h3>
            <p className="text-gray-400 mt-1">Real-time updates on your bug reports</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 dashboard-slide-up">
              <div className="h-2 w-2 bg-green-400 rounded-full dashboard-pulse"></div>
              <span className="text-sm text-gray-300">Bug <span className="text-blue-400 font-mono">BH-2024-001</span> status changed to <span className="text-green-400 font-medium">Resolved</span></span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 dashboard-slide-up">
              <div className="h-2 w-2 bg-blue-400 rounded-full dashboard-pulse"></div>
              <span className="text-sm text-gray-300">Reward of <span className="text-green-400 font-medium">$500</span> credited for critical vulnerability</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 dashboard-slide-up">
              <div className="h-2 w-2 bg-yellow-400 rounded-full dashboard-pulse"></div>
              <span className="text-sm text-gray-300">New comment on <span className="text-yellow-400 font-mono">BH-2024-002</span> from security team</span>
            </div>
          </div>
        </div>

        {/* Performance Dashboard */}
        <div className="dashboard-card p-6 dashboard-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Zap className="h-5 w-5 text-yellow-400" />
              Performance Metrics
            </h3>
            <p className="text-gray-400 mt-1">Your hunting achievements this month</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-500/20 to-transparent">
              <span className="text-sm text-gray-400">Global Ranking</span>
              <span className="dashboard-badge medium font-semibold">#7 Elite Hunter</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-500/20 to-transparent">
              <span className="text-sm text-gray-400">Success Rate</span>
              <span className="text-blue-400 font-bold text-lg">87%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-500/20 to-transparent">
              <span className="text-sm text-gray-400">Avg Response Time</span>
              <span className="text-blue-400 font-bold text-lg">2.3h</span>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Achievement Unlocked!</span>
              </div>
              <p className="text-xs text-gray-400">Speed Demon: Found 5 critical bugs in 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bug Reports */}
      <div className="dashboard-card p-6 dashboard-fade-in" style={{ animationDelay: '0.7s' }}>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Recent Bug Reports</h3>
          <p className="text-gray-400 mt-1">Your latest vulnerability discoveries</p>
        </div>
        <div className="space-y-4">
          {recentBugs.map((bug, index) => (
            <div
              key={bug.id}
              className="flex items-center justify-between p-4 border border-gray-700/50 rounded-xl hover:bg-gradient-to-r hover:from-gray-800/20 hover:to-transparent transition-all duration-300 hover:border-blue-500/30 group"
              style={{ animationDelay: `${(index + 8) * 0.1}s` }}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{bug.title}</h4>
                  <span className={`dashboard-badge ${getSeverityBadge(bug.severity)}`}>
                    {bug.severity}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="font-mono text-blue-400">{bug.id}</span>
                  <span>•</span>
                  <span>{bug.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(bug.status)}
                    <span className="text-xs text-blue-400">
                      {bug.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-400">{bug.reward}</div>
                <div className="text-xs text-gray-400">Reward</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}