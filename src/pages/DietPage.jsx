import { useState } from "react";
import { DIET_RECOMMENDATIONS } from "../data/data";
import { Droplets, Utensils } from "lucide-react";

export default function DietPage() {
  const [goal, setGoal] = useState("Bulking");
  const [water, setWater] = useState(3);

  return (
    <div className="space-y-6">
      <header className="flex justify-between">
        <h2 className="text-2xl text-white">Nutrition Tracker</h2>

        <select
          className="bg-slate-800 text-blue-400"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="Bulking">Bulking</option>
          <option value="Cutting">Cutting</option>
        </select>
      </header>

      {/* Water */}
      <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800">
        <div className="flex items-center gap-2 mb-4">
          <Droplets className="text-blue-400" />
          <h3 className="text-white">Water Intake</h3>
        </div>

        <div className="flex gap-2 flex-wrap">
          {[...Array(8)].map((_, i) => (
            <button
              key={i}
              onClick={() => setWater(i + 1)}
              className={`h-10 w-8 rounded-md ${
                i < water ? "bg-blue-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>

        <p className="text-blue-300 mt-4">{water * 250}ml today</p>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Utensils className="text-green-400" />
          <h3 className="text-white">Recommended Meals</h3>
        </div>

        <ul className="text-slate-300 space-y-2">
          {DIET_RECOMMENDATIONS[goal].map((i, idx) => (
            <li key={idx}>• {i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
