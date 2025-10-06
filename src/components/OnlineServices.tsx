import { FileText, Download, CreditCard, Home, User, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Apply for Allotment",
    description: "Submit online application",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Check Status",
    description: "Track your application",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CreditCard,
    title: "Online Payment",
    description: "Secure payments",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Download,
    title: "Download Forms",
    description: "Access documents",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: User,
    title: "Registration",
    description: "Register for schemes",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Phone,
    title: "Grievance Portal",
    description: "Submit complaints",
    gradient: "from-red-500 to-orange-500",
  },
];

export const OnlineServices = () => {
  return (
    <div className="bg-gradient-to-br from-card to-accent/5 border rounded-xl shadow-lg sticky top-32 overflow-hidden">
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground p-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <h2 className="text-2xl font-bold relative flex items-center gap-2">
          <CreditCard className="h-6 w-6" />
          Online Services
        </h2>
        <p className="text-sm text-primary-foreground/80 mt-1 relative">Digital services at your fingertips</p>
      </div>

      <div className="p-4 space-y-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center gap-4 p-4">
              <div className={`relative p-3.5 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6" />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
