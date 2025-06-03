import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ReactionDuel.css';
import { useEffect} from 'react';

export default function ReactionDuel() {
  const [status, setStatus] = useState('ready?');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const timeoutRef = useRef(null);
  const tooSoonRef = useRef(false);
  const [jumpScare,setJumpScare] = useState(false);
  const missCount = useRef(0);

  const jumpscareAudioRef = useRef(null);

useEffect(() => {
  jumpscareAudioRef.current = new Audio('/assets/audio/jumpscare.mp3');
}, []);

  function startGame() {
    setReactionTime(null);
    setStatus('Wait for green...');
    tooSoonRef.current = false;

    const delay = Math.random() * 4000 + 1000; // 1-5 Sekunden Verzögerung

    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now()); // Zeitpunkt speichern
      setStatus('click now!'); // Status wechseln
    }, delay);
  }

  function handleClick() {
    if (status === 'click now!') {
      const endTime = Date.now(); // Jetztzeit erfassen
      const reaction = endTime - startTime; // Differenz = Reaktionszeit
      setReactionTime(reaction);
      setStatus('great job!');
    } else if (status === 'Wait for green...') {
      clearTimeout(timeoutRef.current); // Verzögerung abbrechen
      setStatus('clicked tooo early!'); // Zu früh gedrückt
      missCount.current ++;
      if(missCount.current ===2){
        triggerjumpScare();
        missCount.current =0;
      }
      tooSoonRef.current = true;
    }
  }

  function triggerjumpScare(){
    setJumpScare(true);
     if (jumpscareAudioRef.current) {
    jumpscareAudioRef.current.currentTime = 0; // Zurückspulen
    jumpscareAudioRef.current.play().catch(err => {
      console.error('Audio playback failed:', err);
    });
  }

    setTimeout(() => {
      setJumpScare(false);
    }, 1500); // 1.5 Sekunden anzeigen
  }

  function getLedColor() {
    switch (status) {
      case 'Wait for green...':
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
    <div className='ReactionDuel' >
      <h2>⚡ Reaction duel</h2>
      <p>Status: {status}</p>
        <div className='led'
        style={{backgroundColor:getLedColor()}}>

      </div>
      

      {reactionTime !== null && <p>reactiontime: {reactionTime} ms</p>}

      <button onClick={startGame}>Start</button>
      <button onClick={handleClick} disabled={status === 'ready?'}>click!</button>
<p>jumpScare: {jumpScare ? 'TRUE' : 'FALSE'}</p>

      <br /><br />
      <Link to="/">🔙 Back to menu</Link>

      {jumpScare && (
  <img
    src="/assets/img/smoke.png"
    alt="jumpscare"
    className="jumpscare-img"
  />
)}
    </div>
  );
}
