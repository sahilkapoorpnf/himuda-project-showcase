import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, MapPin, Calendar, CreditCard, User, Home, CheckCircle2 } from "lucide-react";

interface Application {
  id: string;
  propertyName: string;
  applicantName: string;
  applicationDate: string;
  propertyType: string;
  location: string;
  status: string;
  allotmentNumber: string;
  price: string;
}

interface ApplicationDetailsDialogProps {
  application: Application;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplicationDetailsDialog = ({
  application,
  open,
  onOpenChange,
}: ApplicationDetailsDialogProps) => {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      Approved: "default",
      "Under Review": "secondary",
      Pending: "secondary",
      Rejected: "destructive",
    };
    return (
      <Badge variant={variants[status] || "default"} className="text-sm px-3 py-1">
        {status}
      </Badge>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Application Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status Section */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Application Status</p>
                <p className="font-semibold text-lg">{getStatusBadge(application.status)}</p>
              </div>
            </div>
            {application.allotmentNumber !== "-" && (
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Allotment Number</p>
                <p className="font-bold text-primary">{application.allotmentNumber}</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Application Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Application Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Application ID</p>
                <p className="font-medium">{application.id}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Application Date</p>
                <p className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {application.applicationDate}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Applicant Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Applicant Details
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{application.applicantName}</p>
            </div>
          </div>

          <Separator />

          {/* Property Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              Property Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Property Name</p>
                <p className="font-medium">{application.propertyName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Property Type</p>
                <p className="font-medium">{application.propertyType}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {application.location}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-medium flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  {application.price}
                </p>
              </div>
            </div>
          </div>

          {application.status === "Approved" && (
            <>
              <Separator />
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Next Steps</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <span>Complete payment within 30 days to confirm allotment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <span>Submit required documents to the concerned office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <span>Allotment letter will be issued after verification</span>
                  </li>
                </ul>
              </div>
            </>
          )}

          {application.status === "Under Review" && (
            <>
              <Separator />
              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Under Review</h4>
                <p className="text-sm text-muted-foreground">
                  Your application is currently being reviewed by our team. You will be notified once the review is complete.
                </p>
              </div>
            </>
          )}

          {application.status === "Rejected" && (
            <>
              <Separator />
              <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Application Rejected</h4>
                <p className="text-sm text-muted-foreground">
                  Unfortunately, your application has been rejected. Please contact our office for more details.
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
