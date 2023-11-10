import Board from '../../components/Board/Board';


export default function Winner ({ Board }) {
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
    function getWinner () {
    
    }
    setWinner(getWinner);
    return
}






//check for winner in Board state & return null if no winner, 1/-1 if a player has won, or 'T' if there's a tie
// function getWinner(columnIdx, rowIdx) {
//     const hasTie = Boardoard.every(row => row.every(cell => cell !== 0));
//     if (hasTie) {
//         return 'T'; // Return 'T' to indicate a tie
//     }
//     return checkVerticalWin(columnIdx, rowIdx) ||
//         checkHorizontalWin(columnIdx, rowIdx) ||
//         checkDiagonalWinNESW(columnIdx, rowIdx) ||
//         checkDiagonalWinNWSE(columnIdx, rowIdx);    
// }

// function checkVerticalWin(columnIdx, rowIdx) {
//     const adjacentCountUp = countAdjacent(columnIdx, rowIdx, 0, 1); 
//     const adjacentCountDown = countAdjacent(columnIdx, rowIdx, 0, -1); 
//     return (adjacentCountUp + adjacentCountDown) >= 2 ? Boardoard[columnIdx][rowIdx] : null;
// }

// function checkHorizontalWin(columnIdx, rowIdx) {
//     const adjacentCountLeft = countAdjacent(columnIdx, rowIdx, -1, 0); 
//     const adjacentCountRight = countAdjacent(columnIdx, rowIdx, 1, 0); 
//     return (adjacentCountLeft + adjacentCountRight) >= 2 ? Boardoard[columnIdx][rowIdx] : null;
// }

// function checkDiagonalWinNESW(columnIdx, rowIdx) {
//     const adjacentCountNE = countAdjacent(columnIdx, rowIdx, 1, 1); 
//     const adjacentCountSW = countAdjacent(columnIdx, rowIdx, -1, -1); 
//     return (adjacentCountNE + adjacentCountSW) >= 2 ? Boardoard[columnIdx][rowIdx] : null;
// }

// function checkDiagonalWinNWSE(columnIdx, rowIdx) {
//     const adjacentCountNW = countAdjacent(columnIdx, rowIdx, -1, 1); 
//     const adjacentCountSE = countAdjacent(columnIdx, rowIdx, 1, -1); 
//     return (adjacentCountNW + adjacentCountSE) >= 2 ? Boardoard[columnIdx][rowIdx] : null;
// }

// function countAdjacent(columnIdx, rowIdx, columnOffset, rowOffset) {
//     //shortcut variable to the player value
//     const player = Boardoard[columnIdx][rowIdx];
//     //track count of adjacent cells with the same player value
//     let count = 0;
//     //initialize new coordinates
//     columnIdx += columnOffset;
//     rowIdx += rowOffset;
//     while (
//         //ensure columnIdx is within bounds of the Boardoard array
//         Boardoard[columnIdx] !== undefined &&
//         Boardoard[columnIdx][rowIdx] !== undefined &&
//         Boardoard[columnIdx][rowIdx] === player 
//     ) {
//     count++;
//     columnIdx += columnOffset;
//     rowIdx += rowOffset;
//     }
//     return count;
// }