export default function StepFooter({ onBack, onNext, nextDisabled }) {
  return (
    <div className="flex justify-between pt-6">
      <button onClick={onBack} className="px-4 py-2 rounded-lg bg-brand-700 hover:bg-brand-600 transition">
        Back
      </button>

      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`px-4 py-2 rounded-lg transition
          ${nextDisabled ? "bg-brand-700 text-brand-400 cursor-not-allowed" : "bg-primary text-brand-900 hover:bg-primary/80"}
        `}>
        Next
      </button>
    </div>
  );
}
