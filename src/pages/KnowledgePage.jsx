import { KNOWLEDGE_BASE } from "../data/data";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-white">Gym Knowledge</h2>
        <p className="text-slate-400">Master the basics</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {KNOWLEDGE_BASE.map((item, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-blue-400 text-xs bg-blue-900/30 px-3 py-1 rounded-full">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
            <p className="text-slate-400 mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
