import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Eye, Download, Filter } from "lucide-react";
import * as XLSX from 'xlsx';

interface PaymentRecord {
  date: string;
  amount: string;
  status: "Paid" | "Upcoming" | "Overdue";
  type: string;
}

interface Allottee {
  upnNumber: string;
  name: string;
  propertyName: string;
  propertyType: string;
  size: string;
  amount: string;
  status: string;
  submittedDate: string;
  email: string;
  phone: string;
  address: string;
  allotmentDate: string;
  payments: PaymentRecord[];
  nextPaymentDate: string;
  lastPaymentDate: string;
}

const mockAllottees: Allottee[] = [
  {
    upnNumber: "UPN2024001",
    name: "Rajesh Kumar",
    propertyName: "Shimla Green Valley - A101",
    propertyType: "Flat",
    size: "1200 sq ft",
    amount: "₹45,00,000",
    status: "Active",
    submittedDate: "2024-01-15",
    allotmentDate: "2024-02-01",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "123, Green Valley, Shimla",
    nextPaymentDate: "2024-04-01",
    lastPaymentDate: "2024-03-01",
    payments: [
      { date: "2024-02-01", amount: "₹5,00,000", status: "Paid", type: "Booking Amount" },
      { date: "2024-03-01", amount: "₹10,00,000", status: "Paid", type: "First Installment" },
      { date: "2024-04-01", amount: "₹10,00,000", status: "Upcoming", type: "Second Installment" },
      { date: "2024-05-01", amount: "₹10,00,000", status: "Upcoming", type: "Third Installment" },
      { date: "2024-06-01", amount: "₹10,00,000", status: "Upcoming", type: "Final Payment" },
    ]
  },
  {
    upnNumber: "UPN2024002",
    name: "Priya Sharma",
    propertyName: "Dharamshala Heights - B205",
    propertyType: "Flat",
    size: "1000 sq ft",
    amount: "₹38,00,000",
    status: "Active",
    submittedDate: "2024-01-20",
    allotmentDate: "2024-02-10",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43211",
    address: "456, Valley View, Dharamshala",
    nextPaymentDate: "2024-04-10",
    lastPaymentDate: "2024-03-10",
    payments: [
      { date: "2024-02-10", amount: "₹4,00,000", status: "Paid", type: "Booking Amount" },
      { date: "2024-03-10", amount: "₹8,00,000", status: "Paid", type: "First Installment" },
      { date: "2024-04-10", amount: "₹8,00,000", status: "Upcoming", type: "Second Installment" },
      { date: "2024-05-10", amount: "₹9,00,000", status: "Upcoming", type: "Third Installment" },
      { date: "2024-06-10", amount: "₹9,00,000", status: "Upcoming", type: "Final Payment" },
    ]
  },
  {
    upnNumber: "UPN2024003",
    name: "Amit Verma",
    propertyName: "Manali Pine Plots - P12",
    propertyType: "Plot",
    size: "500 sq yards",
    amount: "₹25,00,000",
    status: "Defaulter",
    submittedDate: "2024-02-01",
    allotmentDate: "2024-02-15",
    email: "amit.verma@email.com",
    phone: "+91 98765 43212",
    address: "789, Pine Colony, Manali",
    nextPaymentDate: "2024-03-15",
    lastPaymentDate: "2024-02-15",
    payments: [
      { date: "2024-02-15", amount: "₹3,00,000", status: "Paid", type: "Booking Amount" },
      { date: "2024-03-15", amount: "₹6,00,000", status: "Overdue", type: "First Installment" },
      { date: "2024-04-15", amount: "₹8,00,000", status: "Upcoming", type: "Second Installment" },
      { date: "2024-05-15", amount: "₹8,00,000", status: "Upcoming", type: "Final Payment" },
    ]
  },
];

const properties = [
  "Shimla Green Valley",
  "Dharamshala Heights", 
  "Manali Pine Plots",
  "Kullu Valley Flats",
  "Solan Hills Project"
];

