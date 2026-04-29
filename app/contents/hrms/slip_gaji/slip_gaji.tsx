export default function Slip_gaji() {
  const data = [
    {
      id: 1,
      nama: "admin ",
      nik: "123456",
      unit: "IT",
      bulan: "Juni - 2024",
    },
    {
      id: 2,
      nama: "admin ",
      nik: "654321",
      unit: "HR",
      bulan: "Juli - 2024",
    },
  ];

  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-xl mb-4">RINCIAN GAJI</h1>

      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="bg-gray-700 text-white p-2 flex justify-between">
          <span>☰ List</span>
          <span>🔍 ↻</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Nama Karyawan</th>
                <th className="p-2 border">NIK</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">Bulan - Tahun</th>
                <th className="p-2 border">Detail</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{item.nama}</td>
                  <td className="p-2 border">{item.nik}</td>
                  <td className="p-2 border">{item.unit}</td>
                  <td className="p-2 border">{item.bulan}</td>
                  <td className="p-2 border text-red-500 cursor-pointer">📄</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer (simple pagination dummy) */}
        <div className="flex justify-between p-3 text-sm text-gray-500">
          <span>Showing 1 to 10 entries</span>
          <div className="flex gap-2">
            <button className="px-2 border">1</button>
            <button className="px-2 border">2</button>
            <button className="px-2 border">3</button>
          </div>
        </div>
      </div>
    </div>
  );
}
