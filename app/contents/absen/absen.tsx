"use client";
import { useState } from "react";

export default function AbsenMenu({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Parent */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex justify-between items-center w-full
          px-3 py-2 rounded-lg
          transition-all duration-200
          hover:bg-gray-700 hover:pl-5
        "
      >
        <span>Absen</span>

        <span
          className={`
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>

      {/* Submenu */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-40 mt-1" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-1 pl-6 text-sm text-gray-300">
          <button
            onClick={() => setPage("riwayat_absen")}
            className="
              text-left px-2 py-1 rounded
              transition-all duration-200
              hover:bg-gray-700 hover:text-white
            "
          >
            Riwayat Absen
          </button>

          {/* <button
            onClick={() => setPage("rekap_absen")}
            className="
              text-left px-2 py-1 rounded
              transition-all duration-200
              hover:bg-gray-700 hover:text-white
            "
          >
            Rekap Bulanan
          </button> */}
        </div>
      </div>
    </div>
  );
}
