export default function TimeGrid({ times, value, onChange }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {times.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`p-6 sm:p-3 rounded-lg border transition text-center md:text-left text-3xl sm:text-base
            ${value === t ? "bg-accent text-brand-900 border-accent" : "bg-brand-800 border-brand-700 hover:bg-brand-700"}
          `}>
          {t}
        </button>
      ))}
    </div>
  );
}
