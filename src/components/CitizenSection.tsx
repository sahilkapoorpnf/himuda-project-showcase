import { Users, MessageSquare, Phone, FileText, Image as ImageIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const facilities = [
  {
    icon: FileText,
    title: "Online Application",
    description: "Apply for schemes online",
  },
  {
    icon: MessageSquare,
    title: "Grievance Portal",
    description: "Register complaints",
  },
  {
    icon: Phone,
    title: "Helpdesk Support",
    description: "24/7 assistance",
  },
  {
    icon: Users,
    title: "Citizen Charter",
    description: "Know your rights",
  },
];

const galleryImages = [
  {
    url: gallery1,
    title: "Modern Housing Complex - Shimla",
  },
  {
    url: gallery2,
    title: "Residential Project Development",
  },
  {
    url: gallery3,
    title: "Completed Township - Kullu",
  },
  {
    url: gallery4,
    title: "Modern Apartments - Dharamshala",
  },
];

export const CitizenSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Citizen Facilitation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Citizen Facilitation</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Access various citizen-centric services and facilities for a seamless experience with HIMUDA.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border rounded-lg hover:border-primary transition-all hover:shadow-md group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8 w-full sm:w-auto">
              Access All Facilities
            </Button>
          </div>

          {/* Photo Gallery */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <ImageIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Photo Gallery</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Explore our completed projects and ongoing developments across Himachal Pradesh.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 bg-white/90 rounded-full">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
