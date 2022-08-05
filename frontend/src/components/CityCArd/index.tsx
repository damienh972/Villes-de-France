import "./cityCard.scss";

type Props = {
  name: string;
  code: string;
};

const CityCard: React.FC<Props> = ({ name, code }: Props) => {
  return (
    <div className="city">
      <p className="city__name">{name}</p>
      <p className="city__code">{code}</p>
    </div>
  );
};

export default CityCard;
