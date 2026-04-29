import Hrms from "../contents/hrms/hrms";
import Image from "next/image";

export default function Sidebar({
  open,
  setPage,
}: {
  open: boolean;
  setPage: (page: string) => void;
}) {
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
          <Image
            src="/burger.png"
            alt="burger"
            width={56}
            height={56}
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-semibold">Burger</p>
          <p className="text-green-400 text-sm">● Online</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2 p-4 text-sm">
        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        {/* HRMS Menu */}
        <Hrms setPage={setPage} />

        {/*  */}

        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("absen")}
        >
          Absen
        </button>
        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("cuti")}
        >
          Cuti / Izin / WFH
        </button>
        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("sppd")}
        >
          SPPD
        </button>
        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("lembur")}
        >
          Lembur
        </button>
        <button
          className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2"
          onClick={() => setPage("ganti-password")}
        >
          Ganti Password
        </button>
      </nav>
    </aside>
  );
}
