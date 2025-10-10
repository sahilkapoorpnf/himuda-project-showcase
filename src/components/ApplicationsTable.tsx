import { useState } from "react";
import { Search, Eye, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { utils, writeFile } from 'xlsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ApplicationDetailsDialog } from "@/components/ApplicationDetailsDialog";
import { toast } from "@/hooks/use-toast";

// Mock data for applications
const mockApplications = [
  {
    id: "APP001",
    propertyName: "Green Valley Residences",
    applicantName: "Rajesh Kumar",
    applicationDate: "2024-01-15",
    propertyType: "Flat",
    location: "Shimla",
    status: "Approved",
    allotmentNumber: "ALLOT-2024-001",
    price: "₹45,00,000",
  },
  {
    id: "APP002",
    propertyName: "Royal Townhouses",
    applicantName: "Priya Sharma",
    applicationDate: "2024-02-01",
    propertyType: "Townhouse",
    location: "Dharamshala",
    status: "Under Review",
    allotmentNumber: "-",
    price: "₹62,00,000",
  },
  {
    id: "APP003",
    propertyName: "Mountain View Plots",
    applicantName: "Amit Singh",
    applicationDate: "2024-02-10",
    propertyType: "Plot",
    location: "Manali",
    status: "Pending",
    allotmentNumber: "-",
    price: "₹35,00,000",
  },
  {
    id: "APP004",
    propertyName: "Commercial Hub Plaza",
    applicantName: "Neha Verma",
    applicationDate: "2024-01-28",
    propertyType: "Commercial",
    location: "Solan",
    status: "Approved",
    allotmentNumber: "ALLOT-2024-002",
    price: "₹1,20,00,000",
  },
  {
    id: "APP005",
    propertyName: "Premium Hill Plots",
    applicantName: "Vikram Thakur",
    applicationDate: "2024-02-15",
    propertyType: "Plot",
    location: "Kasauli",
    status: "Rejected",
    allotmentNumber: "-",
    price: "₹28,00,000",
  },
  {
    id: "APP006",
    propertyName: "Industrial Plots",
    applicantName: "Sanjay Mehta",
    applicationDate: "2024-02-20",
    propertyType: "Plot",
    location: "Baddi",
    status: "Under Review",
    allotmentNumber: "-",
    price: "₹85,00,000",
  },
  {
    id: "APP007",
    propertyName: "Lake View Apartments",
    applicantName: "Anita Kapoor",
    applicationDate: "2024-03-01",
    propertyType: "Flat",
    location: "Bilaspur",
    status: "Pending",
    allotmentNumber: "-",
    price: "₹38,00,000",
  },
  {
    id: "APP008",
    propertyName: "Valley Heights",
    applicantName: "Ravi Gupta",
    applicationDate: "2024-03-05",
    propertyType: "Flat",
    location: "Kullu",
    status: "Approved",
    allotmentNumber: "ALLOT-2024-003",
    price: "₹42,00,000",
  },
];

const ITEMS_PER_PAGE = 5;

export const ApplicationsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<typeof mockApplications[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter applications based on search
  const filteredApplications = mockApplications.filter((app) =>
    Object.values(app).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      Approved: "default",
      "Under Review": "secondary",
      Pending: "secondary",
      Rejected: "destructive",
    };
    return (
      <Badge variant={variants[status] || "default"}>
        {status}
      </Badge>
    );
  };

  const handleViewDetails = (application: typeof mockApplications[0]) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const exportToExcel = () => {
    try {
      // Prepare data for export
      const exportData = filteredApplications.map((app) => ({
        'Application ID': app.id,
        'Property Name': app.propertyName,
        'Applicant Name': app.applicantName,
        'Location': app.location,
        'Property Type': app.propertyType,
        'Application Date': app.applicationDate,
        'Status': app.status,
        'Allotment Number': app.allotmentNumber,
        'Price': app.price,
      }));

      // Create worksheet
      const worksheet = utils.json_to_sheet(exportData);
      
      // Set column widths
      const columnWidths = [
        { wch: 15 }, // Application ID
        { wch: 30 }, // Property Name
        { wch: 20 }, // Applicant Name
        { wch: 15 }, // Location
        { wch: 15 }, // Property Type
        { wch: 18 }, // Application Date
        { wch: 15 }, // Status
        { wch: 20 }, // Allotment Number
        { wch: 15 }, // Price
      ];
      worksheet['!cols'] = columnWidths;

      // Create workbook
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Applications');

      // Generate filename with current date
      const date = new Date().toISOString().split('T')[0];
      const filename = `HIMUDA_Applications_${date}.xlsx`;

      // Download file
      writeFile(workbook, filename);

      toast({
        title: "Export Successful",
        description: `Downloaded ${filteredApplications.length} records to ${filename}`,
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting the data",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Applications Management</h1>
          <p className="text-muted-foreground mt-1">View and manage all your property applications</p>
        </div>
      </div>

      {/* Search Bar and Actions */}
      <div className="flex items-center gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground">
            Showing {filteredApplications.length} of {mockApplications.length} applications
          </div>
          
          <Button 
            onClick={exportToExcel}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
          >
            <Download className="h-4 w-4 mr-2" />
            Export to Excel
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Property Name</TableHead>
              <TableHead>Applicant Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Application Date</TableHead>
              <TableHead>Allotment Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentApplications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              currentApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.id}</TableCell>
                  <TableCell>{application.propertyName}</TableCell>
                  <TableCell>{application.applicantName}</TableCell>
                  <TableCell>{application.location}</TableCell>
                  <TableCell>{application.applicationDate}</TableCell>
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
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

      {/* Details Dialog */}
      {selectedApplication && (
        <ApplicationDetailsDialog
          application={selectedApplication}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </div>
  );
};
