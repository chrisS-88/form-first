export default function TimeGrid({ times, value, onChange }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {times.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`p-6 rounded-lg border transition text-left text-3xl
            ${value === t ? "bg-secondary text-brand-900 border-secondary" : "bg-brand-800 border-brand-700 hover:bg-brand-700"}
          `}>
          {t}
        </button>
      ))}
    </div>
  );
}