const ITEMS_PER_PAGE = 10;
const PAYMENT_ITEMS_PER_PAGE = 5;

export function AllotteeManagementTable() {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [selectedAllottee, setSelectedAllottee] = useState<Allottee | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterPropertyType, setFilterPropertyType] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [paymentSearchQuery, setPaymentSearchQuery] = useState("");
  const [paymentCurrentPage, setPaymentCurrentPage] = useState(1);

const filteredAllottees = selectedProperty
  ? mockAllottees.filter((a) => {
      const matchesProperty = a.propertyName.toLowerCase().includes(selectedProperty.toLowerCase());
      const matchesSearch = 
        a.upnNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPropertyType = filterPropertyType ? a.propertyType === filterPropertyType : true;
      
      let matchesStatus = true;
      if (filterStatus) {
        const hasOverdue = a.payments.some((p) => p.status === "Overdue");
        const allPaid = a.payments.every((p) => p.status === "Paid");
        const somePaid = a.payments.some((p) => p.status === "Paid");
        
        if (filterStatus === "Overdue") matchesStatus = hasOverdue;
        else if (filterStatus === "Received (Full)") matchesStatus = allPaid;
        else if (filterStatus === "Partially Received") matchesStatus = somePaid && !allPaid && !hasOverdue;
        else if (filterStatus === "Pending") matchesStatus = !somePaid && !hasOverdue;
      }
      
      return matchesProperty && matchesSearch && matchesPropertyType && matchesStatus;
    })
  : [];

const totalPages = Math.ceil(filteredAllottees.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const currentAllottees = filteredAllottees.slice(startIndex, startIndex + ITEMS_PER_PAGE);

const handleSubmit = () => {
  if (selectedProperty) {
    setShowTable(true);
    setCurrentPage(1);
  }
};

const handleViewPayments = (allottee: Allottee) => {
  setSelectedAllottee(allottee);
  setShowPaymentDialog(true);
  setPaymentSearchQuery("");
  setPaymentCurrentPage(1);
};

const handleDownloadExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(
    filteredAllottees.map(allottee => ({
      "UPN Number": allottee.upnNumber,
      "Name": allottee.name,
      "Property Name": allottee.propertyName,
      "Property Type": allottee.propertyType,
      "Size": allottee.size,
      "Amount": allottee.amount,
      "Submitted Date": allottee.submittedDate,
      "Allotment Date": allottee.allotmentDate,
      "Email": allottee.email,
      "Phone": allottee.phone,
      "Address": allottee.address,
    }))
  );
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Allottees");
  XLSX.writeFile(workbook, `Allottees_${selectedProperty}_${new Date().toISOString().split('T')[0]}.xlsx`);
};

  const getPaymentStatusBadge = (status: PaymentRecord["status"]) => {
    const variants = {
      Paid: "default",
      Upcoming: "secondary",
      Overdue: "destructive"
    } as const;

    return (
      <Badge variant={variants[status]}>
        {status}
      </Badge>
    );
  };

const getStatusBadge = (status: string) => {
  const variant = status === "Active" ? "default" : "destructive";
  return <Badge variant={variant}>{status}</Badge>;
};

