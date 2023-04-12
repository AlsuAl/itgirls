import React, { useState } from "react";
import "./cards.scss";
import data from "./data.js";

export default function Card(props) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const { id, word, transcription, translation } = data[currentCardIndex];
  const [isTranslated, setIsTranslated] = useState(false);

  function handleTranslate() {
    setIsTranslated(true);
  }
  function handlePrev() {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsTranslated(false);
    }
  }

  function handleNext() {
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsTranslated(false);
    } else {
      setCurrentCardIndex(0);
      setIsTranslated(false);
    }
  }
  return (
    <div className="card">
      <div className="arrow-buttons">
        <button className="button buttonleft" onClick={handlePrev}>
          ←
        </button>
      </div>
      <div className="card-body">
        <div className="card-layout" key={id}>
          <h3>{word}</h3>
          <p>{transcription}</p>
          <span className={isTranslated ? "" : "hidden"}>{translation}</span>
          <button className="button buttonshow " onClick={handleTranslate}>
            Translate
          </button>
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="button buttonright" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
}
