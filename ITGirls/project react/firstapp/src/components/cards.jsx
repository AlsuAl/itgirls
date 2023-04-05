import React, { useState } from "react";
import "./cards.scss";
import { cards } from "./data.js";

export default function Card(props) {
  const { image, word, transcription, translation } = props;
  return (
    <div className="card">
      <div className="card-body">
        <img className="image">{image}</img>
        <h4 className="word">{word}</h4>
        <p className="transcription">{transcription}</p>
      </div>
      <div className="card-footer">
        <span className="translation hidden">{translation}</span>
        <button className="button buttonshow hidden">Translate</button>
      </div>
    </div>
  );
}
