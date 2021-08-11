import React from "react";
import { SearchBar } from "./components/SearchBar";
import { useGetPictures } from "./hooks";
import { LoadingBar } from "./components/LoadingBar/LoadingBar";
import Picture from "./components/Picture/Picture";
import "./App.css";

function App() {
  const [results, callPictures] = useGetPictures();

  const [query, setQuery] = React.useState("");

  const memoizedResults = React.useMemo(() => results, [results]);

  const handleTextInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    callPictures(query);
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
        <section className="results" style={{ backdropFilter: "blur(20px)" }}>
          {results.loading ? (
            <LoadingBar></LoadingBar>
          ) : results.error ? (
            "error"
          ) : (
            memoizedResults.data.map((result) => (
              <Picture
                key={result.id}
                imageHeight={result.height}
                imageWidth={result.width}
                imageSource={result.urls.regular}
              ></Picture>
            ))
          )}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
