import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ handleTextInput, handleSubmit }) => {
  return (
    <React.Fragment>
      <input type="text" onChange={handleTextInput}></input>
      <button onClick={handleSubmit}>Search</button>
    </React.Fragment>
  );
};
