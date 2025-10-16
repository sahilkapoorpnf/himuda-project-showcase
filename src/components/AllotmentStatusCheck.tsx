import { Search, FileCheck, Calendar, User, MapPin, Home, Download, CheckCircle2, Clock, AlertCircle, Building2 } from 'lucide-react';
import { useState } from 'react';

export const AllotmentStatusCheck = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Mock data - would come from backend in real implementation
  const applicationData = {
    applicationNumber: applicationNumber || "HIMUDA-2025-001234",
    upnNumber: "UPN-2025-DJ-001234",
    applicantName: "Rajesh Kumar Sharma",
    fatherName: "Mohan Lal Sharma",
    schemeName: "Dehra Jawalamukhi Housing Plots",
    schemeCode: "HIMUDA-DJ-HP",
    propertyType: "Plot",
    plotNumber: "Plot-125-A",
    category: "Type A",
    propertyCategory: "Residential",
    size: "125 sq. yards",
    location: "Dehra, Jawalamukhi, Kangra",
    applicationDate: "15th March 2025",
    status: "Approved",
    allotmentDate: "5th April 2025",
    paymentStatus: "Partial Payment Received",
    amountPaid: "₹50,000",
    pendingAmount: "₹25,000",
    nextInstallmentDate: "15th May 2025",
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <FileCheck className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-primary">Allotment Status & Acceptance</h2>
        <p className="text-muted-foreground text-lg">Check your application and allotment status</p>
      </div>

      {/* Search Form */}
      <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              Enter Application Number *
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="e.g., HIMUDA-2025-001234"
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Check Status
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Enter the application number you received via email/SMS after payment
            </p>
          </div>
        </form>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="space-y-6 animate-fade-in">
          {/* Status Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-16 h-16" />
                <div>
                  <h3 className="text-3xl font-bold mb-2">Application Approved</h3>
                  <p className="text-white/90">Congratulations! Your allotment has been approved</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80 mb-1">UPN Number</p>
                <p className="text-2xl font-bold">{applicationData.upnNumber}</p>
                <p className="text-xs text-white/70 mt-1">App: {applicationData.applicationNumber}</p>
              </div>
            </div>
          </div>

          {/* Applicant Details */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Applicant Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Applicant Name</p>
                <p className="font-semibold text-foreground">{applicationData.applicantName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Father's/Husband's Name</p>
                <p className="font-semibold text-foreground">{applicationData.fatherName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Application Date</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {applicationData.applicationDate}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Allotment Date</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  {applicationData.allotmentDate}
                </p>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Property Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Scheme Name</p>
                <p className="font-semibold text-foreground">{applicationData.schemeName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Scheme Code</p>
                <p className="font-semibold text-foreground">{applicationData.schemeCode}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Plot Number</p>
                <p className="font-semibold text-foreground">{applicationData.plotNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-semibold text-foreground">{applicationData.category}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Property Type</p>
                <p className="font-semibold text-foreground">{applicationData.propertyType}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Property Category</p>
                <p className="font-semibold text-foreground">{applicationData.propertyCategory}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Size</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Home className="w-4 h-4 text-primary" />
                  {applicationData.size}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {applicationData.location}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Status */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Payment Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold text-orange-500">{applicationData.paymentStatus}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="font-semibold text-green-500 text-lg">{applicationData.amountPaid}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Pending Amount</p>
                <p className="font-semibold text-orange-500 text-lg">{applicationData.pendingAmount}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Next Installment</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  {applicationData.nextInstallmentDate}
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Payment Reminder</h4>
                  <p className="text-sm text-muted-foreground">
                    Please ensure timely payment of the next installment to avoid penalties. You can make payment through the EMI & Payment Management section.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Accept Allotment
            </button>
            <button className="px-6 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Allotment Letter
            </button>
            <button className="px-6 py-4 rounded-lg border-2 border-border text-foreground font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
