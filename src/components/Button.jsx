export default function Button({
  children,
  onClick,
  variant = "primary",
  className = ""
}) {
  const base = "w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2";
  const type = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    outline: "border border-slate-600 text-slate-300"
  };

  return (
    <button onClick={onClick} className={`${base} ${type[variant]} ${className}`}>
      {children}
    </button>
  );
}
