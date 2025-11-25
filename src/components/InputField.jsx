import { Mail, Lock } from "lucide-react";

export default function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {Icon ? (
            <Icon className="h-5 w-5 text-slate-500" />
          ) : type === "email" ? (
            <Mail className="h-5 w-5 text-slate-500" />
          ) : (
            <Lock className="h-5 w-5 text-slate-500" />
          )}
        </div>
        <input
          type={type}
          className="block w-full pl-10 pr-3 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
