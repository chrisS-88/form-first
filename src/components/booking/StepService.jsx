import StepContainer from "../ui/StepContainer";
import ListSelect from "../ui/ListSelect";
import StepFooter from "../ui/StepFooter";

export default function StepService({ data, setData, next }) {
  const services = [
    { id: "strength", label: "Strength Training" },
    { id: "conditioning", label: "Conditioning" },
    { id: "mobility", label: "Mobility & Recovery" },
  ];

  return (
    <StepContainer title="Choose a Service">
      <ListSelect items={services} value={data.service} onChange={(service) => setData({ ...data, service })} />

      <StepFooter onBack={null} onNext={next} nextDisabled={!data.service} />
    </StepContainer>
  );
}
