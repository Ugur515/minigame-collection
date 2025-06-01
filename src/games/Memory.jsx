import { Link } from 'react-router-dom';

export default function Memory() {
  return (
    <div>
      <h2>🧠 Memory</h2>
      <p>Hier kommt das Memory-Spiel hin.</p>
      <Link to="/">🔙 Zurück zum Menü</Link>
    </div>
  );
}