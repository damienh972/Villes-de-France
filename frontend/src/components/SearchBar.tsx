
const SearchBar = () => {
  return (
    <div className="search">
      <h1 className="search__text">Je recherche ...</h1>
      <input
        className="search__input"
        type="search"
        placeholder="...une ville, un code postal"
        autoFocus
      />
    </div>
  );
}

export default SearchBar;