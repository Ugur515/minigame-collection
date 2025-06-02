import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div 
    className="menu"
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // gesamte Höhe ausnutzen
        textAlign: 'center',
      }}
    >
      <h1>🎮 Minigame-Collection</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/memory">🧠 Memory</Link></li>
        <li><Link to="/tictactoe">⭕ Tic Tac Toe ❌</Link></li>
        <li><Link to="/rps">✂️ Rock Paper Scissors 🪨</Link></li>
        <li><Link to="/reaction">⚡ Reaction Duel</Link></li>
      </ul>
    </div>
  );
}