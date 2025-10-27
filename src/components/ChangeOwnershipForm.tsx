import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ChangeOwnershipForm = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState<any>(null);
  const { toast } = useToast();

  const handleUpnLookup = () => {
    if (!upnNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a UPN number",
        variant: "destructive",
      });
      return;
    }

    // Mock property data - in real implementation, fetch from database
    setPropertyDetails({
      upn: upnNumber,
      area: "450 sq. yards",
      authorityName: "HIMUDA Shimla",
      plotNumber: "Plot-45-A",
      propertyType: "Residential",
      schemeName: "Shimla Green Valley Phase II",
      reservedPrice: "₹45,00,000",
      saleType: "Outright",
      usageType: "Residential",
    });

    setShowForm(true);
    toast({
      title: "Property Found",
      description: "Property details loaded successfully",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Your change of ownership request has been submitted to admin for review",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Change of Ownership</h1>
        <p className="text-muted-foreground mt-2">
          Submit your request for property ownership transfer
        </p>
      </div>

      {/* UPN Lookup Section */}
      {!showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Enter Property Details</CardTitle>
            <CardDescription>
              Enter your UPN (Unique Property Number) to proceed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="upn">UPN Number</Label>
                <Input
                  id="upn"
                  placeholder="Enter UPN Number"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                />
              </div>
              <div className="self-end">
                <Button onClick={handleUpnLookup}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Change Ownership Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>1️⃣ Property Details</CardTitle>
              <CardDescription>Auto-filled property information</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <Label>UPN</Label>
                <Input value={propertyDetails.upn} disabled />
              </div>
              <div>
                <Label>Area</Label>
                <Input value={propertyDetails.area} disabled />
              </div>
              <div>
                <Label>Authority Name</Label>
                <Input value={propertyDetails.authorityName} disabled />
              </div>
              <div>
                <Label>Plot Number</Label>
                <Input value={propertyDetails.plotNumber} disabled />
              </div>
              <div>
                <Label>Property Type</Label>
                <Input value={propertyDetails.propertyType} disabled />
              </div>
              <div>
                <Label>Scheme Name</Label>
                <Input value={propertyDetails.schemeName} disabled />
              </div>
              <div>
                <Label>Reserved Price</Label>
                <Input value={propertyDetails.reservedPrice} disabled />
              </div>
              <div>
                <Label>Sale Type</Label>
                <Input value={propertyDetails.saleType} disabled />
              </div>
              <div className="col-span-2">
                <Label>Usage Type</Label>
                <Input value={propertyDetails.usageType} disabled />
              </div>
            </CardContent>
          </Card>

          {/* Applicant Details */}
          <Card>
            <CardHeader>
              <CardTitle>2️⃣ Applicant Details</CardTitle>
              <CardDescription>Current owner information</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter full name" required />
              </div>
            </CardContent>
          </Card>

          {/* Transferees Details */}
          <Card>
            <CardHeader>
              <CardTitle>3️⃣ All Transferees Details (as per NOC)</CardTitle>
              <CardDescription>New owner information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="transfereeName">Transferee's Name</Label>
                  <Input id="transfereeName" placeholder="Enter transferee's name" required />
                </div>
                <div>
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input id="fatherName" placeholder="Enter father's name" required />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter complete address" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input id="mobile" type="tel" placeholder="Enter mobile number" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card>
            <CardHeader>
              <CardTitle>4️⃣ Documents Required</CardTitle>
              <CardDescription>Upload necessary documents for verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center space-y-3">
                <div className="flex justify-center">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                </div>
                <div>
                  <Label className="text-base font-semibold">
                    Certified copy of Sale Deed / Transfer Deed / Gift Deed
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Issued by the Sub-Registrar
                  </p>
                </div>
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      ✅ Instruction Note
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                      Certified copy of Sale Deed / Transfer Deed / Gift Deed issued by the 
                      Sub-Registrar (Physical verification required).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Submit Request
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
