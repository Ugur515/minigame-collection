import { Link } from 'react-router-dom';
import './menu.css';

export default function MainMenu() {
  return (
     <div className="menu-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/beige.jpg)`,
      }}
      >
      <div className="menu-content">
        <h1>🎮 Minigame Collection</h1>
        <ul>
          <li><Link to="/memory">🧠 Memory</Link></li>
          <li><Link to="/tictactoe">⭕ Tic Tac Toe ❌</Link></li>
          <li><Link to="/rps">✂️ Schere Stein Papier 🪨</Link></li>
          <li><Link to="/reaction">⚡ Reaktionsduell</Link></li>
        </ul>
      </div>
    </div>
  );
}
