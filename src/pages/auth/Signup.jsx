import AuthLayout from "../../layouts/AuthLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <AuthLayout title="Create Account" subtitle="Join the fitness community">
      <InputField label="Full Name" type="text" icon={User} />
      <InputField label="Email" type="email" />
      <InputField label="Password" type="password" />

      <Button onClick={() => navigate("/verify")}>Create Account</Button>

      <div className="text-center mt-4 text-slate-400">
        Already have an account?
        <Link to="/login" className="text-blue-400 ml-1 font-bold">
          Log In
        </Link>
      </div>
    </AuthLayout>
  );
}
