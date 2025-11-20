import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        overflow-hidden
        fixed inset-0
      "
      style={{
        backgroundImage: "url('/images/loginback.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div
        className="
          relative z-10
          w-[90%] max-w-sm
          p-8 rounded-2xl
          backdrop-blur-[30px]
          bg-white/10
          shadow-xl
          border border-white/30
          flex flex-col
        "
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="
              px-4 py-2 rounded-lg
              bg-white/40
              text-gray-900
              placeholder-white/80
              border border-white/60
              focus:outline-none focus:ring-2 focus:ring-blue-400
              backdrop-blur-sm
            "
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="
              px-4 py-2 rounded-lg
              bg-white/40
              text-gray-900
              placeholder-white/80
              border border-white/60
              focus:outline-none focus:ring-2 focus:ring-blue-400
              backdrop-blur-sm
            "
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="
              w-full bg-blue-600/90
              hover:bg-blue-700
              text-white font-semibold
              py-2 rounded-lg transition-all
              shadow
            "
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-white/80 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
