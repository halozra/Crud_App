"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);
  const [message, setMesssage] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      setAccess(true);
      localStorage.setItem("username", username);
      setLogin(true);

      setTimeout(() => {
        setMesssage("login success");
        router.push("/");
      }, 800);
    } else {
      setAccess(false);
      setLogin(false);
      setTimeout(() => {
        setMesssage("login failed");
      }, 500);
    }
    setUsername("");
    setPassword("");
  };
  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) {
      setUsername(saved);
    }
  }, []);
  return (
    <div className="flex flex-col bg-gray-100 p-10 rounded-xl border-2 border-gray-200 text-black">
      <p className={access ? "text-green-500" : "text-red-500"}>{message}</p>
      <h1 className="flex justify-center mb-10 ">
        Welcome to login page{username}
      </h1>

      <form
        action=""
        className="flex justify-center flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            className="flex pl-2 bg-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">Password:</label>
          <input
            type="text"
            className="flex pl-2 bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="flex justify-center mt-5 border-2 border-green-500 rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}
