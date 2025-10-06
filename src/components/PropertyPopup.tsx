import { useState, useEffect } from "react";
import { X, MapPin, Home, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  status: "completed" | "upcoming" | "hot";
  price: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Green Valley Residency",
    location: "Shimla",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
    status: "hot",
    price: "₹45 Lakhs onwards"
  },
  {
    id: 2,
    title: "Mountain View Apartments",
    location: "Dharamshala",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80",
    status: "upcoming",
    price: "₹38 Lakhs onwards"
  },
  {
    id: 3,
    title: "Pine Hills Estate",
    location: "Manali",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80",
    status: "completed",
    price: "₹52 Lakhs onwards"
  }
];

export const PropertyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "hot":
        return "bg-destructive text-destructive-foreground";
      case "upcoming":
        return "bg-blue-500 text-white";
      case "completed":
        return "bg-green-500 text-white";
    }
  };

  const getStatusIcon = (status: Property["status"]) => {
    switch (status) {
      case "hot":
        return <TrendingUp className="h-4 w-4" />;
      case "upcoming":
        return <Home className="h-4 w-4" />;
      case "completed":
        return <Home className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Featured Properties
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 ${getStatusColor(property.status)} flex items-center gap-1`}>
                  {getStatusIcon(property.status)}
                  {property.status.toUpperCase()}
                </Badge>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <p className="text-primary font-bold mb-3">{property.price}</p>
                <Button className="w-full" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t text-center">
          <Button variant="outline" onClick={() => setIsOpen(false)} size="lg">
            View All Properties
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
