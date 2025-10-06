import { FileText, Users, Building, Award, BookOpen, Scale } from "lucide-react";

const links = [
  { icon: FileText, title: "Right To Service Act", href: "#" },
  { icon: BookOpen, title: "Policies & Instructions", href: "#" },
  { icon: FileText, title: "Tenders & Notices", href: "#" },
  { icon: Users, title: "Citizen Charter", href: "#" },
  { icon: Building, title: "Organizational Structure", href: "#" },
  { icon: Award, title: "Awards & Recognition", href: "#" },
  { icon: Scale, title: "Acts & Rules", href: "#" },
  { icon: FileText, title: "RTI Information", href: "#" },
];

export const ImportantLinks = () => {
  return (
    <div className="bg-card border rounded-lg shadow-sm sticky top-32">
      <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Important Links</h2>
      </div>
      
      <div className="p-4 space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-all group border border-transparent hover:border-primary/20"
          >
            <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <link.icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
