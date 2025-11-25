import { useState } from "react";
import { Dumbbell, Menu, X, BookOpen, Activity, Utensils, LogOut } from "lucide-react";
import NavItem from "../components/NavItem";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const active = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-slate-800 px-4 py-3 flex justify-between items-center z-50">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="w-6 h-6" /> FitTrack
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-full w-64 bg-slate-800 border-r border-slate-700 z-40 transition ${
          isMobileMenuOpen ? "translate-x-0 pt-20" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="px-4 mt-6 space-y-3">
          <NavItem
            label="Knowledge"
            icon={BookOpen}
            active={active("/knowledge")}
            onClick={() => navigate("/knowledge")}
          />
          <NavItem
            label="My Progress"
            icon={Activity}
            active={active("/workout")}
            onClick={() => navigate("/workout")}
          />
          <NavItem
            label="Diet & Nutrition"
            icon={Utensils}
            active={active("/diet")}
            onClick={() => navigate("/diet")}
          />
        </nav>

        <div className="p-4 border-t border-slate-700 mt-auto">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-slate-400"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 pt-20 md:pt-6">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
