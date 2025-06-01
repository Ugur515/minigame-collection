import { Link } from 'react-router-dom';

export default function RockPaperScissors() {
  return (
    <div>
      <h2>✂️ Schere Stein Papier 🪨</h2>
      <p>Hier kommt das RSP-Spiel hin.</p>
      <Link to="/">🔙 Zurück zum Menü</Link>
    </div>
  );
}
