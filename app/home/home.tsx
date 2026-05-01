"use client";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";

import Dashboard from "../contents/dasboard/dashboard";
import SlipGaji from "../contents/hrms/slip_gaji/slip_gaji";
import DataKaryawan from "../contents/hrms/data_karyawan/data_karywan";
import RiwayatAbsen from "../contents/absen/riwayat_absen/R_absen";
import GantiPass from "../contents/ganti_password/ganti_password";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState("dashboard");

  // 🔥 mapping page → component
  const pages: Record<string, React.ReactNode> = {
    dashboard: <Dashboard />,
    slip_gaji: <SlipGaji />,
    data_karyawan: <DataKaryawan />,
    riwayat_absen: <RiwayatAbsen />,
    ganti_password: <GantiPass />,
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar open={open} setPage={setPage} />

      {/* Main */}
      <main
        className={`
          flex-1 flex flex-col transition-all duration-300
          ${open ? "ml-64" : "ml-0"}
        `}
      >
        {/* Topbar */}
        <Topbar
          open={open}
          setOpen={setOpen}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        {/* Content */}
        <div className="flex-1 p-4 overflow-auto">
          {pages[page] || <Dashboard />}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
