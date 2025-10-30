import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, Filter, FileText, Calendar, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for ownership change requests
const mockRequests = [
  { id: 1, upn: "UPN001234567", applicantName: "Rajesh Kumar", propertyType: "Flat", location: "Shimla", requestDate: "2024-01-15", status: "pending", requestType: "Transfer" },
  { id: 2, upn: "UPN002345678", applicantName: "Priya Sharma", propertyType: "Plot", location: "Dharamshala", requestDate: "2024-01-18", status: "approved", requestType: "Inheritance" },
  { id: 3, upn: "UPN003456789", applicantName: "Amit Singh", propertyType: "Commercial", location: "Solan", requestDate: "2024-01-20", status: "rejected", requestType: "Transfer" },
  { id: 4, upn: "UPN004567890", applicantName: "Sneha Patel", propertyType: "Flat", location: "Kangra", requestDate: "2024-01-22", status: "under_review", requestType: "Gift" },
  { id: 5, upn: "UPN005678901", applicantName: "Vikram Thakur", propertyType: "Plot", location: "Mandi", requestDate: "2024-01-25", status: "pending", requestType: "Sale" },
  { id: 6, upn: "UPN006789012", applicantName: "Anjali Verma", propertyType: "Flat", location: "Shimla", requestDate: "2024-01-28", status: "approved", requestType: "Transfer" },
  { id: 7, upn: "UPN007890123", applicantName: "Rohit Mehta", propertyType: "Commercial", location: "Baddi", requestDate: "2024-02-01", status: "pending", requestType: "Inheritance" },
  { id: 8, upn: "UPN008901234", applicantName: "Kavita Nair", propertyType: "Plot", location: "Kasauli", requestDate: "2024-02-03", status: "under_review", requestType: "Transfer" },
  { id: 9, upn: "UPN009012345", applicantName: "Suresh Reddy", propertyType: "Flat", location: "Dharamshala", requestDate: "2024-02-05", status: "approved", requestType: "Gift" },
  { id: 10, upn: "UPN010123456", applicantName: "Pooja Gupta", propertyType: "Plot", location: "Shimla", requestDate: "2024-02-08", status: "rejected", requestType: "Sale" },
  { id: 11, upn: "UPN011234567", applicantName: "Manish Joshi", propertyType: "Commercial", location: "Solan", requestDate: "2024-02-10", status: "pending", requestType: "Transfer" },
  { id: 12, upn: "UPN012345678", applicantName: "Ritu Kapoor", propertyType: "Flat", location: "Kangra", requestDate: "2024-02-12", status: "under_review", requestType: "Inheritance" },
];

const ITEMS_PER_PAGE = 8;

export const OwnershipChangeRequestsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [requestTypeFilter, setRequestTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500/90 hover:bg-green-600 text-white">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500/90 hover:bg-red-600 text-white">Rejected</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500/90 hover:bg-yellow-600 text-white">Pending</Badge>;
      case "under_review":
        return <Badge className="bg-blue-500/90 hover:bg-blue-600 text-white">Under Review</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Filter and search logic
  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch = 
      request.upn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    const matchesRequestType = requestTypeFilter === "all" || request.requestType === requestTypeFilter;
    
    return matchesSearch && matchesStatus && matchesRequestType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRequests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRequests = filteredRequests.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div className="mb-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 flex items-center gap-3">
          <FileText className="w-10 h-10 text-primary" />
          Ownership Change Requests
        </h1>
        <p className="text-muted-foreground text-lg">View and manage all ownership change requests</p>
      </div>

      {/* Filters */}
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by UPN, Name, or Location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={requestTypeFilter} onValueChange={setRequestTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Transfer">Transfer</SelectItem>
                <SelectItem value="Inheritance">Inheritance</SelectItem>
                <SelectItem value="Gift">Gift</SelectItem>
                <SelectItem value="Sale">Sale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-elegant p-6 gradient-hero text-white">
          <div className="flex items-center justify-between mb-2">
            <FileText className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1">{mockRequests.length}</div>
          <div className="text-white/80 text-sm">Total Requests</div>
        </div>

        <div className="card-elegant p-6 bg-yellow-500 text-white">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {mockRequests.filter(r => r.status === "pending").length}
          </div>
          <div className="text-white/80 text-sm">Pending</div>
        </div>

        <div className="card-elegant p-6 bg-green-500 text-white">
          <div className="flex items-center justify-between mb-2">
            <User className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {mockRequests.filter(r => r.status === "approved").length}
          </div>
          <div className="text-white/80 text-sm">Approved</div>
        </div>

        <div className="card-elegant p-6 bg-blue-500 text-white">
          <div className="flex items-center justify-between mb-2">
            <Filter className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {mockRequests.filter(r => r.status === "under_review").length}
          </div>
          <div className="text-white/80 text-sm">Under Review</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/5">
              <TableHead className="font-bold">UPN Number</TableHead>
              <TableHead className="font-bold">Applicant Name</TableHead>
              <TableHead className="font-bold">Property Type</TableHead>
              <TableHead className="font-bold">Location</TableHead>
              <TableHead className="font-bold">Request Type</TableHead>
              <TableHead className="font-bold">Request Date</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRequests.length > 0 ? (
              currentRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{request.upn}</TableCell>
                  <TableCell>{request.applicantName}</TableCell>
                  <TableCell>{request.propertyType}</TableCell>
                  <TableCell>{request.location}</TableCell>
                  <TableCell>{request.requestType}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No requests found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredRequests.length)} of {filteredRequests.length} requests
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="min-w-[40px]"
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
