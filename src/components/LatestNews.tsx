import { useState, useEffect } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "GOLDEN OPPORTUNITY TO OWN HOUSE IN HIMACHAL",
    date: "04-10-2025",
  },
  {
    id: 2,
    title: "New Housing Scheme Launched in Shimla District",
    date: "28-09-2025",
  },
  {
    id: 3,
    title: "Guidelines for Conveyance Deeds and Lease Deeds Updated",
    date: "10-09-2025",
  },
  {
    id: 4,
    title: "HIMUDA Receives National Award for Urban Planning",
    date: "15-08-2025",
  },
  {
    id: 5,
    title: "Special Discount on Property Registration Fees",
    date: "01-08-2025",
  },
];

export const LatestNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-card to-accent/5 border rounded-xl shadow-lg overflow-hidden">
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground p-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <div className="flex items-center justify-between relative">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Latest News & Updates
            </h2>
            <p className="text-sm text-primary-foreground/80 mt-1">Stay informed with latest announcements</p>
          </div>
          <Button variant="secondary" size="sm" className="shadow-lg">
            View All
          </Button>
        </div>
      </div>

      <div className="relative h-[500px] overflow-hidden bg-gradient-to-b from-accent/5 via-transparent to-accent/5">
        <div className="absolute inset-0 flex flex-col justify-start pt-8">
          <div
            className="transition-transform duration-500 ease-in-out space-y-4 px-6"
            style={{
              transform: `translateY(-${activeIndex * 120}px)`,
            }}
          >
            {newsItems.map((news, index) => (
              <div
                key={news.id}
                className={`p-5 rounded-xl border transition-all duration-500 cursor-pointer ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-primary/10 to-primary/5 border-primary shadow-lg scale-105 ring-2 ring-primary/20"
                    : "bg-background/80 backdrop-blur-sm border-border/50 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-primary animate-pulse' : 'bg-muted-foreground/50'}`} />
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {index === activeIndex ? 'Current' : 'Recent'}
                      </span>
                    </div>
                    <h3 className={`font-bold text-lg mb-2 line-clamp-2 transition-colors ${index === activeIndex ? 'text-primary' : ''}`}>
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {news.date}
                    </p>
                  </div>
                  <Button size="icon" variant={index === activeIndex ? "default" : "ghost"} className="shrink-0">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 border-t bg-gradient-to-r from-accent/5 to-transparent">
        <div className="flex justify-center gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-10 bg-primary shadow-lg"
                  : "w-2.5 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
