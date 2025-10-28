import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Search } from "lucide-react";

export const ChangeOwnershipDeathCaseForm = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({
    upn: "",
    area: "",
    authorityName: "",
    plotNumber: "",
    propertyType: "",
    schemeName: "",
    reservedPrice: "",
    saleType: "",
    usageType: "",
  });

  const handleUpnLookup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!upnNumber) {
      toast.error("Please enter UPN number");
      return;
    }

    // Simulate property details lookup
    setPropertyDetails({
      upn: upnNumber,
      area: "Sample Area",
      authorityName: "HIMUDA",
      plotNumber: "Plot-123",
      propertyType: "Residential",
      schemeName: "Green Valley Scheme",
      reservedPrice: "₹50,00,000",
      saleType: "Freehold",
      usageType: "Residential",
    });
    
    setShowForm(true);
    toast.success("Property details found!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Change of Ownership (Death Case) request submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Change of Ownership (Death Case Unregistered Will)</h1>
        <p className="text-muted-foreground">Submit your request for property ownership transfer in case of death with unregistered will</p>
      </div>

      {!showForm ? (
        <Card>
          <CardHeader>
            <CardTitle>Enter UPN Number</CardTitle>
            <CardDescription>Enter the Unique Property Number to proceed</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpnLookup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upn">UPN Number</Label>
                <Input
                  id="upn"
                  placeholder="Enter UPN Number"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Lookup Property
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>UPN</Label>
                  <Input value={propertyDetails.upn} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Area</Label>
                  <Input value={propertyDetails.area} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Authority Name</Label>
                  <Input value={propertyDetails.authorityName} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Plot Number</Label>
                  <Input value={propertyDetails.plotNumber} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Input value={propertyDetails.propertyType} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Scheme Name</Label>
                  <Input value={propertyDetails.schemeName} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Reserved Price</Label>
                  <Input value={propertyDetails.reservedPrice} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Sale Type</Label>
                  <Input value={propertyDetails.saleType} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Usage Type</Label>
                  <Input value={propertyDetails.usageType} disabled />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applicant Details */}
          <Card>
            <CardHeader>
              <CardTitle>Applicant Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Full Name</Label>
                <Input id="applicantName" placeholder="Enter applicant full name" required />
              </div>
            </CardContent>
          </Card>

          {/* All Transferees Details */}
          <Card>
            <CardHeader>
              <CardTitle>All Transferees Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transfereeName">Transferee's Name</Label>
                  <Input id="transfereeName" placeholder="Enter transferee name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input id="fatherName" placeholder="Enter father name" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter complete address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input id="mobile" type="tel" placeholder="Enter mobile number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" required />
                </div>
              </div>

              <div className="mt-6 space-y-3 p-4 bg-accent/20 rounded-lg">
                <h4 className="font-semibold text-sm">Additional Transferee Document Requirements:</h4>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="identityProof">16. Identity Proof of Transferee (Aadhaar Card, PAN Card, Driving License or Passport)</Label>
                    <Input id="identityProof" type="file" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transfereePhoto">17. Latest Passport size photo of Transferee</Label>
                    <Input id="transfereePhoto" type="file" accept="image/*" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specimenSignature">18. Specimen Signature of Transferee</Label>
                    <Input id="specimenSignature" type="file" accept="image/*" required />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Heir Details */}
          <Card>
            <CardHeader>
              <CardTitle>Legal Heir Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="legalHeirOf">Legal Heir Of</Label>
                  <Input id="legalHeirOf" placeholder="Enter deceased owner name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="legalHeirName">Legal Heir Name</Label>
                  <Input id="legalHeirName" placeholder="Enter legal heir name" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="relationship">Relationship with Transferor</Label>
                  <Input id="relationship" placeholder="Enter relationship (e.g., Son, Daughter, Spouse)" required />
                </div>
              </div>

              <div className="mt-6 space-y-3 p-4 bg-accent/20 rounded-lg">
                <h4 className="font-semibold text-sm">Additional Legal Heir Document:</h4>
                <div className="space-y-2">
                  <Label htmlFor="legalHeirPhoto">22. Passport size photo of Legal Heir</Label>
                  <Input id="legalHeirPhoto" type="file" accept="image/*" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card>
            <CardHeader>
              <CardTitle>Documents Required</CardTitle>
              <CardDescription>Please upload all required documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 p-4 bg-accent/10 rounded-lg">
                <h4 className="font-semibold text-sm">Instruction Note:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">1.</span>
                    <span>Original Death Certificate of the deceased owner (Physical verification required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">2.</span>
                    <span>Attested Copy of unregistered will (Physical verification required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">3.</span>
                    <span>Translated copy of the will in English (if applicable) (Physical verification required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">4.</span>
                    <span>No objection Affidavits from all left-out legal heirs (Physical verification required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">5.</span>
                    <span>Clearance of previous mortgage/Loan/Redemption Deed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">6.</span>
                    <span>Liability Affidavit of beneficiaries of the Will (Physical verification required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium min-w-fit">7.</span>
                    <span>Affidavits of attesting witnesses in prescribed format (Physical verification required)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Label htmlFor="documents">Upload All Required Documents</Label>
                <Input id="documents" type="file" multiple />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Request
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
