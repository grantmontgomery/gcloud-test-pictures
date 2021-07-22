import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ handleTextInput, handleSubmit }) => {
  return (
    <div className="search-wrapper">
      <input type="text" onChange={handleTextInput}></input>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};
