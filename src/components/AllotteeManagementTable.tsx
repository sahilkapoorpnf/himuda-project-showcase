import { useState } from "react";
import { Search, Download, Eye } from "lucide-react";
import ExcelJS from "exceljs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Allottee {
  id: number;
  allotteeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectName: string;
  location: string;
  unit: string;
  possessionTaken: string;
  allotmentDate: string;
  plotType: string;
  size: string;
  paymentStatus: string;
  totalAmount: string;
}

const mockAllottees: Allottee[] = [
  {
    id: 1,
    allotteeId: "HIMUDA091983",
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.k@email.com",
    phone: "+91-9876543210",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-A Plot No. 8",
    possessionTaken: "24/06/2025 12:00:00 AM",
    allotmentDate: "29/06/2022 / 16-05-2025",
    plotType: "Type-A Residential",
    size: "420 Sqmt",
    paymentStatus: "Paid",
    totalAmount: "₹45,00,000",
  },
  {
    id: 2,
    allotteeId: "HIMUDA091984",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.s@email.com",
    phone: "+91-9876543211",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-B Plot No. 15",
    possessionTaken: "18/05/2025 10:30:00 AM",
    allotmentDate: "12/03/2022 / 20-04-2025",
    plotType: "Type-B Residential",
    size: "216 Sqmt",
    paymentStatus: "Partial",
    totalAmount: "₹28,00,000",
  },
  {
    id: 3,
    allotteeId: "HIMUDA091985",
    firstName: "Amit",
    lastName: "Singh",
    email: "amit.singh@email.com",
    phone: "+91-9876543212",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-C Plot No. 22",
    possessionTaken: "03/07/2025 02:15:00 PM",
    allotmentDate: "08/01/2023 / 10-06-2025",
    plotType: "Type-C Residential",
    size: "150 Sqmt",
    paymentStatus: "Paid",
    totalAmount: "₹22,00,000",
  },
  {
    id: 4,
    allotteeId: "HIMUDA091986",
    firstName: "Neha",
    lastName: "Verma",
    email: "neha.v@email.com",
    phone: "+91-9876543213",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-D Plot No. 5",
    possessionTaken: "15/04/2025 09:00:00 AM",
    allotmentDate: "22/11/2022 / 01-04-2025",
    plotType: "Type-D Residential",
    size: "135 Sqmt",
    paymentStatus: "Paid",
    totalAmount: "₹18,50,000",
  },
  {
    id: 5,
    allotteeId: "HIMUDA091987",
    firstName: "Vikram",
    lastName: "Thakur",
    email: "vikram.t@email.com",
    phone: "+91-9876543214",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-E(L.I.G.) Plot No. 31",
    possessionTaken: "28/08/2025 03:45:00 PM",
    allotmentDate: "15/04/2023 / 25-07-2025",
    plotType: "Type-E(L.I.G.) Residential",
    size: "105 Sqmt",
    paymentStatus: "Partial",
    totalAmount: "₹12,00,000",
  },
  {
    id: 6,
    allotteeId: "HIMUDA091988",
    firstName: "Anjali",
    lastName: "Patel",
    email: "anjali.p@email.com",
    phone: "+91-9876543215",
    projectName: "Dehra Housing Plots PHASE-II",
    location: "Jawalamukhi, Distt Kangra",
    unit: "Type-F(E.W.S.) Plot No. 12",
    possessionTaken: "10/09/2025 11:20:00 AM",
    allotmentDate: "05/06/2023 / 30-08-2025",
    plotType: "Type-F(E.W.S.) Residential",
    size: "68 Sqmt",
    paymentStatus: "Paid",
    totalAmount: "₹8,50,000",
  },
];

const ITEMS_PER_PAGE = 6;

export function AllotteeManagementTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAllottee, setSelectedAllottee] = useState<Allottee | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredAllottees = mockAllottees.filter((allottee) =>
    Object.values(allottee).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredAllottees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAllottees = filteredAllottees.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleExportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Allottees");

    worksheet.columns = [
      { header: "S.No.", key: "id", width: 10 },
      { header: "Allottee ID", key: "allotteeId", width: 20 },
      { header: "First Name", key: "firstName", width: 15 },
      { header: "Last Name", key: "lastName", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Project Name", key: "projectName", width: 35 },
      { header: "Location", key: "location", width: 30 },
      { header: "Unit", key: "unit", width: 25 },
      { header: "Possession Taken", key: "possessionTaken", width: 25 },
      { header: "Allotment Date", key: "allotmentDate", width: 25 },
    ];

    filteredAllottees.forEach((allottee) => {
      worksheet.addRow(allottee);
    });

    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFD3D3D3" },
    };

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `allottee_management_${new Date().toISOString().split("T")[0]}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleViewDetails = (allottee: Allottee) => {
    setSelectedAllottee(allottee);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Allottee Management</h2>
          <p className="text-muted-foreground">Manage and track all allottees</p>
        </div>
        <button onClick={handleExportToExcel} className="btn-primary flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export to Excel
        </button>
      </div>

      <div className="card-elegant p-6 mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by Allottee ID, Name, or Unit..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
            />
          </div>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90">
            Search
          </button>
        </div>
      </div>

      <div className="card-elegant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">S.No.</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Allottee ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">First Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Last Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Project Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Unit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Possession Taken</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Allotment Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {currentAllottees.map((allottee, index) => (
                <tr key={allottee.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">{startIndex + index + 1}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary font-semibold hover:underline">
                      {allottee.allotteeId}
                    </button>
                  </td>
                  <td className="px-6 py-4">{allottee.firstName}</td>
                  <td className="px-6 py-4">{allottee.lastName}</td>
                  <td className="px-6 py-4">{allottee.email}</td>
                  <td className="px-6 py-4">{allottee.phone}</td>
                  <td className="px-6 py-4">{allottee.projectName}</td>
                  <td className="px-6 py-4">{allottee.location}</td>
                  <td className="px-6 py-4">{allottee.unit}</td>
                  <td className="px-6 py-4">{allottee.possessionTaken}</td>
                  <td className="px-6 py-4">{allottee.allotmentDate}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewDetails(allottee)}
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredAllottees.length)} of{" "}
            {filteredAllottees.length} entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === pageNum
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-muted"
                  } transition-colors`}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && <span className="px-4 py-2">...</span>}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Property Details</DialogTitle>
          </DialogHeader>
          {selectedAllottee && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Allottee ID</p>
                  <p className="font-semibold text-primary">{selectedAllottee.allotteeId}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-semibold">{selectedAllottee.firstName} {selectedAllottee.lastName}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{selectedAllottee.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">{selectedAllottee.phone}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-lg font-bold text-primary mb-4">Property Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Project Name</p>
                    <p className="font-semibold">{selectedAllottee.projectName}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{selectedAllottee.location}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Unit</p>
                    <p className="font-semibold">{selectedAllottee.unit}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Plot Type</p>
                    <p className="font-semibold">{selectedAllottee.plotType}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-semibold">{selectedAllottee.size}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="font-semibold text-secondary">{selectedAllottee.totalAmount}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Possession Taken</p>
                    <p className="font-semibold">{selectedAllottee.possessionTaken}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Allotment Date</p>
                    <p className="font-semibold">{selectedAllottee.allotmentDate}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Payment Status</p>
                    <p className={`font-semibold ${selectedAllottee.paymentStatus === "Paid" ? "text-green-600" : "text-orange-600"}`}>
                      {selectedAllottee.paymentStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
