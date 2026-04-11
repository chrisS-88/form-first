export default function StepFooter({ onBack, onNext, nextDisabled }) {
  return (
    <div className="flex justify-between pt-6">
      <button onClick={onBack} className="px-6 py-3 rounded-lg text-4xl bg-brand-700 hover:bg-brand-600 transition">
        Back
      </button>

      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`px-6 py-3 rounded-lg transition text-4xl
          ${nextDisabled ? "bg-brand-700 text-brand-400 cursor-not-allowed" : "bg-primary text-brand-900 hover:bg-primary/80"}
        `}>
        Next
      </button>
    </div>
  );
}
