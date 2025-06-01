import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Memory from './games/Memory';
import ReactionDuel from './games/ReactionDuel';
import RockPaperScissors from './games/RockPaperScissors';
import TicTacToe from './games/TicTacToe';

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/reaction" element={<ReactionDuel />} />
      </Routes>
    </Router>
  )
}