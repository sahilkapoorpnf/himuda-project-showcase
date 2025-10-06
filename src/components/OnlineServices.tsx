import { FileText, Download, CreditCard, Home, User, Phone, MousePointerClick, Zap } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Apply for Allotment",
    description: "Submit online application",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-50"
  },
  {
    icon: FileText,
    title: "Check Status",
    description: "Track your application",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-50"
  },
  {
    icon: CreditCard,
    title: "Online Payment",
    description: "Secure payments",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-50"
  },
  {
    icon: Download,
    title: "Download Forms",
    description: "Access documents",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-50"
  },
  {
    icon: User,
    title: "Registration",
    description: "Register for schemes",
    color: "bg-pink-500",
    hoverColor: "hover:bg-pink-50"
  },
  {
    icon: Phone,
    title: "Grievance Portal",
    description: "Submit complaints",
    color: "bg-red-500",
    hoverColor: "hover:bg-red-50"
  },
];

export const OnlineServices = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-t-4 border-green-500 overflow-hidden h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <MousePointerClick className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Online Services</h2>
        </div>
        <p className="text-white/90 text-sm">Digital services at your fingertips</p>
      </div>

      {/* Services Grid */}
      <div className="p-6 grid grid-cols-1 gap-3 bg-gradient-to-b from-green-50/30 to-white max-h-[600px] overflow-y-auto">
        {services.map((service, index) => (
          <button
            key={index}
            className={`group relative flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 ${service.hoverColor} hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] text-left`}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Icon with glow effect */}
            <div className="relative">
              <div className={`${service.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="h-6 w-6" />
              </div>
              <Zap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base mb-1 text-gray-800 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">
                {service.description}
              </p>
            </div>

            {/* Action indicator */}
            <div className="shrink-0 p-2 rounded-full bg-green-100 group-hover:bg-green-500 transition-colors">
              <MousePointerClick className="h-4 w-4 text-green-600 group-hover:text-white transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
