import { useState } from "react";
import StepService from "./StepService.jsx";
import StepDateTime from "./StepDateTime.jsx";
import StepDetails from "./StepDetails.jsx";
import StepReview from "./StepReview.jsx";
import StepSuccess from "./StepSuccess.jsx";

export default function BookingFlow() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    notes: "",
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen bg-brand-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Progress bar */}

        {/* Card */}
        <div className="bg-brand-800/80 backdrop-blur-xl rounded-2xl border border-brand-50/10 shadow-2xl p-6 sm:p-8">
          {step !== 5 && (
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-1 flex-1 rounded-full transition-all ${s <= step ? "bg-brand-50" : "bg-brand-50/10"}`} />
              ))}
            </div>
          )}
          <div className="min-h-[400px] flex flex-col">
            {step === 1 && <StepService data={data} setData={setData} next={next} />}
            {step === 2 && <StepDateTime data={data} setData={setData} next={next} back={back} />}
            {step === 3 && <StepDetails data={data} setData={setData} next={next} back={back} />}
            {step === 4 && <StepReview data={data} next={next} back={back} />}
            {step === 5 && <StepSuccess />}
          </div>
        </div>
      </div>
    </div>
  );
}
