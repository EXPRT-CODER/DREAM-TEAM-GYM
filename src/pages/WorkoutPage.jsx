import { useState } from "react";
import { WORKOUT_DATA } from "../data/data";
import { CheckCircle } from "lucide-react";

export default function WorkoutPage() {
  const today = "Monday";
  const workout = WORKOUT_DATA[today];
  const [completed, setCompleted] = useState({});

  const toggle = (id) =>
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  const progress =
    Math.round(
      (Object.values(completed).filter(Boolean).length /
        workout.exercises.length) *
        100
    ) || 0;

  return (
    <div className="space-y-6">
      <header className="flex justify-between">
        <div>
          <h2 className="text-2xl text-white">Today's Session</h2>
          <p className="text-blue-400">{today}: {workout.focus}</p>
        </div>
        <div className="text-white font-bold">{progress}%</div>
      </header>

      <div className="bg-slate-800 rounded-xl border border-slate-700">
        {workout.exercises.map((ex) => (
          <div
            key={ex.id}
            onClick={() => toggle(ex.id)}
            className="p-4 border-b border-slate-700 flex items-center gap-4 cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                completed[ex.id] ? "bg-green-500 border-green-500" : "border-slate-500"
              }`}
            >
              {completed[ex.id] && <CheckCircle className="w-4 h-4 text-white" />}
            </div>

            <div className="flex-1">
              <h4
                className={`text-lg ${
                  completed[ex.id]
                    ? "text-slate-500 line-through"
                    : "text-white"
                }`}
              >
                {ex.name}
              </h4>
              <p className="text-slate-400 text-sm">
                {ex.sets} Sets × {ex.reps}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
