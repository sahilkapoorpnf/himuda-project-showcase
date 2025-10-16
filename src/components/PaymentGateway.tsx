import { CreditCard, Lock, Shield, CheckCircle2, Smartphone, Building2 } from 'lucide-react';

interface PaymentGatewayProps {
  applicationNumber?: string;
  amount?: string;
  onSuccess?: () => void;
}

export const PaymentGateway = ({ 
  applicationNumber = "HIMUDA-2025-001234", 
  amount = "₹50,000",
  onSuccess
}: PaymentGatewayProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-primary">Payment Gateway</h2>
        <p className="text-muted-foreground text-lg">Secure payment for your HIMUDA application</p>
      </div>

      {/* Payment Summary */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/20">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Payment Summary
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-foreground">
            <span>Application Number:</span>
            <span className="font-semibold">{applicationNumber}</span>
          </div>
          <div className="flex justify-between text-foreground">
            <span>Application Fee:</span>
            <span className="font-semibold">₹1,000</span>
          </div>
          <div className="flex justify-between text-foreground">
            <span>Processing Fee:</span>
            <span className="font-semibold">₹500</span>
          </div>
          <div className="flex justify-between text-foreground">
            <span>Initial Deposit:</span>
            <span className="font-semibold">₹48,500</span>
          </div>
          <div className="border-t border-border pt-3 mt-3">
            <div className="flex justify-between text-lg font-bold text-primary">
              <span>Total Amount:</span>
              <span>{amount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="text-xl font-semibold text-primary mb-6">Select Payment Method</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="p-4 rounded-lg border-2 border-primary bg-primary/5 text-primary font-semibold hover:bg-primary hover:text-white transition-all">
            <CreditCard className="w-6 h-6 mx-auto mb-2" />
            Credit/Debit Card
          </button>
          <button className="p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all">
            <Smartphone className="w-6 h-6 mx-auto mb-2 text-foreground" />
            <span className="text-foreground">UPI</span>
          </button>
          <button className="p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all">
            <Building2 className="w-6 h-6 mx-auto mb-2 text-foreground" />
            <span className="text-foreground">Net Banking</span>
          </button>
        </div>

        {/* Card Details Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Card Number *</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={19}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Valid Through *</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={5}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">CVV *</label>
              <input
                type="password"
                placeholder="123"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={3}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Cardholder Name *</label>
            <input
              type="text"
              placeholder="Name as on card"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Secure Payment</h4>
              <p className="text-sm text-muted-foreground">
                Your payment information is encrypted and secure. We use 256-bit SSL encryption for all transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={onSuccess}
            className="w-full px-6 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-5 h-5" />
            Pay {amount}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            By proceeding, you agree to HIMUDA's terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
};
