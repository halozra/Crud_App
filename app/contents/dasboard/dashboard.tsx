export default function Dashboard() {
  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-xl mb-4">DAFTAR CUTI DAN SPPD HARI INI</h1>

      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="bg-gray-700 text-white p-2 flex justify-between">
          <span>☰ List</span>
          <span>↻</span>
        </div>

        {/* Table */}
        <div className="p-6 grid grid-cols-2 text-center text-gray-500">
          <div>CUTI</div>
          <div>SPPD</div>
        </div>
      </div>
    </div>
  );
}
