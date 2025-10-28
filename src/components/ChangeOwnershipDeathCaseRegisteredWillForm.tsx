import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Search } from "lucide-react";

export const ChangeOwnershipDeathCaseRegisteredWillForm = () => {
  const [upnNumber, setUpnNumber] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [transferees, setTransferees] = useState([{ id: 1 }]);
  const [legalHeirs, setLegalHeirs] = useState([{ id: 1 }]);

  const handleUpnSearch = () => {
    if (!upnNumber) {
      toast.error("Please enter UPN number");
      return;
    }
    setShowForm(true);
    toast.success("Property details loaded");
  };

  const addTransferee = () => {
    setTransferees([...transferees, { id: transferees.length + 1 }]);
  };

  const addLegalHeir = () => {
    setLegalHeirs([...legalHeirs, { id: legalHeirs.length + 1 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Change of Ownership request submitted successfully!");
    setShowForm(false);
    setUpnNumber("");
    setTransferees([{ id: 1 }]);
    setLegalHeirs([{ id: 1 }]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Change of Ownership (Death Case Registered Will)</h1>
        <p className="text-muted-foreground">Submit request for change of ownership - Registered Will case</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Property</CardTitle>
          <CardDescription>Enter UPN number to load property details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="upn">UPN Number</Label>
              <Input
                id="upn"
                value={upnNumber}
                onChange={(e) => setUpnNumber(e.target.value)}
                placeholder="Enter UPN Number"
              />
            </div>
            <Button onClick={handleUpnSearch} className="mt-auto">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>UPN</Label>
                <Input value={upnNumber} disabled />
              </div>
              <div className="space-y-2">
                <Label>Area</Label>
                <Input placeholder="Area" disabled />
              </div>
              <div className="space-y-2">
                <Label>Authority Name</Label>
                <Input placeholder="Authority Name" disabled />
              </div>
              <div className="space-y-2">
                <Label>Plot Number</Label>
                <Input placeholder="Plot Number" disabled />
              </div>
              <div className="space-y-2">
                <Label>Property Type</Label>
                <Input placeholder="Property Type" disabled />
              </div>
              <div className="space-y-2">
                <Label>Scheme Name</Label>
                <Input placeholder="Scheme Name" disabled />
              </div>
              <div className="space-y-2">
                <Label>Reserved Price</Label>
                <Input placeholder="Reserved Price" disabled />
              </div>
              <div className="space-y-2">
                <Label>Sale Type</Label>
                <Input placeholder="Sale Type" disabled />
              </div>
              <div className="space-y-2">
                <Label>Usage Type</Label>
                <Input placeholder="Usage Type" disabled />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👤 Applicant Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="applicant-name">Full Name</Label>
                <Input id="applicant-name" placeholder="Enter full name" required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👥 All Transferees Details</CardTitle>
              <CardDescription>Beneficiaries named in the registered will</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {transferees.map((transferee, index) => (
                <div key={transferee.id}>
                  {index > 0 && <Separator className="my-6" />}
                  <h4 className="font-semibold mb-4">Transferee #{index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Transferee's Name</Label>
                      <Input placeholder="Enter name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Father Name</Label>
                      <Input placeholder="Enter father's name" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Address</Label>
                      <Input placeholder="Enter address" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Mobile</Label>
                      <Input type="tel" placeholder="Enter mobile number" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="Enter email" required />
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <h5 className="font-medium mb-2">Additional Document Requirements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Identity Proof (Aadhaar Card, PAN Card, Driving License or Passport)</li>
                      <li>Latest Passport size photo</li>
                      <li>Specimen Signature</li>
                    </ul>
                  </div>
                </div>
              ))}
              <Button type="button" onClick={addTransferee} variant="outline" className="w-full">
                + Add Another Transferee
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👨‍👩‍👧 Legal Heir Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {legalHeirs.map((heir, index) => (
                <div key={heir.id}>
                  {index > 0 && <Separator className="my-6" />}
                  <h4 className="font-semibold mb-4">Legal Heir #{index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Legal Heir Of</Label>
                      <Input placeholder="Name of deceased" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Legal Heir Name</Label>
                      <Input placeholder="Enter legal heir name" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Relationship with Transferor</Label>
                      <Input placeholder="Enter relationship" required />
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <h5 className="font-medium mb-2">Additional Document:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Passport size photo of Legal Heir</li>
                    </ul>
                  </div>
                </div>
              ))}
              <Button type="button" onClick={addLegalHeir} variant="outline" className="w-full">
                + Add Another Legal Heir
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents Required</CardTitle>
              <CardDescription>All documents require physical verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 p-4 bg-accent/10 rounded-lg">
                <h4 className="font-semibold">📄 Instruction Note for Documents Required</h4>
                <ul className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    <span>Original Death Certificate of the deceased owner (Physical verification required)</span>
                  </li>
                  <li>
                    <span>Registered Will with Registration Certificate (Physical verification required)</span>
                  </li>
                  <li>
                    <span>Translated copy of the will in English (if applicable) (Physical verification required)</span>
                  </li>
                  <li>
                    <span>No objection Affidavits from all left-out legal heirs (Physical verification required)</span>
                  </li>
                  <li>
                    <span>Clearance of previous mortgage/Loan/Redemption Deed</span>
                  </li>
                  <li>
                    <span>Liability Affidavit of beneficiaries of the Will (Physical verification required)</span>
                  </li>
                  <li>
                    <span>Probate Certificate (if applicable) (Physical verification required)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">Submit Request</Button>
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
};
