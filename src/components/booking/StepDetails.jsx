import StepContainer from "../ui/StepContainer.jsx";
import StepFooter from "../ui/StepFooter.jsx";

export default function StepDetails({ step, data, setData, next, back }) {
  const update = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const isValid = data.name && data.email;

  return (
    <StepContainer title="Your details" subtitle="Please fill in your details below">
      <div className="space-y-5">
        <div className="space-y-1">
          <label className="text-xs text-brand-50/50">Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="user-input"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-brand-50/50">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="user-input"
            placeholder="you@example.com"
          />

          {!data.email.includes("@") && data.email && <p className="text-xs text-red-400">Invalid email</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs text-brand-50/50">Notes (optional)</label>
          <textarea
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="user-input h-28 resize-none"
            placeholder="Anything you'd like to mention?"
          />
        </div>
      </div>

      <StepFooter step={step} onBack={back} onNext={next} nextDisabled={!isValid} />
    </StepContainer>
  );
}
