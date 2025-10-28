import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TransferLetterOfIntentForm = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // Property Details
    upn: "",
    area: "",
    authorityName: "",
    plotNumber: "",
    propertyType: "",
    schemeName: "",
    reservedPrice: "",
    saleType: "",
    usageType: "",
    // Applicant Details
    fullName: "",
    permissionType: "",
    relation: "",
    shareToBeTransferred: "",
    // All Purchasers Detail
    purchaserName: "",
    fatherName: "",
    address: "",
    mobile: "",
    email: "",
    identityProof: "",
    passportPhoto: "",
    specimenSignature: "",
    // Legal Heir Details
    legalHeirOf: "",
    legalHeirName: "",
    relationshipWithPurchaser: "",
    legalHeirPhoto: "",
  });

  const handleUpnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upnNumber.trim()) {
      toast.error("Please enter a UPN number");
      return;
    }
    
    // Simulate fetching property details
    setFormData(prev => ({
      ...prev,
      upn: upnNumber,
      area: "Sample Area",
      authorityName: "HIMUDA",
      plotNumber: "123",
      propertyType: "Residential",
      schemeName: "Sample Scheme",
      reservedPrice: "1000000",
      saleType: "Freehold",
      usageType: "Residential",
    }));
    
    setShowForm(true);
    toast.success("Property details fetched successfully");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Transfer of Letter of Intent request submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!showForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Transfer of Letter of Intent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpnSubmit} className="space-y-4">
              <div>
                <Label htmlFor="upn">Enter UPN Number</Label>
                <Input
                  id="upn"
                  type="text"
                  value={upnNumber}
                  onChange={(e) => setUpnNumber(e.target.value)}
                  placeholder="Enter UPN Number"
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Transfer of Letter of Intent Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                Property Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="upn">UPN</Label>
                  <Input
                    id="upn"
                    value={formData.upn}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="area">Area</Label>
                  <Input
                    id="area"
                    value={formData.area}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="authorityName">Authority Name</Label>
                  <Input
                    id="authorityName"
                    value={formData.authorityName}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="plotNumber">Plot Number</Label>
                  <Input
                    id="plotNumber"
                    value={formData.plotNumber}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Input
                    id="propertyType"
                    value={formData.propertyType}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="schemeName">Scheme Name</Label>
                  <Input
                    id="schemeName"
                    value={formData.schemeName}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="reservedPrice">Reserved Price</Label>
                  <Input
                    id="reservedPrice"
                    value={formData.reservedPrice}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="saleType">Sale Type</Label>
                  <Input
                    id="saleType"
                    value={formData.saleType}
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Label htmlFor="usageType">Usage Type</Label>
                  <Input
                    id="usageType"
                    value={formData.usageType}
                    disabled
                    className="bg-muted"
                  />
                </div>
              </div>
            </div>

            {/* Applicant Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                Applicant Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="permissionType">Permission Type</Label>
                  <Input
                    id="permissionType"
                    value={formData.permissionType}
                    onChange={(e) => handleInputChange("permissionType", e.target.value)}
                    placeholder="Enter permission type"
                  />
                </div>
                <div>
                  <Label htmlFor="relation">Relation</Label>
                  <Input
                    id="relation"
                    value={formData.relation}
                    onChange={(e) => handleInputChange("relation", e.target.value)}
                    placeholder="Enter relation"
                  />
                </div>
                <div>
                  <Label htmlFor="shareToBeTransferred">Share to be transferred</Label>
                  <Input
                    id="shareToBeTransferred"
                    value={formData.shareToBeTransferred}
                    onChange={(e) => handleInputChange("shareToBeTransferred", e.target.value)}
                    placeholder="Enter share to be transferred"
                  />
                </div>
              </div>
            </div>

            {/* All Purchasers Detail */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                All Purchasers Detail
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purchaserName">Purchaser Name</Label>
                  <Input
                    id="purchaserName"
                    value={formData.purchaserName}
                    onChange={(e) => handleInputChange("purchaserName", e.target.value)}
                    placeholder="Enter purchaser name"
                  />
                </div>
                <div>
                  <Label htmlFor="fatherName">Father Name</Label>
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange("fatherName", e.target.value)}
                    placeholder="Enter father name"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter address"
                  />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <Label htmlFor="identityProof">Identity Proof of Purchaser (Aadhaar Card, PAN Card, Driving License or Passport)</Label>
                  <Input
                    id="identityProof"
                    type="file"
                    onChange={(e) => handleInputChange("identityProof", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="passportPhoto">Latest Passport size photo of Purchaser</Label>
                  <Input
                    id="passportPhoto"
                    type="file"
                    onChange={(e) => handleInputChange("passportPhoto", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="specimenSignature">Specimen Signature of Purchaser</Label>
                  <Input
                    id="specimenSignature"
                    type="file"
                    onChange={(e) => handleInputChange("specimenSignature", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Legal Heir Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                Legal Heir Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="legalHeirOf">Legal Heir Of</Label>
                  <Input
                    id="legalHeirOf"
                    value={formData.legalHeirOf}
                    onChange={(e) => handleInputChange("legalHeirOf", e.target.value)}
                    placeholder="Enter legal heir of"
                  />
                </div>
                <div>
                  <Label htmlFor="legalHeirName">Legal Heir Name</Label>
                  <Input
                    id="legalHeirName"
                    value={formData.legalHeirName}
                    onChange={(e) => handleInputChange("legalHeirName", e.target.value)}
                    placeholder="Enter legal heir name"
                  />
                </div>
                <div>
                  <Label htmlFor="relationshipWithPurchaser">Relationship with Purchaser</Label>
                  <Input
                    id="relationshipWithPurchaser"
                    value={formData.relationshipWithPurchaser}
                    onChange={(e) => handleInputChange("relationshipWithPurchaser", e.target.value)}
                    placeholder="Enter relationship"
                  />
                </div>
                <div>
                  <Label htmlFor="legalHeirPhoto">Passport size photo of Legal Heir</Label>
                  <Input
                    id="legalHeirPhoto"
                    type="file"
                    onChange={(e) => handleInputChange("legalHeirPhoto", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Instruction Documents */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                Instruction For Documents Required For Physical Verification in HIMUDA Office
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Affidavit from the Seller(s) that the Letter of Intent is free from all sorts of encumbrances or litigation</li>
                <li>Photo Identity proof of seller(s)</li>
                <li>Clearance against loan/mortgage, if any</li>
                <li>Liability affidavit of Purchaser(s) / Doner(s) / Transferee(s)</li>
                <li>If LOI is issued manually upload scan image of original LOI and submit original LOI during appointment</li>
                <li>Photo Identity proof of Purchaser(s)</li>
                <li>Certified copy of GPA, if applicable</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
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
