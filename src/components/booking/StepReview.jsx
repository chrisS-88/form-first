import StepContainer from "../ui/StepContainer.jsx";
import StepFooter from "../ui/StepFooter.jsx";

export default function StepReview({ step, data, next, back }) {
  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <StepContainer title="Review your booking" subtitle="Almost done — just confirm your details">
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Service</span>
            <span className="text-sm font-medium capitalize text-white">{data.service}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Date</span>
            <span className="text-sm font-medium text-white">{formatDate(data.date)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Time</span>
            <span className="text-sm font-medium text-white">{data.time}</span>
          </div>

          <div className="border-t border-white/10 my-2" />

          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Name</span>
            <span className="text-sm font-medium text-white">{data.name}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-white/50">Email</span>
            <span className="text-sm font-medium text-white">{data.email}</span>
          </div>

          {data.notes && (
            <>
              <div className="border-t border-white/10 my-2" />
              <div>
                <span className="text-sm text-white/50 block mb-1">Notes</span>
                <p className="text-sm text-white/70 italic">“{data.notes}”</p>
              </div>
            </>
          )}
        </div>

        <p className="text-xs text-white/40 text-center">Please confirm your details before continuing</p>
      </div>

      <StepFooter step={step} onBack={back} onNext={next} nextDisabled={false} />
    </StepContainer>
  );
}
