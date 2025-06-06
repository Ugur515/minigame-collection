import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RPS.css';

export default function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    function play(choice){
        const options = ['rock', 'paper', 'scissors'];
        const randomChoice = options[Math.floor(Math.random()*3)];
        
        //auswahl speichern
        setPlayerChoice(choice);
        setComputerChoice(randomChoice);
        
        //ergebnis berechnen 
        if (choice === randomChoice) {
        setResult('Draw!');
        } else if (
        (choice === 'scissors' && randomChoice === 'paper') ||
        (choice === 'rock' && randomChoice === 'scissors') ||
        (choice === 'paper' && randomChoice === 'rock'))
        {
        setResult('U WON!');
        } else {
        setResult('U LOST!');
        }
    }
  
    return (
    <div className='RPS'>
      <h2>✂️ Rock Paper Scissors 🪨</h2>

      <button onClick={() => play('scissors')}> Scissors</button>
      <button onClick={() => play('rock')}> Rock</button>
      <button onClick={() => play('paper')}> Paper</button>
      
      <div className='Players'>
        <p>Your Choice: {playerChoice}</p>
        <p>Computer: {computerChoice}</p>
        <p><strong>{result}</strong></p>
      </div>
      
      <Link to="/">🔙 Back to menu</Link>
    </div>
    );
}
