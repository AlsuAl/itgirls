import React, { useState } from "react";
import "./cards.scss";
import cards from "./data.js";

function Card(props) {
  const { name, price, limit, text, isSelected } = props;
  let classSelected = "";
  if (isSelected) classSelected = "selected";
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };
  return (
    <div
      onClick={handleChange}
      className={`tarif-card  ${pressed ? classSelected : ""}`}
    >
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="price">
        <p>
          руб<span>{price}</span>/мес
        </p>
      </div>
      <div className="limit">
        <p>{limit}</p>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Card;
