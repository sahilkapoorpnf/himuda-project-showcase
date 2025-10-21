import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, MapPin, User, Phone, Mail, Home, Calendar, CreditCard, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PaymentGateway } from "@/components/PaymentGateway";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

export const EMIPaymentManagement = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [paymentStatuses, setPaymentStatuses] = useState({
    1: true,  // Booking amount is already paid
    2: false  // Second installment pending
  });
  const [paymentOption, setPaymentOption] = useState<"complete" | "emi" | null>(null);
  const [isPaymentOptionLocked, setIsPaymentOptionLocked] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
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
        status: paymentStatuses[1] ? "Paid" : "Pending",
        isPaid: paymentStatuses[1]
      },
      {
        id: 2,
        description: "Second Installment (40%)",
        amount: "₹10,00,000",
        date: "20 Feb 2025",
        dueDate: "1 Mar 2025",
        daysRemaining: 45,
        status: paymentStatuses[2] ? "Paid" : "Pending",
        isPaid: paymentStatuses[2]
      }
    ]
  };

  // Generate remaining payment rows based on selected option
  const generateRemainingPayments = () => {
    if (!paymentStatuses[2] || !paymentOption) return [];
    
    const remainingAmount = 1250000; // 50% of 25,00,000
    
    if (paymentOption === "complete") {
      return [{
        id: 3,
        description: "Final Payment (50%)",
        amount: "₹12,50,000",
        dueDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        daysRemaining: 45,
        status: "Pending",
        isPaid: false
      }];
    } else {
      // Generate 10 EMIs with 6 months gap
      const emiAmount = remainingAmount / 10;
      return Array.from({ length: 10 }, (_, i) => {
        const monthsFromNow = (i + 1) * 6;
        const dueDate = new Date();
        dueDate.setMonth(dueDate.getMonth() + monthsFromNow);
        
        return {
          id: 3 + i,
          description: `EMI ${i + 1}/10 (5% each)`,
          amount: `₹${(emiAmount / 100000).toFixed(2)} Lakh`,
          dueDate: dueDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
          daysRemaining: Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
          status: "Pending",
          isPaid: false
        };
      });
    }
  };

  const allPayments = [...propertyData.payments, ...generateRemainingPayments()];

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
    // Update payment status for second installment
    setPaymentStatuses(prev => ({ ...prev, 2: true }));
    toast({
      title: "Payment Successful",
      description: "Your payment has been processed successfully",
    });
  };

  const handleSubmitPaymentOption = () => {
    if (!paymentOption) {
      toast({
        title: "Error",
        description: "Please select a payment option",
        variant: "destructive",
      });
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleConfirmPaymentOption = () => {
    setIsPaymentOptionLocked(true);
    setShowConfirmDialog(false);
    toast({
      title: "Payment Option Locked",
      description: `Your ${paymentOption === "complete" ? "Complete Payment" : "EMI"} option has been confirmed`,
    });
  };

  const handleDownloadAgreement = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = '/documents/Agreement_Letter.pdf';
    link.download = 'Agreement_Letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Agreement letter is being downloaded",
    });
  };

  if (showPaymentGateway) {
    return <PaymentGateway amount="₹10,00,000" applicationNumber={upnNumber} onSuccess={handlePaymentSuccess} />;
  }

  return (
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
            {/* Delay Payment Penalty Information */}
            <div className="mb-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <h4 className="text-lg font-semibold text-yellow-700 dark:text-yellow-500 mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Delay Payment Penalty (HIMUDA Guidelines)
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• <span className="font-semibold">0.1% interest per month</span> will be charged on delayed EMI payments for the first 3 months from the due date.</p>
                <p>• After 3 months, the interest rate increases to <span className="font-semibold">0.2% per month</span> on the outstanding amount.</p>
                <p className="text-xs text-yellow-700 dark:text-yellow-500 mt-2">* Please ensure timely payment to avoid penalty charges.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <CreditCard className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">
                Total Consideration Amount: {propertyData.considerationAmount}
              </h3>
            </div>

            {/* Payment Option Selector - Show after second payment is made */}
            {paymentStatuses[2] && !isPaymentOptionLocked && (
              <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="text-lg font-semibold text-primary mb-4">Select Payment Option for Remaining 50%</h4>
                <RadioGroup value={paymentOption || ""} onValueChange={(value) => setPaymentOption(value as "complete" | "emi")}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="complete" id="complete" />
                    <Label htmlFor="complete" className="cursor-pointer">Complete Payment (Pay full 50% at once)</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="emi" id="emi" />
                    <Label htmlFor="emi" className="cursor-pointer">EMI (10 installments over 5 years, 6 months gap)</Label>
                  </div>
                </RadioGroup>
                <Button 
                  onClick={handleSubmitPaymentOption}
                  className="mt-4 bg-primary text-white hover:bg-primary/90"
                  disabled={!paymentOption}
                >
                  Submit Payment Option
                </Button>
              </div>
            )}

            {/* Confirmation Dialog */}
            <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Payment Option</AlertDialogTitle>
                  <AlertDialogDescription>
                    You will not be able to update this option after submitting. Are you sure you want to proceed with the {paymentOption === "complete" ? "Complete Payment" : "EMI"} option?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleConfirmPaymentOption}>
                    Yes, Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

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
                  {allPayments.map((payment) => (
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
                            {'date' in payment ? payment.date : payment.dueDate}
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
                          payment.id === 2 ? (
                            <Button
                              onClick={handleDownloadAgreement}
                              variant="outline"
                              size="sm"
                              className="gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download Agreement Letter
                            </Button>
                          ) : (
                            <span className="text-sm text-muted-foreground">-</span>
                          )
                        ) : payment.id > 2 && !isPaymentOptionLocked ? (
                          <span className="text-sm text-muted-foreground italic">Confirm option to pay</span>
                        ) : payment.id > 2 && isPaymentOptionLocked && paymentOption === "emi" && payment.daysRemaining > 30 ? (
                          <span className="text-sm text-muted-foreground italic">Available 1 month before due date</span>
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
  );
};
