"use client";
import { useState } from "react";
export default function Hrms({ setPage }: { setPage: (page: string) => void }) {
  const [openHrmsMenu, setOpenHrmsMenu] = useState(false);
  return (
    <div className="text-left hover:bg-gray-600 hover:text-white border-2 border-white p-2">
      <button
        className="text-left w-full h-full"
        onClick={() => setOpenHrmsMenu(!openHrmsMenu)}
      >
        HRMS
      </button>
      {openHrmsMenu && (
        <div className="flex flex-col gap-2 p-2 text-sm items-start border-2 border-gray-600">
          <button
            className="hover:text-green-400"
            onClick={() => setPage("slip_gaji")}
          >
            Slip Gaji
          </button>
          <button
            className="hover:text-green-400"
            onClick={() => setPage("data_karyawan")}
          >
            Data Karyawan
          </button>
        </div>
      )}
    </div>
  );
}
