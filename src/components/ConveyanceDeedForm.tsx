import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { toast } from "sonner";

export const ConveyanceDeedForm = () => {
  const [upn, setUpn] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // Applicant Details
    fullName: "",
    remark: "",
    
    // Property Details
    area: "",
    authorityName: "",
    plotNumber: "",
    propertyType: "",
    schemeName: "",
  });

  const handleUpnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upn.trim()) {
      toast.error("Please enter a valid UPN number");
      return;
    }
    
    // Simulate fetching property details
    setFormData({
      ...formData,
      area: "Sample Area",
      authorityName: "HIMUDA",
      plotNumber: "Plot-123",
      propertyType: "Residential",
      schemeName: "Sample Scheme",
    });
    
    setShowForm(true);
    toast.success("Property details loaded successfully");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Conveyance Deed request submitted successfully!");
    console.log("Form submitted:", { upn, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!showForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Issuance of Conveyance Deed</CardTitle>
            <CardDescription>Enter UPN number to proceed with conveyance deed application</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpnSubmit} className="space-y-4">
              <div>
                <Label htmlFor="upn">UPN Number *</Label>
                <div className="flex gap-2 mt-1.5">
                  <Input
                    id="upn"
                    value={upn}
                    onChange={(e) => setUpn(e.target.value)}
                    placeholder="Enter UPN Number"
                    required
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Conveyance Deed Application Form</CardTitle>
          <CardDescription>Complete the form below to apply for conveyance deed</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Applicant Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                👤 Applicant Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="remark">Remark</Label>
                  <Textarea
                    id="remark"
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                🏠 Property Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>UPN</Label>
                  <Input value={upn} disabled className="bg-muted" />
                </div>
                <div>
                  <Label>Area</Label>
                  <Input value={formData.area} disabled className="bg-muted" />
                </div>
                <div>
                  <Label>Authority Name</Label>
                  <Input value={formData.authorityName} disabled className="bg-muted" />
                </div>
                <div>
                  <Label>Plot Number</Label>
                  <Input value={formData.plotNumber} disabled className="bg-muted" />
                </div>
                <div>
                  <Label>Property Type</Label>
                  <Input value={formData.propertyType} disabled className="bg-muted" />
                </div>
                <div>
                  <Label>Scheme Name</Label>
                  <Input value={formData.schemeName} disabled className="bg-muted" />
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                📄 Instruction For Documents Required For Physical verification at HIMUDA
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                <p className="font-medium">Please bring the following documents for physical verification:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Self attested copy of No Due Certificate (Not required if No Due Certificate Issued Online)</li>
                  <li>Certified copy of GPA / Sub Attorney (if applicable)</li>
                  <li>Copies of CD including one on Stamp Paper — Stamp Duty would be as applicable on date of execution of CD (Please check with Sub Registrar)</li>
                </ol>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" size="lg">Submit Application</Button>
              <Button 
                type="button" 
                variant="outline" 
                size="lg"
                onClick={() => {
                  setShowForm(false);
                  setUpn("");
                }}
              >
                Back to Search
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
