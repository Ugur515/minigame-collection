import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ReactionDuel() {
  const [status, setStatus] = useState('Bereit?');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const timeoutRef = useRef(null);
  const tooSoonRef = useRef(false);

  function startGame() {
    setReactionTime(null);
    setStatus('Warte auf Grün...');
    tooSoonRef.current = false;

    const delay = Math.random() * 4000 + 1000;

    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setStatus('Jetzt klicken!');
    }, delay);
  }

  function handleClick() {
    if (status === 'Jetzt klicken!') {
      const endTime = Date.now();
      const reaction = endTime - startTime;
      setReactionTime(reaction);
      setStatus('Gut gemacht!');
    } else if (status === 'Warte auf Grün...') {
      clearTimeout(timeoutRef.current);
      setStatus('Zu früh geklickt!');
      tooSoonRef.current = true;
    }
  }

  function getLedColor() {
    switch (status) {
      case 'Warte auf Grün...':
        return 'red';
      case 'Jetzt klicken!':
        return 'green';
      case 'Zu früh geklickt!':
      case 'Gut gemacht!':
        return 'gray';
      default:
        return 'gray';
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>⚡ Reaktionsduell</h2>
      <p>Status: {status}</p>

      <div
        style={{
          margin: '20px auto',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: getLedColor(),
          border: '2px solid black',
        }}
      />

      {reactionTime !== null && <p>Reaktionszeit: {reactionTime} ms</p>}

      <button onClick={startGame}>Start</button>
      <button onClick={handleClick} disabled={status === 'Bereit?'}>Klick!</button>

      <br /><br />
      <Link to="/">🔙 Zurück zum Menü</Link>
    </div>
  );
}
