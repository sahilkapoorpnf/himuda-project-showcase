import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ApplicationsTable } from "@/components/ApplicationsTable";
import { EMIPaymentManagement } from "@/components/EMIPaymentManagement";
import { ChangeOwnershipForm } from "@/components/ChangeOwnershipForm";
import { ChangeOwnershipDeathCaseForm } from "@/components/ChangeOwnershipDeathCaseForm";
import { ChangeOwnershipDeathCaseAllLegalHeirsForm } from "@/components/ChangeOwnershipDeathCaseAllLegalHeirsForm";
import { ChangeOwnershipDeathCaseRegisteredWillForm } from "@/components/ChangeOwnershipDeathCaseRegisteredWillForm";
import { ConveyanceDeedForm } from "@/components/ConveyanceDeedForm";
import { NoDueCertificateForm } from "@/components/NoDueCertificateForm";
import { ReallotmentLetterForm } from "@/components/ReallotmentLetterForm";
import { PermissionSaleGiftTransferForm } from "@/components/PermissionSaleGiftTransferForm";
import { PermissionToMortgageForm } from "@/components/PermissionToMortgageForm";
import { TransferLetterOfIntentForm } from "@/components/TransferLetterOfIntentForm";
import { TransferPermissionBeforeCDForm } from "@/components/TransferPermissionBeforeCDForm";

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
          {activeSection === "application-management" && (
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary mb-2">Application Management</h1>
                <p className="text-muted-foreground text-lg">View and manage all your property applications</p>
              </div>
              <ApplicationsTable />
            </div>
          )}
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
          {activeSection === "change-ownership-death-case-all-heirs" && <ChangeOwnershipDeathCaseAllLegalHeirsForm />}
          {activeSection === "change-ownership-death-case-registered-will" && <ChangeOwnershipDeathCaseRegisteredWillForm />}
          {activeSection === "conveyance-deed" && <ConveyanceDeedForm />}
          {activeSection === "no-due-certificate" && <NoDueCertificateForm />}
          {activeSection === "reallotment-letter" && <ReallotmentLetterForm />}
          {activeSection === "permission-sale-gift-transfer" && <PermissionSaleGiftTransferForm />}
          {activeSection === "permission-to-mortgage" && <PermissionToMortgageForm />}
          {activeSection === "transfer-letter-of-intent" && <TransferLetterOfIntentForm />}
          {activeSection === "transfer-permission-before-cd" && <TransferPermissionBeforeCDForm />}
        </main>
      </div>
    </div>
  );
}
