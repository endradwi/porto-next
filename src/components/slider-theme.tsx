import "../app/globals.css";

export default function SliderTheme() {
  return (
    <main className="max-w-max w-screen overflow-hidden">
      <div className="animate-items flex gap-2 whitespace-nowrap">
        {/* Konten asli */}
        <div className="flex gap-2">
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((item) => (
            <div key={item} className="p-20 border-amber-600 bg-slate-400">
              Item {item}
            </div>
          ))}
        </div>
        {/* Duplikat untuk seamless scroll */}
        <div className="flex gap-2">
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((item) => (
            <div
              key={`copy-${item}`}
              className="p-20 border-amber-600 bg-slate-400"
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
