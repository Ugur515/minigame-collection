import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div className="menu">
      <h1>🎮 Minigame-Collection</h1>
      <ul>
        <li><Link to="/memory">🧠 Memory</Link></li>
        <li><Link to="/tictactoe">⭕ Tic Tac Toe ❌</Link></li>
        <li><Link to="/rps">✂️ Schere Stein Papier 🪨</Link></li>
        <li><Link to="/reaction">⚡ Reaktionsduell</Link></li>
      </ul>
    </div>
  );
}