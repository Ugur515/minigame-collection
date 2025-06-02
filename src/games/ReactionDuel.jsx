import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ReactionDuel() {
  const [status, setStatus] = useState('ready?');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const timeoutRef = useRef(null);
  const tooSoonRef = useRef(false);

  function startGame() {
    setReactionTime(null);
    setStatus('Wait for green...');
    tooSoonRef.current = false;

    const delay = Math.random() * 4000 + 1000;

    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setStatus('click now!');
    }, delay);
  }

  function handleClick() {
    if (status === 'click now!') {
      const endTime = Date.now();
      const reaction = endTime - startTime;
      setReactionTime(reaction);
      setStatus('great job!');
    } else if (status === 'Wait for green...') {
      clearTimeout(timeoutRef.current);
      setStatus('clicked tooo early!');
      tooSoonRef.current = true;
    }
  }

  function getLedColor() {
    switch (status) {
      case 'wait for green...':
        return 'red';
      case 'click now!':
        return 'green';
      case 'clicked tooo early!':
      case 'great job!':
        return 'gray';
      default:
        return 'gray';
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>⚡ Reaction duel</h2>
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

      {reactionTime !== null && <p>reactiontime: {reactionTime} ms</p>}

      <button onClick={startGame}>Start</button>
      <button onClick={handleClick} disabled={status === 'ready?'}>click!</button>

      <br /><br />
      <Link to="/">🔙 Back to menu</Link>
    </div>
  );
}
