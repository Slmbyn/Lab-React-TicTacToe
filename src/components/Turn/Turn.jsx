
export default function Turn() {
    const turn = (row, col) => {
        //move logic here
      
        // Toggle the player for the next turn
        setTurn(Turn === 'X' ? 'O' : 'X');
      };


}

