import { Link } from 'react-router-dom';

export default function TicTacToe() {
  return (
    <div>
      <h2>❌ Tic Tac Toe ⭕</h2>
      <p>Hier kommt das Tic Tac Toe-Spiel hin.</p>
      <Link to="/">🔙 Zurück zum Menü</Link>
    </div>
  );
}
