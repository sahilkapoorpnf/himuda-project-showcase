import { FileText, Download, CreditCard, Home, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Apply for Allotment",
    description: "Submit online application for property allotment",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Check Application Status",
    description: "Track your application progress",
    color: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Online Payment",
    description: "Make payments securely online",
    color: "bg-purple-500",
  },
  {
    icon: Download,
    title: "Download Forms",
    description: "Access all necessary documents",
    color: "bg-orange-500",
  },
  {
    icon: User,
    title: "Registration Portal",
    description: "Register for new schemes",
    color: "bg-pink-500",
  },
  {
    icon: Phone,
    title: "Grievance Redressal",
    description: "Submit your complaints online",
    color: "bg-red-500",
  },
];

export const OnlineServices = () => {
  return (
    <div className="bg-card border rounded-lg shadow-sm sticky top-32">
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Online Services</h2>
        <p className="text-sm text-primary-foreground/80 mt-1">Quick access to digital services</p>
      </div>

      <div className="p-4 space-y-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border hover:border-primary transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-transparent">
              <div className={`p-3 rounded-lg ${service.color} text-white shrink-0`}>
                <service.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Access →
            </Button>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-accent/5">
        <Button variant="outline" className="w-full">
          View All Services
        </Button>
      </div>
    </div>
  );
};
