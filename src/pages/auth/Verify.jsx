import AuthLayout from "../../layouts/AuthLayout";
import { useState } from "react";
import { MOCK_OTP } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";

export default function Verify() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move to next box
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const entered = otp.join("");

    setLoading(true);

    setTimeout(() => {
      if (entered === MOCK_OTP) {
        navigate("/workout");
      } else {
        alert("Invalid OTP (Hint: 1234)");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/20">
            <span className="text-blue-400 text-3xl">🔐</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">Verify Email</h2>
        <p className="text-slate-400 mb-8">Enter the 4-digit OTP sent to your email</p>

        {/* OTP INPUT BOXES */}
        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-14 bg-slate-700 border border-slate-600 text-white text-2xl font-semibold rounded-xl 
              text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold 
          transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Extra Links */}
        <button className="mt-4 text-blue-400 text-sm hover:text-blue-300">
          Resend OTP
        </button>

        <Link
          to="/signup"
          className="mt-3 block text-slate-400 hover:text-white text-sm"
        >
          Back to Signup
        </Link>
      </div>
    </div>
  );
}
