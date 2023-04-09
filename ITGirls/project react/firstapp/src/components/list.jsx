import React, { useState } from "react";
import "./list.scss";
import data from "./data.js";

function List(props) {
  const { word, transcription, translation } = props;
  return (
    <div className="list">
      <div className="list-header">
        <h2>Words List</h2>
      </div>
      <div className="list-words">
        <div>
          <p>{word}</p>
        </div>
        <div>
          <p>{transcription}</p>
        </div>
        <div>
          <p>{translation}</p>
        </div>
        <div>
          <img
            src={
              require("./images/edit-pencil-line-01-svgrepo-com.svg").default
            }
            alt="edit"
            className="edit"
          />
          <img
            src={require("./images/trash-1-svgrepo-com.svg").default}
            alt="delete"
            className="delete"
          />
        </div>
      </div>
    </div>
  );
}
export default List;
