export default function StepContainer({ title, children }) {
  return (
    <div className="text-brand-50 space-y-8">
      <h2 className="text-4xl font-heading font-extrabold uppercase">{title}</h2>
      {children}
    </div>
  );
}
