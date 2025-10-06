import { useState, useEffect } from "react";
import { Building2, Home, Award, Users, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
      <DialogContent className="max-w-3xl border-0 p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">HIMUDA promotional banner</DialogTitle>
          <DialogDescription className="sr-only">Promotional banner for HIMUDA housing projects with mountain video background.</DialogDescription>
        </DialogHeader>
        <div className="relative">
          {/* Full Hero Image */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000"
              alt="Himachal Mountains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center text-white">
              <h2 className="text-5xl font-bold mb-4">
                Your Dream Home<br />in the Himalayas
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-xl">
                Premium housing projects with breathtaking mountain views
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-2xl"
              >
                Explore Projects
              </Button>
              
              {/* Small branding */}
              <p className="mt-6 text-sm text-white/70">
                HIMUDA - Building Dreams Since 1971
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
