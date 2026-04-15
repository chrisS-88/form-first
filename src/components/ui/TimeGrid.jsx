export default function TimeGrid({ times, value, onChange }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {times.map((t) => {
        const selected = value === t;

        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`
              rounded-xl py-3 border transition-all
              text-sm font-medium text-center
              ${selected ? "bg-brand-50/10 border-brand-50/20 text-brand-50" : "bg-brand-50/5 border-brand-50/10 text-brand-50/70 hover:bg-brand-50/10"}
            `}>
            {t}
          </button>
        );
      })}
    </div>
  );
}
