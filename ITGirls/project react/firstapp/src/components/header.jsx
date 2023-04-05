import React, { useState } from "react";
import "./header.scss";

function Search(props) {
  return (
    <div className="search">
      <div className="searchbody">
        <button className="button">X</button>
        <input className="search-input" type="text" placeholder="Enter text" />
        <button className="button searchbutton">Search</button>
      </div>
    </div>
  );
}
export default Search;
