import { useState } from "react";
import StepService from "../booking/StepService.jsx";
import StepDateTime from "../booking/StepDateTime.jsx";
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
    <div className="min-h-screen bg-brand-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-brand-800 p-8 rounded-xl shadow-xl border border-brand-700">
        {step === 1 && <StepService data={data} setData={setData} next={next} />}
        {step === 2 && <StepDateTime data={data} setData={setData} next={next} back={back} />}
        {step === 3 && <StepDetails data={data} setData={setData} next={next} back={back} />}
        {step === 4 && <StepReview data={data} next={next} back={back} />}
        {step === 5 && <StepSuccess />}
      </div>
    </div>
  );
}
