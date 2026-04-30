"use client";
import { useState } from "react";

export default function GantiPass() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validasi sederhana
    if (!oldPass || !newPass || !confirmPass) {
      setMessage("Semua field harus diisi");
      setSuccess(false);
      return;
    }

    if (newPass !== confirmPass) {
      setMessage("Password baru tidak sama");
      setSuccess(false);
      return;
    }

    if (newPass.length < 4) {
      setMessage("Password minimal 4 karakter");
      setSuccess(false);
      return;
    }

    // simulasi (nanti ini diganti ke backend)
    setMessage("Password berhasil diganti");
    setSuccess(true);

    setOldPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-xl mb-4">Password</h1>

      <div className="bg-white shadow rounded-lg max-w-md">
        {/* Header */}
        <div className="bg-gray-700 text-white p-3">
          <span>Form Ganti Password</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {/* Message */}
          {message && (
            <p
              className={`text-sm ${
                success ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Old Password */}
          <div className="flex flex-col">
            <label>Password Lama</label>
            <input
              type="password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label>Password Baru</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label>Konfirmasi Password Baru</label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
