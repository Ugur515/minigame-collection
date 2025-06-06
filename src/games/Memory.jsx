import { useState, useEffect, useRef } from 'react';
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
  const [jumpScare, setJumpScare] = useState(false);
  const failCount = useRef(0);

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
      else{
        failCount.current ++;
        
        if(failCount.current === 2){
          triggerjumpScare();
          failCount.current = 0;
         
        }
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

  function triggerjumpScare() {
    setJumpScare(true);
    const audio = new Audio(process.env.PUBLIC_URL + '/assets/audio/jumpscare.mp3');
    audio.play();
    setTimeout(() => setJumpScare(false), 1500);
  }

 return (
  <>
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

      <button onClick={resetGame}>🔁 Restart</button><br />
      <Link to="/">🔙 Back to menu</Link>
    </div>

    {jumpScare && (
      <img
        src={process.env.PUBLIC_URL + '/assets/img/jumpscare.jpg'}
        alt="jumpscare"
        className="jumpscare-img"
      />
    )}
  </>
);
}
