import logo from "./logo.svg";
import "./App.css";
import "./components/cards.scss";
import Card from "./components/cards.jsx";
import cards from "./components/data.js";

function App() {
  return (
    <div className="App">
      <div className="cardbody">
        {cards.map((card) => (
          <Card
            key={card.price}
            name={card.name}
            price={card.price}
            limit={card.limit}
            text={card.text}
            isSelected={card.isSelected}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
