import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verify from "./pages/auth/Verify";

// Main pages
import KnowledgePage from "./pages/KnowledgePage";
import WorkoutPage from "./pages/WorkoutPage";
import DietPage from "./pages/DietPage";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />

      {/* Protected app layout */}
      <Route element={<AppLayout />}>
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/diet" element={<DietPage />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
