import StepContainer from "../ui/StepContainer.jsx";

export default function StepSuccess() {
  return (
    <StepContainer title="Booking Confirmed">
      <div className="space-y-6 text-brand-50">
        <div className="bg-brand-800 border border-brand-700 p-6 rounded-lg text-center">
          <p className="text-2xl font-semibold mb-2">You're all set</p>
          <p className="text-brand-200">Thanks for booking. You’ll receive a confirmation shortly.</p>
        </div>

        <a
          href="/"
          className="inline-block text-center px-4 py-3 rounded-lg bg-primary text-brand-900 font-semibold hover:bg-primary/80 transition">
          Back to Home
        </a>
      </div>
    </StepContainer>
  );
}
