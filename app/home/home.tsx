"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import AbsenPage from "../contents/absen/page";
import Dashboard from "../contents/dasboard/page";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen w-full bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar open={open} />

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
          <Dashboard />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
