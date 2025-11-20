import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    setError("");
  };

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
        backgroundImage: "url('/images/signupback.jpg')",
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
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Sign Up
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-2">{error}</p>
        )}

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="
              px-4 py-2 rounded-lg
              bg-white/40
              text-gray-900
              placeholder-white/80
              border border-white/60
              focus:outline-none focus:ring-2 focus:ring-blue-400
              backdrop-blur-sm
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="
              px-4 py-2 rounded-lg
              bg-white/40
              text-gray-900
              placeholder-white/80
              border border-white/60
              focus:outline-none focus:ring-2 focus:ring-blue-400
              backdrop-blur-sm
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="
              px-4 py-2 rounded-lg
              bg-white/40
              text-gray-900
              placeholder-white/80
              border border-white/60
              focus:outline-none focus:ring-2 focus:ring-blue-400
              backdrop-blur-sm
            "
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
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-white/80 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
