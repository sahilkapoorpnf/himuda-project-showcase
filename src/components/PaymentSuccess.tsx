import { CheckCircle2, Download, Mail, Smartphone, Home, FileText, Calendar } from 'lucide-react';

interface PaymentSuccessProps {
  applicationNumber?: string;
  amount?: string;
  transactionId?: string;
}

export const PaymentSuccess = ({ 
  applicationNumber = "HIMUDA-2025-001234",
  amount = "₹50,000",
  transactionId = "TXN-2025-789456123"
}: PaymentSuccessProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Icon & Message */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-primary">Payment Successful!</h2>
          <p className="text-xl text-muted-foreground">Your application has been submitted successfully</p>
        </div>
      </div>

      {/* Application Details Card */}
      <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Your Application Number</h3>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl py-6 px-8 inline-block">
            <p className="text-5xl font-bold tracking-wider">{applicationNumber}</p>
          </div>
          <p className="text-white/90">
            Please save this number for tracking your application status
          </p>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="text-xl font-semibold text-primary mb-4">Payment Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Transaction ID:</span>
            <span className="font-semibold text-foreground">{transactionId}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Amount Paid:</span>
            <span className="font-semibold text-primary text-lg">{amount}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Payment Method:</span>
            <span className="font-semibold text-foreground">Credit Card ****3456</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Date & Time:</span>
            <span className="font-semibold text-foreground">
              {new Date().toLocaleString('en-IN', { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Notification Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email Confirmation</h4>
              <p className="text-sm text-muted-foreground">
                A confirmation email with application details has been sent to your registered email address.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
          <div className="flex items-start gap-3">
            <Smartphone className="w-6 h-6 text-secondary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">SMS Notification</h4>
              <p className="text-sm text-muted-foreground">
                An SMS with your application number has been sent to your registered mobile number.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          What's Next?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Application Review</h4>
              <p className="text-sm text-muted-foreground">
                Your application will be reviewed by HIMUDA officials within 5-7 working days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Document Verification</h4>
              <p className="text-sm text-muted-foreground">
                You may be contacted for additional document verification if required.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Allotment Decision</h4>
              <p className="text-sm text-muted-foreground">
                You'll receive an email and SMS notification once the allotment decision is made.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="px-6 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Download Receipt
        </button>
        <button className="px-6 py-4 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
          <Home className="w-5 h-5" />
          Go to Dashboard
        </button>
      </div>

      {/* Support Info */}
      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <p className="text-sm text-muted-foreground mb-2">
          For any queries regarding your application, please contact HIMUDA support
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <span className="text-foreground font-semibold">📧 support@himuda.gov.in</span>
          <span className="text-foreground font-semibold">📞 1800-180-XXXX</span>
        </div>
      </div>
    </div>
  );
};
