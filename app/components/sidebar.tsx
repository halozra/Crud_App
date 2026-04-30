"use client";
import Image from "next/image";
import Hrms from "../contents/hrms/hrms";
import AbsenMenu from "../contents/absen/absen";
import CutiMenu from "../contents/cuti/cuti";

export default function Sidebar({
  open,
  setPage,
}: {
  open: boolean;
  setPage: (page: string) => void;
}) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full z-40
        w-64 bg-gray-900 text-white
        transform transition-all duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        shadow-lg
      `}
    >
      {/* Logo */}
      <div className="bg-red-700 p-4 font-bold text-lg flex items-center gap-2">
        <span>Burger Sdm</span>
      </div>

      {/* Profile */}
      <div className="p-4 border-b border-gray-700 flex gap-4 items-center">
        <div className="w-14 h-14 relative rounded-full overflow-hidden border border-gray-600">
          <Image src="/burger.png" alt="avatar" fill className="object-cover" />
        </div>

        <div>
          <p className="font-semibold">Burger</p>
          <p className="text-green-400 text-xs">● Online</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 p-3 text-sm">
        <SidebarItem onClick={() => setPage("dashboard")} label="Dashboard" />

        {/* HRMS */}
        <Hrms setPage={setPage} />

        <AbsenMenu setPage={setPage} />
        <CutiMenu setPage={setPage} />
        <SidebarItem onClick={() => setPage("sppd")} label="SPPD" />
        <SidebarItem onClick={() => setPage("lembur")} label="Lembur" />
        <SidebarItem
          onClick={() => setPage("ganti_password")}
          label="Ganti Password"
        />
      </nav>
    </aside>
  );
}

function SidebarItem({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="
        text-left px-3 py-2 rounded-lg
        transition-all duration-200
        hover:bg-gray-700 hover:pl-5
        active:scale-[0.98]
      "
    >
      {label}
    </button>
  );
}
