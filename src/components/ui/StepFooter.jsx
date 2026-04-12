export default function StepFooter({ onBack, onNext, nextDisabled }) {
  return (
    <div className="flex justify-between pt-2">
      <div className="flex gap-4">
        <a
          href="/"
          className="inline-block px-6 py-3 sm:px-3 sm:py-2 text-4xl sm:text-xl rounded-lg bg-secondary text-brand-900 font-semibold hover:bg-secondary/80 transition">
          Cancel
        </a>
        <button
          onClick={onBack}
          className="px-6 py-3 sm:px-3 sm:py-2 rounded-lg text-4xl sm:text-xl bg-brand-700 hover:bg-brand-600 transition">
          Back
        </button>
      </div>

      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`px-6 py-3 sm:px-3 sm:py-2 rounded-lg transition text-4xl sm:text-xl
          ${nextDisabled ? "bg-brand-700 text-brand-400 cursor-not-allowed" : "bg-primary text-brand-900 hover:bg-primary/80"}
        `}>
        Next
      </button>
    </div>
  );
}
