import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, CheckCircle, Clock, MessageSquare, Trophy, Settings, Filter, Check } from "lucide-react";

export function Notifications() {
  const [showAll, setShowAll] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "reward",
      title: "Reward Processed",
      message: "Your reward of $500 for bug BH-2024-001 has been processed.",
      time: "2 minutes ago",
      read: false,
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      id: 2,
      type: "status",
      title: "Bug Status Updated",
      message: "Bug report BH-2024-002 status changed to 'In Progress'.",
      time: "1 hour ago",
      read: false,
      icon: Clock,
      color: "text-blue-500"
    },
    {
      id: 3,
      type: "comment",
      title: "New Comment",
      message: "Security team commented on your bug report BH-2024-003.",
      time: "3 hours ago",
      read: true,
      icon: MessageSquare,
      color: "text-green-500"
    },
    {
      id: 4,
      type: "resolved",
      title: "Bug Resolved",
      message: "Your vulnerability report BH-2024-001 has been successfully resolved.",
      time: "1 day ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      id: 5,
      type: "reward",
      title: "Bounty Payment",
      message: "Payment of $320 has been sent to your account.",
      time: "2 days ago",
      read: true,
      icon: Trophy,
      color: "text-yellow-500"
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const displayedNotifications = showAll ? notifications : notifications.filter(n => !n.read);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on your bug reports and rewards</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-accent border-accent/30">
            <Bell className="h-4 w-4 mr-1" />
            {unreadCount} unread
          </Badge>
          <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Switch
                    checked={showAll}
                    onCheckedChange={setShowAll}
                    id="show-all"
                  />
                  <Label htmlFor="show-all" className="text-sm">
                    Show all
                  </Label>
                </div>
              </div>
              <CardDescription>
                {showAll ? "All notifications" : "Unread notifications only"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {displayedNotifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No notifications to display</p>
                  </div>
                ) : (
                  displayedNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-200 hover:bg-muted/50 ${
                        notification.read 
                          ? 'border-border/50 bg-background' 
                          : 'border-primary/30 bg-primary/5'
                      }`}
                    >
                      <div className={`p-2 rounded-full bg-muted ${notification.color}`}>
                        <notification.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className={`font-medium ${notification.read ? 'text-foreground' : 'text-primary'}`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {notification.time}
                            </span>
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-6 px-2 text-xs"
                              >
                                Mark read
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        {!notification.read && (
                          <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-accent" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Get notified via email</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="bug-updates">Bug Updates</Label>
                    <p className="text-xs text-muted-foreground">Status changes</p>
                  </div>
                  <Switch id="bug-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="rewards">Reward Notifications</Label>
                    <p className="text-xs text-muted-foreground">Payment updates</p>
                  </div>
                  <Switch id="rewards" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="comments">Comments</Label>
                    <p className="text-xs text-muted-foreground">New comments</p>
                  </div>
                  <Switch id="comments" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weekly-summary">Weekly Summary</Label>
                    <p className="text-xs text-muted-foreground">Progress reports</p>
                  </div>
                  <Switch id="weekly-summary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Notifications</span>
                <Badge variant="outline">{notifications.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Unread</span>
                <Badge variant="secondary">{unreadCount}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">This Week</span>
                <Badge variant="outline">8</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rewards Received</span>
                <Badge className="bg-yellow-500">3</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}