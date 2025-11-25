import AuthLayout from "../../layouts/AuthLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to continue">
      <InputField
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField label="Password" type="password" placeholder="••••••••" />

      <Button onClick={() => navigate("/workout")}>Log In</Button>

      <div className="mt-4 text-center text-slate-400 text-sm">
        Don't have an account?
        <Link to="/signup" className="text-blue-400 ml-1 font-bold">
          Sign Up
        </Link>
      </div>
    </AuthLayout>
  );
}
