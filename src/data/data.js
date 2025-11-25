// src/data/data.js
export const MOCK_OTP = "1234";

export const WORKOUT_DATA = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { id: 1, name: "Barbell Bench Press", sets: "4", reps: "8-12" },
      { id: 2, name: "Incline Dumbbell Press", sets: "3", reps: "10-12" },
      { id: 3, name: "Cable Flyes", sets: "3", reps: "15" },
      { id: 4, name: "Tricep Pushdowns", sets: "4", reps: "12-15" },
      { id: 5, name: "Skull Crushers", sets: "3", reps: "10" }
    ]
  },
  Tuesday: { focus: "Back & Biceps", exercises: [] },
  Wednesday: { focus: "Rest / Cardio", exercises: [] },
  Thursday: { focus: "Shoulders & Abs", exercises: [] },
  Friday: { focus: "Legs", exercises: [] },
  Saturday: { focus: "Full Body Mix", exercises: [] },
  Sunday: { focus: "Rest", exercises: [] },
};

export const KNOWLEDGE_BASE = [
  {
    category: "Training",
    title: "Progressive Overload",
    content: "To build muscle, you must gradually increase the weight..."
  },
  {
    category: "Nutrition",
    title: "Protein Intake",
    content: "1.6g to 2.2g protein per kg of body weight."
  },
  {
    category: "Recovery",
    title: "Sleep Importance",
    content: "Muscles grow while you sleep."
  },
  {
    category: "Technique",
    title: "Time Under Tension",
    content: "Control the eccentric movement."
  }
];

export const DIET_RECOMMENDATIONS = {
  Bulking: ["Oatmeal with Peanut Butter", "Chicken Breast & Rice", "Whole Eggs"],
  Cutting: ["Egg White Omelet", "Grilled Fish", "Chicken Salad"]
};
