import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Memory.css';

const cardValues = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼']; // 6 Paare = 12 Karten

//Mische Karten
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Memory() {
  const [cards, setCards] = useState([]); //Karten-Array
  const [flipped, setFlipped] = useState([]);//welche karten grad umgedreht sind 
  const [matched, setMatched] = useState([]);//gefundene Paare

  // Beim ersten Laden der Seite: Karten mischen und setzen
  useEffect(() => {
    const shuffled = shuffle([...cardValues, ...cardValues]);// 2x jedes Symbol
    setCards(shuffled);
  }, []);

  function handleClick(index) {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    // Neue aufgedeckte Karte speichern
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
       // Wenn beide Karten gleich sind == Paar gefunden!
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
      }

      setTimeout(() => setFlipped([]), 1000); // nach 1 Sekunde zurückdrehen
    }
  }

  //alles reseten
  function resetGame() {
    const shuffled = shuffle([...cardValues, ...cardValues]);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
  }

  return (
    <div className="memory">
      <h2>🧠 Memory</h2>
      <div className="grid">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div 
              key={index} 
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleClick(index)}
            >
              {isFlipped ? card : '❓'}
            </div>
          );
        })}
      </div>

      <button onClick={resetGame}>🔁 Neustart</button><br />
      <Link to="/">🔙 Back to menu</Link>
    </div>
  );
}
