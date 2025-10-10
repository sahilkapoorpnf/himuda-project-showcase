import { FileText, Home, CreditCard, FolderOpen, User, Settings, FileCheck, Building2, Receipt, DollarSign, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "applications", label: "Applications Management", icon: FileText },
    { id: "properties", label: "Property Management", icon: Building2 },
    { id: "payments", label: "Payment Management", icon: CreditCard },
    { id: "documents", label: "Document Management", icon: FolderOpen },
    { id: "allotments", label: "Allotment Status", icon: FileCheck },
    { id: "transactions", label: "Transaction History", icon: Receipt },
    { id: "dues", label: "Dues & Payments", icon: DollarSign },
    { id: "profile", label: "Profile Settings", icon: User },
    { id: "family", label: "Family Members", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-card border-r min-h-[calc(100vh-8rem)] sticky top-32">
      <nav className="p-4 space-y-2">
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Main Menu
          </h2>
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
