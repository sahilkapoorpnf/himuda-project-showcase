import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ApplicationsTable } from "@/components/ApplicationsTable";
import { EMIPaymentManagement } from "@/components/EMIPaymentManagement";
import { ChangeOwnershipForm } from "@/components/ChangeOwnershipForm";
import { ChangeOwnershipDeathCaseForm } from "@/components/ChangeOwnershipDeathCaseForm";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("applications");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-32">
        <DashboardSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 p-8">
          {activeSection === "applications" && <ApplicationsTable />}
          {activeSection === "properties" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-primary">Property Management</h2>
              <p className="text-muted-foreground mt-2">Coming soon...</p>
            </div>
          )}
          {activeSection === "payments" && <EMIPaymentManagement />}
          {activeSection === "documents" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-primary">Document Management</h2>
              <p className="text-muted-foreground mt-2">Coming soon...</p>
            </div>
          )}
          {activeSection === "profile" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-primary">Profile Settings</h2>
              <p className="text-muted-foreground mt-2">Coming soon...</p>
            </div>
          )}
          {activeSection === "change-ownership" && <ChangeOwnershipForm />}
          {activeSection === "change-ownership-death-case" && <ChangeOwnershipDeathCaseForm />}
        </main>
      </div>
    </div>
  );
}
