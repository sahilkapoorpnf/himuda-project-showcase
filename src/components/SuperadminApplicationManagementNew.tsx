import { useState } from "react";
import { Search, Download, Filter } from "lucide-react";
import * as XLSX from 'xlsx';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock properties data
const mockProperties = [
  { id: 1, name: "Shimla Green Valley Apartments" },
  { id: 2, name: "Dharamshala Mountain View Homes" },
  { id: 3, name: "Manali Pine Valley Plots" },
  { id: 4, name: "Kullu Valley Residences" },
  { id: 5, name: "Solan Commercial Complex" },
];

// Mock applications data
const mockApplications = [
  {
    id: 1,
    applicationNumber: "APP-2024-001",
    name: "Rajesh Kumar",
    propertyName: "Shimla Green Valley Apartments",
    propertyType: "Flat",
    size: "1200 sq ft",
    amount: "₹45,00,000",
    paymentStatus: "Received",
    submittedDate: "2024-01-15",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "123 Mall Road, Shimla",
  },
  {
    id: 2,
    applicationNumber: "APP-2024-002",
    name: "Priya Sharma",
    propertyName: "Shimla Green Valley Apartments",
    propertyType: "Flat",
    size: "1000 sq ft",
    amount: "₹38,00,000",
    paymentStatus: "Received",
    submittedDate: "2024-01-20",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43211",
    address: "456 Ridge Road, Shimla",
  },
  {
    id: 3,
    applicationNumber: "APP-2024-003",
    name: "Amit Verma",
    propertyName: "Shimla Green Valley Apartments",
    propertyType: "Plot",
    size: "500 sq yards",
    amount: "₹25,00,000",
    paymentStatus: "Received",
    submittedDate: "2024-02-01",
    email: "amit.verma@email.com",
    phone: "+91 98765 43212",
    address: "789 Lakkar Bazaar, Shimla",
  },
  {
    id: 4,
    applicationNumber: "APP-2024-004",
    name: "Sunita Devi",
    propertyName: "Dharamshala Mountain View Homes",
    propertyType: "Flat",
    size: "1500 sq ft",
    amount: "₹55,00,000",
    paymentStatus: "Received",
    submittedDate: "2024-02-10",
    email: "sunita.devi@email.com",
    phone: "+91 98765 43213",
    address: "321 Dharamshala Road",
  },
];

const ITEMS_PER_PAGE = 10;

export default function SuperadminApplicationManagementNew() {
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterPropertyType, setFilterPropertyType] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const handleSubmit = () => {
    if (selectedProperty) {
      setShowResults(true);
      setCurrentPage(1);
    }
  };

  const filteredApplications = mockApplications.filter((app) => {
    const matchesProperty = selectedProperty ? app.propertyName === selectedProperty : true;
    const matchesSearch =
      app.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPropertyType = filterPropertyType ? app.propertyType === filterPropertyType : true;
    const matchesStatus = filterStatus ? app.paymentStatus === filterStatus : true;
    return matchesProperty && matchesSearch && matchesPropertyType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentApplications = filteredApplications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalUnits = filteredApplications.length;
  const totalApplications = filteredApplications.length;

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" } = {
      Approved: "default",
      "Under Review": "secondary",
      Rejected: "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredApplications.map(app => ({
        "Application Number": app.applicationNumber,
        "Name": app.name,
        "Property Name": app.propertyName,
        "Property Type": app.propertyType,
        "Size": app.size,
        "Amount": app.amount,
        "Payment Status": app.paymentStatus,
        "Submitted Date": app.submittedDate,
        "Email": app.email,
        "Phone": app.phone,
        "Address": app.address,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");
    XLSX.writeFile(workbook, `Applications_${selectedProperty}_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Application Management</h1>
      </div>

      {/* Property Selection Form */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Select Property</label>
            <Select value={selectedProperty} onValueChange={setSelectedProperty}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Search and select property..." />
              </SelectTrigger>
              <SelectContent>
                {mockProperties.map((property) => (
                  <SelectItem key={property.id} value={property.name}>
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

      {/* Results Section - Only shown after submit */}
      {showResults && (
        <>
          {/* Search and Filter Bar */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by application number, name, or property..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterPropertyType} onValueChange={setFilterPropertyType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Flat">Flat</SelectItem>
                <SelectItem value="Plot">Plot</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Received">Received</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleDownloadExcel} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Excel
            </Button>
          </div>

          {/* Applications Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application Number</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Property Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Submitted Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentApplications.length > 0 ? (
                  currentApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-medium">{app.applicationNumber}</TableCell>
                      <TableCell>{app.name}</TableCell>
                      <TableCell>{app.propertyName}</TableCell>
                      <TableCell>{app.propertyType}</TableCell>
                      <TableCell>{app.size}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{app.paymentStatus}</TableCell>
                      <TableCell>{app.submittedDate}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(app)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                      No applications found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}

      {/* Application Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="text-sm text-muted-foreground">Application Number</p>
                  <p className="text-lg font-semibold">{selectedApplication.applicationNumber}</p>
                </div>
                {getStatusBadge(selectedApplication.status)}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Applicant Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{selectedApplication.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{selectedApplication.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{selectedApplication.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Property Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Property Name</p>
                      <p className="font-medium">{selectedApplication.propertyName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Property Type</p>
                      <p className="font-medium">{selectedApplication.propertyType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Size</p>
                      <p className="font-medium">{selectedApplication.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-medium">{selectedApplication.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Submitted Date</p>
                      <p className="font-medium">{selectedApplication.submittedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
