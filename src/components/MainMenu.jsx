import { Link } from 'react-router-dom';
import './menu.css';

export default function MainMenu() {
  const handleStartMusic = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/assets/audio/lobby.mp3');
    audio.volume = 0.20
    audio.loop = true;
    audio.play().catch(err => console.warn('Autoplay prevented:', err));
  };

  return (
    <div className="menu-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/beige.jpg)`,
      }}
    >
      <div className="menu-content">
        <h1>🎮 Minigame Collection</h1>
        <ul onClick={handleStartMusic}>
          <li><Link to="/memory">🧠 Memory</Link></li>
          <li><Link to="/tictactoe">⭕ Tic Tac Toe ❌</Link></li>
          <li><Link to="/rps">✂️ Schere Stein Papier 🪨</Link></li>
          <li><Link to="/reaction">⚡ Reaktionsduell</Link></li>
        </ul>
      </div>
    </div>
  );
}
