import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, CheckCircle, XCircle, Calendar, FileText, User, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Mock data for ownership change requests
const mockRequests = [
  { id: 1, upn: "UPN001234567", applicantName: "Rajesh Kumar", currentOwner: "Mohan Kumar", propertyType: "Flat", location: "Shimla", requestDate: "2024-01-15", status: "pending", requestType: "Transfer", phone: "+91 98765 43210", email: "rajesh.kumar@email.com" },
  { id: 2, upn: "UPN002345678", applicantName: "Priya Sharma", currentOwner: "Rakesh Sharma", propertyType: "Plot", location: "Dharamshala", requestDate: "2024-01-18", status: "pending", requestType: "Inheritance", phone: "+91 98765 43211", email: "priya.sharma@email.com" },
  { id: 3, upn: "UPN003456789", applicantName: "Amit Singh", currentOwner: "Suresh Singh", propertyType: "Commercial", location: "Solan", requestDate: "2024-01-20", status: "approved", requestType: "Transfer", phone: "+91 98765 43212", email: "amit.singh@email.com" },
  { id: 4, upn: "UPN004567890", applicantName: "Sneha Patel", currentOwner: "Vijay Patel", propertyType: "Flat", location: "Kangra", requestDate: "2024-01-22", status: "under_review", requestType: "Gift", phone: "+91 98765 43213", email: "sneha.patel@email.com" },
  { id: 5, upn: "UPN005678901", applicantName: "Vikram Thakur", currentOwner: "Ashok Thakur", propertyType: "Plot", location: "Mandi", requestDate: "2024-01-25", status: "pending", requestType: "Sale", phone: "+91 98765 43214", email: "vikram.thakur@email.com" },
  { id: 6, upn: "UPN006789012", applicantName: "Anjali Verma", currentOwner: "Ramesh Verma", propertyType: "Flat", location: "Shimla", requestDate: "2024-01-28", status: "approved", requestType: "Transfer", phone: "+91 98765 43215", email: "anjali.verma@email.com" },
  { id: 7, upn: "UPN007890123", applicantName: "Rohit Mehta", currentOwner: "Dinesh Mehta", propertyType: "Commercial", location: "Baddi", requestDate: "2024-02-01", status: "pending", requestType: "Inheritance", phone: "+91 98765 43216", email: "rohit.mehta@email.com" },
  { id: 8, upn: "UPN008901234", applicantName: "Kavita Nair", currentOwner: "Sunil Nair", propertyType: "Plot", location: "Kasauli", requestDate: "2024-02-03", status: "rejected", requestType: "Transfer", phone: "+91 98765 43217", email: "kavita.nair@email.com" },
  { id: 9, upn: "UPN009012345", applicantName: "Suresh Reddy", currentOwner: "Krishna Reddy", propertyType: "Flat", location: "Dharamshala", requestDate: "2024-02-05", status: "pending", requestType: "Gift", phone: "+91 98765 43218", email: "suresh.reddy@email.com" },
  { id: 10, upn: "UPN010123456", applicantName: "Pooja Gupta", currentOwner: "Anil Gupta", propertyType: "Plot", location: "Shimla", requestDate: "2024-02-08", status: "under_review", requestType: "Sale", phone: "+91 98765 43219", email: "pooja.gupta@email.com" },
];

const ITEMS_PER_PAGE = 8;

interface VerificationFormData {
  appointmentDate: string;
  appointmentTime: string;
  venue: string;
  notes: string;
}

export const SuperadminOwnershipRequestsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [requestTypeFilter, setRequestTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState<typeof mockRequests[0] | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isApprovalDialogOpen, setIsApprovalDialogOpen] = useState(false);
  const [verificationForm, setVerificationForm] = useState<VerificationFormData>({
    appointmentDate: "",
    appointmentTime: "",
    venue: "HIMUDA Head Office, Shimla",
    notes: ""
  });
  const { toast } = useToast();

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
      request.currentOwner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    const matchesRequestType = requestTypeFilter === "all" || request.requestType === requestTypeFilter;
    
    return matchesSearch && matchesStatus && matchesRequestType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRequests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRequests = filteredRequests.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleViewRequest = (request: typeof mockRequests[0]) => {
    setSelectedRequest(request);
    setIsViewDialogOpen(true);
  };

  const handleApproveRequest = (request: typeof mockRequests[0]) => {
    setSelectedRequest(request);
    setIsApprovalDialogOpen(true);
  };

  const handleRejectRequest = (request: typeof mockRequests[0]) => {
    toast({
      title: "Request Rejected",
      description: `Ownership change request for ${request.upn} has been rejected.`,
      variant: "destructive",
    });
  };

  const handleSubmitVerification = () => {
    if (!verificationForm.appointmentDate || !verificationForm.appointmentTime) {
      toast({
        title: "Missing Information",
        description: "Please provide appointment date and time.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Verification Scheduled",
      description: `Physical verification scheduled for ${selectedRequest?.applicantName} on ${verificationForm.appointmentDate} at ${verificationForm.appointmentTime}`,
    });
    
    setIsApprovalDialogOpen(false);
    setVerificationForm({
      appointmentDate: "",
      appointmentTime: "",
      venue: "HIMUDA Head Office, Shimla",
      notes: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 flex items-center gap-3">
          <FileText className="w-10 h-10 text-primary" />
          Manage Ownership Change Requests
        </h1>
        <p className="text-muted-foreground text-lg">Review and approve ownership change requests from users</p>
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
          <div className="text-3xl font-bold mb-1">{mockRequests.length}</div>
          <div className="text-white/80 text-sm">Total Requests</div>
        </div>

        <div className="card-elegant p-6 bg-yellow-500 text-white">
          <div className="text-3xl font-bold mb-1">
            {mockRequests.filter(r => r.status === "pending").length}
          </div>
          <div className="text-white/80 text-sm">Pending Review</div>
        </div>

        <div className="card-elegant p-6 bg-green-500 text-white">
          <div className="text-3xl font-bold mb-1">
            {mockRequests.filter(r => r.status === "approved").length}
          </div>
          <div className="text-white/80 text-sm">Approved</div>
        </div>

        <div className="card-elegant p-6 bg-blue-500 text-white">
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
              <TableHead className="font-bold">Applicant</TableHead>
              <TableHead className="font-bold">Current Owner</TableHead>
              <TableHead className="font-bold">Property Type</TableHead>
              <TableHead className="font-bold">Location</TableHead>
              <TableHead className="font-bold">Request Type</TableHead>
              <TableHead className="font-bold">Date</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRequests.length > 0 ? (
              currentRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{request.upn}</TableCell>
                  <TableCell>{request.applicantName}</TableCell>
                  <TableCell>{request.currentOwner}</TableCell>
                  <TableCell>{request.propertyType}</TableCell>
                  <TableCell>{request.location}</TableCell>
                  <TableCell>{request.requestType}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2"
                        onClick={() => handleViewRequest(request)}
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      {request.status === "pending" && (
                        <>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="gap-2 bg-green-600 hover:bg-green-700"
                            onClick={() => handleApproveRequest(request)}
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            className="gap-2"
                            onClick={() => handleRejectRequest(request)}
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
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

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ownership Change Request Details</DialogTitle>
            <DialogDescription>Complete information about the ownership change request</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="text-muted-foreground">UPN Number</Label>
                <p className="font-semibold">{selectedRequest.upn}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Request Type</Label>
                <p className="font-semibold">{selectedRequest.requestType}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Applicant Name</Label>
                <p className="font-semibold">{selectedRequest.applicantName}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Current Owner</Label>
                <p className="font-semibold">{selectedRequest.currentOwner}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Property Type</Label>
                <p className="font-semibold">{selectedRequest.propertyType}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Location</Label>
                <p className="font-semibold">{selectedRequest.location}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Phone</Label>
                <p className="font-semibold">{selectedRequest.phone}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Email</Label>
                <p className="font-semibold">{selectedRequest.email}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Request Date</Label>
                <p className="font-semibold">{selectedRequest.requestDate}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Status</Label>
                <div>{getStatusBadge(selectedRequest.status)}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Approval & Physical Verification Dialog */}
      <Dialog open={isApprovalDialogOpen} onOpenChange={setIsApprovalDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Schedule Physical Verification
            </DialogTitle>
            <DialogDescription>
              Approve the request and schedule a physical verification appointment at HIMUDA office
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-6 py-4">
              <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                <p><span className="font-semibold">Applicant:</span> {selectedRequest.applicantName}</p>
                <p><span className="font-semibold">UPN:</span> {selectedRequest.upn}</p>
                <p><span className="font-semibold">Request Type:</span> {selectedRequest.requestType}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appointmentDate">Appointment Date *</Label>
                  <Input
                    id="appointmentDate"
                    type="date"
                    value={verificationForm.appointmentDate}
                    onChange={(e) => setVerificationForm({...verificationForm, appointmentDate: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appointmentTime">Appointment Time *</Label>
                  <Input
                    id="appointmentTime"
                    type="time"
                    value={verificationForm.appointmentTime}
                    onChange={(e) => setVerificationForm({...verificationForm, appointmentTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Verification Venue *
                </Label>
                <Input
                  id="venue"
                  value={verificationForm.venue}
                  onChange={(e) => setVerificationForm({...verificationForm, venue: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific instructions or documents required..."
                  value={verificationForm.notes}
                  onChange={(e) => setVerificationForm({...verificationForm, notes: e.target.value})}
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApprovalDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitVerification} className="gap-2">
              <CheckCircle className="w-4 h-4" />
              Approve & Schedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
