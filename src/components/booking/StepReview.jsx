import StepContainer from "../ui/StepContainer.jsx";
import StepFooter from "../ui/StepFooter.jsx";

export default function StepReview({ data, next, back }) {
  return (
    <StepContainer title="Review Your Booking">
      <div className="space-y-6 text-brand-50">
        <div className="bg-brand-800 border border-brand-700 p-4 rounded-lg">
          <h3 className="text-2xl sm:text-lg font-semibold mb-2">Service</h3>
          <p className="text-brand-200 text-xl sm:text-base">{data.service}</p>
        </div>

        <div className="bg-brand-800 border border-brand-700 p-4 rounded-lg">
          <h3 className="text-2xl sm:text-lg font-semibold mb-2">Date & Time</h3>
          <p className="text-brand-200 text-xl sm:text-base">
            {data.date} at {data.time}
          </p>
        </div>

        <div className="bg-brand-800 border border-brand-700 p-4 rounded-lg">
          <h3 className="text-2xl sm:text-lg font-semibold mb-2">Your Details</h3>
          <p className="text-brand-200 text-xl sm:text-base">{data.name}</p>
          <p className="text-brand-200 text-xl sm:text-base">{data.email}</p>
          {data.notes && <p className="text-brand-400 mt-2 italic text-xl sm:text-base">“{data.notes}”</p>}
        </div>
      </div>

      <StepFooter onBack={back} onNext={next} nextDisabled={false} />
    </StepContainer>
  );
}
