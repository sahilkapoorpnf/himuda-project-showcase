import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileText, Upload, CheckCircle2 } from 'lucide-react';

export const AllotmentForm = () => {
  const [showCoApplicant, setShowCoApplicant] = useState(false);
  const [permanentSameAsCorrespondence, setPermanentSameAsCorrespondence] = useState(false);
  const [propertyCategory, setPropertyCategory] = useState("");

  const getSizeForCategory = (category: string) => {
    const sizeMap: Record<string, string> = {
      "type-a": "308-482 Sqmt",
      "type-b": "216 Sqmt",
      "type-c": "150 Sqmt",
      "type-d": "120-141 Sqmt",
      "type-e": "91-116 Sqmt",
      "type-f": "63-74 Sqmt",
    };
    return sizeMap[category] || "";
  };

  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-bold text-primary text-center mb-8">Property Allotment Application</h2>
      
      <div className="bg-card p-8 rounded-2xl space-y-12" style={{ boxShadow: 'var(--shadow-card)' }}>
        
        {/* SECTION 1: Scheme Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold text-primary">Scheme Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="scheme-name">Scheme Name *</Label>
              <Select>
                <SelectTrigger id="scheme-name">
                  <SelectValue placeholder="Select Scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shimla-2025">Shimla Housing Scheme 2025</SelectItem>
                  <SelectItem value="dharamshala-phase2">Dharamshala Phase-II Housing Scheme</SelectItem>
                  <SelectItem value="solan-apartments">Solan Apartments Scheme</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="scheme-code">Scheme Code</Label>
              <Input id="scheme-code" value="HIMUDA-SH25" readOnly className="bg-muted" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">Sector / Location *</Label>
              <Select>
                <SelectTrigger id="sector">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kasumpti">Kasumpti</SelectItem>
                  <SelectItem value="dharamshala">Dharamshala</SelectItem>
                  <SelectItem value="solan">Solan</SelectItem>
                  <SelectItem value="kullu">Kullu</SelectItem>
                  <SelectItem value="una">Una</SelectItem>
                  <SelectItem value="kangra">Kangra</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="property-type">Property Type *</Label>
              <Select>
                <SelectTrigger id="property-type">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plot">Plot</SelectItem>
                  <SelectItem value="flat">Flat</SelectItem>
                  <SelectItem value="commercial">Commercial Booth</SelectItem>
                  <SelectItem value="shop">Shop</SelectItem>
                  <SelectItem value="institutional">Institutional Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="property-category">Property Category *</Label>
              <Select value={propertyCategory} onValueChange={setPropertyCategory}>
                <SelectTrigger id="property-category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type-a">Type A</SelectItem>
                  <SelectItem value="type-b">Type B</SelectItem>
                  <SelectItem value="type-c">Type C</SelectItem>
                  <SelectItem value="type-d">Type D</SelectItem>
                  <SelectItem value="type-e">Type E(L.I.G.)</SelectItem>
                  <SelectItem value="type-f">Type F(E.W.S.)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="plot-size">Size *</Label>
              <Input 
                id="plot-size" 
                value={getSizeForCategory(propertyCategory)} 
                placeholder={propertyCategory ? "" : "Select Property Category first"}
                readOnly 
                className="bg-muted"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="num-units">Number of Units (if applicable)</Label>
              <Input id="num-units" type="number" placeholder="Enter number of units" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Preference Type *</Label>
              <RadioGroup defaultValue="new" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new" className="font-normal cursor-pointer">New Allotment</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* SECTION 2: Applicant Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold text-primary">Applicant Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="applicant-name">Applicant Name (as per Aadhaar) *</Label>
              <Input id="applicant-name" placeholder="Full Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="father-name">Father's / Husband's Name *</Label>
              <Input id="father-name" placeholder="Father's / Husband's Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth *</Label>
              <Input id="dob" type="date" />
            </div>

            <div className="space-y-2">
              <Label>Gender *</Label>
              <RadioGroup defaultValue="male" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal cursor-pointer">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Marital Status *</Label>
              <RadioGroup defaultValue="married" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="married" id="married" />
                  <Label htmlFor="married" className="font-normal cursor-pointer">Married</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unmarried" id="unmarried" />
                  <Label htmlFor="unmarried" className="font-normal cursor-pointer">Unmarried</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="widowed" id="widowed" />
                  <Label htmlFor="widowed" className="font-normal cursor-pointer">Widowed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="divorced" id="divorced" />
                  <Label htmlFor="divorced" className="font-normal cursor-pointer">Divorced</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality *</Label>
              <Select>
                <SelectTrigger id="nationality">
                  <SelectValue placeholder="Select Nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="nri">NRI</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="st">ST</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="ews">EWS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="aadhaar">Aadhaar Number *</Label>
              <Input id="aadhaar" placeholder="1234 5678 9012" maxLength={12} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pan">PAN Number *</Label>
              <Input id="pan" placeholder="ABCDE1234F" maxLength={10} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input id="mobile" type="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email ID *</Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation Type *</Label>
              <Select>
                <SelectTrigger id="occupation">
                  <SelectValue placeholder="Select Occupation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="govt">Government Employee</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="self">Self-Employed</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="homemaker">Homemaker</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="income">Annual Income (₹) *</Label>
              <Input id="income" type="number" placeholder="Enter annual income" />
            </div>
          </div>
        </div>

        {/* SECTION 3: Address Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold text-primary">Address Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address1">Address Line 1 *</Label>
              <Input id="address1" placeholder="House No., Building Name" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address2">Address Line 2</Label>
              <Input id="address2" placeholder="Street, Locality" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City / Town *</Label>
              <Input id="city" placeholder="Enter City" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="district">District *</Label>
              <Select>
                <SelectTrigger id="district">
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shimla">Shimla</SelectItem>
                  <SelectItem value="solan">Solan</SelectItem>
                  <SelectItem value="kangra">Kangra</SelectItem>
                  <SelectItem value="mandi">Mandi</SelectItem>
                  <SelectItem value="kullu">Kullu</SelectItem>
                  <SelectItem value="una">Una</SelectItem>
                  <SelectItem value="hamirpur">Hamirpur</SelectItem>
                  <SelectItem value="sirmaur">Sirmaur</SelectItem>
                  <SelectItem value="chamba">Chamba</SelectItem>
                  <SelectItem value="bilaspur">Bilaspur</SelectItem>
                  <SelectItem value="lahaul-spiti">Lahaul-Spiti</SelectItem>
                  <SelectItem value="kinnaur">Kinnaur</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State / UT *</Label>
              <Select>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hp">Himachal Pradesh</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="chandigarh">Chandigarh</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode *</Label>
              <Input id="pincode" type="number" placeholder="Enter Pincode" maxLength={6} />
            </div>

            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="same-address" 
                  checked={permanentSameAsCorrespondence}
                  onCheckedChange={(checked) => setPermanentSameAsCorrespondence(checked as boolean)}
                />
                <Label htmlFor="same-address" className="font-normal cursor-pointer">
                  Permanent Address same as Correspondence
                </Label>
              </div>
            </div>

            {!permanentSameAsCorrespondence && (
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="permanent-address">Permanent Address</Label>
                <Textarea id="permanent-address" placeholder="Enter permanent address if different" rows={3} />
              </div>
            )}
          </div>
        </div>

        {/* SECTION 4: Co-Applicant Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-2xl font-bold text-primary">Co-Applicant Details (Optional)</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="add-co-applicant" 
                checked={showCoApplicant}
                onCheckedChange={(checked) => setShowCoApplicant(checked as boolean)}
              />
              <Label htmlFor="add-co-applicant" className="font-normal cursor-pointer">
                Yes, I want to add co-applicant
              </Label>
            </div>

            {showCoApplicant && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="co-name">Co-Applicant Name *</Label>
                  <Input id="co-name" placeholder="Full Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship with Applicant *</Label>
                  <Select>
                    <SelectTrigger id="relationship">
                      <SelectValue placeholder="Select Relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="son">Son</SelectItem>
                      <SelectItem value="daughter">Daughter</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="brother">Brother</SelectItem>
                      <SelectItem value="sister">Sister</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-aadhaar">Aadhaar Number *</Label>
                  <Input id="co-aadhaar" placeholder="1234 5678 9012" maxLength={12} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-pan">PAN Number *</Label>
                  <Input id="co-pan" placeholder="ABCDE1234F" maxLength={10} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-mobile">Mobile Number *</Label>
                  <Input id="co-mobile" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-email">Email ID *</Label>
                  <Input id="co-email" type="email" placeholder="example@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-occupation">Occupation Type *</Label>
                  <Select>
                    <SelectTrigger id="co-occupation">
                      <SelectValue placeholder="Select Occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="govt">Government Employee</SelectItem>
                      <SelectItem value="private">Private Sector</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="self">Self-Employed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="homemaker">Homemaker</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="co-income">Annual Income (₹) *</Label>
                  <Input id="co-income" type="number" placeholder="Enter annual income" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 5: Document Uploads */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold">
              5
            </div>
            <h3 className="text-2xl font-bold text-primary">Document Uploads</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'photo', label: 'Applicant Photograph *', note: 'JPG/PNG max 2MB' },
              { id: 'signature', label: 'Applicant Signature *', note: 'JPG/PNG max 2MB' },
              { id: 'aadhaar-doc', label: 'Aadhaar Card *', note: 'PDF/JPG' },
              { id: 'pan-doc', label: 'PAN Card *', note: 'PDF/JPG' },
              { id: 'address-proof', label: 'Address Proof (if not Aadhaar)', note: 'PDF/JPG' },
              { id: 'category-cert', label: 'Category Certificate (if applicable)', note: 'PDF/JPG' },
              { id: 'income-cert', label: 'Income Certificate (for EWS)', note: 'PDF/JPG' },
              { id: 'co-docs', label: 'Co-Applicant Documents (if any)', note: 'PDF/JPG' },
            ].map((doc) => (
              <div key={doc.id} className="space-y-2">
                <Label htmlFor={doc.id}>{doc.label}</Label>
                <div className="flex items-center gap-2">
                  <Input id={doc.id} type="file" className="flex-1" />
                  <Upload className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">{doc.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: Property Preference */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              6
            </div>
            <h3 className="text-2xl font-bold text-primary">Property Preference</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="preferred-sector">Preferred Sector / Block *</Label>
              <Select>
                <SelectTrigger id="preferred-sector">
                  <SelectValue placeholder="Select Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sector-a">Sector A</SelectItem>
                  <SelectItem value="sector-b">Sector B</SelectItem>
                  <SelectItem value="sector-c">Sector C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferred-plot">Preferred Plot/Flat Number (optional)</Label>
              <Input id="preferred-plot" placeholder="Enter plot/flat number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size-preference">Plot / Flat Size Preference *</Label>
              <Select>
                <SelectTrigger id="size-preference">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="60">60 sq.m</SelectItem>
                  <SelectItem value="90">90 sq.m</SelectItem>
                  <SelectItem value="120">120 sq.m</SelectItem>
                  <SelectItem value="200">200 sq.m</SelectItem>
                  <SelectItem value="400">400 sq.m</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preference1">Preference 1 *</Label>
              <Select>
                <SelectTrigger id="preference1">
                  <SelectValue placeholder="Select from inventory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">Plot A-101</SelectItem>
                  <SelectItem value="p2">Plot B-205</SelectItem>
                  <SelectItem value="p3">Flat C-301</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preference2">Preference 2</Label>
              <Select>
                <SelectTrigger id="preference2">
                  <SelectValue placeholder="Select from inventory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">Plot A-102</SelectItem>
                  <SelectItem value="p2">Plot B-206</SelectItem>
                  <SelectItem value="p3">Flat C-302</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preference3">Preference 3</Label>
              <Select>
                <SelectTrigger id="preference3">
                  <SelectValue placeholder="Select from inventory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">Plot A-103</SelectItem>
                  <SelectItem value="p2">Plot B-207</SelectItem>
                  <SelectItem value="p3">Flat C-303</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* SECTION 7: Payment Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-border">
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
              7
            </div>
            <h3 className="text-2xl font-bold text-primary">Payment Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="earnest-money">Earnest Money Amount (₹)</Label>
              <Input id="earnest-money" value="50,000" readOnly className="bg-muted" />
              <p className="text-xs text-muted-foreground">Auto-calculated based on property size</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Payment Mode *</Label>
              <RadioGroup defaultValue="online" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="font-normal cursor-pointer">
                    Online Payment (Net Banking / Debit Card / UPI)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dd" id="dd" />
                  <Label htmlFor="dd" className="font-normal cursor-pointer">Demand Draft (Offline)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transaction-no">Transaction / DD Number</Label>
              <Input id="transaction-no" placeholder="Enter transaction number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment-date">Payment Date *</Label>
              <Input id="payment-date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bank-name">Bank Name</Label>
              <Input id="bank-name" placeholder="Enter bank name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment-proof">Upload Payment Proof (for offline)</Label>
              <div className="flex items-center gap-2">
                <Input id="payment-proof" type="file" className="flex-1" />
                <Upload className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">PDF/JPG</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="acknowledgment">Acknowledgment No (auto-generated)</Label>
              <Input id="acknowledgment" value="HIMUDA/2025/ALL/0001" readOnly className="bg-muted" />
            </div>
          </div>
        </div>

        {/* SECTION 8: Declaration */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold">
              8
            </div>
            <h3 className="text-2xl font-bold text-primary">Declaration</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
              <Checkbox id="declaration" className="mt-1" />
              <Label htmlFor="declaration" className="font-normal cursor-pointer leading-relaxed">
                I hereby declare that the information provided is true to the best of my knowledge and I/any of my family members do not own any property under HIMUDA jurisdiction.
              </Label>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
              <Checkbox id="consent" className="mt-1" />
              <Label htmlFor="consent" className="font-normal cursor-pointer leading-relaxed">
                I authorize HIMUDA to verify my details from concerned authorities.
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="digital-signature">Signature (Digital / Upload) *</Label>
              <div className="flex items-center gap-2">
                <Input id="digital-signature" type="file" className="flex-1" />
                <FileText className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">JPG/PNG</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button size="lg" className="w-full md:w-auto px-12 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5" />
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};
