import { useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { Cities, City } from "./models";
import { Watch } from "react-loader-spinner";
import "./styles/app.scss";

const App: React.FC = () => {
  const [cities, setCities] = useState<Cities | never[]>([]);
  const [overlay, setOverlay] = useState<boolean>(false);
  let metropolis: Cities | never[] = [];
  let domTom: Cities | never[] = [];
 
  if (cities!.length > 0) {
    metropolis = cities!.filter((city: City) => city.isMetropolitan);
    domTom = cities!.filter((city: City) => !city.isMetropolitan);
  }
  
  return (
    <div className="app">
      <SearchBar setOverlay={setOverlay} setCities={setCities} />
      <Results
        cities={metropolis}
        cityClass={"metropolitan"}
        cityType={"de métropole"}
      />
      <Results cities={domTom} cityClass={"dom-tom"} cityType={"d'outre-mer"} />
      {overlay && (
        <div className="overlay">
          <Watch height="200" width="200" color="#D2E5E9" ariaLabel="timewatch" />
        </div>
      )}
    </div>
  );
};

export default App;
