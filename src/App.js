import React from "react";
import { SearchBar } from "./components/SearchBar";
import { Picture } from "./components/Picture/Picture";
import "./App.css";

function App() {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [results, setResults] = React.useState([]);

  const handleTextInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    setResults([]);
    try {
      if (query === "") throw Error();
      const response = await fetch(process.env.REACT_APP_TEST_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          query,
        }),
      });

      const { results } = await response.json();
      setResults(results);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <header>Search for pictures you like!</header>
      <main>
        <section className="search">
          <SearchBar
            handleTextInput={handleTextInput}
            handleSubmit={handleSubmit}
          ></SearchBar>
        </section>
        <section className="results" style={{ backdropFilter: "blur(10px)" }}>
          {loading
            ? "Loading"
            : results.map((result) => (
                <Picture
                  imageHeight={result.height}
                  imageWidth={result.width}
                  imageSource={result.urls.regular}
                ></Picture>
              ))}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
