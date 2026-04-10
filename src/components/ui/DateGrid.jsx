export default function DateGrid({ dates, value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {dates.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`p-3 rounded-lg border transition text-left
            ${value === d ? "bg-primary text-brand-900 border-primary" : "bg-brand-800 border-brand-700 hover:bg-brand-700"}
          `}>
          {d}
        </button>
      ))}
    </div>
  );
}
