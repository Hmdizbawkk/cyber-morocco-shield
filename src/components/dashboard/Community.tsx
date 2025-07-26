import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, ThumbsUp, Share2, Search, Filter, Plus, BookOpen, HelpCircle, Zap } from "lucide-react";

export function Community() {
  const [newPost, setNewPost] = useState("");

  const discussions = [
    {
      id: 1,
      title: "Best practices for responsible disclosure",
      author: "security_expert",
      avatar: "/placeholder.svg",
      time: "2 hours ago",
      category: "Guidelines",
      replies: 23,
      likes: 45,
      content: "What are your thoughts on the proper timeline for vulnerability disclosure? I've been following the 90-day standard...",
      tags: ["disclosure", "ethics", "timeline"]
    },
    {
      id: 2,
      title: "New SQLi technique discovered",
      author: "db_hunter",
      avatar: "/placeholder.svg",
      time: "4 hours ago",
      category: "Research",
      replies: 18,
      likes: 67,
      content: "Found an interesting blind SQL injection bypass that works on modern frameworks. Here's the payload...",
      tags: ["sqli", "research", "bypass"]
    },
    {
      id: 3,
      title: "How to improve bug report quality?",
      author: "newbie_hunter",
      avatar: "/placeholder.svg",
      time: "6 hours ago",
      category: "Help",
      replies: 31,
      likes: 28,
      content: "I've submitted 5 bug reports but they keep getting rejected. What am I doing wrong?",
      tags: ["help", "reporting", "tips"]
    },
    {
      id: 4,
      title: "OWASP Top 10 2024 Discussion",
      author: "cyber_ninja",
      avatar: "/placeholder.svg",
      time: "1 day ago",
      category: "News",
      replies: 42,
      likes: 89,
      content: "The new OWASP Top 10 has some interesting changes. Let's discuss the implications...",
      tags: ["owasp", "security", "trends"]
    }
  ];

  const resources = [
    {
      title: "Bug Bounty Methodology",
      description: "Comprehensive guide to systematic vulnerability discovery",
      author: "security_sensei",
      downloads: 1247,
      type: "Guide",
      tags: ["methodology", "beginners"]
    },
    {
      title: "XSS Payload Collection",
      description: "Curated list of XSS payloads for different scenarios",
      author: "xss_master",
      downloads: 892,
      type: "Tool",
      tags: ["xss", "payloads"]
    },
    {
      title: "Recon Automation Scripts",
      description: "Python scripts for automated reconnaissance",
      author: "recon_bot",
      downloads: 634,
      type: "Script",
      tags: ["automation", "recon"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Guidelines":
        return "bg-blue-500";
      case "Research":
        return "bg-purple-500";
      case "Help":
        return "bg-green-500";
      case "News":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Connect with fellow security researchers and hunters</p>
        </div>
        <Badge variant="outline" className="text-accent border-accent/30">
          <Users className="h-4 w-4 mr-1" />
          1,247 active members
        </Badge>
      </div>

      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    Start a Discussion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Discussion title..." />
                    <Textarea
                      placeholder="What's on your mind? Share insights, ask questions, or start a debate..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-24"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                          Guidelines
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                          Research
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                          Help
                        </Badge>
                      </div>
                      <Button disabled={!newPost.trim()}>
                        Post Discussion
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search discussions..." className="pl-9" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={discussion.avatar} />
                          <AvatarFallback>{discussion.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {discussion.title}
                            </h3>
                            <Badge variant="outline" className={`text-xs ${getCategoryColor(discussion.category)} text-white`}>
                              {discussion.category}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {discussion.content}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>by {discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.time}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>{discussion.replies} replies</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{discussion.likes} likes</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-3">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-accent" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["zero-day", "ai-security", "web3-bugs", "mobile-testing", "api-security"].map((topic) => (
                    <div key={topic} className="flex justify-between items-center">
                      <span className="text-sm">#{topic}</span>
                      <Badge variant="outline" className="text-xs">trending</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Members</span>
                    <Badge variant="outline">1,247</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Discussions</span>
                    <Badge variant="outline">3,456</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Resources Shared</span>
                    <Badge variant="outline">892</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Expert Contributors</span>
                    <Badge className="bg-yellow-500">156</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {resource.author}</span>
                      <span className="text-muted-foreground">{resource.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" size="sm">
                      Download Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Events Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working on bringing you webinars, workshops, and community meetups.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}