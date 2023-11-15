// import Board from '../../components/Board/Board';
import Square from "../Square/Square";
import { useState, useEffect } from "react";

export default function Winner({ Square }) {
  const [winner, setWinner] = useState(null);
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

  useEffect(() => {
    function getWinner() {
      for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        // Sum the value of the squares
        const comboSum = Square[a] + Square[b] + Square[c];
        // Check for X or O winner
        if (comboSum === 3) setWinner('1');
        if (comboSum === -3) setWinner('-1');
      }
      // if none of the above are true, check for a tie
      if (!Square.includes(0) && winner === null) setWinner('Tie');
    }

    getWinner();
  }, [Square, winner]);
    return (
        {winner}
    )
}
