export default function StepFooter({ onBack, onNext, step, nextDisabled }) {
  const isFirstStep = step === 1;
  const isFinalStep = step === 4;

  return (
    <div className="flex items-center justify-between pt-6 mt-auto">
      <a href="/" className="text-sm text-brand-50/50 hover:text-brand-50 transition">
        Cancel
      </a>

      <div className="flex items-center gap-3">
        {!isFirstStep && (
          <button onClick={onBack} className="px-4 py-2 text-sm rounded-lg bg-brand-50/5 hover:bg-brand-50/10 transition">
            Back
          </button>
        )}

        <button
          onClick={onNext}
          disabled={nextDisabled}
          className={`
            px-4 py-2 text-sm rounded-lg font-medium transition
            ${nextDisabled ? "bg-brand-50/10 text-brand-50/40 cursor-not-allowed" : "bg-brand-50 text-black hover:bg-brand-50/90"}
          `}>
          {isFinalStep ? "Confirm" : "Next"}
        </button>
      </div>
    </div>
  );
}
