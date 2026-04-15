export default function StepContainer({ title, subtitle, children }) {
  return (
    <div className="text-brand-50 space-y-6">
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-semibold tracking-tight font-heading">{title}</h2>

        {subtitle && <p className="text-sm text-brand-50/60">{subtitle}</p>}
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
