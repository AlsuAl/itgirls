import React, { useState } from "react";
import "./header.scss";

function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [apiResult, setApiResult] = useState("");
  // const setApiResult = response.data.translatedText;

  const handleSubmit = (event) => {
    event.preventDefault();
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "es");
    encodedParams.append("text", inputValue);

    const url = "https://text-translator2.p.rapidapi.com/translate";

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "13ffa8ba6dmsha6070b3e7c7b6d5p1877b5jsn668e22da2f47",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch("https://text-translator2.p.rapidapi.com/translate", options)
      .then((response) => response.json())
      .then((response) => setApiResult(response.data.translatedText))
      .catch((err) => console.error(err));
  };

  return (
    <div className="search">
      <div className="logo">
        <img
          src={require("./images/big-dictionary-svgrepo-com.svg").default}
          alt="logo"
        />
      </div>
      <div onSubmit={handleSubmit} className="searchbody">
        <input
          className="search-input"
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div className="result">
          <p>Translation:{apiResult}</p>
        </div>
        <button type="submit" className="button searchbutton">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