const getAmountStatusBadge = (allottee: Allottee) => {
  const hasOverdue = allottee.payments.some((p) => p.status === "Overdue");
  const allPaid = allottee.payments.every((p) => p.status === "Paid");
  const somePaid = allottee.payments.some((p) => p.status === "Paid");

  let label = "Pending";
  let variant: "default" | "secondary" | "destructive" = "secondary";

  if (hasOverdue) {
    label = "Overdue";
    variant = "destructive";
  } else if (allPaid) {
    label = "Received (Full)";
    variant = "default";
  } else if (somePaid) {
    label = "Partially Received";
    variant = "secondary";
  } else {
    label = "Pending";
    variant = "secondary";
  }

  return <Badge variant={variant}>{label}</Badge>;
};

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Allotment Management</CardTitle>
          <CardDescription>Select a property to view allotment details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Select Property</label>
              <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                <SelectTrigger>
                  <SelectValue placeholder="Search and select property..." />
                </SelectTrigger>
                <SelectContent>
                  {properties.map((property) => (
                    <SelectItem key={property} value={property}>
                      {property}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSubmit} disabled={!selectedProperty}>
              <Search className="mr-2 h-4 w-4" />
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>

      {showTable && (
        <>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by UPN, name, or property..."
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
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Amount Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Received (Full)">Received (Full)</SelectItem>
                <SelectItem value="Partially Received">Partially Received</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleDownloadExcel} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Excel
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Allotment Records</CardTitle>
              <CardDescription>Showing all allottees for {selectedProperty}</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>UPN Number</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Property Name</TableHead>
                    <TableHead>Property Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Amount Status</TableHead>
                    <TableHead>Submitted Date</TableHead>
                    <TableHead>Allotment Date</TableHead>
                    <TableHead>Payment Info</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentAllottees.length > 0 ? (
                    currentAllottees.map((allottee) => (
                      <TableRow key={allottee.upnNumber}>
                        <TableCell className="font-medium">{allottee.upnNumber}</TableCell>
                        <TableCell>{allottee.name}</TableCell>
                        <TableCell>{allottee.propertyName}</TableCell>
                        <TableCell>{allottee.propertyType}</TableCell>
                        <TableCell>{allottee.size}</TableCell>
                        <TableCell>{allottee.amount}</TableCell>
                        <TableCell>{getAmountStatusBadge(allottee)}</TableCell>
                        <TableCell>{allottee.submittedDate}</TableCell>
                        <TableCell>{allottee.allotmentDate}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewPayments(allottee)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8 text-muted-foreground">
                        No allottees found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

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

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Payment Information - {selectedAllottee?.upnNumber}</DialogTitle>
            <DialogDescription>
              {selectedAllottee?.name} | {selectedAllottee?.propertyName}
            </DialogDescription>
          </DialogHeader>

          {selectedAllottee && (() => {
            const filteredPayments = selectedAllottee.payments.filter(payment =>
              payment.type.toLowerCase().includes(paymentSearchQuery.toLowerCase()) ||
              payment.amount.toLowerCase().includes(paymentSearchQuery.toLowerCase()) ||
              payment.status.toLowerCase().includes(paymentSearchQuery.toLowerCase())
            );
            
            const paymentTotalPages = Math.ceil(filteredPayments.length / PAYMENT_ITEMS_PER_PAGE);
            const paymentStartIndex = (paymentCurrentPage - 1) * PAYMENT_ITEMS_PER_PAGE;
            const currentPayments = filteredPayments.slice(paymentStartIndex, paymentStartIndex + PAYMENT_ITEMS_PER_PAGE);
            
            return (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Next Payment Date</p>
                    <p className="text-lg font-semibold">{selectedAllottee.nextPaymentDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Payment Date</p>
                    <p className="text-lg font-semibold">{selectedAllottee.lastPaymentDate}</p>
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search payments..."
                    className="pl-10"
                    value={paymentSearchQuery}
                    onChange={(e) => setPaymentSearchQuery(e.target.value)}
                  />
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentPayments.length > 0 ? (
                      currentPayments.map((payment, index) => (
                        <TableRow key={index}>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>{payment.type}</TableCell>
                          <TableCell className="font-medium">{payment.amount}</TableCell>
                          <TableCell>{getPaymentStatusBadge(payment.status)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          No payments found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>

                {paymentTotalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setPaymentCurrentPage((prev) => Math.max(1, prev - 1))}
                          className={paymentCurrentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      {[...Array(paymentTotalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            onClick={() => setPaymentCurrentPage(i + 1)}
                            isActive={paymentCurrentPage === i + 1}
                            className="cursor-pointer"
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setPaymentCurrentPage((prev) => Math.min(paymentTotalPages, prev + 1))}
                          className={paymentCurrentPage === paymentTotalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
