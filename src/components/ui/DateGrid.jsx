export default function DateGrid({ dates, value, onChange }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {dates.map((date) => {
        const iso = date.toISOString().split("T")[0];
        const selected = value === iso;

        const day = date.toLocaleDateString("en-GB", { weekday: "short" });
        const dateNum = date.getDate();

        return (
          <button
            key={iso}
            onClick={() => onChange(date)}
            className={`
              rounded-xl p-4 border transition-all text-center
              ${selected ? "bg-brand-50/10 border-brand-50/20" : "bg-brand-50/5 border-brand-50/10 hover:bg-brand-50/10"}
            `}>
            <div className="text-xs text-brand-50/60 uppercase tracking-wide">{day}</div>
            <div className="text-lg font-semibold text-brand-50 mt-1">{dateNum}</div>
          </button>
        );
      })}
    </div>
  );
}
