import { Newspaper, ChevronRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: 1,
    title: "GOLDEN OPPORTUNITY TO OWN HOUSE IN HIMACHAL",
    date: "04-10-2025",
    category: "Scheme",
    tag: "NEW"
  },
  {
    id: 2,
    title: "New Housing Scheme Launched in Shimla District",
    date: "28-09-2025",
    category: "Launch",
    tag: "HOT"
  },
  {
    id: 3,
    title: "Guidelines for Conveyance Deeds and Lease Deeds Updated",
    date: "10-09-2025",
    category: "Policy",
    tag: ""
  },
  {
    id: 4,
    title: "HIMUDA Receives National Award for Urban Planning",
    date: "15-08-2025",
    category: "Achievement",
    tag: ""
  },
  {
    id: 5,
    title: "Special Discount on Property Registration Fees",
    date: "01-08-2025",
    category: "Offer",
    tag: "LIMITED"
  },
];

export const LatestNews = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-t-4 border-orange-500 overflow-hidden h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Newspaper className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Latest News & Updates</h2>
        </div>
        <p className="text-white/90 text-sm">Stay informed with recent announcements</p>
      </div>

      {/* News List */}
      <div className="p-6 space-y-3 bg-gradient-to-b from-orange-50/50 to-white max-h-[600px] overflow-y-auto">
        {newsItems.map((news, index) => (
          <div
            key={news.id}
            className="group relative bg-white border-l-4 border-orange-500 rounded-r-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-x-1 cursor-pointer"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full" />
            
            <div className="relative">
              {/* Category and Tag */}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200">
                  {news.category}
                </Badge>
                {news.tag && (
                  <Badge className="text-xs bg-red-500 text-white animate-pulse">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {news.tag}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h3 className="font-bold text-base mb-3 text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                {news.title}
              </h3>

              {/* Date and Arrow */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">{news.date}</span>
                <ChevronRight className="h-5 w-5 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 border-t">
        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
          View All News →
        </button>
      </div>
    </div>
  );
};
