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
      case 'Open': return <Clock className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Resolved': return 'low';
      case 'In Progress': return 'medium';
      case 'Under Review': return 'medium';
      case 'Rejected': return 'critical';
      case 'Open': return 'low';
      default: return 'medium';
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
    <div className="space-y-6 dashboard-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-4 dashboard-slide-up">
        <div>
          <h1 className="text-3xl font-bold text-white">Bug Reports</h1>
          <p className="text-gray-400">
            Manage and track your submitted vulnerability reports
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="dashboard-search relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search bugs by title, description, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 dashboard-card border-gray-700 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all" className="text-white focus:bg-gray-700">All Status</SelectItem>
                <SelectItem value="Open" className="text-white focus:bg-gray-700">Open</SelectItem>
                <SelectItem value="In Progress" className="text-white focus:bg-gray-700">In Progress</SelectItem>
                <SelectItem value="Under Review" className="text-white focus:bg-gray-700">Under Review</SelectItem>
                <SelectItem value="Resolved" className="text-white focus:bg-gray-700">Resolved</SelectItem>
                <SelectItem value="Rejected" className="text-white focus:bg-gray-700">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-40 dashboard-card border-gray-700 text-white">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all" className="text-white focus:bg-gray-700">All Severity</SelectItem>
                <SelectItem value="Critical" className="text-white focus:bg-gray-700">Critical</SelectItem>
                <SelectItem value="High" className="text-white focus:bg-gray-700">High</SelectItem>
                <SelectItem value="Medium" className="text-white focus:bg-gray-700">Medium</SelectItem>
                <SelectItem value="Low" className="text-white focus:bg-gray-700">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 dashboard-card border-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="newest" className="text-white focus:bg-gray-700">Newest First</SelectItem>
                <SelectItem value="oldest" className="text-white focus:bg-gray-700">Oldest First</SelectItem>
                <SelectItem value="severity" className="text-white focus:bg-gray-700">By Severity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="dashboard-card p-1 rounded-lg">
        <Tabs value={statusFilter} onValueChange={setStatusFilter} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-transparent">
            <TabsTrigger value="all" className="text-gray-400 data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
              All ({statusCounts.all})
            </TabsTrigger>
            <TabsTrigger value="Open" className="text-gray-400 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Open ({statusCounts.open})
            </TabsTrigger>
            <TabsTrigger value="In Progress" className="text-gray-400 data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
              In Progress ({statusCounts['in progress']})
            </TabsTrigger>
            <TabsTrigger value="Under Review" className="text-gray-400 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
              Review ({statusCounts['under review']})
            </TabsTrigger>
            <TabsTrigger value="Resolved" className="text-gray-400 data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
              Resolved ({statusCounts.resolved})
            </TabsTrigger>
            <TabsTrigger value="Rejected" className="text-gray-400 data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
              Rejected ({statusCounts.rejected})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={statusFilter} className="mt-6">
            {/* Results Summary */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">
                Showing {filteredBugs.length} of {mockBugs.length} bug reports
              </p>
            </div>

            {/* Bug Reports Table */}
            <div className="dashboard-table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bug Report</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Reward</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead className="w-20">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBugs.map((bug) => (
                    <TableRow key={bug.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-white">{bug.title}</div>
                          <div className="text-sm text-blue-400">{bug.id}</div>
                          <div className="text-xs text-gray-400 line-clamp-2 max-w-md">
                            {bug.description}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`dashboard-badge ${getSeverityBadge(bug.severity)}`}>
                          {bug.severity}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(bug.status)}
                          <span className={`dashboard-badge ${getStatusBadge(bug.status)} text-xs font-medium`}>{bug.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-400">
                        {bug.program}
                      </TableCell>
                      <TableCell className="text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(bug.submittedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${bug.status === 'Resolved' ? 'text-green-400' : 'text-gray-400'}`}>
                          {bug.reward}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
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
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredBugs.length === 0 && (
              <div className="dashboard-card p-12 text-center">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">No bug reports found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}