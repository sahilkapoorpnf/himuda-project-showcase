import { FileText, Users, Building, Award, BookOpen, Scale, ExternalLink } from "lucide-react";

const links = [
  { icon: FileText, title: "Right To Service Act", href: "#", color: "from-blue-500 to-blue-600" },
  { icon: BookOpen, title: "Policies & Instructions", href: "#", color: "from-purple-500 to-purple-600" },
  { icon: FileText, title: "Tenders & Notices", href: "#", color: "from-orange-500 to-orange-600" },
  { icon: Users, title: "Citizen Charter", href: "#", color: "from-green-500 to-green-600" },
  { icon: Building, title: "Organizational Structure", href: "#", color: "from-pink-500 to-pink-600" },
  { icon: Award, title: "Awards & Recognition", href: "#", color: "from-yellow-500 to-yellow-600" },
  { icon: Scale, title: "Acts & Rules", href: "#", color: "from-red-500 to-red-600" },
  { icon: FileText, title: "RTI Information", href: "#", color: "from-indigo-500 to-indigo-600" },
];

export const ImportantLinks = () => {
  return (
    <div className="bg-gradient-to-br from-card to-accent/5 border rounded-xl shadow-lg sticky top-32 overflow-hidden">
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground p-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <h2 className="text-2xl font-bold relative flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Important Links
        </h2>
        <p className="text-sm text-primary-foreground/80 mt-1 relative">Quick access to resources</p>
      </div>
      
      <div className="p-4 space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="group relative flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className={`relative p-3 rounded-lg bg-gradient-to-br ${link.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
              <link.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold block group-hover:text-primary transition-colors">
                {link.title}
              </span>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};
