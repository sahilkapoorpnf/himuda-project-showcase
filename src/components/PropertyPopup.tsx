import { useState, useEffect } from "react";
import { Building2, Home, Award, Users, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const PropertyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Hero Section */}
          <div className="relative h-64 -mt-6 -mx-6 mb-6 overflow-hidden rounded-t-lg">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80"
              alt="HIMUDA Projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Build Your Dream Home with HIMUDA</h2>
              <p className="text-lg text-white/90">Affordable Housing Solutions Across Himachal Pradesh</p>
            </div>
          </div>

          {/* Why Choose HIMUDA */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">Why Choose HIMUDA?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Quality Projects</h4>
                <p className="text-sm text-muted-foreground">Premium construction standards</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Affordable Housing</h4>
                <p className="text-sm text-muted-foreground">Best prices guaranteed</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Trusted Brand</h4>
                <p className="text-sm text-muted-foreground">Government backed reliability</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">10,000+ Families</h4>
                <p className="text-sm text-muted-foreground">Happy homeowners</p>
              </div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">🎉 Limited Time Offer!</h3>
              <p className="text-lg mb-4">Register now and get special subsidies on new housing schemes</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                  ✓ Easy EMI Options
                </div>
                <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                  ✓ Prime Locations
                </div>
                <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                  ✓ Fast Approval
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-center">Get in Touch Today!</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-muted-foreground">1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-muted-foreground">info@himuda.gov.in</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Visit Office</p>
                  <p className="text-sm text-muted-foreground">Shimla, HP</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Register Your Interest
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View All Projects
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
