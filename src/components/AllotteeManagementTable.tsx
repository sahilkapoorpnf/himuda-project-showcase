import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Eye, Download, Filter, Send } from "lucide-react";
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

const bases = [
  "Shimla Green Valley",
  "Dharamshala Heights", 
  "Manali Pine Plots",
  "Kullu Valley Flats",
  "Solan Hills Project"
];

const demoNames = [
  "Rajesh Kumar","Priya Sharma","Amit Verma","Sunita Devi","Anil Kapoor",
  "Neha Gupta","Vikas Singh","Pooja Mehta","Rohit Sharma","Kiran Bedi"
];

const mockAllottees: Allottee[] = Array.from({ length: 30 }, (_, i) => {
  const base = bases[i % bases.length];
  const propertyType = base.includes("Plots") ? "Plot" : "Flat";
  const upnNumber = `UPN2024${String(i + 1).padStart(3, '0')}`;
  const unitSuffix = propertyType === "Flat" ? `- A${101 + (i % 50)}` : `- P${1 + (i % 50)}`;
  const propertyName = `${base} ${unitSuffix}`;
  const size = propertyType === "Flat" ? `${1000 + (i % 6) * 100} sq ft` : `${300 + (i % 6) * 50} sq yards`;
  const amount = propertyType === "Flat" ? "₹45,00,000" : "₹25,00,000";
  const status = i % 7 === 0 ? "Defaulter" : "Active";
  const submittedDate = `2024-${String(1 + (i % 6)).padStart(2,'0')}-${String(10 + (i % 18)).padStart(2,'0')}`;
  const allotmentDate = `2024-${String(2 + (i % 6)).padStart(2,'0')}-${String(1 + (i % 18)).padStart(2,'0')}`;
  const email = `${demoNames[i % demoNames.length].toLowerCase().replace(/\s+/g, '.')}@email.com`;
  const phone = "+91 98765 " + String(43000 + (i % 900)).padStart(5,'0');
  const address = `${100 + i}, Sample Address, City`;
  const payments: PaymentRecord[] = [
    { date: "2024-02-01", amount: "₹5,00,000", status: "Paid", type: "Booking Amount" },
    { date: "2024-03-01", amount: "₹10,00,000", status: i % 3 === 0 ? "Overdue" : "Paid", type: "First Installment" },
    { date: "2024-04-01", amount: "₹10,00,000", status: i % 5 === 0 ? "Overdue" : "Upcoming", type: "Second Installment" },
    { date: "2024-05-01", amount: "₹10,00,000", status: "Upcoming", type: "Third Installment" },
    { date: "2024-06-01", amount: "₹10,00,000", status: "Upcoming", type: "Final Payment" },
  ];

  return {
    upnNumber,
    name: demoNames[i % demoNames.length],
    propertyName,
    propertyType,
    size,
    amount,
    status,
    submittedDate,
    allotmentDate,
    email,
    phone,
    address,
    nextPaymentDate: "2024-04-01",
    lastPaymentDate: "2024-03-01",
    payments,
  };
});

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
      const propertyTypeFilterActive = filterPropertyType && filterPropertyType !== 'all';
      const matchesPropertyType = propertyTypeFilterActive ? a.propertyType === filterPropertyType : true;
      
      let matchesStatus = true;
      if (filterStatus && filterStatus !== 'all') {
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
            <Select value={filterPropertyType} onValueChange={(v) => setFilterPropertyType(v === 'all' ? '' : v)}>
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
            <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v === 'all' ? '' : v)}>
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

                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search payments..."
                      className="pl-10"
                      value={paymentSearchQuery}
                      onChange={(e) => setPaymentSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const worksheet = XLSX.utils.json_to_sheet(
                        filteredPayments.map((p) => ({
                          Date: p.date,
                          Type: p.type,
                          Amount: p.amount,
                          Status: p.status,
                        }))
                      );
                      const workbook = XLSX.utils.book_new();
                      XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
                      XLSX.writeFile(workbook, `${selectedAllottee.upnNumber}_Payments.xlsx`);
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" /> Excel
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
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
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Send Reminder
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
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
