import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Eye, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";

// Mock data for bug reports
const mockBugs = [
  {
    id: "BH-2024-001",
    title: "SQL Injection in Login Form",
    description: "Critical SQL injection vulnerability found in the main login form allowing unauthorized database access.",
    severity: "Critical",
    status: "Resolved",
    reward: "$500",
    submittedDate: "2024-01-15",
    resolvedDate: "2024-01-18",
    program: "E-Commerce Platform",
    hunter: "john_hunter",
    comments: 5,
    views: 23
  },
  {
    id: "BH-2024-002",
    title: "XSS Vulnerability in Comments Section",
    description: "Reflected XSS vulnerability in user comments allowing script injection.",
    severity: "High",
    status: "In Progress",
    reward: "Pending",
    submittedDate: "2024-01-20",
    resolvedDate: null,
    program: "Social Media App",
    hunter: "john_hunter",
    comments: 3,
    views: 15
  },
  {
    id: "BH-2024-003",
    title: "CSRF Token Bypass",
    description: "Cross-site request forgery protection can be bypassed in sensitive operations.",
    severity: "Medium",
    status: "Under Review",
    reward: "Pending",
    submittedDate: "2024-01-22",
    resolvedDate: null,
    program: "Banking Portal",
    hunter: "john_hunter",
    comments: 2,
    views: 8
  },
  {
    id: "BH-2024-004",
    title: "Insecure Direct Object Reference",
    description: "User data can be accessed by manipulating object references in API endpoints.",
    severity: "High",
    status: "Rejected",
    reward: "$0",
    submittedDate: "2024-01-10",
    resolvedDate: "2024-01-12",
    program: "Healthcare System",
    hunter: "john_hunter",
    comments: 7,
    views: 31
  },
  {
    id: "BH-2024-005",
    title: "Information Disclosure",
    description: "Sensitive configuration files exposed through improper access controls.",
    severity: "Low",
    status: "Open",
    reward: "Pending",
    submittedDate: "2024-01-25",
    resolvedDate: null,
    program: "Corporate Website",
    hunter: "john_hunter",
    comments: 1,
    views: 5
  }
];

export function BugReports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'Critical': return 'bg-red-500 hover:bg-red-600';
      case 'High': return 'bg-orange-500 hover:bg-orange-600';
      case 'Medium': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Low': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'In Progress': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Under Review': return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'Open': return <Clock className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Resolved': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'In Progress': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'Under Review': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Rejected': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'Open': return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  // Filter and sort bugs
  const filteredBugs = mockBugs
    .filter(bug => {
      const matchesSearch = bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bug.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bug.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || bug.status === statusFilter;
      const matchesSeverity = severityFilter === "all" || bug.severity === severityFilter;
      return matchesSearch && matchesStatus && matchesSeverity;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'newest': return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
        case 'oldest': return new Date(a.submittedDate).getTime() - new Date(b.submittedDate).getTime();
        case 'severity': 
          const severityOrder = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
          return severityOrder[b.severity as keyof typeof severityOrder] - severityOrder[a.severity as keyof typeof severityOrder];
        default: return 0;
      }
    });

  const statusCounts = {
    all: mockBugs.length,
    open: mockBugs.filter(b => b.status === 'Open').length,
    'in progress': mockBugs.filter(b => b.status === 'In Progress').length,
    'under review': mockBugs.filter(b => b.status === 'Under Review').length,
    resolved: mockBugs.filter(b => b.status === 'Resolved').length,
    rejected: mockBugs.filter(b => b.status === 'Rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bug Reports</h1>
          <p className="text-muted-foreground">
            Manage and track your submitted vulnerability reports
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search bugs by title, description, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-bughunter"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="severity">By Severity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Status Tabs */}
      <Tabs value={statusFilter} onValueChange={setStatusFilter} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-muted/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            All ({statusCounts.all})
          </TabsTrigger>
          <TabsTrigger value="Open" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            Open ({statusCounts.open})
          </TabsTrigger>
          <TabsTrigger value="In Progress" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            In Progress ({statusCounts['in progress']})
          </TabsTrigger>
          <TabsTrigger value="Under Review" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            Review ({statusCounts['under review']})
          </TabsTrigger>
          <TabsTrigger value="Resolved" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            Resolved ({statusCounts.resolved})
          </TabsTrigger>
          <TabsTrigger value="Rejected" className="data-[state=active]:bg-bughunter data-[state=active]:text-bughunter-foreground">
            Rejected ({statusCounts.rejected})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={statusFilter} className="mt-6">
          {/* Results Summary */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredBugs.length} of {mockBugs.length} bug reports
            </p>
          </div>

          {/* Bug Reports Table */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-muted-foreground">Bug Report</TableHead>
                  <TableHead className="text-muted-foreground">Severity</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Program</TableHead>
                  <TableHead className="text-muted-foreground">Submitted</TableHead>
                  <TableHead className="text-muted-foreground">Reward</TableHead>
                  <TableHead className="text-muted-foreground">Activity</TableHead>
                  <TableHead className="text-muted-foreground w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBugs.map((bug) => (
                  <TableRow key={bug.id} className="border-border/30 hover:bg-muted/20">
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">{bug.title}</div>
                        <div className="text-sm text-muted-foreground">{bug.id}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2 max-w-md">
                          {bug.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getSeverityColor(bug.severity)} text-white`}>
                        {bug.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center gap-2 px-2 py-1 rounded-full border ${getStatusColor(bug.status)}`}>
                        {getStatusIcon(bug.status)}
                        <span className="text-xs font-medium">{bug.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {bug.program}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(bug.submittedDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${bug.status === 'Resolved' ? 'text-green-500' : 'text-muted-foreground'}`}>
                        {bug.reward}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {bug.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {bug.views}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {filteredBugs.length === 0 && (
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium text-foreground">No bug reports found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}