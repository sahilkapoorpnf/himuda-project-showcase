import { useState } from "react";
import { Search, Download } from "lucide-react";
import ExcelJS from "exceljs";

interface Property {
  id: number;
  allotteeId: string;
  name: string;
  phone: string;
  email: string;
  projectName: string;
  propertyLocation: string;
  propertyType: string;
  size: string;
}

const mockProperties: Property[] = [
  {
    id: 1,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Dehra Housing Plots PHASE-II",
    propertyLocation: "Jawalamukhi, Distt Kangra",
    propertyType: "Type-A Plot No. 8",
    size: "420",
  },
  {
    id: 2,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Shimla Valley Estates",
    propertyLocation: "Shimla, HP",
    propertyType: "Type-C Plot No. 15",
    size: "150",
  },
  {
    id: 3,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Kullu Valley Housing",
    propertyLocation: "Kullu, HP",
    propertyType: "Type-B Flat No. 201",
    size: "216",
  },
  {
    id: 4,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Mandi Heights",
    propertyLocation: "Mandi, HP",
    propertyType: "Type-E(L.I.G.) Plot No. 22",
    size: "105",
  },
  {
    id: 5,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Solan Commercial Hub",
    propertyLocation: "Solan, HP",
    propertyType: "Commercial Shop No. 45",
    size: "85",
  },
  {
    id: 6,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Dharamshala Mountain View",
    propertyLocation: "Dharamshala, HP",
    propertyType: "Type-D Plot No. 33",
    size: "135",
  },
  {
    id: 7,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Baddi Industrial Estate",
    propertyLocation: "Baddi, HP",
    propertyType: "Industrial Unit No. 12",
    size: "500",
  },
  {
    id: 8,
    allotteeId: "HIMUDA091983",
    name: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "rajesh.k@email.com",
    projectName: "Kasauli Hills Plots",
    propertyLocation: "Kasauli, HP",
    propertyType: "Type-F(E.W.S.) Plot No. 8",
    size: "68",
  },
];

const ITEMS_PER_PAGE = 6;

export function AllotteePropertiesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProperties = mockProperties.filter((property) =>
    Object.values(property).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleExportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Properties");

    worksheet.columns = [
      { header: "S.No.", key: "id", width: 10 },
      { header: "Allottee ID", key: "allotteeId", width: 20 },
      { header: "Name", key: "name", width: 20 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Project Name", key: "projectName", width: 35 },
      { header: "Property Location", key: "propertyLocation", width: 30 },
      { header: "Property Type", key: "propertyType", width: 25 },
      { header: "Size (Sqmt)", key: "size", width: 15 },
    ];

    filteredProperties.forEach((property) => {
      worksheet.addRow(property);
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
    link.download = `properties_owned_HIMUDA091983_${new Date().toISOString().split("T")[0]}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Properties Own By - HIMUDA091983</h2>
          <p className="text-muted-foreground">All properties purchased by this allottee</p>
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
              placeholder="Search by name, project, location, or property type..."
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
                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Project Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Property Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Property Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Size (Sqmt)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {currentProperties.map((property, index) => (
                <tr key={property.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">{startIndex + index + 1}</td>
                  <td className="px-6 py-4">
                    <span className="text-primary font-semibold">{property.allotteeId}</span>
                  </td>
                  <td className="px-6 py-4">{property.name}</td>
                  <td className="px-6 py-4">{property.phone}</td>
                  <td className="px-6 py-4">{property.email}</td>
                  <td className="px-6 py-4">{property.projectName}</td>
                  <td className="px-6 py-4">{property.propertyLocation}</td>
                  <td className="px-6 py-4">{property.propertyType}</td>
                  <td className="px-6 py-4">{property.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredProperties.length)} of{" "}
            {filteredProperties.length} entries
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
    </>
  );
}
