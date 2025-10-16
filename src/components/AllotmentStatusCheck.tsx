import { Search, FileCheck, Calendar, User, MapPin, Home, Download, CheckCircle2, AlertCircle, Building2, Key } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const AllotmentStatusCheck = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [upnGenerated, setUpnGenerated] = useState(false);
  const [upnVerification, setUpnVerification] = useState("");
  const [upnVerified, setUpnVerified] = useState(false);
  const [generatingUpn, setGeneratingUpn] = useState(false);
  const [acceptingAllotment, setAcceptingAllotment] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Mock data - would come from backend in real implementation
  const applicationData = {
    applicationNumber: applicationNumber || "HIMUDA-2025-001234",
    upnNumber: upnGenerated ? "UPN-2025-DJ-001234" : "",
    applicantName: "Rajesh Kumar Sharma",
    fatherName: "Mohan Lal Sharma",
    email: "rajesh.sharma@example.com",
    mobile: "+91-9876543210",
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
    paymentStatus: "Payment Received",
    amountPaid: "₹75,000",
  };

  const handleGenerateUpn = async () => {
    setGeneratingUpn(true);
    try {
      // Call edge function to send UPN via email and SMS
      const { error } = await supabase.functions.invoke('send-upn-notification', {
        body: {
          name: applicationData.applicantName,
          email: applicationData.email,
          mobile: applicationData.mobile,
          upnNumber: "UPN-2025-DJ-001234",
          applicationNumber: applicationData.applicationNumber,
        }
      });

      if (error) throw error;

      setUpnGenerated(true);
      toast({
        title: "UPN Generated Successfully",
        description: "Your UPN has been sent to your registered email and mobile number.",
      });
    } catch (error) {
      console.error('Error generating UPN:', error);
      toast({
        title: "Error",
        description: "Failed to generate UPN. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGeneratingUpn(false);
    }
  };

  const handleVerifyUpn = () => {
    if (upnVerification === applicationData.upnNumber) {
      setUpnVerified(true);
      toast({
        title: "UPN Verified",
        description: "You can now download your allotment letter.",
      });
    } else {
      toast({
        title: "Invalid UPN",
        description: "Please enter the correct UPN number.",
        variant: "destructive",
      });
    }
  };

  const handleAcceptAllotment = async () => {
    setAcceptingAllotment(true);
    // Simulate API call
    setTimeout(() => {
      setAcceptingAllotment(false);
      toast({
        title: "Allotment Accepted",
        description: "Your allotment has been successfully accepted.",
      });
    }, 1500);
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
                {upnGenerated ? (
                  <>
                    <p className="text-sm text-white/80 mb-1">UPN Number</p>
                    <p className="text-2xl font-bold">{applicationData.upnNumber}</p>
                    <p className="text-xs text-white/70 mt-1">App: {applicationData.applicationNumber}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-white/80 mb-1">Application Number</p>
                    <p className="text-2xl font-bold">{applicationData.applicationNumber}</p>
                    <p className="text-xs text-white/70 mt-1">UPN not generated yet</p>
                  </>
                )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold text-green-500">{applicationData.paymentStatus}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="font-semibold text-green-500 text-lg">{applicationData.amountPaid}</p>
              </div>
            </div>
          </div>

          {/* UPN Generation Section */}
          {!upnGenerated ? (
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Key className="w-5 h-5" />
                Generate UPN Number
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Generate Your UPN</h4>
                      <p className="text-sm text-muted-foreground">
                        Click below to generate your Unique Property Number (UPN). This will be sent to your registered email and mobile number.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleGenerateUpn}
                  disabled={generatingUpn}
                  className="w-full px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Key className="w-5 h-5" />
                  {generatingUpn ? "Generating..." : "Generate UPN Number"}
                </button>
              </div>
            </div>
          ) : !upnVerified ? (
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Key className="w-5 h-5" />
                Verify UPN Number
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 mb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">UPN Generated Successfully</h4>
                      <p className="text-sm text-muted-foreground">
                        Your UPN has been sent to your registered email and mobile number. Please enter it below to download your allotment letter.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter UPN Number"
                    value={upnVerification}
                    onChange={(e) => setUpnVerification(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleVerifyUpn}
                    className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={handleAcceptAllotment}
              disabled={acceptingAllotment}
              className="px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <CheckCircle2 className="w-5 h-5" />
              {acceptingAllotment ? "Processing..." : "Accept Allotment"}
            </button>
            {upnVerified && (
              <button className="px-6 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Allotment Letter
              </button>
            )}
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
