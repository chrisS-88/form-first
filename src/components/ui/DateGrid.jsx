export default function DateGrid({ dates, value, onChange }) {
  return (
    <div className="grid md:grid-cols-4 gap-3">
      {dates.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`p-6 sm:p-3 rounded-lg border transition text-3xl sm:text-base text-center md:text-left
            ${value === d ? "bg-primary text-brand-900 border-primary" : "bg-brand-800 border-brand-700 hover:bg-brand-700"}
          `}>
          {d}
        </button>
      ))}
    </div>
  );
}
