export default function ListSelect({ items, value, onChange }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={`w-full p-6 rounded-lg border transition text-left
            ${value === item.id ? "bg-primary text-brand-900 border-primary" : "bg-brand-800 border-brand-700 hover:bg-brand-700"}
          `}>
          <span className="text-4xl font-semibold">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
