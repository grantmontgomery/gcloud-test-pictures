import React from "react";
import { SearchBar, Picture } from "./components/SearchBar";
import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    setError(false);
    try {
      if (text === "") throw Error();
      // const response = await fetch("", {
      //   body: {
      //     text,
      //   },
      // });
    } catch {
      setError(true);
    }
  };

  console.log(error);

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
        <section className="results"></section>
      </main>
    </React.Fragment>
  );
}

export default App;
