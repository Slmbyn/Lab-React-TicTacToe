import { useState } from 'react';
import React from 'react';
import Board from '../../components/Board/Board';
// import Messages from '../../components/Messages';
// import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
// import './App.css';

export default function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    // Implement your onClick logic here
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[i] = 'X'; // Assuming 'X' for simplicity, replace it with your game logic
    setSquares(newSquares);
  };
  
  return (
    <main className="App">
      <h1>Tic-Tac-Toe</h1>
      {/* <Messages /> */}
      <Board squares={squares} onClick={handleClick} />
    </main>
  );
}