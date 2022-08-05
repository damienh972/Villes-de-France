import CityCard from '../CityCArd';
import { Cities, City } from "../../models";
import './results.scss';

type Props = {
  cities: Cities | [] | any;
  cityClass: string;
  cityType: string;
};

const Results: React.FC<Props> = ({ cities, cityClass, cityType }: Props) => {
  return (
    <div className={`results  ${cityClass}`}>
      <h2 className="results__title">{`Villes ${cityType}`}</h2>
      <p className="results__text">
        {cities.length > 0
          ? `${cities.length} villes correspondant au texte saisi`
          : `aucune villes correspondant au texte saisi`}
      </p>
      <div className="results__container">
        {cities.length > 0 &&
          cities.map((city: City) => (
            <CityCard key={city._id} name={city.name} code={city.zip_code} />
          ))}
      </div>
    </div>
  );
};

export default Results;