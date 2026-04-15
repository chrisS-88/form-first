export default function ListSelect({ items, value, onChange }) {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const selected = value === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              w-full text-left rounded-xl p-4
              border transition-all duration-200
              flex items-center justify-between
              
              ${selected ? "bg-brand-50/10 border-brand-50/20" : "bg-brand-50/5 border-brand-50/10 hover:bg-brand-50/10"}
            `}>
            {/* Left content */}
            <div>
              <div className="text-sm font-medium text-brand-50">{item.label}</div>
              <div className="text-xs text-brand-50/50">60 min session</div>
            </div>

            {/* Right indicator */}
            <div
              className={`
                w-5 h-5 rounded-full border flex items-center justify-center
                transition-all
                ${selected ? "border-brand-50 bg-brand-50" : "border-brand-50/30"}
              `}>
              {selected && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
