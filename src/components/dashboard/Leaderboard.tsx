import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Crown, Star, TrendingUp, Users, Calendar, Target } from "lucide-react";

export function Leaderboard() {
  const [timeframe, setTimeframe] = useState("monthly");

  const topHunters = [
    {
      rank: 1,
      username: "cyber_ninja",
      points: 15420,
      bugsFound: 47,
      rewards: "$12,300",
      avatar: "/placeholder.svg",
      country: "🇺🇸",
      trend: "+15%",
      verified: true
    },
    {
      rank: 2,
      username: "security_samurai",
      points: 14850,
      bugsFound: 41,
      rewards: "$10,750",
      avatar: "/placeholder.svg",
      country: "🇩🇪",
      trend: "+8%",
      verified: true
    },
    {
      rank: 3,
      username: "bug_slayer",
      points: 13200,
      bugsFound: 38,
      rewards: "$9,450",
      avatar: "/placeholder.svg",
      country: "🇬🇧",
      trend: "+12%",
      verified: true
    },
    {
      rank: 4,
      username: "hack_master",
      points: 11800,
      bugsFound: 34,
      rewards: "$8,200",
      avatar: "/placeholder.svg",
      country: "🇯🇵",
      trend: "+5%",
      verified: false
    },
    {
      rank: 5,
      username: "vuln_hunter",
      points: 10950,
      bugsFound: 32,
      rewards: "$7,650",
      avatar: "/placeholder.svg",
      country: "🇫🇷",
      trend: "+18%",
      verified: true
    },
    {
      rank: 6,
      username: "code_breaker",
      points: 9800,
      bugsFound: 29,
      rewards: "$6,890",
      avatar: "/placeholder.svg",
      country: "🇨🇦",
      trend: "+3%",
      verified: false
    },
    {
      rank: 7,
      username: "john_hunter",
      points: 8650,
      bugsFound: 25,
      rewards: "$5,420",
      avatar: "/placeholder.svg",
      country: "🇺🇸",
      trend: "+22%",
      verified: true,
      isCurrentUser: true
    }
  ];

  const achievements = [
    {
      title: "First Blood",
      description: "First to find a critical vulnerability",
      icon: Target,
      rarity: "legendary",
      holders: 12
    },
    {
      title: "Speed Demon",
      description: "5 bugs found in 24 hours",
      icon: TrendingUp,
      rarity: "epic",
      holders: 48
    },
    {
      title: "Bug Magnet",
      description: "Found 100 total bugs",
      icon: Star,
      rarity: "rare",
      holders: 156
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "rare":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">Top ethical hackers and bug hunters</p>
        </div>
        <Badge variant="outline" className="text-accent border-accent/30">
          <Trophy className="h-4 w-4 mr-1" />
          Hall of Fame
        </Badge>
      </div>

      <Tabs defaultValue="rankings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="rankings" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant={timeframe === "weekly" ? "default" : "outline"}
              onClick={() => setTimeframe("weekly")}
              size="sm"
            >
              Weekly
            </Button>
            <Button
              variant={timeframe === "monthly" ? "default" : "outline"}
              onClick={() => setTimeframe("monthly")}
              size="sm"
            >
              Monthly
            </Button>
            <Button
              variant={timeframe === "alltime" ? "default" : "outline"}
              onClick={() => setTimeframe("alltime")}
              size="sm"
            >
              All Time
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Top Hunters
                  </CardTitle>
                  <CardDescription>
                    {timeframe === "weekly" ? "This week's" : timeframe === "monthly" ? "This month's" : "All-time"} top performers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topHunters.map((hunter) => (
                      <div
                        key={hunter.rank}
                        className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:bg-muted/50 ${
                          hunter.isCurrentUser 
                            ? 'border-primary/50 bg-primary/5' 
                            : 'border-border/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {getRankIcon(hunter.rank)}
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={hunter.avatar} />
                            <AvatarFallback>{hunter.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className={`font-medium ${hunter.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                              {hunter.username}
                            </h4>
                            <span className="text-sm">{hunter.country}</span>
                            {hunter.verified && (
                              <Badge variant="outline" className="text-xs border-green-500/30 text-green-500">
                                Verified
                              </Badge>
                            )}
                            {hunter.isCurrentUser && (
                              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                                You
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>{hunter.points.toLocaleString()} pts</span>
                            <span>•</span>
                            <span>{hunter.bugsFound} bugs</span>
                            <span>•</span>
                            <span className="text-accent font-medium">{hunter.rewards}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`text-sm font-medium ${hunter.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {hunter.trend}
                          </div>
                          <div className="text-xs text-muted-foreground">trend</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Your Ranking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">#7</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Points</span>
                        <span className="font-medium">8,650</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Bugs Found</span>
                        <span className="font-medium">25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Rewards</span>
                        <span className="font-medium text-accent">$5,420</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-500/30 text-green-500">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +22% this month
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Hunters</span>
                    <Badge variant="outline">1,247</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active This Month</span>
                    <Badge variant="outline">892</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Bugs Found</span>
                    <Badge variant="outline">15,423</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Rewards Paid</span>
                    <Badge className="bg-green-500">$2.4M</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-border/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${getRarityColor(achievement.rarity)}`}></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${getRarityColor(achievement.rarity)}`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1 capitalize">
                        {achievement.rarity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{achievement.holders} hunters earned this</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Points/Bug
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">346</div>
                <div className="text-xs text-muted-foreground">+12% from last month</div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Top Reward
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">$2,500</div>
                <div className="text-xs text-muted-foreground">Critical RCE vulnerability</div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Most Active Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Tuesday</div>
                <div className="text-xs text-muted-foreground">23% of all submissions</div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-xs text-muted-foreground">Valid bug reports</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}