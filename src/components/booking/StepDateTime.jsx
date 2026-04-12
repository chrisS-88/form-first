import StepContainer from "../ui/StepContainer.jsx";
import DateGrid from "../ui/DateGrid.jsx";
import TimeGrid from "../ui/TimeGrid.jsx";
import StepFooter from "../ui/StepFooter.jsx";

export default function StepDateTime({ data, setData, next, back }) {
  // Generate next 7 days in DD/MM/YYYY
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toLocaleDateString("en-GB");
  });

  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  return (
    <StepContainer title="Choose Date & Time">
      <div className="space-y-16">
        <div>
          <h3 className="text-4xl sm:text-xl font-semibold mb-6">Select a Date</h3>
          <DateGrid dates={dates} value={data.date} onChange={(date) => setData({ ...data, date })} />
        </div>

        <div>
          <h3 className="text-4xl sm:text-xl font-semibold mb-6">Select a Time</h3>
          <TimeGrid times={times} value={data.time} onChange={(time) => setData({ ...data, time })} />
        </div>
      </div>

      <StepFooter onBack={back} onNext={next} nextDisabled={!data.date || !data.time} />
    </StepContainer>
  );
}
