import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, User, Users, FileText } from "lucide-react";

export const ReallotmentLetterForm = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    upn: "",
    area: "",
    authorityName: "",
    plotNumber: "",
    propertyType: "",
    schemeName: "",
    reservedPrice: "",
    saleType: "",
    usageType: "",
    fullName: "",
    transfereeName: "",
    fatherName: "",
    address: "",
    mobile: "",
    email: "",
  });

  const handleUpnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upnNumber.trim()) {
      toast.error("Please enter UPN number");
      return;
    }

    // Simulate fetching property details
    setFormData({
      ...formData,
      upn: upnNumber,
      area: "250 sq. yards",
      authorityName: "HIMUDA Shimla",
      plotNumber: "P-123",
      propertyType: "Residential Plot",
      schemeName: "Green Valley Scheme",
      reservedPrice: "₹25,00,000",
      saleType: "Outright Sale",
      usageType: "Residential",
    });
    setShowForm(true);
    toast.success("Property details loaded successfully");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Re-allotment Letter request submitted successfully!");
    console.log("Re-allotment Letter Form Data:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!showForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Issue of Re-allotment Letter
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleUpnSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="upn" className="text-base font-semibold">
                  Enter UPN Number
                </Label>
                <Input
                  id="upn"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                  placeholder="Enter your UPN number"
                  className="h-12 text-base"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Issue of Re-allotment Letter - Application Form
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-2">
                <Building2 className="h-5 w-5" />
                Property Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="upn">UPN</Label>
                  <Input id="upn" value={formData.upn} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Area</Label>
                  <Input id="area" value={formData.area} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="authorityName">Authority Name</Label>
                  <Input id="authorityName" value={formData.authorityName} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plotNumber">Plot Number</Label>
                  <Input id="plotNumber" value={formData.plotNumber} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Input id="propertyType" value={formData.propertyType} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schemeName">Scheme Name</Label>
                  <Input id="schemeName" value={formData.schemeName} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reservedPrice">Reserved Price</Label>
                  <Input id="reservedPrice" value={formData.reservedPrice} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="saleType">Sale Type</Label>
                  <Input id="saleType" value={formData.saleType} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="usageType">Usage Type</Label>
                  <Input id="usageType" value={formData.usageType} disabled />
                </div>
              </div>
            </div>

            {/* Applicant Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-2">
                <User className="h-5 w-5" />
                Applicant Details
              </h3>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
            </div>

            {/* All Transferees Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-2">
                <Users className="h-5 w-5" />
                All Transferees Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transfereeName">Transferee's Name</Label>
                  <Input
                    id="transfereeName"
                    value={formData.transfereeName}
                    onChange={(e) => handleInputChange("transfereeName", e.target.value)}
                    placeholder="Enter transferee's name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange("fatherName", e.target.value)}
                    placeholder="Enter father's name"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter complete address"
                    required
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-accent/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5" />
                Instruction For Documents Required In HIMUDA Office
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Transfer permission before CD (Physical verification required)</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
                className="flex-1"
              >
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
