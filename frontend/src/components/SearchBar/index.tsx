import { useRef } from "react";
import getCities from "../../api";
import { Cities } from "../../models";

import "./search.scss";

type Props = {
  setCities: React.Dispatch<React.SetStateAction<Cities | never[]>>;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar: React.FC<Props> = ({ setCities, setOverlay }: Props) => {
  const inputRef = useRef<HTMLInputElement | null >(null);
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setOverlay(true);
    inputRef!.current!.blur();
    const cities = await getCities(e.target.value);
    setCities(cities.cities);
    setOverlay(false);
     inputRef!.current!.focus();
  };

  return (
    <div className="search">
      <h1 className="search__title">Je recherche ...</h1>
      <input
        className="search__input"
        ref={inputRef}
        type="search"
        placeholder="...une ville, un code postal"
        autoFocus
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchBar;
