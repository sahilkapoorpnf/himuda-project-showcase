import { Sparkles, TrendingUp } from "lucide-react";

const newsHeadlines = [
  "🏗️ New Smart City Project Launched in Shimla - Investment of ₹500 Crores",
  "🌟 HIMUDA Wins National Award for Sustainable Urban Development 2025",
  "🏘️ 5000+ Affordable Housing Units Approved Across 12 Districts",
  "🚇 Metro Rail Feasibility Study Initiated for Shimla-Solan Corridor",
  "💡 Green Building Initiative - All New Projects to be Eco-Friendly",
  "🎯 Special Housing Scheme for Government Employees Announced",
  "🏆 Himachal Pradesh Ranks #1 in Urban Planning Excellence",
  "🌳 Urban Forest Project - 1 Lakh Trees to be Planted This Year",
  "📱 HIMUDA Mobile App Crosses 5 Lakh Downloads",
  "🏢 New HIMUDA Office Complex Inaugurated in Dharamshala",
];

export const WhatsNewSection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-accent px-6 py-3 rounded-full animate-bounce">
            <Sparkles className="h-5 w-5 text-accent-foreground animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="text-xl font-bold text-accent-foreground uppercase tracking-wider">
              What's New
            </h2>
            <TrendingUp className="h-5 w-5 text-accent-foreground" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </div>

        {/* Scrolling Marquee */}
        <div className="relative">
          <div className="overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 py-4 shadow-2xl">
            <div className="flex animate-marquee-horizontal">
              {[...newsHeadlines, ...newsHeadlines].map((headline, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 mx-6 whitespace-nowrap"
                >
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-white font-semibold text-lg">
                      {headline}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
