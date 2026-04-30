"use client";
import { useState } from "react";

export default function CutiMenu({
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
        <span>Cuti / Izin / WFH</span>

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
            onClick={() => setPage("cuti")}
            className="
              text-left px-2 py-1 rounded
              transition-all duration-200
              hover:bg-gray-700 hover:text-white
            "
          >
            Cuti
          </button>

          <button
            onClick={() => setPage("izin")}
            className="
              text-left px-2 py-1 rounded
              transition-all duration-200
              hover:bg-gray-700 hover:text-white
            "
          >
            Izin
          </button>
          <button
            onClick={() => setPage("WFH")}
            className="
              text-left px-2 py-1 rounded
              transition-all duration-200
              hover:bg-gray-700 hover:text-white
            "
          >
            WFH
          </button>
        </div>
      </div>
    </div>
  );
}
