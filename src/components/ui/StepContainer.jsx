export default function StepContainer({ title, children }) {
  return (
    <div className="text-brand-50 space-y-12">
      <h2 className="text-5xl sm:text-2xl text-center font-heading font-extrabold uppercase">{title}</h2>
      {children}
    </div>
  );
}
