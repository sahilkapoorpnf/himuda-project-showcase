import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const TransferPermissionBeforeCDForm = () => {
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
    permissionType: "",
    relation: "",
    shareTransferred: "",
    purchaserName: "",
    fatherName: "",
    address: "",
    mobile: "",
    email: "",
    identityProof: null as File | null,
    purchaserPhoto: null as File | null,
    specimenSignature: null as File | null,
    legalHeirOf: "",
    legalHeirName: "",
    relationshipWithPurchaser: "",
    legalHeirPhoto: null as File | null,
  });

  const handleUpnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upnNumber.trim()) {
      toast.error("Please enter a valid UPN number");
      return;
    }

    // Simulate fetching property details based on UPN
    setFormData({
      ...formData,
      upn: upnNumber,
      area: "1000 sq ft",
      authorityName: "HIMUDA Shimla",
      plotNumber: "PLOT-2024-001",
      propertyType: "Residential",
      schemeName: "Green Valley Scheme",
      reservedPrice: "₹50,00,000",
      saleType: "Freehold",
      usageType: "Residential",
    });
    setShowForm(true);
    toast.success("Property details loaded successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Transfer Permission (Before CD) application submitted successfully!");
  };

  if (!showForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Transfer Permission (Before CD)</CardTitle>
            <CardDescription>Enter your UPN number to begin the application process</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpnSubmit} className="space-y-4">
              <div>
                <Label htmlFor="upn">UPN Number</Label>
                <Input
                  id="upn"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                  placeholder="Enter your UPN number"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Transfer Permission (Before CD) Application Form</CardTitle>
          <CardDescription>Complete all sections below to submit your application</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">Property Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="upn">UPN</Label>
                  <Input id="upn" value={formData.upn} disabled />
                </div>
                <div>
                  <Label htmlFor="area">Area</Label>
                  <Input id="area" value={formData.area} disabled />
                </div>
                <div>
                  <Label htmlFor="authorityName">Authority Name</Label>
                  <Input id="authorityName" value={formData.authorityName} disabled />
                </div>
                <div>
                  <Label htmlFor="plotNumber">Plot Number</Label>
                  <Input id="plotNumber" value={formData.plotNumber} disabled />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Input id="propertyType" value={formData.propertyType} disabled />
                </div>
                <div>
                  <Label htmlFor="schemeName">Scheme Name</Label>
                  <Input id="schemeName" value={formData.schemeName} disabled />
                </div>
                <div>
                  <Label htmlFor="reservedPrice">Reserved Price</Label>
                  <Input id="reservedPrice" value={formData.reservedPrice} disabled />
                </div>
                <div>
                  <Label htmlFor="saleType">Sale Type</Label>
                  <Input id="saleType" value={formData.saleType} disabled />
                </div>
                <div>
                  <Label htmlFor="usageType">Usage Type</Label>
                  <Input id="usageType" value={formData.usageType} disabled />
                </div>
              </div>
            </div>

            {/* Applicant Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">Applicant Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="permissionType">Permission Type</Label>
                  <Input
                    id="permissionType"
                    value={formData.permissionType}
                    onChange={(e) => handleInputChange("permissionType", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="relation">Relation</Label>
                  <Input
                    id="relation"
                    value={formData.relation}
                    onChange={(e) => handleInputChange("relation", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shareTransferred">Share to be transferred</Label>
                  <Input
                    id="shareTransferred"
                    value={formData.shareTransferred}
                    onChange={(e) => handleInputChange("shareTransferred", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* All Purchasers Detail */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">All Purchasers Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purchaserName">Purchaser Name</Label>
                  <Input
                    id="purchaserName"
                    value={formData.purchaserName}
                    onChange={(e) => handleInputChange("purchaserName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange("fatherName", e.target.value)}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="identityProof">Identity Proof of Purchaser</Label>
                  <Input
                    id="identityProof"
                    type="file"
                    onChange={(e) => handleFileChange("identityProof", e.target.files?.[0] || null)}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Aadhaar Card, PAN Card, Driving License or Passport
                  </p>
                </div>
                <div>
                  <Label htmlFor="purchaserPhoto">Latest Passport size photo of Purchaser</Label>
                  <Input
                    id="purchaserPhoto"
                    type="file"
                    onChange={(e) => handleFileChange("purchaserPhoto", e.target.files?.[0] || null)}
                    accept="image/*"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="specimenSignature">Specimen Signature of Purchaser</Label>
                  <Input
                    id="specimenSignature"
                    type="file"
                    onChange={(e) => handleFileChange("specimenSignature", e.target.files?.[0] || null)}
                    accept="image/*"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Legal Heir Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">Legal Heir Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="legalHeirOf">Legal Heir Of</Label>
                  <Input
                    id="legalHeirOf"
                    value={formData.legalHeirOf}
                    onChange={(e) => handleInputChange("legalHeirOf", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="legalHeirName">Legal Heir Name</Label>
                  <Input
                    id="legalHeirName"
                    value={formData.legalHeirName}
                    onChange={(e) => handleInputChange("legalHeirName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="relationshipWithPurchaser">Relationship with Purchaser</Label>
                  <Input
                    id="relationshipWithPurchaser"
                    value={formData.relationshipWithPurchaser}
                    onChange={(e) => handleInputChange("relationshipWithPurchaser", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="legalHeirPhoto">Passport size photo of Legal Heir</Label>
                  <Input
                    id="legalHeirPhoto"
                    type="file"
                    onChange={(e) => handleFileChange("legalHeirPhoto", e.target.files?.[0] || null)}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            {/* Instruction Documents */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                Instruction For Documents Required For Physical Verification in HIMUDA Office
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Affidavit from the all Sellers that the property is free from all sorts of encumbrances or litigation</li>
                <li>Liability affidavit of all Purchasers / Donors / Transferees</li>
                <li>Photo Identity Proof of All Sellers</li>
                <li>Original letter of Allotment / Re-allotment letter</li>
                <li>Clearance against loan / mortgage (if applicable)</li>
                <li>Self-attested copy of sanction of Sewerage Connection / Occupation Certificate (if obtained)</li>
                <li>Photo Identity Proof of All Purchasers</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Back
              </Button>
              <Button type="submit" className="flex-1">Submit Application</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
