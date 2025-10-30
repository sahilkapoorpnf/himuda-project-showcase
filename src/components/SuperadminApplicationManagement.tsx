import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Eye } from "lucide-react";

const mockProperties = [
  { id: "1", name: "Shimla Green Valley Apartments" },
  { id: "2", name: "Dharamshala Mountain View Residency" },
  { id: "3", name: "Kullu Valley Garden Flats" },
  { id: "4", name: "Manali Pine Heights" },
  { id: "5", name: "Solan Commercial Hub" },
];

const mockApplications = [
  {
    id: "APP001",
    applicantName: "Rajesh Kumar",
    propertyName: "Shimla Green Valley Apartments",
    propertySize: "1200 sq ft",
    appliedDate: "2024-01-15",
    status: "pending",
    email: "rajesh@example.com",
    phone: "+91 98765 43210",
    upn: "UPN001234",
  },
  {
    id: "APP002",
    applicantName: "Priya Sharma",
    propertyName: "Shimla Green Valley Apartments",
    propertySize: "1500 sq ft",
    appliedDate: "2024-01-20",
    status: "approved",
    email: "priya@example.com",
    phone: "+91 98765 43211",
    upn: "UPN001235",
  },
  {
    id: "APP003",
    applicantName: "Amit Singh",
    propertyName: "Dharamshala Mountain View Residency",
    propertySize: "1800 sq ft",
    appliedDate: "2024-02-01",
    status: "rejected",
    email: "amit@example.com",
    phone: "+91 98765 43212",
    upn: "UPN001236",
  },
];

const ITEMS_PER_PAGE = 10;

export const SuperadminApplicationManagement = () => {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = () => {
    if (selectedProperty) {
      setShowResults(true);
      setCurrentPage(1);
    }
  };

  const filteredApplications = mockApplications.filter((app) => {
    const matchesProperty = selectedProperty
      ? app.propertyName === mockProperties.find((p) => p.id === selectedProperty)?.name
      : true;
    const matchesSearch =
      app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProperty && matchesSearch;
  });

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentApplications = filteredApplications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      pending: "secondary",
      approved: "default",
      rejected: "destructive",
    };
    return (
      <Badge variant={variants[status] || "secondary"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Application Management (Superadmin)
        </h1>
        <p className="text-muted-foreground text-lg">
          Select a property to view all applied applications
        </p>
      </div>

      <div className="bg-card rounded-lg border p-6 mb-6">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Select Property</label>
            <Select value={selectedProperty} onValueChange={setSelectedProperty}>
              <SelectTrigger>
                <SelectValue placeholder="Search and select property..." />
              </SelectTrigger>
              <SelectContent>
                {mockProperties.map((property) => (
                  <SelectItem key={property.id} value={property.id}>
                    {property.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSubmit} disabled={!selectedProperty}>
            Submit
          </Button>
        </div>
      </div>

      {showResults && (
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-card rounded-lg border p-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by applicant name or application number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application No.</TableHead>
                  <TableHead>Applicant Name</TableHead>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Property Size</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentApplications.length > 0 ? (
                  currentApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.id}</TableCell>
                      <TableCell>{application.applicantName}</TableCell>
                      <TableCell>{application.propertyName}</TableCell>
                      <TableCell>{application.propertySize}</TableCell>
                      <TableCell>{application.appliedDate}</TableCell>
                      <TableCell>{getStatusBadge(application.status)}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewDetails(application)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No applications found for the selected property
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {totalPages > 1 && (
              <div className="border-t p-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        className={
                          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>Complete information about the application</DialogDescription>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Application Number
                  </label>
                  <p className="text-sm font-semibold">{selectedApplication.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status</label>
                  <div className="mt-1">{getStatusBadge(selectedApplication.status)}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Applicant Name
                  </label>
                  <p className="text-sm font-semibold">{selectedApplication.applicantName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">UPN</label>
                  <p className="text-sm font-semibold">{selectedApplication.upn}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-sm font-semibold">{selectedApplication.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone</label>
                  <p className="text-sm font-semibold">{selectedApplication.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Property Name
                  </label>
                  <p className="text-sm font-semibold">{selectedApplication.propertyName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Property Size
                  </label>
                  <p className="text-sm font-semibold">{selectedApplication.propertySize}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Applied Date
                  </label>
                  <p className="text-sm font-semibold">{selectedApplication.appliedDate}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
