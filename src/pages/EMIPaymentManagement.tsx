import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, MapPin, User, Phone, Mail, Home, Calendar, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PaymentGateway } from "@/components/PaymentGateway";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EMIPaymentManagement() {
  const [upnNumber, setUpnNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app this would come from API
  const propertyData = {
    upn: upnNumber,
    societyName: "Green Valley Residency",
    location: "Shimla, Himachal Pradesh",
    size: "250 sq.yd",
    plotNumber: "GV-101",
    propertyType: "Plot",
    considerationAmount: "₹25,00,000",
    allottee: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      address: "123, Mall Road, Shimla, HP - 171001",
      email: "rajesh.kumar@email.com"
    },
    payments: [
      {
        id: 1,
        description: "Booking Amount (10%)",
        amount: "₹2,50,000",
        date: "15 Jan 2025",
        status: "Paid",
        isPaid: true
      },
      {
        id: 2,
        description: "Second Installment (40%)",
        amount: "₹10,00,000",
        dueDate: "1 Mar 2025",
        daysRemaining: 45,
        status: "Pending",
        isPaid: false
      }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upnNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid UPN number",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Success",
      description: "Property details loaded successfully",
    });
  };

  const handlePayNow = () => {
    setShowPaymentGateway(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentGateway(false);
    toast({
      title: "Payment Successful",
      description: "Your payment has been processed successfully",
    });
    // Reload or update payment status
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  if (showPaymentGateway) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <PaymentGateway amount="₹10,00,000" applicationNumber={upnNumber} onSuccess={handlePaymentSuccess} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">EMI & Payment Management</h1>
            <p className="text-muted-foreground">Manage your property payments and installments</p>
          </div>

          {/* UPN Entry Form */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upn" className="text-foreground">Enter UPN Number</Label>
                <Input
                  id="upn"
                  type="text"
                  placeholder="Enter your Unique Property Number"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                  className="max-w-md"
                />
              </div>
              <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                Submit
              </Button>
            </form>
          </div>

          {/* Property Details - Show after submission */}
          {submitted && (
            <div className="space-y-6">
              {/* Property Header */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary">UPN: {propertyData.upn}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Property Details */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-primary border-b border-primary/20 pb-2">Property Details</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Society Name</p>
                          <p className="font-medium text-foreground">{propertyData.societyName}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="font-medium text-foreground">{propertyData.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Size</p>
                          <p className="font-medium text-foreground">{propertyData.size}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Plot Number</p>
                          <p className="font-medium text-foreground">{propertyData.plotNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Property Type</p>
                          <p className="font-medium text-foreground">{propertyData.propertyType}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Allottee Details */}
                  <div className="space-y-3 md:col-span-2">
                    <h3 className="font-semibold text-lg text-primary border-b border-primary/20 pb-2">Allottee Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <User className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Name</p>
                          <p className="font-medium text-foreground">{propertyData.allottee.name}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Phone Number</p>
                          <p className="font-medium text-foreground">{propertyData.allottee.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Email ID</p>
                          <p className="font-medium text-foreground">{propertyData.allottee.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground">Address</p>
                          <p className="font-medium text-foreground">{propertyData.allottee.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Table */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    Consideration Amount: {propertyData.considerationAmount}
                  </h3>
                </div>

                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold text-foreground">Installment</TableHead>
                        <TableHead className="font-semibold text-foreground">Amount</TableHead>
                        <TableHead className="font-semibold text-foreground">Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Status</TableHead>
                        <TableHead className="font-semibold text-foreground">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {propertyData.payments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium text-foreground">
                            {payment.description}
                          </TableCell>
                          <TableCell className="font-semibold text-primary">
                            {payment.amount}
                          </TableCell>
                          <TableCell className="text-foreground">
                            {payment.isPaid ? (
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                {payment.date}
                              </div>
                            ) : (
                              <div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-muted-foreground" />
                                  Due: {payment.dueDate}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {payment.daysRemaining} days remaining
                                </p>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            {payment.isPaid ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20">
                                Paid
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-600 border border-yellow-500/20">
                                Pending
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            {payment.isPaid ? (
                              <span className="text-sm text-muted-foreground">-</span>
                            ) : (
                              <Button
                                onClick={handlePayNow}
                                className="bg-primary text-white hover:bg-primary/90"
                                size="sm"
                              >
                                Pay Now
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
