import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Eye } from "lucide-react";

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

export function AllotteeManagementTable() {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [selectedAllottee, setSelectedAllottee] = useState<Allottee | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleSubmit = () => {
    if (selectedProperty) {
      setShowTable(true);
    }
  };

  const handleViewPayments = (allottee: Allottee) => {
    setSelectedAllottee(allottee);
    setShowPaymentDialog(true);
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
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Allotments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockAllottees.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Units</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockAllottees.length}</div>
              </CardContent>
            </Card>
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
                    <TableHead>Status</TableHead>
                    <TableHead>Allotment Date</TableHead>
                    <TableHead>Payment Info</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockAllottees.map((allottee) => (
                    <TableRow key={allottee.upnNumber}>
                      <TableCell className="font-medium">{allottee.upnNumber}</TableCell>
                      <TableCell>{allottee.name}</TableCell>
                      <TableCell>{allottee.propertyName}</TableCell>
                      <TableCell>{allottee.propertyType}</TableCell>
                      <TableCell>{allottee.size}</TableCell>
                      <TableCell>{allottee.amount}</TableCell>
                      <TableCell>{getStatusBadge(allottee.status)}</TableCell>
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
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
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

          {selectedAllottee && (
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
                  {selectedAllottee.payments.map((payment, index) => (
                    <TableRow key={index}>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.type}</TableCell>
                      <TableCell className="font-medium">{payment.amount}</TableCell>
                      <TableCell>{getPaymentStatusBadge(payment.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
