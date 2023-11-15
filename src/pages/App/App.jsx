import { useState } from 'react';
import React from 'react';
import Board from '../../components/Board/Board';
import Messages from '../../components/Messages/Messages';
// import Turn from '../../components/Turn/Turn';

// import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  // const turnX = 1;
  // const turnO = -1;
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  let [gameOver, setGameOver] = useState(false);

  const handlePlayAgain = () => {
    setSquares(Array(9).fill(null));
    setTurn(turn);
    setWinner(winner);
    setGameOver(gameOver);
  };

  const handleClick = (i) => {
    const newSquares = squares.slice(); // Create a copy of the squares array
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    function getWinner() {
      for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        // Sum the value of the squares
        const comboSum = squares[a] + squares[b] + squares[c];
        // Check for X or O winner
        if (comboSum === 3) {
          setWinner(1);
          gameOver = true;
        }
        if (comboSum === -3) {
          setWinner(-1);
          gameOver = true;
        }
      }
      // if none of the above are true, check for a tie
      if (!squares.includes(0) && winner === null) setWinner('Tie');
    }
    // Implement your onClick logic here
    newSquares[i] = turn; // Assuming 'X' for simplicity, replace it with your game logic
    function changeTurn() {
      const newTurn = turn * -1;
      setTurn(newTurn)
      console.log(setTurn)
      // console.log(turn)
    }
    getWinner();
    changeTurn();
    setSquares(newSquares);
    // console.log(handleClick)
  };
  
  return (
    <main className="App">
      <h1 id="game-header">Tic-Tac-Toe</h1>
      <Messages 
        turn={turn} 
        winner={winner} 
        gameOver={gameOver} 
        onClickPlayAgain={handlePlayAgain}
      />
      <Board squares={squares} turn={turn} onClick={handleClick} />
    </main>
  );
}