import { useRouter } from "next/navigation";

export default function Sidebar({ open }) {
  const router = useRouter();
  return (
    <aside
      className={`w-64 bg-gray-900 text-white transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 fixed h-full`}
    >
      <div className="bg-red-700 p-4 font-bold text-lg border-r border-white">
        Burger
      </div>

      <div className="p-4 border-b border-gray-700 flex gap-5 items-center">
        <div className="bg-transparent p-1 rounded">
          <img
            src="/burger.png"
            alt="burger"
            className="w-14 h-14 object-cover"
          />
        </div>

        <div>
          <p className="font-semibold">Burger</p>
          <p className="text-green-400 text-sm">● Online</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2 p-4 text-sm">
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          Dashboard
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          HRMS
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          Absen
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          Cuti / Izin / WFH
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          SPPD
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          Lembur
        </button>
        <button className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
          Ganti Password
        </button>
      </nav>
    </aside>
  );
}
