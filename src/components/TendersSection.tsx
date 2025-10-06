import { FileText, Calendar, TrendingUp, AlertCircle, Megaphone, Clock, ExternalLink } from "lucide-react";
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Tenders */}
          <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-blue-600 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Active Tenders</h2>
                </div>
                <p className="text-blue-100">Current tender opportunities</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-5 bg-gradient-to-b from-blue-50/30 to-white">
              {tenders.map((tender) => (
                <div
                  key={tender.id}
                  className="group relative bg-white border-2 border-gray-100 hover:border-blue-300 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Status badges */}
                  <div className="flex items-center gap-3 mb-4">
                    <Badge 
                      variant={tender.status === "closing-soon" ? "destructive" : "default"}
                      className={`${tender.status === "closing-soon" ? "bg-red-500" : "bg-green-500"} text-white font-semibold px-3 py-1`}
                    >
                      {tender.status === "closing-soon" ? (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          Closing Soon
                        </>
                      ) : (
                        <>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Open
                        </>
                      )}
                    </Badge>
                    <Badge variant="outline" className="border-blue-300 text-blue-700 font-semibold">
                      {tender.type}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tender.title}
                  </h3>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      Deadline: {tender.deadline}
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* View All Button */}
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                View All Tenders →
              </button>
            </div>
          </div>

          {/* Advertisements & Notices */}
          <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-orange-600 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Megaphone className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Advertisements</h2>
                </div>
                <p className="text-orange-100">Important announcements & notices</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-5 bg-gradient-to-b from-orange-50/30 to-white">
              {advertisements.map((ad) => (
                <div
                  key={ad.id}
                  className="group relative bg-white border-l-4 border-orange-500 rounded-r-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-x-1 cursor-pointer"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full" />
                  
                  <div className="relative">
                    {/* Badge */}
                    <Badge className="mb-3 bg-orange-500 hover:bg-orange-600 text-white">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      New
                    </Badge>

                    {/* Title */}
                    <h3 className="font-bold text-lg mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                      {ad.title}
                    </h3>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600 font-medium">
                        <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                        {ad.date}
                      </div>
                      <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                        Read More
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* View All Button */}
              <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                View All Advertisements →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
