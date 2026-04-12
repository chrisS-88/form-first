import StepContainer from "../ui/StepContainer.jsx";

export default function StepSuccess() {
  return (
    <StepContainer title="Booking Confirmed">
      <div className="w-full space-y-6 text-brand-50">
        <div className="bg-brand-800 border border-brand-700 p-6 rounded-lg text-center">
          <p className="text-4xl font-semibold mb-2">You're all set</p>
          <p className="text-brand-200 text-xl">Thanks for booking. You’ll receive a confirmation shortly.</p>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            className="inline-block px-6 py-3 sm:px-3 sm:py-2 text-4xl sm:text-base rounded-lg bg-primary text-brand-900 font-semibold hover:bg-primary/80 transition">
            Back to Home
          </a>
        </div>
      </div>
    </StepContainer>
  );
}
