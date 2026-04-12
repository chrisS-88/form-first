import StepContainer from "../ui/StepContainer.jsx";
import StepFooter from "../ui/StepFooter.jsx";

export default function StepDetails({ data, setData, next, back }) {
  const update = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const isValid = data.name && data.email;

  return (
    <StepContainer title="Your Details">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-brand-200 text-2xl sm:text-sm font-medium">Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full p-3 text-xl sm:text-base rounded-lg bg-brand-800 border border-brand-700 text-brand-50 focus:outline-none focus:border-primary"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-brand-200 text-2xl sm:text-sm font-medium">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full p-3 text-xl sm:text-base rounded-lg bg-brand-800 border border-brand-700 text-brand-50 focus:outline-none focus:border-primary"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-brand-200 text-2xl sm:text-sm font-medium">Notes (optional)</label>
          <textarea
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full p-3 text-xl sm:text-base rounded-lg bg-brand-800 border border-brand-700 text-brand-50 h-28 resize-none focus:outline-none focus:border-primary"
            placeholder="Anything you'd like to mention?"
          />
        </div>
      </div>

      <StepFooter onBack={back} onNext={next} nextDisabled={!isValid} />
    </StepContainer>
  );
}
