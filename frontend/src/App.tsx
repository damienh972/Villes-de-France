import Results from './components/Results';
import SearchBar from './components/SearchBar';
import "./app.scss";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Results />
      <Results />
    </div>
  );
}

export default App;
