import { FileText, Home, CreditCard, FolderOpen, User, Settings, FileCheck, Building2, Receipt, DollarSign, Users, FolderCheck, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const [isChangeOwnershipOpen, setIsChangeOwnershipOpen] = useState(
    activeSection === "change-ownership" || 
    activeSection === "manage-ownership-requests" ||
    activeSection === "change-ownership-death-case" ||
    activeSection === "change-ownership-death-case-all-heirs" ||
    activeSection === "change-ownership-death-case-registered-will"
  );

  const menuItems = [
    { id: "dashboard", label: "Dashboard Summary", icon: Home },
    { id: "scheme-application", label: "Scheme Application / Booking", icon: FileText },
    { id: "allotment-status", label: "Allotment Status & Acceptance", icon: FileCheck },
    { id: "application-management", label: "Application Management", icon: FolderCheck },
    { id: "emi-payment", label: "EMI & Payment Management", icon: CreditCard },
    { id: "possession", label: "Possession Request", icon: Building2 },
    { id: "post-allotment", label: "Post-Allotment Requests", icon: FolderOpen },
    { id: "lease", label: "Lease Management", icon: Receipt },
  ];

  const changeOwnershipItems = [
    { id: "change-ownership", label: "Change of Ownership", icon: FileText },
    { id: "manage-ownership-requests", label: "Manage Requests", icon: FolderCheck },
  ];

  const otherOwnershipItems = [
    { id: "change-ownership-death-case", label: "Change of Ownership (Death Case Unregistered Will)", icon: User },
    { id: "change-ownership-death-case-all-heirs", label: "Change of Ownership (Death Case All Legal Heirs)", icon: User },
    { id: "change-ownership-death-case-registered-will", label: "Change of Ownership (Death Case Registered Will)", icon: User },
  ];

  const postOwnershipItems = [
    { id: "conveyance-deed", label: "Issuance of Conveyance Deed", icon: FileCheck },
    { id: "no-due-certificate", label: "Issue of No Due Certificate", icon: Receipt },
    { id: "reallotment-letter", label: "Issue of Re-allotment Letter", icon: FileText },
    { id: "permission-sale-gift-transfer", label: "Permission for Sale/Gift/Transfer", icon: FileCheck },
    { id: "permission-to-mortgage", label: "Permission to Mortgage", icon: Building2 },
    { id: "transfer-letter-of-intent", label: "Transfer of Letter of Intent", icon: FileText },
    { id: "transfer-permission-before-cd", label: "Transfer Permission (Before CD)", icon: FileCheck },
    { id: "grievance", label: "Grievance / Query", icon: Settings },
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-card to-accent/5 border-r border-border/50 min-h-[calc(100vh-8.5rem)] sticky top-[8.5rem] shadow-lg">
      <nav className="p-6 space-y-1.5">
        <div className="mb-6">
          <h2 className="text-xs font-bold text-primary/60 uppercase tracking-widest px-4 mb-3 flex items-center gap-2">
            <div className="h-0.5 w-3 bg-gradient-to-r from-primary to-transparent" />
            Main Menu
          </h2>
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "text-foreground hover:bg-accent/50 hover:translate-x-1"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              )}
              <div className={cn(
                "p-1.5 rounded-lg transition-all",
                isActive 
                  ? "bg-white/20" 
                  : "bg-accent/20 group-hover:bg-accent/40"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="relative">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse" />
              )}
            </button>
          );
        })}

        {/* Change Ownership Collapsible Section */}
        <Collapsible open={isChangeOwnershipOpen} onOpenChange={setIsChangeOwnershipOpen}>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                (activeSection === "change-ownership" || activeSection === "manage-ownership-requests")
                  ? "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "text-foreground hover:bg-accent/50 hover:translate-x-1"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-lg transition-all",
                (activeSection === "change-ownership" || activeSection === "manage-ownership-requests")
                  ? "bg-white/20" 
                  : "bg-accent/20 group-hover:bg-accent/40"
              )}>
                <Users className="h-4 w-4" />
              </div>
              <span className="relative flex-1 text-left">Change Ownership</span>
              {isChangeOwnershipOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-1">
            {changeOwnershipItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 pl-8 pr-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                    isActive
                      ? "bg-gradient-to-r from-accent via-accent to-secondary text-primary-foreground shadow-lg shadow-accent/20"
                      : "text-foreground hover:bg-accent/30 hover:translate-x-1"
                  )}
                >
                  <div className={cn(
                    "p-1 rounded-lg transition-all",
                    isActive 
                      ? "bg-white/20" 
                      : "bg-accent/20 group-hover:bg-accent/40"
                  )}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="relative text-xs">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {/* Other Ownership Items */}
        {otherOwnershipItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "text-foreground hover:bg-accent/50 hover:translate-x-1"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              )}
              <div className={cn(
                "p-1.5 rounded-lg transition-all",
                isActive 
                  ? "bg-white/20" 
                  : "bg-accent/20 group-hover:bg-accent/40"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="relative">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse" />
              )}
            </button>
          );
        })}

        {/* Post Ownership Items */}
        {postOwnershipItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "text-foreground hover:bg-accent/50 hover:translate-x-1"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              )}
              <div className={cn(
                "p-1.5 rounded-lg transition-all",
                isActive 
                  ? "bg-white/20" 
                  : "bg-accent/20 group-hover:bg-accent/40"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="relative">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Decorative Element */}
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
        <p className="text-xs text-muted-foreground text-center">
          Need help? Contact support
        </p>
      </div>
    </aside>
  );
};
