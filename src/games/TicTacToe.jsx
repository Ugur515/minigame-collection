import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function TicTacToe() {
  
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(squares);
  
  
  function handleClick(index){
    if(squares[index] || winner) return; // schon belegt oder gewonnen
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  function resetGame(){
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
  
  function renderSquare(index){
    return(
        <button className='square' onClick={()=> handleClick(index)}>
            {squares[index]}
        </button>
    );
  }
    return (
    <div className='tictactoe' style={{textAlign:'center'}}>
      <h2>❌ Tic Tac Toe ⭕</h2>
      <p>{winner ? `Gewinner: ${winner}` : `Player: ${isXNext ? 'X' : 'O'}`}</p>
      
      <div className='board'>
        {[0,1,2].map(row => (
          <div key={row} className="board-row">
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>

      <button onClick={resetGame}>reset</button>
      <Link to="/">🔙 Back to menu</Link>
    </div>
  );
}

function calculateWinner(s) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // Reihen
    [0,3,6], [1,4,7], [2,5,8], // Spalten
    [0,4,8], [2,4,6]           // Diagonalen
  ];
  for (let [a,b,c] of lines) {
    if (s[a] && s[a] === s[b] && s[a] === s[c]) {
      return s[a];
    }
  }
  return null;
}