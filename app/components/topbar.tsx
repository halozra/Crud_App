"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Topbar({ open, setOpen, showMenu, setShowMenu }) {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/login");
  };

  // close dropdown kalau klik luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowMenu]);

  return (
    <header className="bg-red-700 text-white px-4 py-3 flex justify-between items-center shadow-md">
      {/* Sidebar toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="
          text-xl px-2 py-1 rounded
          transition-all duration-200
          hover:bg-red-600 active:scale-95
        "
      >
        {open ? "☰" : "☰"}
      </button>

      {/* Right menu */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="
            px-3 py-1 rounded-lg
            transition-all duration-200
            hover:bg-red-600
          "
        >
          admin ⌄
        </button>

        {/* Dropdown */}
        <div
          className={`
            absolute right-0 mt-2 w-40
            bg-white text-black rounded-lg shadow-lg
            overflow-hidden
            transition-all duration-200 origin-top-right
            ${showMenu ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
          `}
        >
          <button
            onClick={handleLogout}
            className="
              w-full text-left px-4 py-2
              hover:bg-gray-100
              transition-colors
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
