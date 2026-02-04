type Props = {
  step: number;
};

const Steps = ({ step }: Props) => {
  return (
    <div className="steps">
      {[1, 2, 3].map((num) => (
        <div key={num} className={`step ${step === num ? "active" : ""}`}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default Steps;
