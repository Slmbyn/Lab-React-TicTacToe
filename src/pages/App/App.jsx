import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
import './App.css';


export default function App() {
  return (
    <main className="App">
      <h1>Tic-Tac-Toe</h1>
      <Messages />
      <Board />
    </main>
  );
}