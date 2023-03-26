import logo from './logo.svg';
import './App.css';
import './components/cards.scss'
import Card from './components/cards.jsx';
import cards from './components/data.js';

function App() {
  return (
    <div className="App">
      {
     cards.map(card=>
     <Card  key={card.price} name={card.name} price={card.price}  limit={card.limit} text={card.text}></Card>
     )
      }
    </div>
  );
}

export default App;
