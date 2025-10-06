import { FileText, Users, Building, Award, BookOpen, Scale, Link as LinkIcon, Sparkles } from "lucide-react";

const links = [
  { icon: FileText, title: "Right To Service Act", href: "#", iconColor: "bg-blue-500", bgColor: "bg-blue-50" },
  { icon: BookOpen, title: "Policies & Instructions", href: "#", iconColor: "bg-purple-500", bgColor: "bg-purple-50" },
  { icon: FileText, title: "Tenders & Notices", href: "#", iconColor: "bg-orange-500", bgColor: "bg-orange-50" },
  { icon: Users, title: "Citizen Charter", href: "#", iconColor: "bg-green-500", bgColor: "bg-green-50" },
  { icon: Building, title: "Organizational Structure", href: "#", iconColor: "bg-pink-500", bgColor: "bg-pink-50" },
  { icon: Award, title: "Awards & Recognition", href: "#", iconColor: "bg-yellow-500", bgColor: "bg-yellow-50" },
  { icon: Scale, title: "Acts & Rules", href: "#", iconColor: "bg-red-500", bgColor: "bg-red-50" },
  { icon: FileText, title: "RTI Information", href: "#", iconColor: "bg-indigo-500", bgColor: "bg-indigo-50" },
];

export const ImportantLinks = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 overflow-hidden h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <LinkIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Important Links</h2>
        </div>
        <p className="text-white/90 text-sm">Quick access to essential resources</p>
      </div>

      {/* Links Grid */}
      <div className="p-6 grid grid-cols-1 gap-3 bg-gradient-to-b from-blue-50/30 to-white max-h-[600px] overflow-y-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`group relative flex items-center gap-4 p-4 rounded-xl border-2 border-transparent hover:border-blue-300 ${link.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
          >
            {/* Icon */}
            <div className={`${link.iconColor} p-3 rounded-xl text-white shadow-md group-hover:rotate-6 transition-transform duration-300`}>
              <link.icon className="h-5 w-5" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {link.title}
              </span>
            </div>

            {/* Arrow */}
            <Sparkles className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};
