import "./App.css";
import "./components/cards.scss";
import "./components/header.scss";
import "./components/list";
import Search from "./components/header.jsx";
import Card from "./components/cards.jsx";
//import List from "./components/list.jsx";
import { cards } from "./components/data.js";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Search></Search>
      </div>
      <div className="wordslist">
        {/* {list.map((list) => (
          <List name={list.name} isSelected={list.isSelected}></List>
        ))} */}
      </div>
      <div>
        <div className="result"></div>
      </div>
      <div className="cards">
        <div>
          {cards.map((card) => (
            <Card
              word={cards.word}
              transcription={cards.transcription}
              translation={cards.translation}
            ></Card>
          ))}
          <div />
          <div className="arrow-buttons">
            <button className="button buttonleft">←</button>
            <button className="button buttonright">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
