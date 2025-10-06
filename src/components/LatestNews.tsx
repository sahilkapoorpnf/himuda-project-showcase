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
    <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Latest News & Updates
          </h2>
          <Button variant="secondary" size="sm">
            View All
          </Button>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden bg-gradient-to-b from-accent/5 to-transparent">
        <div className="absolute inset-0 flex flex-col justify-center">
          <div
            className="transition-transform duration-500 ease-in-out space-y-4 p-6"
            style={{
              transform: `translateY(-${activeIndex * 100}px)`,
            }}
          >
            {newsItems.map((news, index) => (
              <div
                key={news.id}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  index === activeIndex
                    ? "bg-primary/10 border-primary shadow-md scale-105"
                    : "bg-background border-border opacity-60"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {news.date}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" className="shrink-0">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      </div>

      <div className="p-4 border-t bg-accent/5">
        <div className="flex justify-center gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
