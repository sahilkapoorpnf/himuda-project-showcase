import { MapPin, Home, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import shimlaGreenValley from "@/assets/shimla-green-valley.jpg";
import dharamshalaMountainView from "@/assets/dharamshala-mountain-view.jpg";
import manaliPinePlots from "@/assets/manali-pine-plots.jpg";
import kulluValleyFlats from "@/assets/kullu-valley-flats.jpg";
import solanPlots from "@/assets/solan-plots.jpg";
import mandiHeightsFlats from "@/assets/mandi-heights-flats.jpg";

const projects = [
  {
    id: 1,
    title: "Green Valley Residency",
    location: "Shimla",
    image: shimlaGreenValley,
    units: 120,
    type: "Apartments",
    status: "Under Construction",
    price: "₹45 Lakhs onwards",
  },
  {
    id: 2,
    title: "Mountain View Apartments",
    location: "Dharamshala",
    image: dharamshalaMountainView,
    units: 85,
    type: "Apartments",
    status: "New Launch",
    price: "₹38 Lakhs onwards",
  },
  {
    id: 3,
    title: "Pine Hills Estate",
    location: "Manali",
    image: manaliPinePlots,
    units: 150,
    type: "Plots",
    status: "Ready to Move",
    price: "₹52 Lakhs onwards",
  },
  {
    id: 4,
    title: "Valley View Homes",
    location: "Kullu",
    image: kulluValleyFlats,
    units: 95,
    type: "Flats",
    status: "Booking Open",
    price: "₹42 Lakhs onwards",
  },
  {
    id: 5,
    title: "Sunrise Residency",
    location: "Solan",
    image: solanPlots,
    units: 110,
    type: "Plots",
    status: "Under Construction",
    price: "₹35 Lakhs onwards",
  },
  {
    id: 6,
    title: "Himalayan Heights",
    location: "Mandi",
    image: mandiHeightsFlats,
    units: 75,
    type: "Flats",
    status: "New Launch",
    price: "₹48 Lakhs onwards",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ready to Move":
      return "bg-green-500";
    case "New Launch":
      return "bg-blue-500";
    case "Under Construction":
      return "bg-orange-500";
    case "Booking Open":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

export const ProjectsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Home className="h-4 w-4 mr-1" />
            Our Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Housing Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover quality homes across Himachal Pradesh. From serene mountain views to modern urban living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge
                  className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white border-0`}
                >
                  {project.status}
                </Badge>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                  {project.type}
                </Badge>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 text-sm mb-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    {project.units} Units
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    {project.price}
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary/90">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Explore All Projects
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
