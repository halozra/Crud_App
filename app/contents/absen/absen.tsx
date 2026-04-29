"use client";
import { useState, useEffect } from "react";

type AbsenData = {
  [key: number]: {
    status: string;
    time: string;
  };
};

export default function AbsenPage() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const currentDay = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // load dari localStorage
  const [data, setData] = useState<AbsenData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("absen");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // save ke localStorage
  useEffect(() => {
    localStorage.setItem("absen", JSON.stringify(data));
  }, [data]);

  const handleAbsen = (day: number, status: string) => {
    const time = new Date().toLocaleTimeString();

    setData({
      ...data,
      [day]: { status, time },
    });
  };

  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-xl mb-4">Absensi Bulan Ini</h1>

      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="bg-gray-700 text-white p-2 flex justify-between">
          <span>☰ List</span>
          <span>↻</span>
        </div>

        {/* Table */}
        <div className="p-6 grid-cols-2 text-center text-gray-500 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="p-6 bg-gray-200 rounded-xl border-2 border-gray-300 w-auto h-auto">
              <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const item = data[day];

                  return (
                    <div
                      key={day}
                      className="p-2 border rounded bg-white flex flex-col gap-1"
                    >
                      <span className="font-bold">{day}</span>

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
                      ) : (
                        day === currentDay && (
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => handleAbsen(day, "hadir")}
                              className="text-xs bg-green-500 text-white rounded"
                            >
                              Hadir
                            </button>
                            <button
                              onClick={() => handleAbsen(day, "izin")}
                              className="text-xs bg-yellow-500 text-white rounded"
                            >
                              Izin
                            </button>
                            <button
                              onClick={() => handleAbsen(day, "sakit")}
                              className="text-xs bg-red-500 text-white rounded"
                            >
                              Sakit
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
