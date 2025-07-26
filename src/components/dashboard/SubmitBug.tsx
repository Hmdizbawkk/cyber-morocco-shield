import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, AlertTriangle, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SubmitBug() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "",
    category: "",
    url: "",
    steps: "",
    impact: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bug Report Submitted",
      description: "Your vulnerability report has been submitted for review.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Submit Bug Report</h1>
          <p className="text-muted-foreground">Report security vulnerabilities and earn rewards</p>
        </div>
        <Badge variant="outline" className="text-accent border-accent/30">
          <Shield className="h-4 w-4 mr-1" />
          Secure Submission
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Vulnerability Details
              </CardTitle>
              <CardDescription>
                Provide detailed information about the security vulnerability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Vulnerability Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., SQL Injection in Login Form"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">Affected URL *</Label>
                    <Input
                      id="url"
                      placeholder="https://example.com/vulnerable-page"
                      value={formData.url}
                      onChange={(e) => setFormData({...formData, url: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity Level *</Label>
                    <Select value={formData.severity} onValueChange={(value) => setFormData({...formData, severity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                            Critical
                          </div>
                        </SelectItem>
                        <SelectItem value="high">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                            High
                          </div>
                        </SelectItem>
                        <SelectItem value="medium">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                            Medium
                          </div>
                        </SelectItem>
                        <SelectItem value="low">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            Low
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Vulnerability Type *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xss">Cross-Site Scripting (XSS)</SelectItem>
                        <SelectItem value="sql-injection">SQL Injection</SelectItem>
                        <SelectItem value="csrf">Cross-Site Request Forgery (CSRF)</SelectItem>
                        <SelectItem value="authentication">Authentication Bypass</SelectItem>
                        <SelectItem value="authorization">Authorization Issues</SelectItem>
                        <SelectItem value="rce">Remote Code Execution</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Vulnerability Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the vulnerability in detail..."
                    className="min-h-32"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steps">Steps to Reproduce *</Label>
                  <Textarea
                    id="steps"
                    placeholder="1. Navigate to the login page&#10;2. Enter malicious payload in username field&#10;3. Submit the form&#10;4. Observe the vulnerability"
                    className="min-h-32"
                    value={formData.steps}
                    onChange={(e) => setFormData({...formData, steps: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="impact">Impact Assessment *</Label>
                  <Textarea
                    id="impact"
                    placeholder="Explain the potential impact of this vulnerability..."
                    className="min-h-24"
                    value={formData.impact}
                    onChange={(e) => setFormData({...formData, impact: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Proof of Concept (Optional)</Label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload screenshots, videos, or other evidence
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    <Zap className="h-4 w-4 mr-2" />
                    Submit Bug Report
                  </Button>
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                  <p>Provide clear, reproducible steps</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                  <p>Include proof of concept when possible</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                  <p>Be responsible - don't cause damage</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                  <p>Follow coordinated disclosure practices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Reward Tiers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Critical</span>
                <Badge variant="destructive">$500 - $2000</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">High</span>
                <Badge className="bg-orange-500">$200 - $500</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Medium</span>
                <Badge className="bg-yellow-500">$50 - $200</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Low</span>
                <Badge variant="secondary">$10 - $50</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}