import { useRouter } from "next/navigation";

export default function Topbar({ open, setOpen, showMenu, setShowMenu }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/login");
  };
  return (
    <header className="bg-red-700 text-white p-4 flex justify-between relative">
      <button onClick={() => setOpen(!open)} className="text-xl">
        {open ? ">" : "☰"}
      </button>

      <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)}>admin</button>

        {showMenu && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow rounded w-32">
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
