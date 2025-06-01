import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    function play(choice){
        const options = ['rock', 'paper', 'scissors'];
        const randomChoice = options[Math.floor(Math.random()*3)];
        
        setPlayerChoice(choice);
        setComputerChoice(randomChoice);
        
        if (choice === randomChoice) {
        setResult('Unentschieden!');
        } else if (
        (choice === 'scissors' && randomChoice === 'paper') ||
        (choice === 'rock' && randomChoice === 'scissors') ||
        (choice === 'paper' && randomChoice === 'rock'))
        {
        setResult('Du gewinnst!');
        } else {
        setResult('Du verlierst!');
        }
    }
  
    return (
    <div>
      <h2>✂️ Rock Paper Scissors 🪨</h2>

      <button onClick={() => play('scissors')}> Scissors</button>
      <button onClick={() => play('rock')}> Rock</button>
      <button onClick={() => play('paper')}> Paper</button>
      
      <div style={{ marginTop: '20px' }}>
        <p>Deine Wahl: {playerChoice}</p>
        <p>Computer: {computerChoice}</p>
        <p><strong>{result}</strong></p>
      </div>
      
      <Link to="/">🔙 Back to menu</Link>
    </div>
    );
}
