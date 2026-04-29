"use client";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import AbsenPage from "../contents/absen/absen";
import Dashboard from "../contents/dasboard/dashboard";
import Slip_gaji from "../contents/hrms/slip_gaji/slip_gaji";
import Data_karyawan from "../contents/hrms/data_karyawan/data_karywan";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen w-full bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar open={open} setPage={setPage} />

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300 ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        {/* Topbar */}
        <Topbar
          open={open}
          setOpen={setOpen}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        {/* Content */}
        <div className=" h-full justify-center flex">
          {page === "dashboard" && <Dashboard />}
          {page === "absen" && <AbsenPage />}
          {page === "slip_gaji" && <Slip_gaji />}
          {page === "data_karyawan" && <Data_karyawan />}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
