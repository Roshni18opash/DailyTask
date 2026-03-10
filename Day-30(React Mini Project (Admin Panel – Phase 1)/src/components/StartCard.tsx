import "../styles/startcard.css";

type Props = {
  title: string;
  value: number | string;
};

const StartCard = ({ title, value }: Props) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StartCard;
