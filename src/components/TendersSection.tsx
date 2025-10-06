import { FileText, Calendar, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tenders = [
  {
    id: 1,
    title: "Construction of Residential Complex at Shimla",
    type: "Construction",
    deadline: "15-11-2025",
    status: "open",
  },
  {
    id: 2,
    title: "Supply of Construction Materials",
    type: "Supply",
    deadline: "20-10-2025",
    status: "closing-soon",
  },
  {
    id: 3,
    title: "Maintenance of HIMUDA Properties",
    type: "Maintenance",
    deadline: "30-10-2025",
    status: "open",
  },
];

const advertisements = [
  {
    id: 1,
    title: "Recruitment for Junior Engineer - Civil",
    date: "05-10-2025",
  },
  {
    id: 2,
    title: "Notice for Property Auction - Dharamshala",
    date: "28-09-2025",
  },
  {
    id: 3,
    title: "Public Notice - Change in Office Timings",
    date: "15-09-2025",
  },
];

export const TendersSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tenders */}
          <div className="bg-card border rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Active Tenders
              </h2>
              <p className="text-blue-100 mt-1">Current tender opportunities</p>
            </div>

            <div className="p-6 space-y-4">
              {tenders.map((tender) => (
                <div
                  key={tender.id}
                  className="border rounded-lg p-4 hover:border-primary transition-all hover:shadow-md group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={tender.status === "closing-soon" ? "destructive" : "default"}>
                      {tender.status === "closing-soon" ? (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      )}
                      {tender.status === "closing-soon" ? "Closing Soon" : "Open"}
                    </Badge>
                    <Badge variant="outline">{tender.type}</Badge>
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {tender.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Deadline: {tender.deadline}
                    </div>
                    <Button size="sm" variant="ghost">
                      View Details →
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-4">
                View All Tenders
              </Button>
            </div>
          </div>

          {/* Advertisements */}
          <div className="bg-card border rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                Advertisements & Notices
              </h2>
              <p className="text-orange-100 mt-1">Important announcements</p>
            </div>

            <div className="p-6 space-y-4">
              {advertisements.map((ad) => (
                <div
                  key={ad.id}
                  className="border-l-4 border-primary pl-4 py-3 hover:bg-accent/5 transition-all group cursor-pointer"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {ad.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {ad.date}
                    </div>
                    <Button size="sm" variant="ghost">
                      Read More →
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-4">
                View All Advertisements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
