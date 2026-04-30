"use client";
import { useState, useEffect } from "react";

type AbsenData = {
  [key: string]: {
    status: string;
    time: string;
  };
};

export default function RiwayatAbsen() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const currentDay = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 🔥 load dari localStorage (best practice)
  const [data, setData] = useState<AbsenData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("absen");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // 🔥 save ke localStorage
  useEffect(() => {
    localStorage.setItem("absen", JSON.stringify(data));
  }, [data]);

  // 🔥 handle absen
  const handleAbsen = (day: number, status: string) => {
    const time = new Date().toLocaleTimeString();
    const key = `${year}-${month + 1}-${day}`;

    setData((prev) => ({
      ...prev,
      [key]: { status, time },
    }));
  };

  // 🔥 reset data
  const handleReset = () => {
    localStorage.removeItem("absen");
    setData({});
  };

  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-xl mb-4 flex justify-between items-center">
        Riwayat Absensi Bulan Ini
        <button
          onClick={handleReset}
          className="text-xs text-red-500 hover:underline"
        >
          Reset
        </button>
      </h1>

      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="bg-gray-700 text-white p-2 flex justify-between">
          <span>☰ List</span>
          <span>↻</span>
        </div>

        {/* Calendar */}
        <div className="p-6 flex justify-center">
          <div className="p-6 bg-gray-200 rounded-xl border border-gray-300">
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const key = `${year}-${month + 1}-${day}`;
                const item = data[key];

                return (
                  <div
                    key={day}
                    className={`
                      p-2 border rounded flex flex-col gap-1
                      transition-all duration-200
                      ${
                        day === currentDay
                          ? "bg-blue-100 border-blue-400"
                          : "bg-white"
                      }
                      hover:shadow
                    `}
                  >
                    <span className="font-bold">{day}</span>

                    {/* kalau sudah absen */}
                    {item ? (
                      <div className="text-xs">
                        <p
                          className={
                            item.status === "hadir"
                              ? "text-green-500"
                              : item.status === "izin"
                                ? "text-yellow-500"
                                : "text-red-500"
                          }
                        >
                          {item.status}
                        </p>
                        <p>{item.time}</p>
                      </div>
                    ) : day === currentDay ? (
                      // hanya hari ini bisa klik
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => handleAbsen(day, "hadir")}
                          className="text-xs bg-green-500 text-white rounded hover:opacity-80"
                        >
                          Hadir
                        </button>
                        <button
                          onClick={() => handleAbsen(day, "izin")}
                          className="text-xs bg-yellow-500 text-white rounded hover:opacity-80"
                        >
                          Izin
                        </button>
                        <button
                          onClick={() => handleAbsen(day, "sakit")}
                          className="text-xs bg-red-500 text-white rounded hover:opacity-80"
                        >
                          Sakit
                        </button>
                      </div>
                    ) : (
                      // hari lain disable
                      <p className="text-xs text-gray-400">-</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
