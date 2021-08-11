import React from "react";
import { SearchBar } from "./components/SearchBar";
import { useGetPictures } from "./hooks";
import { LoadingBar } from "./components/LoadingBar/LoadingBar";
import Picture from "./components/Picture/Picture";
import Results from "./components/Results/Results";

import "./App.css";

function App() {
  const [results, callPictures] = useGetPictures();

  const [query, setQuery] = React.useState("");

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
        <Results results={results}></Results>
      </main>
    </React.Fragment>
  );
}

export default App;
