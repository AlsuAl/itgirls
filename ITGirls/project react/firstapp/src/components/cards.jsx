import React, { useState } from "react";
import "./cards.scss";
import data from "./data.js";

export default function Card(props) {
  // const [userData, newValue] = useState(data);
  //const { index } = props;
  // const { word, transcription, translation } = data[index];
  const { word, transcription, translation } = props;
  return (
    <div className="card">
      <div className="arrow-buttons">
        <button className="button buttonleft">←</button>
      </div>
      <div className="card-body">
        <h4 className="word">{word}</h4>
        <p className="transcription">{transcription}</p>

        <span className="translation hidden">{translation}</span>
        <button className="button buttonshow hidden">Translate</button>
      </div>
      <div className="arrow-buttons">
        <button className="button buttonright">→</button>
      </div>
    </div>
  );
}
